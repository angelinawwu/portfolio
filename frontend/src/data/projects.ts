export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  type: 'case-study' | 'playground';
  // For playground projects:
  demoUrl?: string;
  githubUrl?: string;
  // For case studies with video:
  videoUrl?: string;
};

export const caseStudies: Project[] = [
  {
    slug: 'workup',
    title: 'Workup',
    description: 'Restructuring an AI-powered interview tool to empower students to prepare with confidence',
    thumbnail: '/assets/projects/Workup-Cover.png',
    tags: ['UX Research', 'User Testing', 'Design System'],
    type: 'case-study'
  },
  {
    slug: 'manifesto-market',
    title: 'Manifesto Market',
    description: 'A mobile-first redesign to streamline booking and drive reservations',
    thumbnail: '/assets/projects/Manifesto-Cover.jpg',
    // videoUrl: '/assets/projects/manifesto-demo.mp4',
    tags: ['Product Design', 'CTA', 'Google Analytics'],
    type: 'case-study'
  },
  {
    slug: 'bookish',
    title: 'Bookish',
    description: 'Redesigning the reading experience with accessibility and sustainability in mind',
    thumbnail: '/assets/projects/Bookish-Cover.png',
    tags: ['Mobile Design', 'UX Research', 'Figma'],
    type: 'case-study'
  }
];

export const playgroundProjects: Project[] = [
  {
    slug: 'typewriter',
    title: 'Typewriter',
    description: 'A minimalist typing experience that captures the nostalgic feel of mechanical typewriters. Built with vanilla JavaScript and CSS animations, this project explores the intersection of nostalgia and modern web design.',
    thumbnail: '/assets/projects/Typewriter-Cover.png',
    tags: ['JavaScript', 'CSS Animations', 'Vanilla JS', 'Typography', 'Nostalgia'],
    type: 'playground',
    demoUrl: 'https://typewriter-blush.vercel.app/',
    githubUrl: 'https://github.com/angelinawwu/typewriter'
  },
  {
    slug: 'goodreads-wrapped',
    title: 'Goodreads Wrapped',
    description: 'A personal reading analytics dashboard inspired by Spotify Wrapped. Visualizes reading habits, favorite genres, and reading streaks with beautiful data visualizations and interactive charts.',
    thumbnail: '/assets/projects/Goodreads-Cover.png',
    tags: ['Data Visualization', 'D3.js', 'Reading Analytics', 'Personal Dashboard', 'Charts'],
    type: 'playground',
    demoUrl: 'https://goodreadswrapped.com',
    githubUrl: 'https://github.com/angelinawwu/goodreads-wrapped'
  }
];

// Combined projects for backward compatibility
export const projects: Project[] = [...caseStudies, ...playgroundProjects];
