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
 * properties.
 *
 * The bundled `pixels-organic` dark palette is a pure-grayscale luminance
 * ramp (`#0f0f0f`, `#4a4949`, `#b9b9b9`, `#0f0f0f`, `#d8d8d8`, `#0f0f0f`,
 * `#2f2f2f`) — 3x dark, 1x mid, 1x mid-bright, 1x brightest, 1x dark.
 * We mirror that ladder using theme colors with matched luminance:
 *
 *   slot 0,3,5  -> --black     (dark base, like #0f0f0f)
 *   slot 6      -> --surface   (slightly lighter dark, like #2f2f2f)
 *   slot 1      -> --neutral   (mid, like #4a4949)
 *   slot 2      -> --white  @ 0.55 alpha (mid-bright, like #b9b9b9)
 *   slot 4      -> --white     (brightest highlight, like #d8d8d8)
 *
 * Why `--white` for highlights? Each theme's `--white` is a barely-tinted
 * near-white (e.g. green `#F8FAE9`, blue `#E3EAF6`), which preserves the
 * shader's high-luminance peak without the chromatic bleed that fully
 * saturated `--accent` introduces. The theme personality reads through
 * subtly via `--black`, `--surface`, `--neutral`, and the off-white tint.
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
    const inst = createInstance({
      canvas,
      cssWidth,
      cssHeight,
      preset: buildPresetMode(preset),
    });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset]);

  useEffect(() => {
    if (!instRef.current) return;
    // Defer one frame so the parent ThemeProvider's effect has applied
    // `data-theme` to `<html>` before we sample CSS variables.
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

function buildPresetMode(name: PresetName): PresetMode {
  const base = PRESETS[name].modes.dark;
  if (typeof window === 'undefined') return base;

  const css = getComputedStyle(document.documentElement);
  const black = css.getPropertyValue('--black').trim() || '#0f0f0f';
  const surface = css.getPropertyValue('--surface').trim() || '#2f2f2f';
  const neutral = css.getPropertyValue('--neutral').trim() || '#4a4949';
  const white = css.getPropertyValue('--white').trim() || '#d8d8d8';

  return {
    ...base,
    cardBg: white,
    colors: [white, surface, black, white, black, white, neutral],
    alphas: [1, 1, 0.55, 1, 1, 1, 1],
  };
}
