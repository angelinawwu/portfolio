'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

type CursorState = 'default' | 'playground-link' | 'project-card' | 'image';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [supportsHover, setSupportsHover] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 }); 
  const measureRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(16);
  const [imageCaption, setImageCaption] = useState('');
  const { accentColor } = useTheme();

  useEffect(() => {
    // Check if device supports hover (desktop)
    const mediaQuery = window.matchMedia('(hover: hover)');
    setSupportsHover(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setSupportsHover(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!supportsHover) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY }); 
    };

    const handleMouseOver = (e: globalThis.MouseEvent) => {
      const target = e.target as HTMLElement;
      const playgroundLink = target.closest('[data-cursor="playground-link"]');
      const projectCard = target.closest('[data-cursor="project-card"]');
      const imageElement = target.closest('[data-cursor="image"]');
      
      if (playgroundLink) {
        setCursorState('playground-link');
        setImageCaption('');
      } else if (projectCard) {
        setCursorState('project-card');
        setImageCaption('');
      } else if (imageElement) {
        const caption = imageElement.getAttribute('data-caption') || '';
        setCursorState('image');
        setImageCaption(caption);
      } else {
        setCursorState('default');
        setImageCaption('');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [supportsHover]);

  // Measure content width when state changes
  useEffect(() => {
    if (cursorState === 'default') {
      setContentWidth(16);
      return;
    }
    
    requestAnimationFrame(() => {
      if (measureRef.current) {
        const measuredWidth = measureRef.current.scrollWidth;
        setContentWidth(measuredWidth);
      }
    });
  }, [cursorState, imageCaption]);

  if (!supportsHover) return null;

  const isDefault = cursorState === 'default';
  const text = cursorState === 'playground-link' ? 'OPEN WEBSITE' 
    : cursorState === 'project-card' ? 'VIEW PROJECT' 
    : cursorState === 'image' ? imageCaption 
    : '';

  // Instant transition for cursor movement
  const moveTransition = { duration: 0 }; 

  // Container size transition
  const sizeTransition = { duration: 0.2, ease: [0.215, 0.61, 0.355, 1] as const };
  
  // Content transition
  const contentTransition = { 
    duration: 0.2, 
    ease: [0.215, 0.61, 0.355, 1] as const, 
    delay: 0.01 
  };

  return (
    <>
      {/* Hidden measurement element */}
      <div
        ref={measureRef}
        className="absolute invisible whitespace-nowrap flex items-center gap-2 px-3 py-1.5"
        style={{ visibility: 'hidden', position: 'absolute', top: '-9999px' }}
      >
        {cursorState === 'playground-link' && (
          <>
            <span className="text-xs font-mono geist-mono-font">OPEN WEBSITE</span>
            <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" weight="bold" />
          </>
        )}
        {cursorState === 'project-card' && (
          <>
            <span className="text-xs font-mono geist-mono-font">VIEW PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" weight="bold" />
          </>
        )}
        {cursorState === 'image' && (
          <span className="text-xs font-mono uppercase geist-mono-font">{imageCaption}</span>
        )}
      </div>
      
      {/* Outer motion.div for screen movement */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{ x: position.x, y: position.y }}
        transition={{ x: moveTransition, y: moveTransition }} 
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {/* Inner motion.div for size change - uses accent color */}
        <motion.div
          className="flex items-center gap-2 overflow-hidden"
          style={{ backgroundColor: accentColor, color: 'var(--black)' }}
          animate={{
            width: contentWidth,
            height: isDefault ? 16 : 28, 
            padding: isDefault ? 0 : '6px 12px',
          }}
          transition={sizeTransition} 
        >
          {!isDefault && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={contentTransition}
              className="text-xs font-mono geist-mono-font whitespace-nowrap"
            >
              {text}
            </motion.span>
          )}
          {cursorState === 'playground-link' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={contentTransition}
              className="flex-shrink-0"
            >
              <ArrowUpRight className="w-3.5 h-3.5" weight="bold" />
            </motion.div>
          )}
          {cursorState === 'project-card' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={contentTransition}
              className="flex-shrink-0"
            >
              <ArrowRight className="w-3.5 h-3.5" weight="bold" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
