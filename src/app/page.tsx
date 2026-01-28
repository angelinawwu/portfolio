import ProjectCard from '@/components/ProjectCard';
import { workProjects } from '@/data/projects';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      {/* True Masonry Grid using CSS columns */}
      <div className="columns-1 md:columns-2 gap-4 md:gap-6">
        {workProjects.map((project, index) => (
          <div key={project.slug || project.title} className="mb-4 md:mb-6 break-inside-avoid">
            <ProjectCard
              project={project}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
