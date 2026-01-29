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
    slug: 'goodreads-wrapped',
    title: 'Goodreads Wrapped',
    description: 'A playful reading year summary, delivered to 5000+ users.',
    videoUrl: '/assets/playground/Goodreads-Video.mov',
    context: 'Next.js + Web Scraping',
    type: 'case-study',
    projectType: 'PERSONAL PROJECT',
    timeline: 'AUG-DEC 2025',
    tags: ['Next.js', 'Web Scraping', 'Data Visualization'],
    demoUrl: 'https://goodreadswrapped.com',
    githubUrl: 'https://github.com/angelinawwu/goodreads-wrapped'
  },
  {
    slug: 'manifesto-market',
    title: 'Manifesto Market',
    description: 'A mobile-first redesign to streamline booking, driving reservations by 121%.',
    thumbnail: '/assets/projects/Manifesto-Cover.webp',
    timeline: 'JUN-AUG 2025',
    projectType: 'INTERNSHIP',
    tags: ['Product Design', 'CTA', 'Google Analytics'],
    type: 'case-study'
  },
  {
    slug: 'workup',
    title: 'Workup',
    description: 'Restructuring an AI-powered interview tool to empower students to prepare with confidence.',
    thumbnail: '/assets/projects/Workup-Cover.webp',
    timeline: 'JAN-JUN 2025',
    projectType: 'CONTRACT',
    tags: ['UX Research', 'User Testing', 'Design System'],
    type: 'case-study'
  },
  {
    slug: 'bookish',
    title: 'Bookish',
    description: 'Redesigning the reading experience with accessibility and sustainability in mind.',
    thumbnail: '/assets/projects/Bookish-Cover.webp',
    timeline: 'MAR-MAY 2024',
    projectType: 'PERSONAL PROJECT',
    tags: ['Mobile Design', 'UX Research', 'Figma'],
    type: 'case-study'
  }
];

export const playgroundProjects: Project[] = [

  {
    title: 'Communal typewriter',
    description: 'Typewriter captures the nostalgic feel of mechanical typewriters. No backspace, no copy-paste, no takebacks.',
    paragraph: 'Typewriter captures the nostalgic feel of mechanical typewriters. No backspace, no copy-paste, no takebacks. Type anything and publish it to the gallery.',
    thumbnail: '/assets/playground/Typewriter-Cover.webp',
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
    title: 'A love letter to the Voyager Golden Record',
    description: 'A love letter to the Voyager Golden Record, and what it means to be human.',
    paragraph: 'A love letter to the Voyager Golden Record, and what it means to be human and alive on Earth. Turn your sound on!',
    thumbnail: '/assets/playground/Voyager-Cover.webp',
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
    title: 'MedTech site',
    context: 'Figma + Nano Banana',
    thumbnail: '/assets/playground/Thistle-Cover.webp',
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
    title: 'E-commerce site',
    context: 'Figma + Veo',
    videoUrl: '/assets/playground/Rug-Video.mov',
    type: 'playground',
  },
  {
    title: 'VEST glass experiment',
    context: 'Figma',
    thumbnail: '/assets/playground/VESTGlass-Cover.webp',
    type: 'playground',
  },
  {
    title: 'VEST recruitment graphic',
    context: 'Figma + Photoshop',
    thumbnail: '/assets/playground/VESTKeyboard-Cover.webp',
    type: 'playground',
  },
];

// All projects for Work page (all case studies)
// Order: Goodreads Wrapped -> Manifesto Market -> Workup -> Bookish
export const workProjects: Project[] = [
  caseStudies[0], // Goodreads Wrapped
  caseStudies[1], // Manifesto Market
  caseStudies[2], // Workup
  caseStudies[3], // Bookish
];

// Combined projects for backward compatibility
export const projects: Project[] = [...caseStudies, ...playgroundProjects];
