'use client';

import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    const startTime = Date.now();
    const minDisplayTime = 1000; // Minimum 1 second display

    // Simulate smooth progress from 0 to 100%
    const updateProgress = () => {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            // Slow down near completion
            const increment = prev < 98 ? 0.5 : 0.2;
            return Math.min(prev + increment, 95);
          }
          // Accelerate progress - faster at start, slower at end
          const increment = prev < 30 ? 2.5 : prev < 60 ? 2 : prev < 80 ? 1.5 : 1;
          return Math.min(prev + increment, 95);
        });
      }, 40);
    };

    // Track actual page loading
    const handleComplete = () => {
      clearInterval(progressInterval);
      setProgress(100);
      
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);
      
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime + 300); // Add 300ms for fade-out animation
    };

    // Start progress simulation
    updateProgress();

    // Check if page is already loaded
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        // Page already loaded, wait a bit then complete
        setTimeout(handleComplete, 500);
      } else {
        window.addEventListener('load', handleComplete);
      }

      // Also track when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          // DOM ready, continue tracking
        });
      }
    }

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleComplete);
      }
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loader-overlay ${!isLoading ? 'fade-out' : ''}`}>
      <div className="loader-container">
        <div className="loader-animation">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
        <div className="loader-percentage">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}

