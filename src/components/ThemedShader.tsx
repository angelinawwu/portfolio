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
 * Read theme color hexes off `<html>` and assemble a dark-dominant
 * 7-slot palette. Slot 4 is the highlight (also used by the reveal
 * animation's `shaderColor4` mask), so the accent gets the most
 * visible role; black/surface/neutral fill the remaining slots.
 *
 * Distribution: 2x black, 2x surface, 2x neutral, 1x accent.
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
    colors: [black, surface, neutral, surface, accent, black, neutral],
  };
}
