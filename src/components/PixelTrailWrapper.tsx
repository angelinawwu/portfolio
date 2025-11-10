'use client';

import { useEffect, useState } from 'react';
import PixelTrail from './PixelTrail';

export default function PixelTrailWrapper() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [trailColor, setTrailColor] = useState('#0000ff');

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
        setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
      };
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

  useEffect(() => {
    if (!mounted || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (!element) return;

      // Check if the element or any of its parents has the blue background
      let currentElement: HTMLElement | null = element as HTMLElement;
      let isOverBlueBackground = false;

      while (currentElement && currentElement !== document.body) {
        const bgColor = window.getComputedStyle(currentElement).backgroundColor;
        // Check for #0000ff in rgb format: rgb(0, 0, 255)
        if (bgColor === 'rgb(0, 0, 255)' || bgColor === '#0000ff') {
          isOverBlueBackground = true;
          break;
        }
        currentElement = currentElement.parentElement;
      }

      setTrailColor(isOverBlueBackground ? '#ffffff' : '#0000ff');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted, isMobile]);
  
    if (!mounted || isMobile) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
        <PixelTrail
          gridSize={100}
          trailSize={0.02}
          maxAge={100}
          interpolate={3}
          color={trailColor}
        />
      </div>
    </div>
  );
}

