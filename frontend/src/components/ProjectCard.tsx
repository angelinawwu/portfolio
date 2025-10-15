'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { useRef } from 'react';
import GlareHover from './GlareHover';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
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
  // For playground projects, render as external links
  if (project.type === 'playground') {
    return (
      <div className="group relative bg-black border border-white/10 rounded-lg hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 card-glow project-card-with-glare">
        {/* Rainbow border on hover */}
        
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
          <div className="rainbow-border rounded-lg p-[1px] h-full w-full">
            <div className="bg-black opacity-80 rounded-lg h-full w-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Thumbnail */}
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-white/5">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Iridescent overlay on hover */}
            <div className="absolute inset-0 iridescent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Project Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-white group-hover:rainbow-text transition-all duration-300">
                {project.title}
              </h3>
              <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20">
                Playground
              </span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-white/5 text-white/60 rounded border border-white/10 hover:border-white/30 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-2 py-1 text-xs font-mono text-white/40">
                  +{project.tags.length - 4} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-medium bg-white text-black rounded hover:bg-white/90 transition-colors duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-xs font-medium border border-white/30 text-white rounded hover:border-white/50 hover:bg-white/5 transition-all duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  Code
                </a>
              )}
            </div>
            
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
      </div>
      
    );
  }

  // For case studies, render as internal links
  return (
    <Link href={`/projects/${project.slug}`}>
      <div 
        className="group relative border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 project-card-with-glare"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Rainbow border on hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 card-glow">
          <div className="rainbow-border rounded-lg p-[1px] h-full w-full">
            <div className="bg-black opacity-80 rounded-lg h-full w-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Thumbnail or Video */}
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-white/5">
            {project.videoUrl ? (
              <video
                ref={videoRef}
                src={project.videoUrl}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {/* Iridescent overlay on hover */}
            <div className="absolute inset-0 iridescent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Project Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-white group-hover:rainbow-text transition-all duration-300">
                {project.title}
              </h3>
              <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20">
                Case Study
              </span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-white/5 text-white/60 rounded border border-white/10 hover:border-white/30 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-2 py-1 text-xs font-mono text-white/40">
                  +{project.tags.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
}
