import ProjectCard from '@/components/ProjectCard';
import { workProjects } from '@/data/projects';

export default function WorkPage() {
  // Get projects in desired order: Goodreads Wrapped, Manifesto Market, Workup, Bookish
  const orderedProjects = [
    workProjects.find(p => p.title === 'Goodreads Wrapped'),
    workProjects.find(p => p.slug === 'manifesto-market'),
    workProjects.find(p => p.slug === 'workup'),
    workProjects.find(p => p.slug === 'bookish'),
  ].filter(Boolean) as typeof workProjects;

  // Desktop masonry columns
  // Column 1 (left): Goodreads Wrapped, Workup
  // Column 2 (right): Manifesto Market, Bookish
  const leftColumn = [orderedProjects[0], orderedProjects[2]].filter(Boolean);
  const rightColumn = [orderedProjects[1], orderedProjects[3]].filter(Boolean);

  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
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
