'use client';

import { useEffect, useRef } from 'react';

export function useVideoPlayback(shouldPlay: boolean = true) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay might be blocked, but that's okay
      }
    };

    const pauseVideo = () => {
      video.pause();
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseVideo();
      } else if (shouldPlay) {
        playVideo();
      }
    };

    // Handle page focus/blur
    const handleFocus = () => {
      if (!document.hidden && shouldPlay) {
        playVideo();
      }
    };

    const handleBlur = () => {
      pauseVideo();
    };

    // Play/pause based on shouldPlay prop
    if (shouldPlay) {
      playVideo();
    } else {
      pauseVideo();
    }

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
      pauseVideo();
    };
  }, [shouldPlay]);

  return videoRef;
}
