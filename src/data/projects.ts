export type Project = {
  slug?: string;
  title: string;
  paragraph?: string;
  description?: string;
  context?: string;
  thumbnail?: string;
  tags?: string[];
  type: 'case-study' | 'playground';
  // For playground projects:
  demoUrl?: string;
  githubUrl?: string;
  timeline?: string;
  // For projects with video (case studies or playground):
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
    title: 'Typewriter',
    description: 'nostalgia for what i never knew',
    paragraph: 'Typewriter captures the nostalgic feel of mechanical typewriters. No backspace, no copy-paste, no takebacks. Type anything and publish it to the gallery.',
    thumbnail: '/assets/playground/Typewriter-Cover.png',
    videoUrl: '/assets/playground/Typewriter-Video.mov',
    tags: ['Typescript', 'CSS Animations', 'React/Vite'],
    type: 'playground',
    timeline: 'October 2025',
    demoUrl: 'https://digitaltypewriter.vercel.app/',
    githubUrl: 'https://github.com/angelinawwu/typewriter'
  },
  {
    title: 'Voyager Golden Record',
    description: 'humanity\'s message to the universe',
    paragraph: 'A love letter to the Voyager Golden Record, and what it means to be human and alive on Earth. Turn your sound on!',
    thumbnail: '/assets/playground/Voyager-Cover.png',
    videoUrl: '/assets/playground/Voyager-Video.mov',
    tags: ['Next.js', 'Framer Motion', 'Web Animations'],
    type: 'playground',
    timeline: 'November 2025',
    demoUrl: 'https://thegoldenrecord.vercel.app/',
    githubUrl: 'https://github.com/angelinawwu/voyager'
  },
  {
    title: 'Goodreads Wrapped',
    description: 'spotify wrapped for books',
    paragraph: 'Goodreads Wrapped is a web application that allows users to visualize their reading data from Goodreads. It scrapes data from the user\'s Goodreads profile and displays it in a visually appealing way, with fun animations and in a shareable format.',
    videoUrl: '/assets/playground/Goodreads-Video.mov',
    tags: ['shadcn/ui', 'Web Scraping', 'React/Vite'],
    type: 'playground',
    timeline: 'In progress',
    demoUrl: 'https://goodreadswrapped.com',
    githubUrl: 'https://github.com/angelinawwu/goodreads-wrapped'
  },
  {
    title: 'E-Commerce Site',
    context: 'Figma + Google AI Studio',
    videoUrl: '/assets/playground/Rug-Video.mov',
    type: 'playground',
  },
  {
    title: 'VEST Glass Experiment',
    context: 'Figma',
    thumbnail: '/assets/playground/VESTGlass-Cover.png',
    type: 'playground',
  },
  {
    title: 'VEST Marketing Graphic',
    context: 'Figma and Photoshop',
    thumbnail: '/assets/playground/VESTKeyboard-Cover.jpg',
    type: 'playground',
  },

  {
    title: 'MedTech Site',
    context: 'Figma + Google AI Studio',
    thumbnail: '/assets/playground/Thistle-Cover.png',
    type: 'playground',
  }
];

// Combined projects for backward compatibility
export const projects: Project[] = [...caseStudies, ...playgroundProjects];
