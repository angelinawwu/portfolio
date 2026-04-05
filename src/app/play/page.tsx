'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';
import Masonry from 'masonry-layout';
import PlaygroundCard from '@/components/PlaygroundCard';
import { playgroundProjects, Project } from '@/data/projects';

export default function PlayPage() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const masonryRef = useRef<Masonry | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted || !gridRef.current) return;

    const masonry = new Masonry(gridRef.current, {
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-sizer',
      percentPosition: true,
      gutter: 16,
      horizontalOrder: true,
      transitionDuration: '0.2s',
      stagger: 30,
    }) as Masonry & { destroy: () => void; layout: () => void; reloadItems: () => void };

    masonryRef.current = masonry;

    // Use ResizeObserver for immediate responsive adjustments
    const resizeObserver = new ResizeObserver(() => {
      masonry.layout();
    });
    resizeObserver.observe(gridRef.current);

    return () => {
      resizeObserver.disconnect();
      masonry.destroy();
    };
  }, [mounted]);

  useEffect(() => {
    if (masonryRef.current) {
      const masonry = masonryRef.current as Masonry & { reloadItems: () => void; layout: () => void };
      masonry.reloadItems();
      masonry.layout();
    }
  }, [playgroundProjects]);

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
        <div ref={gridRef}>
          <div className="masonry-sizer w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"></div>
          {playgroundProjects.map((project, index) => (
            <div key={project.title} className="masonry-item w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] mb-4">
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
