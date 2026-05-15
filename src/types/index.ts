export interface Project {
  id: string;
  featured: boolean;
  title: string;
  description: string;
  techTags: string[];
  githubUrl?: string;
  liveUrl?: string;
  date?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string }[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  type: "work" | "research" | "extracurricular";
  startDate: string;
  endDate: string;
  bullets: string[];
  logoPlaceholder?: string;
  logoUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
