'use client';

import { useEffect, useRef } from 'react';

export function useVideoPlayback() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start playing automatically when component mounts
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Autoplay might be blocked, but that's okay
        console.log('Autoplay prevented:', error);
      }
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    // Handle page focus/blur
    const handleFocus = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    const handleBlur = () => {
      video.pause();
    };

    // Start playing immediately
    playVideo();

    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
      video.pause();
    };
  }, []);

  return videoRef;
}
