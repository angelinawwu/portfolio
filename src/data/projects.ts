export type Project = {
  slug: string;
  title: string;
  paragraph?: string;
  description: string;
  thumbnail: string;
  tags: string[];
  type: 'case-study' | 'playground';
  // For playground projects:
  demoUrl?: string;
  githubUrl?: string;
  timeline?: string;
  // For case studies with video:
  videoUrl?: string;
};

export const caseStudies: Project[] = [
  {
    slug: 'manifesto-market',
    title: 'Manifesto Market',
    description: 'A mobile-first redesign to streamline booking and drive reservations by 121%',
    thumbnail: '/assets/projects/Manifesto-Cover.jpg',
    timeline: 'Summer 2025',
    // videoUrl: '/assets/projects/manifesto-demo.mp4',
    tags: ['Product Design', 'CTA', 'Google Analytics'],
    type: 'case-study'
  },
  {
    slug: 'workup',
    title: 'Workup',
    description: 'Restructuring an AI-powered interview tool to empower students to prepare with confidence',
    thumbnail: '/assets/projects/Workup-Cover.png',
    timeline: 'Winter - Summer 2025',
    tags: ['UX Research', 'User Testing', 'Design System'],
    type: 'case-study'
  },
  {
    slug: 'bookish',
    title: 'Bookish',
    description: 'Redesigning the reading experience with accessibility and sustainability in mind',
    thumbnail: '/assets/projects/Bookish-Cover.png',
    timeline: 'Spring 2024',
    tags: ['Mobile Design', 'UX Research', 'Figma'],
    type: 'case-study'
  }
];

export const playgroundProjects: Project[] = [
  {
    slug: 'typewriter',
    title: 'Typewriter',
    description: 'nostalgia for what i never knew',
    paragraph: 'Typewriter captures the nostalgic feel of mechanical typewriters. No backspace, no copy-paste, no takebacks. Type anything and publish it to the gallery.',
    thumbnail: '/assets/projects/Typewriter-Cover.png',
    tags: ['Typescript', 'CSS Animations', 'React/Vite'],
    type: 'playground',
    timeline: 'October 2025',
    demoUrl: 'https://typewriter-blush.vercel.app/',
    githubUrl: 'https://github.com/angelinawwu/typewriter'
  },
  {
    slug: 'goodreads-wrapped',
    title: 'Goodreads Wrapped',
    description: 'spotify wrapped for books',
    paragraph: 'Goodreads Wrapped is a web application that allows users to visualize their reading data from Goodreads. It scrapes data from the user\'s Goodreads profile and displays it in a visually appealing way, with fun animations and in a shareable format.',
    thumbnail: '/assets/projects/Goodreads-Cover.png',
    tags: ['shadcn/ui', 'Web Scraping', 'React/Vite'],
    type: 'playground',
    timeline: 'In progress',
    demoUrl: 'https://goodreadswrapped.com',
    githubUrl: 'https://github.com/angelinawwu/goodreads-wrapped'
  }
];

// Combined projects for backward compatibility
export const projects: Project[] = [...caseStudies, ...playgroundProjects];
