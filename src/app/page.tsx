'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import PlaygroundCard from '@/components/PlaygroundCard';
import { caseStudies, playgroundProjects } from '@/data/projects';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';
import AsciiAnimation from '@/components/AsciiAnimation';
import FooterGraphic from '@/components/FooterGraphic';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';
import Masonry from "react-masonry-css";

{/* Masonry Grid Breakpoints */}
const breakpointColumnsObj = {
  default: 3,   // 3 columns by default (md and up)
  1024: 2,      // 2 columns on tablet (between md and lg)
  768: 1        // 1 column on mobile (less than 768px)
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDF1FB]">
      <PixelTrailWrapper />
      <Navigation />
      
      <main className="">
        {/* Hero Section */}
        <section className="pt-20 pb-0 md:pt-24 bg-[#0000ff] w-full mb-12 md:mb-16 md:relative overflow-hidden">
          {/* ASCII Animations - Above text on mobile, background on desktop */}
          <div className="md:absolute md:inset-0 relative h-80 md:h-auto">
            {/* ASCII Animation Background - Left */}
            <AsciiAnimation />
            {/* ASCII Animation Background - Right (Mirrored) */}
            <AsciiAnimation mirror />
          </div>
          
          {/* Text Content */}
          <div className="max-w-7xl mx-auto px-6 -mt-24 md:mt-0 pt-0 pb-12 md:pt-20 md:pb-20 text-left text-[#EDF1FB] relative z-10">            <h1 className="text-6xl md:text-9xl font-medium md:mb-4 mb-2 bit-apple-font text-center">
              Hey, I&apos;m
            </h1>
            <h1 className="text-6xl md:text-9xl font-medium mb-6 md:mb-8 bit-apple-font text-center">
              Angelina Wu.
            </h1>
            <p className="max-w-3xl text-xl mx-auto leading-relaxed md:mb-12 mb-0 text-[#EDF1FB]">
              Welcome to my little corner of the internet! 
              I&apos;m a designer who&apos;s passionate about creating channels for delight 
              and human connection. You can find me building cute websites, reading 
              speculative fiction, or obsessing over the color #0000FF. Check out 
              my work below or {' '}
              <Link href="/about" className="gentle-hover underline transition-colors hover:text-[#ff00ff]">
                learn more about me <ArrowRight className="w-4 h-4 inline-block align-middle" />
              </Link>
            </p>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="max-w-[1290px] mx-auto md:px-6 px-4 mt-12 md:mt-28">
          {/* Header */}
          <div className="text-left md:mb-8 mb-4">
            <h2 className="text-[#0000ff] text-2xl md:text-3xl font-medium mb-2">
              Featured Work
            </h2>
            <p className="text-[#0000ff] text-md max-w-2xl">
              Deep dives into long-term, team-based projects
            </p>
          </div>
          {/* Projects */}
          <div className="flex flex-col gap-4 md:gap-4">
            {caseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Playground Section */}
        <section className="max-w-[1290px] mx-auto md:px-6 px-4 pb-12 mt-12 md:mt-28">
          {/* Header */}
          <div className="text-left md:mb-8 mb-4">
            <h2 className="text-[#0000ff] text-2xl md:text-3xl font-medium mb-2">
              Playground
            </h2>
            <p className="text-[#0000ff] text-md max-w-2xl">
              Things I build for fun (
              <span className="hidden sm:inline">hover</span>
              <span className="inline sm:hidden">tap</span>
              {' '}for more info!)
            </p>
          </div>

          {/* Projects - Masonry Grid */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4" // -ml-4 counters the padding-left in the column
            columnClassName="pl-4 bg-clip-padding" // pl-4 creates the gap between columns
          >
            {playgroundProjects.map((project, index) => (
              <div key={project.slug || index} className="mb-4">
                <PlaygroundCard project={project} />
              </div>
            ))}
          </Masonry>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#0000ff] text-center mt-8 md:mt-20">
          <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-20 pb-10 md:pb-12 text-left text-white relative z-10">
            <h2 className="text-7xl md:text-9xl font-medium mb-6 bit-apple-font">
              Like what you see?
            </h2>
            <p className="text-xl mb-20">
              Let&apos;s make something cool together.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 text-white">
              <a
                href="mailto:angelinawu05@gmail.com"
                className="inline-flex items-center gap-2 self-start px-6 py-3 geist-mono-font bg-[#0000ff] border border-white text-[#f6fafd] font-medium rounded-lg gentle-hover hover:bg-[#0000ff]/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-[#ff00ff]"
              >
                Get in touch <ArrowUpRight className="w-4 h-4 inline-block align-middle" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center self-start gap-2 px-6 py-3 geist-mono-font bg-[#0000ff] border border-white text-[#f6fafd] font-medium rounded-lg gentle-hover hover:bg-[#0000ff]/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-[#ff00ff]"
              >
                Learn more about me <ArrowRight className="w-4 h-4 inline-block align-middle" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="relative">
        <Footer />
        
        {/* Footer Graphic - Below footer on mobile, absolute positioned on desktop */}
        <div className="relative md:absolute md:bottom-0 md:right-0 w-auto h-auto z-10">
          <div className="flex justify-end px-6 md:pr-12 md:pb-0 bg-[#0000ff]">
            <FooterGraphic />
          </div>
        </div>
      </div>
    </div>
  );
}
