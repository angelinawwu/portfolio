'use client';

import { Project } from '@/data/projects';
import { useVideoPlayback } from '@/hooks/useVideoPlayback';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { getThumbhash } from '@/lib/thumbhash';
import LoadedImage from './LoadedImage';
import LoadedVideo from './LoadedVideo';

interface PlaygroundCardProps {
  project: Project;
  index: number;
  onExpand?: (project: Project) => void;
}

export default function PlaygroundCard({ project, index, onExpand }: PlaygroundCardProps) {
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const videoRef = useVideoPlayback(isIntersecting);
  const thumb = getThumbhash(project.videoUrl ?? project.thumbnail);
  const hasDevpost = !!project.devpostUrl;
  const hasLink = !!project.demoUrl;
  const hasMedia = !!(project.thumbnail || project.videoUrl);
  const href = project.devpostUrl || project.demoUrl || '#';

  const cursorType = hasDevpost
    ? 'devpost'
    : hasLink
      ? 'playground-link'
      : undefined;

  const CardContent = (
    <div
      ref={targetRef}
      className="project-card group relative overflow-hidden border border-faded-white"
      style={{ '--card-index': index } as React.CSSProperties}
      data-cursor={cursorType}
    >
      {/* Image/Video Container */}
      <div
        className="relative w-full overflow-hidden bg-black"
        style={thumb ? { aspectRatio: thumb.aspectRatio } : undefined}
      >
        {project.videoUrl ? (
          <LoadedVideo
            ref={videoRef}
            src={project.videoUrl}
            className="relative object-cover w-full h-full"
            wrapperClassName="group-hover:scale-103 transition-transform duration-200 ease-out"
            wrapperStyle={thumb ? { width: '100%', aspectRatio: thumb.aspectRatio } : { width: '100%' }}
            muted
            loop
            playsInline
            preload="none"
            autoPlay
          />
        ) : project.thumbnail ? (
          <LoadedImage
            src={project.thumbnail}
            alt={project.title}
            width={800}
            height={600}
            className="relative object-cover w-full h-full"
            wrapperClassName="group-hover:scale-103 transition-transform duration-200 ease-out"
            wrapperStyle={thumb ? { width: '100%', aspectRatio: thumb.aspectRatio } : { width: '100%' }}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
          />
        ) : (
          <div className="w-full aspect-video bg-faded-white" />
        )}
        
        {/* Dimming overlay on hover */}
        <div className="absolute inset-0 bg-[var(--black)] opacity-0 group-hover:opacity-30 transition-opacity duration-200 pointer-events-none z-10" />
        
        {/* Black overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10" />
        
        {/* Progressive blur overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10"
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
