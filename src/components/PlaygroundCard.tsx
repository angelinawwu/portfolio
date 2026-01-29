'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';
import { useRef } from 'react';

interface PlaygroundCardProps {
  project: Project;
  index: number;
}

export default function PlaygroundCard({ project, index }: PlaygroundCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLink = !!project.demoUrl;
  const href = project.demoUrl || '#';

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const CardContent = (
    <div
      className="project-card group relative overflow-hidden border border-faded-white"
      style={{ '--card-index': index } as React.CSSProperties}
      data-cursor={hasLink ? 'playground-link' : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          />
        ) : (
          <div className="w-full aspect-video bg-faded-white" />
        )}
        
        {/* Black overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        {/* Progressive blur overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 bg-surface">
        {/* Title */}
        <h3 className="bit-apple-font text-white mb-1 text-lg md:text-xl">
          {project.title}
        </h3>

        {/* Context */}
        {project.context && (
          <p className="text-xs geist-mono-font uppercase text-white-muted">
            {project.context}
          </p>
        )}
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
