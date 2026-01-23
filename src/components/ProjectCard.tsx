'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { useRef, useState } from 'react';
import ProjectModal from './ProjectModal';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

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
  
//   // For case studies, render as internal links
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div 
        ref={divRef}
        className={"group relative bg-surface border border-blue/50 hover:border-blue/100 transition-all duration-100 hover:shadow-2xl hover:shadow-blue/5 card-glow project-card-with-glare w-full text-left cursor-none z-99"}
        data-cursor="project-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Rainbow border on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 card-glow">
          <div className="p-[1px] h-full w-full">
            <div className="bg-surface opacity-50 h-full w-full"></div>
          </div>
        </div>

        {/* Content - Horizontal Layout */}
        <div className="relative z-10 p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {/* Thumbnail or Video - Left Side */}
          <div className="relative w-full md:w-80 md:flex-shrink-0 h-64 overflow-hidden bg-surface/5">
            {project.videoUrl ? (
              <video
                ref={videoRef}
                src={project.videoUrl}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-100 ease-out"
                muted
                loop
                playsInline
              />
            ) : project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-100"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            ) : null}
            {/* Iridescent overlay on hover */}
            <div className="absolute inset-0 iridescent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
          </div>

          {/* Project Info - Right Side */}
          <div className="flex-1 space-y-3">
            {project.timeline && (
              <span className="text-sm font-mono uppercase text-lavender transition-colors duration-200 whitespace-nowrap flex-shrink-0">
                {project.timeline}
              </span>
            )}
            {project.title && (
              <div className="flex items-center justify-between">
                <h3 className="text-4xl md:text-6xl pt-2 font-medium bit-apple-font text-blue">
                  {project.title}
                </h3>
              </div>
            )}

            {project.description && (
              <p className="text-blue text-base leading-tight">
                {project.description}
              </p>
            )}
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-surface/50 opacity-100 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"></div>
      </motion.div>
    </Link>
  );
}
