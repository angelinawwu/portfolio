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
    <div className="fixed inset-0 z-10000 flex items-center justify-center p-4 bg-[#f6fafd]/30 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#f6fafd] border border-[#0000ff]/20 rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#0000ff] border border-[#0000ff]/20 rounded-lg hover:bg-[#8888ff] hover:scale-102 ease-in-out transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#f6fafd]" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[85vh] p-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-6 pr-12">
            {project.title}
          </h2>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-[#0000ff]/5 text-[#0000ff] rounded border border-[#0000ff]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Timeline */}
          {project.timeline && (
            <div className="mb-6">
              <p className="text-[#8888ff] text-sm font-medium mb-1">Timeline</p>
              <p className="text-[#0000ff]">{project.timeline}</p>
            </div>
          )}

          {/* Paragraph */}
          <div className="mb-8">
            <p className="text-[#0000ff] leading-relaxed">
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
                className="px-6 py-3 bg-[#0000ff] text-[#f6fafd] font-medium rounded-lg gentle-hover hover:bg-[#0000ff]/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-[#ff00ff]"
              >
                View Website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-[#0000ff] text-[#0000ff] font-medium rounded-lg blue-hover-magenta-text hover:border-[#ff00ff]/50 hover:bg-[#ff00ff]/5 transition-all duration-200"
              >
                View Code
              </a>
            )}
          </div>

          {/* Cover Image */}
          <div className="w-full bg-[#0000ff]/5 border border-[#0000ff]/10 rounded-lg overflow-hidden">
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

