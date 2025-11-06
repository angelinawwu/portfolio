import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { caseStudies, playgroundProjects } from '@/data/projects';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDF1FB]">
      <PixelTrailWrapper />
      <Navigation />
      
      <main className="">
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 w-full bg-[#0000ff] mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 text-left text-white relative z-10">
          <h1 className="text-6xl md:text-9xl font-medium mb-6 bit-apple-font">
            Hi, I&apos;m Angelina Wu.
          </h1>
          <p className="text-xl leading-relaxed md:mb-12 mb-2">
            I&apos;m a designer who is passionate about creating channels for delight 
            and human connection. You can find me coding cute websites, reading 
            speculative fiction, or obsessing over the color #0000FF. Check out 
            my work below or {' '}
            <Link href="/about" className="gentle-hover underline transition-colors hover:text-[#ff00ff]">
              learn more about me <ArrowRight className="w-4 h-4 inline-block align-middle" />
            </Link>
          </p>
        </div>
        </section>

        {/* Case Studies Section */}
        <section className="max-w-[1290px] mx-auto md:px-6 px-4 pb-20">
          {/* Header */}
          <div className="text-left md:mb-8 mb-4">
            <h2 className="text-[#0000ff] text-2xl md:text-3xl font-medium mb-4">
              Case Studies
            </h2>
            <p className="text-[#0000ff]/70 max-w-2xl">
              Deep dives into long-term, team-based projects
            </p>
          </div>
          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
            {caseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Playground Section */}
        <section className="max-w-[1290px] mx-auto md:px-6 px-4 pb-12">
          {/* Header */}
          <div className="text-left md:mb-8 mb-4">
            <h2 className="text-[#0000ff] text-2xl md:text-3xl font-medium mb-4">
              Playground
            </h2>
            <p className="text-[#0000ff]/70 max-w-2xl">
              Experimental projects and side explorations that I build for fun
            </p>
          </div>
          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
            {playgroundProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
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
                className="inline-flex self-start px-6 py-3 geist-mono-font bg-[#0000ff] border border-white text-[#f6fafd] font-medium rounded-lg gentle-hover hover:bg-[#0000ff]/90 ease-in-out transition-all duration-200 ease-in-out hover:bg-[#ff00ff]"
              >
                Get in touch
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

      <Footer />
    </div>
  );
}
