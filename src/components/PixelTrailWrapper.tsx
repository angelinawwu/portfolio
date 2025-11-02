'use client';

import { useEffect, useState } from 'react';
import PixelTrail from './PixelTrail';

export default function PixelTrailWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
        <PixelTrail
          gridSize={100}
          trailSize={0.02}
          maxAge={100}
          interpolate={3}
          color="#0000ff"
        />
      </div>
    </div>
  );
}

