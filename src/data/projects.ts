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
    description: 'A typing experience that captures the nostalgic feel of mechanical typewriters',
    paragraph: 'Typewriter is a typing experience that captures the nostalgic feel of mechanical typewriters. It is a web application that allows users to type text on a virtual typewriter, whether by typing on their physical keyboard or by using the virtual keyboard.',
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
    description: 'Shareable and engaging reading analytics inspired by Spotify Wrapped',
    paragraph: 'Goodreads Wrapped is a web application that allows users to visualize their reading data from Goodreads. It scrapes data from the user\'s Goodreads profile and displays it in a visually appealing way, with fun animations and in a shareable format.',
    thumbnail: '/assets/projects/Goodreads-Cover.png',
    tags: ['Data Visualization', 'Web Scraping', 'React/Vite'],
    type: 'playground',
    timeline: 'August 2025 - in progress',
    demoUrl: 'https://goodreadswrapped.com',
    githubUrl: 'https://github.com/angelinawwu/goodreads-wrapped'
  },
  {
    slug: 'dream-journal',
    title: 'Dream Journal',
    description: 'A minimal journal that allows you to quickly record dreams and reflect on past dreams',
    paragraph: 'Dream Journal is a minimal journal that allows you to quickly record dreams and reflect on past dreams. With a focus on simplicity and ease of use, it allows you to record your dreams easily the instant you wake up, so you don\'t forget them.',
    thumbnail: '/assets/projects/DreamJournal-Cover.png',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    type: 'playground',
    timeline: 'October 2025',
    demoUrl: 'https://dream-journal-one.vercel.app/',
    githubUrl: 'https://github.com/angelinawwu/dream-journal'
  }
];

// Combined projects for backward compatibility
export const projects: Project[] = [...caseStudies, ...playgroundProjects];
