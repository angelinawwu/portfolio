'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';
import PlaygroundCard from '@/components/PlaygroundCard';
import { playgroundProjects, Project } from '@/data/projects';

export default function PlayPage() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleClose = useCallback(() => {
    setExpandedProject(null);
  }, []);

  useEffect(() => {
    if (!expandedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedProject, handleClose]);

  return (
    <>
      <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {playgroundProjects.map((project, index) => (
            <div key={project.title} className="mb-4 break-inside-avoid">
              <PlaygroundCard
                project={project}
                index={index}
                onExpand={setExpandedProject}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Portaled to body so fixed positioning is always relative to the viewport */}
      {mounted && createPortal(
        <AnimatePresence>
          {expandedProject && (
            <motion.div
              className="fixed inset-0 z-[9998] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <motion.div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={handleClose}
              />

              <button
                onClick={handleClose}
                className="absolute top-6 right-6 z-10 text-white-muted hover:text-white transition-colors duration-200 ease"
                aria-label="Close overlay"
              >
                <X size={24} weight="bold" />
              </button>

              <motion.div
                className="relative z-10 w-[90vw] h-[85vh] flex items-center justify-center will-change-transform"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
                onClick={handleClose}
              >
                {expandedProject.videoUrl ? (
                  <video
                    src={expandedProject.videoUrl}
                    className="max-w-full max-h-full object-contain rounded-sm pointer-events-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : expandedProject.thumbnail ? (
                  <Image
                    src={expandedProject.thumbnail}
                    alt={expandedProject.title}
                    width={1920}
                    height={1080}
                    className="max-w-full max-h-full object-contain rounded-sm pointer-events-none"
                    sizes="90vw"
                    priority
                  />
                ) : null}

                
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
