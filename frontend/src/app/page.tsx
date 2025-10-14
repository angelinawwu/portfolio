import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { caseStudies, playgroundProjects } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-left space-y-6">
            <h1 className="text-xl md:text-2xl font-medium text-white">
              Hi, I'm{' '}
              <span className="rainbow-text">Angelina Wu</span>
              .
            </h1>
            <p className="text-lg md:text-lg text-white/70 max-w-xl mx-0">
              Currently at UCLA studying Design and Statistics/Data Science. 
              Designing to delight.
            </p>
            
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Case Studies
            </h2>
            <p className="text-white/70 max-w-2xl">
              Experimental projects and side explorations where I play with new technologies and creative ideas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Playground Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="text-left mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Playground
            </h2>
            <p className="text-white/70 max-w-2xl">
              Experimental projects and side explorations where I play with new technologies and creative ideas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {playgroundProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20 text-center">
          <div className="border-t border-white/10 pt-20">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Like what you see?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Let's make something cool together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:angelinawu05@gmail.com"
                className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors duration-200"
              >
                Get in touch
              </a>
              <a
                href="/about"
                className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                Learn more about me
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/50 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(/\//g, '.')}
          </p>
          <p className="text-white/30 text-xs mt-2">
            Created with ❤️ by Angelina Wu (me!)
          </p>
        </div>
      </footer>
    </div>
  );
}
