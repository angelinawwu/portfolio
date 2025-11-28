'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState, MouseEvent as ReactMouseEvent } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

interface PlaygroundCardProps {
  project: Project;
}

export default function PlaygroundCard({ project }: PlaygroundCardProps) {
  const hasLink = !!project.demoUrl;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [supportsHover, setSupportsHover] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);

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
    if (supportsHover) {
      setIsMobileActive(false);
    }
  }, [supportsHover]);

  const handleMouseEnter = () => {
    if (videoRef.current && supportsHover) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && supportsHover) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleCardClick = () => {
    if (!supportsHover) {
      setIsMobileActive((prev) => !prev);
    }
  };

  const handleMobileLinkTap = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const overlayVisibility = supportsHover
    ? 'opacity-0 group-hover:opacity-100'
    : isMobileActive
      ? 'opacity-100'
      : 'opacity-0';

  const captionVisibility = supportsHover
    ? 'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'
    : isMobileActive
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-full';
  
  const cardContent = (
    <motion.div 
      className={`group relative w-full rounded-lg border border-[#0000ff]/50 overflow-hidden ${hasLink ? 'cursor-none' : ''}`}
      data-cursor={hasLink ? 'playground-link' : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      {/* Image/Video Container */}
      <div className="relative w-full overflow-hidden bg-[#f6fafd]/5">
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
        <div className={`absolute inset-0 iridescent-glow ${overlayVisibility} transition-opacity duration-200 pointer-events-none`}></div>
      </div>

      {/* Mobile action icon */}
      {hasLink && !supportsHover && isMobileActive && (
        <button
          type="button"
          onClick={handleMobileLinkTap}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white text-[#0000ff] flex items-center justify-center border border-[#0000ff]/50 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0000ff]/60"
          aria-label="Open project website"
        >
          <ArrowUpRight className="w-4 h-4" weight="bold" />
        </button>
      )}

      {/* Title Caption - Slides in from bottom on hover */}
      <div className={`absolute bottom-0 left-0 right-0 bg-[#f6fafd] flex items-center justify-between px-4 py-3 ${captionVisibility} transition-all duration-200 ease-out z-10 border-t border-[#0000ff]/50`}>
        <h3 className="text-[#0000ff] text-sm font-medium">
          {project.title}
        </h3>
        {project.context && (
          <span className="px-2 py-1 text-xs font-mono bg-[#0000ff]/5 text-[#0000ff] rounded border border-[#0000ff]/20 whitespace-nowrap flex-shrink-0">
            {project.context}
          </span>
        )}
      </div>
    </motion.div>
  );

  // Desktop link behavior
  if (hasLink && supportsHover) {
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

