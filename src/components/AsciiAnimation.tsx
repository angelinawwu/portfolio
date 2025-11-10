'use client';

import { useEffect, useRef, useState } from 'react';
import { frames } from '@/assets/Hero-animation/frames.js';

// Fit text to container function
function fitTextToContainer(text: string, fontFace: string, containerWidth: number): number {
  const getPixelRatio = () => {
    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return 1;
    const dpr = window.devicePixelRatio || 1;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ctxAny = ctx as any;
    const bsr = ctxAny.webkitBackingStorePixelRatio ||
                ctxAny.mozBackingStorePixelRatio ||
                ctxAny.msBackingStorePixelRatio ||
                ctxAny.oBackingStorePixelRatio ||
                ctxAny.backingStorePixelRatio || 1;
    return dpr / bsr;
  };

  const PIXEL_RATIO = getPixelRatio();

  const createHiDPICanvas = (w: number, h: number) => {
    const canvas = document.createElement("canvas");
    canvas.width = w * PIXEL_RATIO;
    canvas.height = h * PIXEL_RATIO;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.getContext("2d")?.setTransform(PIXEL_RATIO, 0, 0, PIXEL_RATIO, 0, 0);
    return canvas;
  };

  const canvas = createHiDPICanvas(containerWidth, 0);
  const context = canvas.getContext('2d');
  if (!context) return 16;

  const split = (text: string) => text.split('\n');
  
  const getLongestLine = (lines: string[]) => {
    let longest = -1;
    let i: number | undefined;

    lines.forEach((line, ii) => {
      const lineWidth = context.measureText(line).width;
      if (lineWidth > longest) {
        i = ii;
        if (!line.includes('exempt-from-text-fit-calculation')) {
          longest = lineWidth;
        }
      }
    });

    return typeof i === 'number' ? lines[i] : null;
  };

  const getFittedFontSize = (text: string, fontFace: string) => {
    const fits = () => context.measureText(text).width <= canvas.width;
    const font = (size: number, face: string) => size + "px " + face;

    let fontSize = 60; // Further reduced starting size
    do {
      fontSize--;
      context.font = font(fontSize, fontFace);
    } while (!fits());

    fontSize /= (PIXEL_RATIO / 2.2); // Increased divisor for even smaller size
    return fontSize;
  };

  const longestLine = getLongestLine(split(text));
  if (!longestLine) return 16;
  
  return getFittedFontSize(longestLine, fontFace);
}

interface AsciiAnimationProps {
  mirror?: boolean;
}

export default function AsciiAnimation({ mirror = false }: AsciiAnimationProps) {
  const frameOffset = mirror ? 2 : 0; // Offset mirrored animation by 2 frames
    const preRef = useRef<HTMLPreElement>(null);
    const [currentFrame, setCurrentFrame] = useState(0);
    const [fontSize, setFontSize] = useState(16);
    const [lineHeight, setLineHeight] = useState(16);
    const [canAnimate, setCanAnimate] = useState(false);
    const animationRef = useRef<number | undefined>(undefined);
  
  const fps = 8; // Increased FPS for smoother animation with fewer frames
  const fpsInterval = 1000 / fps;
  const maxFrames = frames?.length || 0;

  // Wait for loader to finish before starting animation
  useEffect(() => {
    const startTime = Date.now();
    const minLoaderTime = 1300; // Loader displays for ~1.3s (1000ms + 300ms fade)
    
    const checkReady = () => {
      if (typeof window !== 'undefined' && document.readyState === 'complete') {
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoaderTime - elapsed);
        
        setTimeout(() => {
          setCanAnimate(true);
        }, remainingTime);
      }
    };

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        checkReady();
      } else {
        window.addEventListener('load', checkReady);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', checkReady);
      }
    };
  }, []);

  useEffect(() => {
      const updateSize = () => {
        if (preRef.current && frames && frames.length > 0) {
          // Use larger charRatio on mobile for better visibility
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          const charRatio = isMobile ? 0.25 : 0.20; // Larger on mobile, smaller on desktop
          const lineHeightRatio = 0.65; // Increased for more vertical spacing
          const firstFrame = frames[0] || '';
          const lines = firstFrame.split('\n');
          const secondLine = lines[1] || lines[0] || '';
          
          const charWidth = fitTextToContainer(
            secondLine,
            'monospace',
            preRef.current.clientWidth
          ) * charRatio;
          const charHeight = lineHeightRatio * charWidth;
          setFontSize(charWidth);
          setLineHeight(charHeight);
        }
      };
  
      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  
    useEffect(() => {
        if (maxFrames === 0 || !canAnimate) return;
        
        let frameIndex = frameOffset; // Start with offset
        let lastTime = Date.now();
        let isIdling = false;
        let idleDirection = 1; // 1 for forward, -1 for backward
        const idleStart = 15;
        const idleEnd = 22; // Last frame for idle animation

        const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - lastTime;

        if (elapsed > fpsInterval) {
            lastTime = currentTime - (elapsed % fpsInterval);

            if (!isIdling) {
            // Initial animation: play through once
            frameIndex++;
            setCurrentFrame(frameIndex);
            
            // When we reach the last frame, start idle animation
            if (frameIndex >= maxFrames - 1) {
                isIdling = true;
                frameIndex = idleEnd; // Start at frame 22
                idleDirection = -1; // Start going backward (down to 15)
            }
            } else {
            // Idle animation: ping-pong between frames 15-22
            // Move to next frame
            frameIndex += idleDirection;
            
            // Check boundaries and reverse direction
            if (frameIndex >= idleEnd) {
                frameIndex = idleEnd;
                idleDirection = -1; // Start going backward
            } else if (frameIndex <= idleStart) {
                frameIndex = idleStart;
                idleDirection = 1; // Start going forward
            }
            
            setCurrentFrame(frameIndex);
            }
        }
        
        // Continue animation
        animationRef.current = requestAnimationFrame(animate);
        };
      
        animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [maxFrames, fpsInterval, canAnimate, frameOffset]);

  if (!frames || frames.length === 0) {
    return null;
  }

  return (
      <pre
        ref={preRef}
        className={`absolute inset-0 w-full h-full font-mono text-white opacity-100 pointer-events-none overflow-hidden m-0 p-0 whitespace-pre flex items-end md:items-center justify-start z-0`}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: `${lineHeight}px`,
          maxWidth: '100%',
          maxHeight: '100%',
          transform: mirror ? 'scaleX(-1)' : 'none',
        }}
      >
      {frames[currentFrame] || ''}
    </pre>
  );
}