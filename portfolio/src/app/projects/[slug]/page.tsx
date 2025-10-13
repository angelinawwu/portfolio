import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { projects, Project } from '@/data/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Angelina Wu`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20">
        {project.type === 'case-study' ? (
          <CaseStudyLayout 
            project={project} 
            prevProject={prevProject} 
            nextProject={nextProject} 
          />
        ) : (
          <SideProjectLayout 
            project={project} 
            prevProject={prevProject} 
            nextProject={nextProject} 
          />
        )}
      </main>
    </div>
  );
}

function CaseStudyLayout({ 
  project, 
  prevProject, 
  nextProject 
}: { 
  project: Project; 
  prevProject: Project | null; 
  nextProject: Project | null; 
}) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-20">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <Link 
              href="/" 
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              ← Back to projects
            </Link>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {project.title}
          </h1>
          
          <p className="text-xl text-white/70 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-mono bg-white/10 text-white/80 rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      {project.problem && (
        <section className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">The Problem</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {project.problem}
          </p>
        </section>
      )}

      {/* Process Section */}
      {project.process && (
        <section className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8">Process</h2>
          <div className="space-y-4">
            {project.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white/80 font-mono text-sm">{index + 1}</span>
                </div>
                <p className="text-white/80 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Solution Section */}
      {project.solution && (
        <section className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Solution</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {project.solution}
          </p>
        </section>
      )}

      {/* Results Section */}
      {project.results && (
        <section className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Results</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {project.results}
          </p>
        </section>
      )}

      {/* Images Section */}
      {project.images && project.images.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden bg-white/5">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <nav className="py-16 border-t border-white/10">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
            >
              <span>←</span>
              <span>{prevProject.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
            >
              <span>{nextProject.title}</span>
              <span>→</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </nav>
    </div>
  );
}

function SideProjectLayout({ 
  project, 
  prevProject, 
  nextProject 
}: { 
  project: Project; 
  prevProject: Project | null; 
  nextProject: Project | null; 
}) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-20">
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-4">
            <Link 
              href="/" 
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              ← Back to projects
            </Link>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {project.title}
          </h1>
          
          <p className="text-xl text-white/70 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-mono bg-white/10 text-white/80 rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16">
        <div className="relative w-full h-96 rounded-lg overflow-hidden bg-white/5">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 border-t border-white/10">
        <div className="flex flex-col sm:flex-row gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors duration-200 text-center"
            >
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-center"
            >
              View Source Code
            </a>
          )}
        </div>
      </section>

      {/* Navigation */}
      <nav className="py-16 border-t border-white/10">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
            >
              <span>←</span>
              <span>{prevProject.title}</span>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
            >
              <span>{nextProject.title}</span>
              <span>→</span>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </nav>
    </div>
  );
}
