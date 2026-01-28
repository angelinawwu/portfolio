'use client';

import { useEffect, useState } from 'react';
import PixelTrail from './PixelTrail';
import { useTheme } from './ThemeProvider';

export default function PixelTrailWrapper() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { accentColor } = useTheme();

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted || isMobile) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden', pointerEvents: 'none' }}>
        <PixelTrail
          gridSize={100}
          trailSize={0.02}
          maxAge={100}
          interpolate={3}
          color={accentColor}
        />
      </div>
    </div>
  );
}
