import ProjectCard from '@/components/ProjectCard';
import BioText from '@/components/BioText';
import { workProjects } from '@/data/projects';

export default function WorkPage() {
  const orderedProjects = [
    workProjects.find(p => p.slug === 'reverie'),
    workProjects.find(p => p.slug === 'goodreads-wrapped'),
    workProjects.find(p => p.slug === 'familyfridge'),
    workProjects.find(p => p.slug === 'manifesto-market'),
    workProjects.find(p => p.slug === 'workup'),
  ].filter(Boolean) as typeof workProjects;

  const leftColumn = [orderedProjects[0], orderedProjects[2], orderedProjects[4]].filter(Boolean);
  const rightColumn = [orderedProjects[1], orderedProjects[3]].filter(Boolean);

  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      {/* Bio: shown above cards on mobile/tablet, hidden on desktop where sidebar shows it */}
      <div className="lg:hidden ">
        <BioText className="mb-4 md:mb-6" />
      </div>

      {/* Mobile: single column in correct order */}
      <div className="flex flex-col gap-4 md:hidden">
        {orderedProjects.map((project, index) => (
          <ProjectCard
            key={project.slug || project.title}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Desktop: two-column masonry layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {leftColumn.map((project, idx) => (
            <ProjectCard
              key={project.slug || project.title}
              project={project}
              index={idx * 2} // 0, 2 for stagger animation
            />
          ))}
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-6">
          {rightColumn.map((project, idx) => (
            <ProjectCard
              key={project.slug || project.title}
              project={project}
              index={idx * 2 + 1} // 1, 3 for stagger animation
            />
          ))}
        </div>
      </div>
    </div>
  );
}
