
export interface ExperienceEntry {
  id: string;
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM'; missing means ongoing */
  end?: string;
  current?: boolean;
  title: string;
  organization: string;
  location: string;
  type: 'work' | 'education';
  /** Short label used in the at-a-glance timeline */
  shortLabel: string;
  grade?: string;
  bullets: string[];
  technologies?: string[];
  coursework?: string[];
  projectIds?: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  /** One-line summary shown on hover in the project index */
  summary: string;
  description: string;
  year: number;
  /** Set when the project spans more than one year */
  yearEnd?: number;
  /** Experience id or 'hackathon' */
  context: string;
  contextLabel: string;
  technologies: string[];
  highlights: string[];
  role?: string;
  codeUrl?: string;
  link?: string;
  featured?: boolean;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
}

export interface Profile {
  name: string;
  headline: string;
  subline: string;
  location: string;
  origin: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
  headshotSrc: string;
  bannerSrc: string;
  languages: { language: string; level: string }[];
  interests: string[];
  about: string;
  experience: ExperienceEntry[];
  /** Featured projects first, in display order; the rest are listed as earlier coursework */
  projects: Project[];
}
