'use client';

import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react';
import { caseStudies } from '@/data/projects';

interface CaseStudyHeroProps {
  slug: string;
  details: {
    role: string | string[];
    timeline: string | string[];
    team: string | string[];
    tools: string | string[];
  };
  cardIndex: number;
}

export default function CaseStudyHero({
  slug,
  details,
  cardIndex,
}: CaseStudyHeroProps) {
  const project = caseStudies.find(p => p.slug === slug);
  
  if (!project) {
    throw new Error(`Project with slug "${slug}" not found`);
  }

  const renderDetailContent = (content: string | string[], isTeam = false) => {
    if (Array.isArray(content)) {
      return content.map((line, index) => (
        <p key={index} className="text-white">
          {isTeam ? renderTeamMember(line) : line}
        </p>
      ));
    }
    return <p className="text-white">{isTeam ? renderTeamMember(content) : content}</p>;
  };

  const renderTeamMember = (name: string) => {
    const teamMemberLinks: { [key: string]: string } = {
      'Kathy Guo': 'https://www.linkedin.com/in/kathy-guo-/',
      'Tina Chen': 'https://www.linkedin.com/in/tinachen663/'
    };

    const link = teamMemberLinks[name];
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link !text-white hover:!text-accent"
        >
          {name}
          <ArrowUpRight size={16} className="inline ml-1" />
        </a>
      );
    }
    return name;
  };

  return (
    <section
      className="project-card mb-12"
      style={{ '--card-index': cardIndex } as React.CSSProperties}
    >
      <h1 className="text-4xl md:text-6xl bit-apple-font text-white mb-6">{project.title}</h1>

      <p className="text-lg text-white-muted leading-relaxed mb-4">
        {project.description}
      </p>

      {project.devpostUrl && (
        <p className="text-sm geist-mono-font uppercase text-white-muted mb-8">
          <a
            href={project.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
          >
            View on Devpost
            <ArrowUpRight size={16} className="inline ml-1" />
          </a>
        </p>
      )}

      {project.thumbnail && (
        <div className="overflow-hidden mb-8">
          <Image
            src={project.thumbnail}
            alt={`${project.title} — cover image`}
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="border border-faded-white p-4 bg-surface">
          <h3 className="text-xs geist-mono-font text-white-muted mb-2">MY ROLE</h3>
          {renderDetailContent(details.role)}
        </div>
        <div className="border border-faded-white p-4 bg-surface">
          <h3 className="text-xs geist-mono-font text-white-muted mb-2">TIMELINE</h3>
          {renderDetailContent(details.timeline)}
        </div>
        <div className="border border-faded-white p-4 bg-surface">
          <h3 className="text-xs geist-mono-font text-white-muted mb-2">TEAM</h3>
          {renderDetailContent(details.team, true)}
        </div>
        <div className="border border-faded-white p-4 bg-surface">
          <h3 className="text-xs geist-mono-font text-white-muted mb-2">TOOLS</h3>
          {renderDetailContent(details.tools)}
        </div>
      </div>
    </section>
  );
}
