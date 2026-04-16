'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';
import { useVideoPlayback } from '@/hooks/useVideoPlayback';

interface PlaygroundCardProps {
  project: Project;
  index: number;
  onExpand?: (project: Project) => void;
}

export default function PlaygroundCard({ project, index, onExpand }: PlaygroundCardProps) {
  const videoRef = useVideoPlayback();
  const hasDevpost = !!project.devpostUrl;
  const hasLink = !!project.demoUrl;
  const hasMedia = !!(project.thumbnail || project.videoUrl);
  const href = project.devpostUrl || project.demoUrl || '#';

  const cursorType = hasDevpost
    ? 'devpost'
    : hasLink
      ? 'playground-link'
      // : hasMedia
      //   ? 'playground-expand'
      : undefined;

  const CardContent = (
    <div
      className="project-card group relative overflow-hidden border border-faded-white"
      style={{ '--card-index': index } as React.CSSProperties}
      data-cursor={cursorType}
    >
      {/* Image/Video Container */}
      <div className="relative w-full overflow-hidden bg-faded-white">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            className="object-cover w-full h-auto group-hover:scale-103 transition-all duration-200 ease-out"
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay
          />
        ) : project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={800}
            height={600}
            className="object-cover w-full h-auto group-hover:scale-103 transition-all duration-200 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
          />
        ) : (
          <div className="w-full aspect-video bg-faded-white" />
        )}
        
        {/* Dimming overlay on hover */}
        <div className="absolute inset-0 bg-[var(--black)] opacity-0 group-hover:opacity-30 transition-opacity duration-200 pointer-events-none" />
        
        {/* Black overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        {/* Progressive blur overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
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

  if (hasDevpost || hasLink) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  if (hasMedia && onExpand) {
    return (
      <button
        type="button"
        className="block w-full text-left"
        onClick={() => onExpand(project)}
      >
        {CardContent}
      </button>
    );
  }

  return CardContent;
}
