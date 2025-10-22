'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { useRef, useState } from 'react';
import ProjectModal from './ProjectModal';
import { motion, useInView } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  
  // Track when card is in the center focus zone of viewport (for mobile scroll effect)
  const buttonInView = useInView(buttonRef, { 
    amount: 0.5, // 50% of card needs to be visible
    margin: "-25% 0px -25% 0px" // Creates center focus zone
  });
  
  const divInView = useInView(divRef, { 
    amount: 0.5,
    margin: "-25% 0px -25% 0px"
  });

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
  
  // For playground projects, render with modal
  if (project.type === 'playground') {
    return (
      <>
        <motion.button
          ref={buttonRef}
          onClick={() => setIsModalOpen(true)}
          className={`group relative bg-black border border-white/10 rounded-xl hover:border-white/30 transition-all duration-100 hover:shadow-2xl hover:shadow-white/5 card-glow project-card-with-glare w-full text-left cursor-pointer h-full z-99 ${buttonInView ? 'card-glow-active' : ''}`}
        >
          {/* Rainbow border on hover */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100">
            <div className="rainbow-border rounded-lg p-[1px] h-full w-full">
              <div className="bg-black opacity-80 rounded-lg h-full w-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 flex flex-col h-full">
            {/* Thumbnail */}
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Iridescent overlay on hover */}
              <div className="absolute inset-0 iridescent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
            </div>

          {/* Project Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-white group-hover:rainbow-text transition-all duration-100">
                {project.title}
              </h3>
              <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20">
                {project.timeline}
              </span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-white/5 text-white/60 rounded border border-white/10"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 text-xs font-mono text-white/40">
                  +{project.tags.length - 3} more
                </span>
              )}
            </div>

            {/* View Details Hint */}
            <div className="pt-2">
              <span className="text-xs text-white/50">Click to view details →</span>
            </div>
            
          </div>
        </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"></div>
        </motion.button>
        
        <ProjectModal 
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </>
    );
  }

  // For case studies, render as internal links
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div 
        ref={divRef}
        className={`group relative bg-black border border-white/10 rounded-xl hover:border-white/30 transition-all duration-100 hover:shadow-2xl hover:shadow-white/5 card-glow project-card-with-glare w-full text-left cursor-pointer h-full z-99 ${divInView ? 'card-glow-active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Rainbow border on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 card-glow">
          <div className="rainbow-border rounded-xl p-[1px] h-full w-full">
            <div className="bg-black opacity-80 rounded-xl h-full w-full"></div>
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
                className="object-cover group-hover:scale-105 transition-transform duration-100"
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
            {/* Iridescent overlay on hover */}
            <div className="absolute inset-0 iridescent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
          </div>

          {/* Project Info */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-white group-hover:rainbow-text transition-all duration-100">
                {project.title}
              </h3>
              <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20">
                {project.timeline}
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
        <div className="absolute inset-0 sm:bg-black/50 rounded-xl opacity-100 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"></div>
      </motion.div>
    </Link>
  );
}
