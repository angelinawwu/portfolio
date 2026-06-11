'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface LetterShuffleProps {
  text: string;
  isVisible: boolean;
  className?: string;
}

export default function LetterShuffle({ text, isVisible, className }: LetterShuffleProps) {
  const [displayText, setDisplayText] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!isVisible) {
      setDisplayText('');
      return;
    }

    const target = text.toUpperCase();
    const duration = 400;
    const intervalMs = 30;
    const startTime = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const next = target
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (progress > i / target.length) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayText(next);

      if (progress >= 1) {
        clearInterval(timerRef.current!);
        setDisplayText(target);
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, text]);

  return (
    <p
      className={`text-[10px] geist-mono-font text-white-muted tracking-wider truncate select-none transition-opacity duration-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${className ?? ''}`}
      style={{ willChange: 'opacity' }}
      aria-label={text}
    >
      {isVisible && displayText ? displayText : text.toUpperCase()}
    </p>
  );
}
