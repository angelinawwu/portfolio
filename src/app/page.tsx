import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { caseStudies, playgroundProjects } from '@/data/projects';
import PixelTrailWrapper from '@/components/PixelTrailWrapper';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDF1FB]">
      <PixelTrailWrapper />
      <Navigation />
      
      <main className="pt-32">
        {/* Hero Section */}
        {/* <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-left">
            <h1 className="text-xl md:text-2xl font-medium text-white mb-6">
              Hi, I'm{' '}
              <span className="rainbow-text">Angelina Wu</span>
              .
            </h1>
            <p className="text-lg md:text-lg text-white/70 max-w-xl mx-0">
              Designing to delight
            </p>
            <p className="text-lg md:text-lg text-white/70 max-w-2xl mx-0">
              Design + Statistics/Data Science @ UCLA
            </p>
            
          </div>
        </section> */}

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
        <section className="max-w-[1290px] mx-auto px-6 pb-20 text-center ">
          <div className="border-t border-white/10 pt-20">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0000ff] mb-6">
              Like what you see?
            </h2>
            <p className="text-xl text-[#0000ff] mb-8">
              Let&apos;s make something cool together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:angelinawu05@gmail.com"
                className="px-8 py-3 bg-[#0000ff] text-[#f6fafd] font-medium rounded-lg gentle-hover hover:bg-[#0000ff]/90 z-999999 ease-in-out transition-all duration-200 ease-in-out hover:bg-[#ff00ff]"
              >
                Get in touch
              </a>
              <Link
                href="/about"
                className="px-8 py-3 border border-[#0000ff] text-[#0000ff] font-medium rounded-lg blue-hover-magenta-text hover:border-[#ff00ff]/50 hover:bg-[#ff00ff]/5 transition-all duration-200"
              >
                Learn more about me
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
