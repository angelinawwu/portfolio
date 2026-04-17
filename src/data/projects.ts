export type ProjectType = 'PERSONAL PROJECT' | 'INTERNSHIP' | 'CONTRACT' | 'SCHOOL PROJECT' | 'HACKATHON';

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
  devpostUrl?: string;
  githubUrl?: string;
  timeline?: string;
  // For projects with video (case studies or playground):
  videoUrl?: string;
};

export const caseStudies: Project[] = [
  {
    slug: 'reverie',
    title: 'Reverie',
    description: 'Honorable Mention @ FigBuild 2026. Every dream, a revelation.',
    thumbnail: '/assets/projects/Reverie-Cover.webp',
    timeline: 'MAR 2026',
    projectType: 'HACKATHON',
    tags: ['Speculative Design', 'Product Design', 'Figma'],
    type: 'case-study',
    devpostUrl: 'https://devpost.com/software/reverie-auf3w8'
  },
  {
    slug: 'familyfridge',
    title: 'FamilyFridge',
    description: '2nd Place @ Rice Designathon 2026. Where everyday moments bring us together.',
    thumbnail: '/assets/projects/FamilyFridge-Cover.webp',
    timeline: 'JAN 2026',
    projectType: 'HACKATHON',
    tags: ['UX Research', 'Mobile Design', 'Figma'],
    type: 'case-study',
    devpostUrl: 'https://devpost.com/software/tba-bo8jku'
  },
  {
    slug: 'goodreads-wrapped',
    title: 'Goodreads Wrapped',
    description: 'A playful reading year summary, delivered to 5000+ users.',
    thumbnail: '/assets/projects/Goodreads-Cover.webp',
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
    description: 'A mobile-first website redesign to 2x reservation-booking conversion.',
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
];

export const playgroundProjects: Project[] = [

  {
    title: 'Digital typewriter',
    thumbnail: '/assets/playground/Typewriter-Cover.webp',
    videoUrl: '/assets/playground/Typewriter-Video.mov',
    context: 'React/Vite, Google Sheets API',
    type: 'playground',
    demoUrl: 'https://digitaltypewriter.vercel.app/',
  },
  {
    title: 'A love letter to the Voyager Golden Record',
    thumbnail: '/assets/playground/Voyager-Cover.webp',
    videoUrl: '/assets/playground/Voyager-Video.mov',
    context: 'Next.js, Framer Motion',
    type: 'playground',
    demoUrl: 'https://thegoldenrecord.vercel.app/',
  },
  {
    title: 'poems-i-love',
    videoUrl: '/assets/playground/Poems-Video.mov',
    context: 'Next.js',
    type: 'playground',
    demoUrl: 'https://poems-i-love.vercel.app/',
  },
  {
    title: 'Thistle (healthtech concept)',
    context: 'Figma, Nano Banana',
    thumbnail: '/assets/playground/Thistle-Cover.webp',
    type: 'playground',
  },
  {
    title: 'Rug store (concept)',
    context: 'Figma, Veo',
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
    title: 'Bookish app (concept)',
    context: 'Figma, Flutter',
    thumbnail: '/assets/playground/Bookish-Cover.webp',
    type: 'playground',
  },
  {
    title: 'VEST t-shirts',
    context: 'Adobe Illustrator',
    thumbnail: '/assets/playground/VESTShirt-Cover.webp',
    type: 'playground',
  },
  {
    title: 'Hero (Treehacks 2026)',
    context: 'React Native',
    thumbnail: '/assets/playground/Hero-Cover.webp',
    type: 'playground',
    devpostUrl: 'https://devpost.com/software/organmatch',
  },
  
  {
    title: 'VEST recruitment graphic',
    context: 'Figma, Adobe Photoshop',
    thumbnail: '/assets/playground/VESTKeyboard-Cover.webp',
    type: 'playground',
  },
  {
    title: 'Team t-shirt design',
    context: 'Figma, Adobe Photoshop',
    thumbnail: '/assets/playground/TeddiesTee-Cover.webp',
    type: 'playground',
  },
  {
    title: 'Piece of Cake app (concept)',
    context: 'Figma',
    thumbnail: '/assets/playground/PieceOfCake-Cover.webp',
    type: 'playground',
  },
];

export const workProjects: Project[] = [...caseStudies];
