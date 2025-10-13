'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative bg-black border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5">
        {/* Rainbow border on hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="rainbow-border rounded-lg p-[1px] h-full w-full">
            <div className="bg-black rounded-lg h-full w-full"></div>
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
              <h3 className="text-xl font-bold text-white group-hover:rainbow-text transition-all duration-300">
                {project.title}
              </h3>
              {project.type === 'case-study' && (
                <span className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20">
                  Case Study
                </span>
              )}
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
