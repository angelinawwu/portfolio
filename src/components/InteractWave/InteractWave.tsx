/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import REGL from 'regl';
import {
  drawFragShader,
  defaultVertShader,
  fftFragShader,
  wpmFragShader,
  shapeFragShader,
  sampleFragShader,
} from './shaders';

class SmoothVar {
  value: number;
  min: number;
  max: number;
  target: number;

  constructor(value: number, min: number, max: number) {
    this.value = value;
    this.min = min;
    this.max = max;
    this.target = value;
  }

  set(value: number) {
    this.target = Math.max(this.min, value);
    this.target = Math.min(this.max, this.target);
  }

  add(delta: number) {
    this.set(this.target + delta);
  }

  update() {
    this.value += (this.target - this.value) * 0.2;
  }
}

export default function InteractWave() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    console.log('InteractWave: Initializing...');

    // FFT domain
    const levels = 9;
    const N = 2 ** levels;
    const NH = Math.round(N / 4);

    const domain_size = 15;
    const dx = domain_size / N;
    const dz = domain_size / NH;

    // Create REGL
    let regl;
    try {
      regl = REGL({
        canvas: canvasRef.current,
        attributes: {
          depth: false,
        },
        onDone: (err: any, reglInstance: any) => {
          if (err) {
            console.error('InteractWave: REGL initialization error:', err);
          } else {
            console.log('InteractWave: REGL initialized successfully');
          }
        }
      });
    } catch (error) {
      console.error('InteractWave: Failed to create REGL context:', error);
      return;
    }

    // Resize canvas
    regl._gl.canvas.width = N;
    regl._gl.canvas.height = N;

    // Default rectangle mesh
    const rect = regl.buffer([
      [-1, -1],
      [1, -1],
      [1, 1],
      [1, 1],
      [-1, 1],
      [-1, -1],
    ]);

    // Create framebuffers
    let temp_fbo = regl.framebuffer({
      color: [regl.texture({ width: N, height: NH, format: 'rgba', mag: 'nearest', min: 'nearest' })],
    } as any);

    const rgb_fbos = ['r', 'g', 'b'].map(() =>
      regl.framebuffer({
        color: [regl.texture({ width: N, height: NH, format: 'rgba', mag: 'nearest', min: 'nearest' })],
      } as any)
    );

    const rgb_fbos_mag = ['r', 'g', 'b'].map(() =>
      regl.framebuffer({
        color: [regl.texture({ width: N, height: NH, format: 'rgba', mag: 'linear', min: 'linear' })],
      } as any)
    );

    // Clear framebuffers
    rgb_fbos.forEach((fbo) =>
      fbo.use(() => {
        regl.clear({
          color: [0, 0, 0, 0],
          depth: 1,
        });
      })
    );

    // Create shader commands
    const draw = regl({
      frag: drawFragShader,
      vert: defaultVertShader,
      attributes: { position: rect },
      uniforms: {
        textureR: regl.prop('textureR'),
        textureG: regl.prop('textureG'),
        textureB: regl.prop('textureB'),
        phase: regl.prop('phase'),
        colormode: regl.prop('colormode'),
      },
      count: 6,
    } as any);

    const fft = regl({
      frag: fftFragShader,
      vert: defaultVertShader,
      attributes: { position: rect },
      uniforms: {
        N: regl.prop('N'),
        NP: regl.prop('NP'),
        texture: regl.prop('texture'),
        mul: regl.prop('mul'),
        conj: regl.prop('conj'),
      },
      count: 6,
    } as any);

    const wpm = regl({
      frag: wpmFragShader,
      vert: defaultVertShader,
      attributes: { position: rect },
      uniforms: {
        N: regl.prop('N'),
        texture: regl.prop('texture'),
        dx: regl.prop('dx'),
        dz: regl.prop('dz'),
        k0: regl.prop('k0'),
      },
      count: 6,
    } as any);

    const shape = regl({
      frag: shapeFragShader,
      vert: defaultVertShader,
      attributes: { position: rect },
      uniforms: {
        width: regl.prop('width'),
        power: regl.prop('power'),
        texture: regl.prop('texture'),
        mouse: regl.prop('mouse'),
        N: regl.prop('N'),
        k0: regl.prop('k0'),
      },
      count: 6,
    } as any);

    const sample = regl({
      frag: sampleFragShader,
      vert: defaultVertShader,
      attributes: { position: rect },
      uniforms: {
        texture: regl.prop('texture'),
      },
      count: 6,
    } as any);

    // Helper functions
    function FFT(fbo: any, fbo_temp: any, levels: number, N: number, conj = 1) {
      let mul = Math.pow(1 / N, 1 / levels);
      if (conj < 0) mul = 1;

      for (let i = 0; i < levels; i++) {
        fbo_temp.use(() => {
          regl.clear({ color: [0, 0, 0, 0], depth: 1 });
          fft({
            texture: fbo.color[0],
            N: N,
            NP: 2 << i,
            mul: mul,
            conj: conj,
          });
        });
        const temp = fbo_temp;
        fbo_temp = fbo;
        fbo = temp;
      }
      return [fbo, fbo_temp];
    }

    function WPM(fbo: any, fbo_temp: any, N: number, k0: number, dz: number, dx: number) {
      fbo_temp.use(() => {
        regl.clear({ color: [0, 0, 0, 0], depth: 1 });
        wpm({
          N: N,
          texture: fbo.color[0],
          dz: dz,
          dx: dx,
          k0: k0,
        });
      });
      const temp = fbo_temp;
      fbo_temp = fbo;
      fbo = temp;
      return [fbo, fbo_temp];
    }

    function SHAPE(fbo: any, fbo_temp: any, N: number, k0: number, width: number, power: number, mx: number, my: number) {
      fbo_temp.use(() => {
        regl.clear({ color: [0, 0, 0, 0], depth: 1 });
        shape({
          texture: fbo.color[0],
          width: width,
          power: power,
          mouse: [mx, my],
          N: N,
          k0: k0,
        });
      });
      const temp = fbo_temp;
      fbo_temp = fbo;
      fbo = temp;
      return [fbo, fbo_temp];
    }

    // Mouse and interaction state
    let mx = 0;
    let my = 0;
    let m_down = false;
    let mdx = 0;
    let mdy = 0;
    let mpx = 0;
    let mpy = 0;

    const parameters = {
      width: new SmoothVar(0.2, domain_size / N * 2, 0.7),
      power: new SmoothVar(0.1, -1 / 5, 1 / 5),
      colormode: new SmoothVar(1, 0, 1),
    };

    let phase = 0;
    let block_light = false;

    // Main update loop
    let frameCount = 0;
    function update() {
      regl.poll();
      
      // Debug: Log every 60 frames (about once per second)
      if (frameCount % 60 === 0) {
        console.log('InteractWave: Frame', frameCount);
      }
      frameCount++;
      
      regl.clear({ color: [0, 0, 0, 1] });

      for (let i = 0; i < 3; i++) {
        const wavelength = [0.63, 0.532, 0.47][i];
        const k0 = (Math.PI * 2) / wavelength;

        let output = SHAPE(
          rgb_fbos[i],
          temp_fbo,
          NH,
          k0 * domain_size,
          parameters.width.value,
          parameters.power.value * domain_size,
          block_light ? mx : -1,
          block_light ? my : -1
        );
        rgb_fbos[i] = output[0];
        temp_fbo = output[1];

        output = FFT(rgb_fbos[i], temp_fbo, levels, N, 1);
        rgb_fbos[i] = output[0];
        temp_fbo = output[1];

        output = WPM(rgb_fbos[i], temp_fbo, N, k0, dz, dx);
        rgb_fbos[i] = output[0];
        temp_fbo = output[1];

        output = FFT(rgb_fbos[i], temp_fbo, levels, N, -1);
        rgb_fbos[i] = output[0];
        temp_fbo = output[1];

        rgb_fbos_mag[i].use(() => {
          regl.clear({ depth: 1 });
          sample({ texture: rgb_fbos[i] });
        });
      }

      draw({
        textureR: rgb_fbos_mag[0].color[0],
        textureG: rgb_fbos_mag[1].color[0],
        textureB: rgb_fbos_mag[2].color[0],
        phase: phase,
        colormode: parameters.colormode.value,
      });

      phase = phase - Math.PI / 60;
      phase = phase % (Math.PI * 2);

      mdx = mx - mpx;
      mdy = my - mpy;

      if (m_down) {
        parameters.width.add(mdx * 0.7);
        parameters.power.add(mdy * -0.4);
      }

      for (const key in parameters) {
        parameters[key as keyof typeof parameters].update();
      }

      mpx = mx;
      mpy = my;
    }

    // Event listeners
    const handleMouseMove = (event: MouseEvent) => {
      block_light = true;
      const rect = regl._gl.canvas.getBoundingClientRect();
      mx = (event.clientX - rect.left) / rect.width;
      my = 1 - (event.clientY - rect.top) / rect.height;
    };

    const handleMouseDown = (event: MouseEvent) => {
      m_down = true;
      const rect = regl._gl.canvas.getBoundingClientRect();
      mpx = mx = (event.clientX - rect.left) / rect.width;
      mpy = my = 1 - (event.clientY - rect.top) / rect.height;
    };

    const handleMouseUp = () => {
      m_down = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      m_down = true;
      block_light = true;
      const rect = regl._gl.canvas.getBoundingClientRect();
      mpx = mx = (e.touches[0].clientX - rect.left) / rect.width;
      mpy = my = 1 - (e.touches[0].clientY - rect.top) / rect.height;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = regl._gl.canvas.getBoundingClientRect();
      mx = (e.touches[0].clientX - rect.left) / rect.width;
      my = 1 - (e.touches[0].clientY - rect.top) / rect.height;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      m_down = false;
      block_light = false;
    };

    const canvas = canvasRef.current;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });

    const tick = regl.frame(update);

    return () => {
      tick.cancel();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      regl.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          imageRendering: 'auto',
          opacity: 0.8,
          background: '#111',
          pointerEvents: 'auto',
        }}
      />
      {/* Gradient overlay to darken the background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

