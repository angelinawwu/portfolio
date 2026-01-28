export type ProjectType = 'PERSONAL PROJECT' | 'INTERNSHIP' | 'CONTRACT' | 'SCHOOL PROJECT';

export type Project = {
  slug?: string;
  title: string;
  paragraph?: string;
  description?: string;
  context?: string;
  thumbnail?: string;
  tags?: string[];
  type: 'case-study' | 'playground';
  projectType?: ProjectType;
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
    description: 'A mobile-first redesign to streamline booking, driving reservations by 121%.',
    thumbnail: '/assets/projects/Manifesto-Cover.jpg',
    timeline: 'JUN-AUG 2025',
    projectType: 'INTERNSHIP',
    tags: ['Product Design', 'CTA', 'Google Analytics'],
    type: 'case-study'
  },
  {
    slug: 'workup',
    title: 'Workup',
    description: 'Restructuring an AI-powered interview tool to empower students to prepare with confidence.',
    thumbnail: '/assets/projects/Workup-Cover.png',
    timeline: 'JAN-JUN 2025',
    projectType: 'CONTRACT',
    tags: ['UX Research', 'User Testing', 'Design System'],
    type: 'case-study'
  },
  {
    slug: 'bookish',
    title: 'Bookish',
    description: 'Redesigning the reading experience with accessibility and sustainability in mind.',
    thumbnail: '/assets/projects/Bookish-Cover.png',
    timeline: 'SPRING 2024',
    projectType: 'SCHOOL PROJECT',
    tags: ['Mobile Design', 'UX Research', 'Figma'],
    type: 'case-study'
  }
];

export const playgroundProjects: Project[] = [
  {
    title: 'Goodreads Wrapped',
    description: 'A playful reading year summary, delivered to 5000+ users.',
    videoUrl: '/assets/playground/Goodreads-Video.mov',
    context: 'Next.js + Web Scraping',
    type: 'playground',
    projectType: 'PERSONAL PROJECT',
    timeline: 'AUG-DEC 2025',
    demoUrl: 'https://goodreadswrapped.com',
    githubUrl: 'https://github.com/angelinawwu/goodreads-wrapped'
  },
  {
    title: 'Typewriter',
    description: 'Typewriter captures the nostalgic feel of mechanical typewriters. No backspace, no copy-paste, no takebacks.',
    paragraph: 'Typewriter captures the nostalgic feel of mechanical typewriters. No backspace, no copy-paste, no takebacks. Type anything and publish it to the gallery.',
    thumbnail: '/assets/playground/Typewriter-Cover.png',
    videoUrl: '/assets/playground/Typewriter-Video.mov',
    context: 'React/Vite + Supabase',
    tags: ['Typescript', 'CSS Animations', 'React/Vite'],
    type: 'playground',
    projectType: 'PERSONAL PROJECT',
    timeline: 'OCT 2025',
    demoUrl: 'https://digitaltypewriter.vercel.app/',
    githubUrl: 'https://github.com/angelinawwu/typewriter'
  },
  {
    title: 'Voyager Golden Record',
    description: 'A love letter to the Voyager Golden Record, and what it means to be human.',
    paragraph: 'A love letter to the Voyager Golden Record, and what it means to be human and alive on Earth. Turn your sound on!',
    thumbnail: '/assets/playground/Voyager-Cover.png',
    videoUrl: '/assets/playground/Voyager-Video.mov',
    context: 'Next.js + Framer Motion',
    tags: ['Next.js', 'Framer Motion', 'Web Animations'],
    type: 'playground',
    projectType: 'PERSONAL PROJECT',
    timeline: 'NOV 2025',
    demoUrl: 'https://thegoldenrecord.vercel.app/',
    githubUrl: 'https://github.com/angelinawwu/voyager'
  },
  {
    title: 'MedTech Site',
    context: 'Figma + Google AI Studio',
    thumbnail: '/assets/playground/Thistle-Cover.png',
    type: 'playground',
  },
  {
    title: 'poems-i-love',
    videoUrl: '/assets/playground/Poems-Video.mov',
    context: 'Next.js + Framer Motion',
    type: 'playground',
    demoUrl: 'https://poems-i-love.vercel.app/',
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
    context: 'Figma + Photoshop',
    thumbnail: '/assets/playground/VESTKeyboard-Cover.jpg',
    type: 'playground',
  },
];

// All projects for Work page (case studies + featured playground projects)
export const workProjects: Project[] = [
  playgroundProjects[0], // Goodreads Wrapped
  caseStudies[0], // Manifesto Market
  caseStudies[1], // Workup
  caseStudies[2], // Bookish
];

// Combined projects for backward compatibility
export const projects: Project[] = [...caseStudies, ...playgroundProjects];
