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
  
  // For playground projects, render with modal
//   if (project.type === 'playground') {
//     return (
//       <>
//         <motion.button
//           ref={buttonRef}
//           onClick={() => setIsModalOpen(true)}
//           className={`group relative bg-[#f6fafd] border border-[#0000ff]/50 rounded-xl hover:border-[#0000ff]/100 transition-all duration-100 hover:shadow-2xl hover:shadow-[#0000ff]/5 card-glow project-card-with-glare w-full text-left cursor-pointer h-full z-99 ${buttonInView ? 'card-glow-active' : ''}`}
//         >
//           {/* Rainbow border on hover */}
//           <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-100">
//             <div className="rounded-lg p-[1px] h-full w-full">
//               <div className="bg-[#f6fafd] opacity-50 rounded-lg h-full w-full"></div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="relative z-10 p-6 flex flex-col h-full">
//             {/* Thumbnail */}
//             <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
//               <Image
//                 src={project.thumbnail}
//                 alt={project.title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-100"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//               {/* Iridescent overlay on hover */}
//               <div className="absolute inset-0 iridescent-glow opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
//             </div>

//           {/* Project Info */}
//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <h3 className="text-xl font-medium text-[#0000ff] transition-all duration-100">
//                 {project.title}
//               </h3>
//               <span className="px-2 py-1 text-xs font-medium bg-[#0000ff]/5 text-[#0000ff] rounded-full border border-[#0000ff]/20">
//                 {project.timeline}
//               </span>
//             </div>

//             <p className="text-[#0000ff]/70 text-sm leading-relaxed">
//               {project.description}
//             </p>

//             {/* Tech Stack Tags */}
//             <div className="flex flex-wrap gap-2">
//               {project.tags.slice(0, 3).map((tag) => (
//                 <span
//                   key={tag}
//                   className="px-2 py-1 text-xs font-mono bg-[#0000ff]/5 text-[#0000ff] rounded border border-[#0000ff]/20"
//                 >
//                   {tag}
//                 </span>
//               ))}
//               {project.tags.length > 3 && (
//                 <span className="px-2 py-1 text-xs font-mono text-[#0000ff]/40">
//                   +{project.tags.length - 3} more
//                 </span>
//               )}
//             </div>

//             {/* View Details Hint */}
//             <div className="pt-2">
//               <span className="text-xs text-[#0000ff]/50">Click to view details <ArrowRight className="w-4 h-4 inline-block align-middle" /></span>
//             </div>
            
//           </div>
//         </div>

//           {/* Hover effect overlay */}
//           <div className="absolute inset-0 bg-[#f6fafd]/50 lg:bg-transparent rounded-xl opacity-100 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"></div>
//         </motion.button>
        
//         <ProjectModal 
//           project={project}
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//         />
//       </>
//     );
//   }

//   // For case studies, render as internal links
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div 
        ref={divRef}
        className={"group relative bg-[#f6fafd] border border-[#0000ff]/50 rounded-2xl hover:border-[#0000ff]/100 transition-all duration-100 hover:shadow-2xl hover:shadow-[#0000ff]/5 card-glow project-card-with-glare w-full text-left cursor-none z-99"}
        data-cursor="project-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Rainbow border on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 card-glow">
          <div className="rounded-2xl p-[1px] h-full w-full">
            <div className="bg-[#f6fafd] opacity-50 rounded-2xl h-full w-full"></div>
          </div>
        </div>

        {/* Content - Horizontal Layout */}
        <div className="relative z-10 p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          {/* Thumbnail or Video - Left Side */}
          <div className="relative w-full md:w-80 md:flex-shrink-0 h-64 rounded-lg overflow-hidden bg-[#f6fafd]/5">
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
              <span className="text-sm font-mono uppercase text-[#8888ff] transition-colors duration-200 whitespace-nowrap flex-shrink-0">
                {project.timeline}
              </span>
            )}
            {project.title && (
              <div className="flex items-center justify-between">
                <h3 className="text-4xl md:text-6xl pt-2 font-medium bit-apple-font text-[#0000ff]">
                  {project.title}
                </h3>
              </div>
            )}

            {project.description && (
              <p className="text-[#0000ff] text-md leading-tight">
                {project.description}
              </p>
            )}
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-[#f6fafd]/50 rounded-xl opacity-100 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none"></div>
      </motion.div>
    </Link>
  );
}
