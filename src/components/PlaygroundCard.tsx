'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState, MouseEvent } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

interface PlaygroundCardProps {
  project: Project;
}

export default function PlaygroundCard({ project }: PlaygroundCardProps) {
  const hasLink = !!project.demoUrl;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [supportsHover, setSupportsHover] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

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

  const handleMouseEnter = () => {
    if (videoRef.current && supportsHover) {
      videoRef.current.play();
    }
    if (supportsHover) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && supportsHover) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (supportsHover) {
      setIsHovering(false);
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!supportsHover) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };
  
  const cardContent = (
    <motion.div 
      className={`group relative w-full rounded-lg border border-[#0000ff]/50 overflow-hidden ${hasLink ? 'cursor-pointer' : ''} ${supportsHover && hasLink && isHovering ? 'cursor-none' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Image/Video Container */}
      <div className="relative w-full rounded-lg overflow-hidden bg-[#f6fafd]/5">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-200 ease-out"
            muted
            loop
            playsInline
            autoPlay={!supportsHover}
            preload="metadata"
          />
        ) : project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={800}
            height={600}
            className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-200 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        ) : null}
        {/* Iridescent overlay on hover */}
        <div className="absolute inset-0 iridescent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
      </div>

      {/* Desktop custom cursor icon */}
      {hasLink && supportsHover && (
        <div
          className={`pointer-events-none absolute z-20 transition-opacity duration-150 ease-out ${isHovering ? 'opacity-100' : 'opacity-0'}`}
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-8 h-8 rounded-full bg-[#0000ff] flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-4 h-4 text-white" weight="bold" />
          </div>
        </div>
      )}

      {/* Mobile static icon */}
      {hasLink && !supportsHover && (
        <div className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white text-[#0000ff] flex items-center justify-center border border-[#0000ff]/50">
          <ArrowUpRight className="w-4 h-4" weight="bold" />
        </div>
      )}

      {/* Title Caption - Slides in from bottom on hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#f6fafd] px-4 py-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-10">
        <h3 className="text-[#0000ff] text-sm">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );

  // If demoUrl exists, wrap in a link
  if (hasLink) {
    return (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  // Otherwise, just return the card without a link
  return cardContent;
}

