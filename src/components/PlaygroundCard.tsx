'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';
import { useRef, useEffect, useState, MouseEvent as ReactMouseEvent } from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

interface PlaygroundCardProps {
  project: Project;
  index: number;
}

export default function PlaygroundCard({ project, index }: PlaygroundCardProps) {
  const hasLink = !!project.demoUrl;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [supportsHover, setSupportsHover] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);

  useEffect(() => {
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
    <div
      className={`project-card group relative w-full overflow-hidden border border-faded-white ${hasLink ? 'cursor-pointer' : ''}`}
      style={{ '--card-index': index } as React.CSSProperties}
      data-cursor={hasLink ? 'playground-link' : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      {/* Image/Video Container */}
      <div className="relative w-full overflow-hidden bg-faded-white">
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
        ) : (
          <div className="w-full aspect-video bg-faded-white" />
        )}

        {/* Iridescent overlay on hover */}
        <div className={`absolute inset-0 iridescent-glow ${overlayVisibility} transition-opacity duration-200 pointer-events-none`} />
      </div>

      {/* Mobile action icon */}
      {hasLink && !supportsHover && isMobileActive && (
        <button
          type="button"
          onClick={handleMobileLinkTap}
          className="absolute top-3 right-3 z-20 w-9 h-9 bg-accent text-black flex items-center justify-center shadow-md"
          aria-label="Open project website"
        >
          <ArrowUpRight className="w-4 h-4" weight="bold" />
        </button>
      )}

      {/* Title Caption - Slides in from bottom on hover */}
      <div className={`absolute bottom-0 left-0 right-0 bg-surface flex items-center justify-between px-4 py-3 ${captionVisibility} transition-all duration-200 ease-out z-10 border-t border-faded-white`}>
        <h3 className="text-white text-sm font-medium">
          {project.title}
        </h3>
        {project.context && (
          <span className="px-2 py-1 text-xs geist-mono-font text-white-muted uppercase whitespace-nowrap flex-shrink-0">
            {project.context}
          </span>
        )}
      </div>
    </div>
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

  return cardContent;
}
