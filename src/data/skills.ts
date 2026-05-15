import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "Go" },
      { name: "C#" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Tailwind CSS" },
      { name: "HTML / CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Prisma ORM" },
      { name: "SQLite" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker" },
      { name: "Git" },
      { name: "Linux" },
      { name: "PowerShell" },
      { name: "CI/CD" },
      { name: "Jenkins" },
      { name: "Vercel" },
    ],
  },
];
