import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { caseStudies, playgroundProjects } from '@/data/projects';
import LiquidEther from '@/components/LiquidEther';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SpeedInsights />
      <Analytics />
      <div className="fixed top-0 left-0 w-full h-full">
        <LiquidEther
          colors={[ '#A754DE', '#7694FF', '#97FFFF', '#C4E263', '#E29D63', '#F98BC7', '#f2b3ff']}
          mouseForce={20}
          cursorSize={70}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
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
            <h2 className="permanent-rainbow-text text-2xl md:text-3xl font-medium text-white mb-4">
              Case Studies
            </h2>
            <p className="text-white/70 max-w-2xl">
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
        <section className="max-w-[1290px] mx-auto md:px-6 px-4 pb-20">
          {/* Header */}
          <div className="text-left md:mb-8 mb-4">
            <h2 className="permanent-rainbow-text text-2xl md:text-3xl font-medium text-white mb-4">
              Playground
            </h2>
            <p className="text-white/70 max-w-2xl">
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

        
      </main>

      <Footer />
    </div>
  );
}
