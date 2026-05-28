'use client';

import { forwardRef, useState, type CSSProperties, type VideoHTMLAttributes } from 'react';
import MediaLoader from './MediaLoader';

interface LoadedVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  /** Treat layout the same way `next/image` `fill` does — overlay sibling. */
  fill?: boolean;
  /** Class applied to the wrapper element (non-`fill` mode). */
  wrapperClassName?: string;
  /** Style applied to the wrapper element (non-`fill` mode). */
  wrapperStyle?: CSSProperties;
  /** img-fx preset for the loader overlay. */
  loaderPreset?: 'pixels-organic' | 'pixels-mechanic';
  /** Minimum loader display time (ms). */
  loaderMinMs?: number;
}

/**
 * `<video>` element with an animated `img-fx` shader loader overlay that
 * fades out once the video has buffered its first frame.
 */
const LoadedVideo = forwardRef<HTMLVideoElement, LoadedVideoProps>(function LoadedVideo(
  {
    fill,
    wrapperClassName,
    wrapperStyle,
    loaderPreset,
    loaderMinMs,
    onLoadedData,
    style,
    className,
    ...rest
  },
  ref,
) {
  const [loaded, setLoaded] = useState(false);
  const [revealSrc, setRevealSrc] = useState<string | undefined>(undefined);

  const handleLoadedData = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    if (v.videoWidth && v.videoHeight) {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = v.videoWidth;
        canvas.height = v.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(v, 0, 0);
          setRevealSrc(canvas.toDataURL('image/png'));
        }
      } catch {
        // Tainted canvas or other failure — fall back to plain opacity fade.
      }
    }
    setLoaded(true);
    onLoadedData?.(e);
  };

  const video = (
    <video
      ref={ref}
      {...rest}
      className={className}
      style={{
        ...style,
        opacity: loaded ? undefined : 0,
        transition: style?.transition
          ? `opacity 300ms cubic-bezier(.215, .61, .355, 1), ${style.transition}`
          : 'opacity 300ms cubic-bezier(.215, .61, .355, 1)',
      }}
      onLoadedData={handleLoadedData}
    />
  );

  if (fill) {
    return (
      <>
        {video}
        <MediaLoader
          loaded={loaded}
          preset={loaderPreset}
          minDurationMs={loaderMinMs}
          className={wrapperClassName}
          revealSrc={revealSrc}
        />
      </>
    );
  }

  return (
    <span
      className={wrapperClassName}
      style={{ position: 'relative', display: 'block', ...wrapperStyle }}
    >
      {video}
      <MediaLoader
        loaded={loaded}
        preset={loaderPreset}
        minDurationMs={loaderMinMs}
        revealSrc={revealSrc}
      />
    </span>
  );
});

export default LoadedVideo;
