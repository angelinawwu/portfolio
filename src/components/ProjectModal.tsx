'use client';

import { Project } from '@/data/projects';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-10000 flex items-center justify-center p-4 bg-lavender/30 backdrop-blur-sm" onClick={onClose}>
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-surface border border-blue/50 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-blue border border-blue/20 rounded-lg hover:bg-lavender hover:scale-102 ease-in-out transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-surface" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[85vh] p-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-medium text-blue mb-6 pr-12">
            {project.title}
          </h2>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-blue/5 text-blue rounded border border-blue/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Timeline */}
          {project.timeline && (
            <div className="mb-6">
              <p className="text-lavender text-sm font-medium mb-1 geist-mono-font">Timeline</p>
              <p className="text-blue">{project.timeline}</p>
            </div>
          )}

          {/* Paragraph */}
          <div className="mb-8">
            <p className="text-blue leading-relaxed">
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
                className="px-6 py-3 bg-blue text-surface geist-mono-font font-medium rounded-lg gentle-hover hover:bg-blue/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-magenta"
              >
                View Website <ArrowUpRight className="w-4 h-4 inline-block align-middle" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-blue text-blue geist-mono-font font-medium rounded-lg blue-hover-magenta-text hover:border-magenta/50 hover:bg-magenta/5 transition-all duration-200"
              >
                View Code <ArrowUpRight className="w-4 h-4 inline-block align-middle" />
              </a>
            )}
          </div>

          {/* Cover Image */}
          {project.thumbnail && (
            <div className="w-full bg-blue/5 border border-blue/10 rounded-lg overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={`${project.title} cover`}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

