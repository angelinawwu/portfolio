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
import { useTheme, type Theme } from './ThemeProvider';

interface ThemedShaderProps {
  preset?: PresetName;
  paused?: boolean;
  borderRadius?: number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Direct `img-fx` instance host that swaps the bundled preset's `colors`
 * array for one derived from the active portfolio theme accent. Falls
 * back to the bundled grayscale palette when the `default` theme is on.
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
  const { theme, accentColor } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const rect = wrap.getBoundingClientRect();
    const cssWidth = Math.max(1, Math.round(rect.width));
    const cssHeight = Math.max(1, Math.round(rect.height));
    const presetMode = buildPresetMode(preset, theme, accentColor);
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
    setInstancePreset(inst, buildPresetMode(preset, theme, accentColor));
  }, [theme, accentColor, preset]);

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

function buildPresetMode(name: PresetName, theme: Theme, accent: string): PresetMode {
  const base = PRESETS[name].modes.dark;
  if (theme === 'default') return base;
  return { ...base, colors: deriveColors(accent), cardBg: '#0a0a0a' };
}

/** Map an accent hex color into a 7-stop dark→light palette around its hue. */
function deriveColors(
  accent: string,
): [string, string, string, string, string, string, string] {
  const [h, s] = hexToHsl(accent);
  // Clamp saturation so very pastel accents still produce visible tint
  // and very saturated accents don't overwhelm the shader.
  const sat = Math.max(0.35, Math.min(0.85, s));
  const lightnesses = [0.04, 0.1, 0.2, 0.34, 0.52, 0.74, 0.95] as const;
  const stops = lightnesses.map((l) => hslToHex(h, sat, l));
  return stops as unknown as [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
  ];
}

function hexToHsl(hex: string): [number, number, number] {
  const v = hex.replace('#', '');
  const r = parseInt(v.slice(0, 2), 16) / 255;
  const g = parseInt(v.slice(2, 4), 16) / 255;
  const b = parseInt(v.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [h, s, l];
}

function hslToHex(h: number, s: number, l: number): string {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const c = l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
    return Math.round(c * 255)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
