'use client';

import { ImageGeneration } from 'img-fx';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { useTheme } from './ThemeProvider';

interface MediaLoaderProps {
  /** When the underlying media has finished loading. Triggers fade-out. */
  loaded: boolean;
  /** Wrapper class for the absolutely-positioned loader overlay. */
  className?: string;
  /** Wrapper inline style override. */
  style?: CSSProperties;
  /** img-fx preset. */
  preset?: 'pixels-organic' | 'pixels-mechanic';
  /** Minimum time the loader stays visible before allowing fade-out (ms). */
  minDurationMs?: number;
  /** Optional explicit corner radius (CSS px). */
  borderRadius?: number;
}

/**
 * Animated shader-driven loading overlay built on `img-fx` ImageGeneration.
 * Fades out and unmounts once `loaded` is true (after `minDurationMs`).
 */
export default function MediaLoader({
  loaded,
  className,
  style,
  preset = 'pixels-organic',
  minDurationMs = 400,
  borderRadius,
}: MediaLoaderProps) {
  const { theme } = useTheme();
  const [cardBg, setCardBg] = useState<string | undefined>(undefined);
  const [mounted, setMounted] = useState(false);
  const [mountTime, setMountTime] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [unmount, setUnmount] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMountTime(performance.now());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Defer one frame so the parent ThemeProvider's effect has applied
    // `data-theme` to `<html>` before we sample CSS variables.
    const id = requestAnimationFrame(() => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue('--black')
        .trim();
      setCardBg(v || undefined);
    });
    return () => cancelAnimationFrame(id);
  }, [mounted, theme]);

  useEffect(() => {
    if (!loaded || !mounted) return;
    const elapsed = performance.now() - mountTime;
    const remaining = Math.max(0, minDurationMs - elapsed);
    const t = window.setTimeout(() => setHidden(true), remaining);
    return () => window.clearTimeout(t);
  }, [loaded, mounted, mountTime, minDurationMs]);

  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setUnmount(true), 500);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (unmount) return null;

  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        opacity: hidden ? 0 : 1,
        transition: 'opacity 400ms cubic-bezier(.215, .61, .355, 1)',
        pointerEvents: 'none',
        zIndex: 1,
        ...style,
      }}
    >
      {mounted && (
        <ImageGeneration
          preset={preset}
          theme="dark"
          paused={hidden}
          borderRadius={borderRadius}
          cardBg={cardBg}
          style={{ width: '100%', height: '100%' }}
        >
          <div style={{ width: '100%', height: '100%' }} />
        </ImageGeneration>
      )}
    </div>
  );
}
