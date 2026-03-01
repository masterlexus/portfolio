export interface TimelineEntry {
  id: string;
  year: number;
  startDate: string;
  endDate: string;
  title: string;
  organization: string;
  location: string;
  type: 'work' | 'education' | 'project';
  description: string;
  bullets: string[];
  technologies?: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
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
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  languages: { language: string; level: string }[];
  about: string;
  timeline: TimelineEntry[];
  projects: Project[];
  skillCategories: SkillCategory[];
}
