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

  const video = (
    <video
      ref={ref}
      {...rest}
      className={className}
      style={{
        ...style,
        opacity: loaded ? undefined : 0,
        transition: 'opacity 300ms cubic-bezier(.215, .61, .355, 1)',
      }}
      onLoadedData={(e) => {
        setLoaded(true);
        onLoadedData?.(e);
      }}
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
      <MediaLoader loaded={loaded} preset={loaderPreset} minDurationMs={loaderMinMs} />
    </span>
  );
});

export default LoadedVideo;
