import PlaygroundCard from '@/components/PlaygroundCard';
import { playgroundProjects } from '@/data/projects';

export default function PlayPage() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {playgroundProjects.map((project, index) => (
          <div key={project.title} className="mb-4 break-inside-avoid">
            <PlaygroundCard project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
