import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { caseStudies, playgroundProjects } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
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
        <section className="max-w-[1290px] mx-auto md:px-6 px-4 pb-16">
          <div className="text-left mb-8">
            <h2 className="permanent-rainbow-text text-2xl md:text-3xl font-medium text-white mb-4">
              Case Studies
            </h2>
            <p className="text-white/70 max-w-2xl">
              Deep dives into long-term, team-based projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Playground Section */}
        <section className="max-w-[1290px] mx-auto px-6 pb-20">
          <div className="text-left mb-8">
            <h2 className="permanent-rainbow-text text-2xl md:text-3xl font-medium text-white mb-4">
              Playground
            </h2>
            <p className="text-white/70 max-w-2xl">
              Experimental projects and side explorations that I build for fun
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playgroundProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
}
