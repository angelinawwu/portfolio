'use client';

import { useEffect, useRef } from 'react';
import {
  PRESETS,
  createInstance,
  createReveal,
  destroyInstance,
  loadImage,
  setInstancePaused,
  setInstancePreset,
  setInstanceVisible,
  updateInstanceSize,
  type Instance,
  type PresetMode,
  type PresetName,
  type RevealState,
} from 'img-fx';
import { useTheme } from './ThemeProvider';

interface ThemedShaderProps {
  preset?: PresetName;
  paused?: boolean;
  borderRadius?: number;
  style?: React.CSSProperties;
  className?: string;
  /** When set to true, kicks off the chunky-pixel reveal animation using `revealSrc`. */
  revealActive?: boolean;
  /** URL of the image to dissolve into when `revealActive` flips true. */
  revealSrc?: string;
  /** Fires once the reveal animation has finished painting the image. */
  onRevealComplete?: () => void;
  /** Override MosaicConfig cellSize (0..1). Lower = bigger pixels. Defaults to preset value (~0.22). */
  pixelCellSize?: number;
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
  revealActive,
  revealSrc,
  onRevealComplete,
  pixelCellSize,
}: ThemedShaderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const instRef = useRef<Instance | null>(null);
  const revealRef = useRef<RevealState | null>(null);
  const revealStartedRef = useRef(false);
  const onRevealCompleteRef = useRef(onRevealComplete);
  const { theme } = useTheme();

  useEffect(() => {
    onRevealCompleteRef.current = onRevealComplete;
  }, [onRevealComplete]);

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
      preset: buildPresetMode(preset, pixelCellSize),
    });
    instRef.current = inst;

    const overlay = overlayRef.current;
    if (overlay) {
      const reveal = createReveal({
        canvas: overlay,
        cssWidth,
        cssHeight,
        shaderCanvas: canvas,
      });
      inst.reveal = reveal;
      revealRef.current = reveal;
    }

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
      revealRef.current?.dispose();
      revealRef.current = null;
      destroyInstance(inst);
      instRef.current = null;
      revealStartedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset]);

  useEffect(() => {
    if (!revealActive || !revealSrc) return;
    if (revealStartedRef.current) return;
    const reveal = revealRef.current;
    const wrap = wrapRef.current;
    if (!reveal || !wrap) return;

    let cancelled = false;
    revealStartedRef.current = true;
    loadImage(revealSrc)
      .then((image) => {
        if (cancelled) return;
        const rect = wrap.getBoundingClientRect();
        reveal.startReveal({
          image,
          cssWidth: Math.max(1, Math.round(rect.width)),
          cssHeight: Math.max(1, Math.round(rect.height)),
          onRevealComplete: () => {
            onRevealCompleteRef.current?.();
          },
        });
      })
      .catch(() => {
        // Image failed to load — fall back to immediate completion so the
        // outer loader still unmounts gracefully.
        if (cancelled) return;
        onRevealCompleteRef.current?.();
      });

    return () => {
      cancelled = true;
    };
  }, [revealActive, revealSrc]);

  useEffect(() => {
    if (!instRef.current) return;
    // Defer one frame so the parent ThemeProvider's effect has applied
    // `data-theme` to `<html>` before we sample CSS variables.
    const id = requestAnimationFrame(() => {
      if (!instRef.current) return;
      setInstancePreset(instRef.current, buildPresetMode(preset, pixelCellSize));
    });
    return () => cancelAnimationFrame(id);
  }, [theme, preset, pixelCellSize]);

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
        style={{ display: 'block', width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 1 }}
      />
      <canvas
        ref={overlayRef}
        aria-hidden
        style={{ display: 'block', width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
      />
    </div>
  );
}

function buildPresetMode(name: PresetName, pixelCellSize?: number): PresetMode {
  const base = PRESETS[name].modes.dark;
  if (typeof window === 'undefined') return base;

  const css = getComputedStyle(document.documentElement);
  const black = css.getPropertyValue('--black').trim() || '#0f0f0f';
  const surface = css.getPropertyValue('--surface').trim() || '#2f2f2f';
  const neutral = css.getPropertyValue('--neutral').trim() || '#4a4949';
  const white = css.getPropertyValue('--white').trim() || '#d8d8d8';
  const accent = css.getPropertyValue('--accent').trim() || '#ff6b6b';

  return {
    ...base,
    cardBg: white,
    colors: [white, neutral, black, white, black, white, surface],
    alphas: [1, 1, 0.55, 1, 0.75, 0.5, 0.3],
    ...(pixelCellSize !== undefined && { pixelConfig: { ...base.pixelConfig, cellSize: pixelCellSize } }),
  };
}
