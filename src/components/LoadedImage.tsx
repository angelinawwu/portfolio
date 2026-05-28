'use client';

import Image, { type ImageProps } from 'next/image';
import { useState, type CSSProperties } from 'react';
import MediaLoader from './MediaLoader';

interface LoadedImageProps extends ImageProps {
  /** Class applied to the wrapper element (when not in `fill` mode). */
  wrapperClassName?: string;
  /** Style applied to the wrapper element (when not in `fill` mode). */
  wrapperStyle?: CSSProperties;
  /** img-fx preset for the loader overlay. */
  loaderPreset?: 'pixels-organic' | 'pixels-mechanic';
  /** Minimum loader display time (ms). */
  loaderMinMs?: number;
  /** Override MosaicConfig cellSize (0..1). Lower = bigger pixels. Defaults to ~0.22. */
  loaderPixelCellSize?: number;
}

/**
 * Drop-in replacement for `next/image` `<Image>` that overlays an animated
 * `img-fx` shader loader until the image finishes loading.
 *
 * - `fill` mode: relies on the caller's existing relative-positioned parent.
 *   The loader is rendered as a sibling overlay inside the same parent.
 * - Non-`fill` mode: wraps the image in a relative `<span>` so the loader
 *   can absolutely position over it.
 */
export default function LoadedImage({
  onLoad,
  fill,
  style,
  className,
  wrapperClassName,
  wrapperStyle,
  loaderPreset,
  loaderMinMs,
  loaderPixelCellSize,
  ...rest
}: LoadedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const revealSrc = typeof rest.src === 'string' ? rest.src : undefined;

  const img = (
    <Image
      {...rest}
      fill={fill}
      className={className}
      style={{
        ...style,
        opacity: loaded ? undefined : 0,
        transition: style?.transition
          ? `opacity 300ms cubic-bezier(.215, .61, .355, 1), ${style.transition}`
          : 'opacity 300ms cubic-bezier(.215, .61, .355, 1)',
      }}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );

  if (fill) {
    return (
      <>
        {img}
        <MediaLoader
          loaded={loaded}
          preset={loaderPreset}
          minDurationMs={loaderMinMs}
          pixelCellSize={loaderPixelCellSize}
          className={wrapperClassName}
          revealSrc={revealSrc}
        />
      </>
    );
  }

  return (
    <span
      className={wrapperClassName}
      style={{
        position: 'relative',
        display: 'block',
        ...wrapperStyle,
      }}
    >
      {img}
      <MediaLoader
        loaded={loaded}
        preset={loaderPreset}
        minDurationMs={loaderMinMs}
        pixelCellSize={loaderPixelCellSize}
        revealSrc={revealSrc}
      />
    </span>
  );
}
