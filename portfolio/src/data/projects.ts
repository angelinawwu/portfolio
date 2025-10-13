export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  type: 'case-study' | 'side-project';
  // For case studies:
  problem?: string;
  process?: string[];
  solution?: string;
  results?: string;
  images?: string[];
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
    type: 'case-study',
    problem: 'Students were struggling with interview anxiety and lack of preparation resources. The existing AI interview tool had poor usability and didn\'t address the core psychological barriers to interview success.',
    process: [
      'Conducted user interviews with 15 students across different majors',
      'Analyzed current tool usage patterns and pain points',
      'Created user personas and journey maps',
      'Developed wireframes and interactive prototypes',
      'Conducted usability testing with 8 participants',
      'Iterated based on feedback and refined the design'
    ],
    solution: 'Redesigned the interface with a focus on building confidence through progressive disclosure, clear feedback, and encouraging micro-interactions. Implemented a step-by-step preparation flow that guides users through practice sessions.',
    results: 'Improved user engagement by 40% and reduced interview anxiety scores by 35% in post-interview surveys. Users reported feeling more prepared and confident.',
    images: ['/projects/workup-hero.jpg', '/projects/workup-process.jpg', '/projects/workup-solution.jpg']
  },
  {
    slug: 'manifesto-market',
    title: 'Manifesto Market',
    description: 'Web Design || Conversion Rate Optimization - A mobile-first redesign to streamline booking and drive reservations',
    thumbnail: '/projects/manifesto-thumbnail.jpg',
    tags: ['Web Design', 'CRO', 'Mobile-First', 'Booking System', 'Conversion Optimization', 'UI/UX'],
    type: 'case-study',
    problem: 'The existing booking system had a high abandonment rate and poor mobile experience. Users were struggling to complete reservations on mobile devices.',
    process: [
      'Analyzed booking funnel data and identified drop-off points',
      'Conducted mobile usability testing with 12 users',
      'Redesigned booking flow with mobile-first approach',
      'Implemented progressive form completion',
      'Added real-time availability checking',
      'Optimized checkout process for mobile devices'
    ],
    solution: 'Created a streamlined mobile-first booking experience with simplified forms, clear progress indicators, and one-tap reservation confirmation. Implemented smart defaults and auto-complete features.',
    results: 'Increased mobile conversion rate by 60% and reduced booking abandonment by 45%. Average booking completion time decreased by 30%.',
    images: ['/projects/manifesto-hero.jpg', '/projects/manifesto-mobile.jpg', '/projects/manifesto-booking.jpg']
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
