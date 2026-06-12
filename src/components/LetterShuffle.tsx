'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface LetterShuffleProps {
  title: string;
  author?: string;
  isVisible: boolean;
  className?: string;
}

export default function LetterShuffle({ title, author, isVisible, className }: LetterShuffleProps) {
  const [displayText, setDisplayText] = useState('');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const target = author
    ? `${title.toUpperCase()}, ${author.toUpperCase()}`
    : title.toUpperCase();
  const splitIndex = title.toUpperCase().length;

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!isVisible) {
      setDisplayText('');
      return;
    }

    const duration = 400;
    const intervalMs = 30;
    const startTime = Date.now();

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const next = target
        .split('')
        .map((char, i) => {
          if (!/[A-Z]/.test(char)) return char;
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
  }, [isVisible, target]);

  const display = (isVisible && displayText) ? displayText : target;

  return (
    <p
      className={`text-sm geist-mono-font text-white-muted select-none transition-opacity duration-200 ease-out line-clamp-2 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className ?? ''}`}
      style={{ willChange: 'opacity' }}
      aria-label={`${title}, ${author}`}
    >
      {author ? <em>{display.slice(0, splitIndex)}</em> : display.slice(0, splitIndex)}
      {display.slice(splitIndex)}
    </p>
  );
}
