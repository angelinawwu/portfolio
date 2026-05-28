'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import ThemedShader from './ThemedShader';

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
  /**
   * URL of the image to dissolve into. When provided, the loader runs the
   * img-fx `startReveal` animation (chunky pixel dissolve) instead of a
   * plain opacity fade.
   */
  revealSrc?: string;
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
  revealSrc,
}: MediaLoaderProps) {
  const [mounted, setMounted] = useState(false);
  const [mountTime, setMountTime] = useState(0);
  const [revealActive, setRevealActive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [unmount, setUnmount] = useState(false);
  const usingReveal = Boolean(revealSrc);

  useEffect(() => {
    setMounted(true);
    setMountTime(performance.now());
  }, []);

  useEffect(() => {
    if (!loaded || !mounted) return;
    const elapsed = performance.now() - mountTime;
    const remaining = Math.max(0, minDurationMs - elapsed);
    const t = window.setTimeout(() => {
      if (usingReveal) {
        setRevealActive(true);
      } else {
        setHidden(true);
      }
    }, remaining);
    return () => window.clearTimeout(t);
  }, [loaded, mounted, mountTime, minDurationMs, usingReveal]);

  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setUnmount(true), 1000);
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
        transition: usingReveal
          ? 'opacity 200ms linear'
          : 'opacity 400ms cubic-bezier(.215, .61, .355, 1)',
        pointerEvents: 'none',
        zIndex: 1,
        ...style,
      }}
    >
      {mounted && (
        <ThemedShader
          preset={preset}
          paused={hidden}
          borderRadius={borderRadius}
          revealActive={revealActive}
          revealSrc={revealSrc}
          onRevealComplete={() => setHidden(true)}
        />
      )}
    </div>
  );
}
