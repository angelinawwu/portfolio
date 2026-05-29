'use client';

import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver<T extends Element = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: '100px', // Start loading slightly before element enters viewport
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { targetRef, isIntersecting };
}
