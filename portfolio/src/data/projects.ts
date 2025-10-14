export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  type: 'case-study' | 'side-project';
  // For side projects:
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: 'workup',
    title: 'Workup',
    description: 'UX Research || Web Design - Restructuring an AI-powered interview tool to empower students to prepare with confidence',
    thumbnail: '/projects/workup-thumbnail.jpg',
    tags: ['UX Research', 'Web Design', 'AI', 'User Testing', 'Figma', 'Prototyping'],
    type: 'case-study'
  },
  {
    slug: 'manifesto-market',
    title: 'Manifesto Market',
    description: 'Web Design || Conversion Rate Optimization - A mobile-first redesign to streamline booking and drive reservations',
    thumbnail: '/projects/manifesto-thumbnail.jpg',
    tags: ['Web Design', 'CRO', 'Mobile-First', 'Booking System', 'Conversion Optimization', 'UI/UX'],
    type: 'case-study'
  },
  {
    slug: 'bookish',
    title: 'Bookish',
    description: 'Web Design || E-commerce - A comprehensive redesign of a book discovery and shopping platform',
    thumbnail: '/projects/bookish-thumbnail.jpg',
    tags: ['Web Design', 'E-commerce', 'User Research', 'Figma', 'Prototyping'],
    type: 'case-study'
  },
  {
    slug: 'diamond-refraction',
    title: 'Diamond Refraction',
    description: 'A 3D WebGL experience showcasing realistic diamond light refraction using Three.js and custom shaders',
    thumbnail: '/projects/diamond-thumbnail.jpg',
    tags: ['Three.js', 'WebGL', '3D Graphics', 'Shaders', 'React', 'TypeScript'],
    type: 'side-project',
    demoUrl: 'https://diamond-refraction.vercel.app',
    githubUrl: 'https://github.com/angelinawwu/diamond-refraction'
  }
];
