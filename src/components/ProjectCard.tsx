'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { useRef } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Determine if this is an internal case study or external link
  const isInternalLink = project.slug && project.type === 'case-study';
  const href = isInternalLink ? `/projects/${project.slug}` : project.demoUrl || '#';

  const CardContent = (
    <div
      className="project-card group relative overflow-hidden border border-faded-white"
      style={{ '--card-index': index } as React.CSSProperties}
      data-cursor="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image/Video Container - natural height */}
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
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {/* Content */}
      <div className="p-4 bg-black">
        {/* Type and Timeline */}
        {(project.projectType || project.timeline) && (
          <div className="flex items-center gap-2 mb-2 text-xs geist-mono-font text-white-muted">
            {project.projectType && <span>{project.projectType}</span>}
            {project.projectType && project.timeline && <span>✱</span>}
            {project.timeline && <span>{project.timeline}</span>}
          </div>
        )}

        {/* Title */}
        <h3 className="bit-apple-font text-white mb-2 text-2xl md:text-3xl">
          {project.title}
        </h3>

        {/* Description */}
        {project.description && (
          <p className="text-sm text-white-muted leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );

  if (isInternalLink) {
    return (
      <Link href={href} className="block">
        {CardContent}
      </Link>
    );
  }

  if (project.demoUrl) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
