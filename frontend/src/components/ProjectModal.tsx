'use client';

import { Project } from '@/data/projects';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-black border border-white/20 rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 border border-white/20 rounded-lg hover:bg-white/10 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[85vh] p-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 pr-12">
            {project.title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-white/5 text-white/60 rounded border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Timeline */}
          {project.timeline && (
            <div className="mb-6">
              <p className="text-white/60 text-sm font-medium mb-1">Timeline</p>
              <p className="text-white/80">{project.timeline}</p>
            </div>
          )}

          {/* Paragraph */}
          <div className="mb-8">
            <p className="text-white/80 leading-relaxed">
              {project.paragraph}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-3 mb-8">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                View Website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                View Code
              </a>
            )}
          </div>

          {/* Cover Image */}
          <div className="w-full bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={`${project.title} cover`}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

