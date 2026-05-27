'use client';

import { useEffect, useRef } from 'react';
import {
  PRESETS,
  createInstance,
  destroyInstance,
  setInstancePaused,
  setInstancePreset,
  setInstanceVisible,
  updateInstanceSize,
  type Instance,
  type PresetMode,
  type PresetName,
} from 'img-fx';
import { useTheme } from './ThemeProvider';

interface ThemedShaderProps {
  preset?: PresetName;
  paused?: boolean;
  borderRadius?: number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Direct `img-fx` instance host that swaps the bundled preset's `colors`
 * array for one sampled from the active portfolio theme's CSS custom
 * properties (`--black`, `--surface`, `--neutral`, `--accent`).
 *
 * The 7-slot palette mirrors the bundled `pixels-organic` distribution
 * (3x dark base, 2x mid, 1x bright highlight at slot 4 — which is also
 * the `maskShape: 'shaderColor4'` slot used by the reveal animation),
 * so the loader stays mostly dark with accent highlights.
 */
export default function ThemedShader({
  preset = 'pixels-organic',
  paused,
  borderRadius,
  style,
  className,
}: ThemedShaderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const instRef = useRef<Instance | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const rect = wrap.getBoundingClientRect();
    const cssWidth = Math.max(1, Math.round(rect.width));
    const cssHeight = Math.max(1, Math.round(rect.height));
    const presetMode = buildPresetMode(preset);
    const inst = createInstance({ canvas, cssWidth, cssHeight, preset: presetMode });
    instRef.current = inst;

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      updateInstanceSize(inst, Math.max(1, Math.round(width)), Math.max(1, Math.round(height)));
    });
    ro.observe(wrap);

    const io = new IntersectionObserver(([entry]) => {
      setInstanceVisible(inst, entry.isIntersecting);
    });
    io.observe(wrap);

    return () => {
      ro.disconnect();
      io.disconnect();
      destroyInstance(inst);
      instRef.current = null;
    };
    // Only re-create the instance when the bundled preset *name* changes;
    // theme & accent updates are pushed via setInstancePreset below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset]);

  useEffect(() => {
    const inst = instRef.current;
    if (!inst) return;
    // Defer one frame so the parent ThemeProvider's effect has updated the
    // `data-theme` attribute on `<html>` before we sample CSS variables.
    const id = requestAnimationFrame(() => {
      if (!instRef.current) return;
      setInstancePreset(instRef.current, buildPresetMode(preset));
    });
    return () => cancelAnimationFrame(id);
  }, [theme, preset]);

  useEffect(() => {
    const inst = instRef.current;
    if (!inst) return;
    setInstancePaused(inst, !!paused);
  }, [paused]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius,
        overflow: 'hidden',
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
}

/**
 * Read theme color hexes off `<html>` and assemble a heavily dark
 * 7-slot palette. The bundled `pixels-organic` preset boosts slot 4 as
 * a luminance peak (`highlight`, `shaderColor4` mask), so we put the
 * accent there but drop its alpha so it reads as a sparse spark
 * instead of a wash. Most cells stay on `--black` / `--surface`.
 *
 * Distribution: 4x black, 2x surface, 1x accent (low alpha).
 * Brightness knobs (`intensity`, `highlight`, `shaderOpacity`) are
 * pulled down so the overall canvas reads close to `--black`.
 */
function buildPresetMode(name: PresetName): PresetMode {
  const base = PRESETS[name].modes.dark;
  if (typeof window === 'undefined') return base;

  const css = getComputedStyle(document.documentElement);
  const black = css.getPropertyValue('--black').trim() || '#0f0f0f';
  const surface = css.getPropertyValue('--surface').trim() || '#2f2f2f';
  const neutral = css.getPropertyValue('--neutral').trim() || '#4a4949';
  const accent = css.getPropertyValue('--accent').trim() || '#d8d8d8';

  return {
    ...base,
    cardBg: black,
    colors: [black, black, surface, black, accent, black, neutral],
    alphas: [1, 1, 1, 1, 0.35, 1, 0.7],
    intensity: 0.55,
    highlight: 0,
    shaderOpacity: 0.9,
    vignette: 0.5,
    vigOpacity: 1,
  };
}
