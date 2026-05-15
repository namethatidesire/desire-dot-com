import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "digital-scrapbook",
    featured: true,
    title: "Digital Web Scrapbook | Tortoise",
    date: "",
    description:
      "A self-hosted full-stack web platform with couples in mind: featuring a shared blog, image gallery, and sticky-note style text post system. Deployed via Docker Compose with an nginx reverse proxy on a personal home server.",
    techTags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", "nginx", "JWT", "sharp", "Zod"],
    githubUrl: "https://github.com/namethatidesire/abacus",
    liveUrl: "",
  },
  {
    id: "ai-scheduler",
    title: "AI Scheduling Assistant | Abacus",
    date: "",
    description:
      "A natural language scheduling assistant powered by the Claude API for conflict detection, automated resolution suggestions, and intent parsing. Coordinated a team of 7 using Agile methodologies across the full project lifecycle.",
    techTags: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Claude API"],
    featured: true,
    githubUrl: "https://github.com/namethatidesire/abacus",
    liveUrl: "",
  },
  {
    id: "clair",
    title: "AI Note Organizer Agent | Clair",
    date: "",
    description:
      "[Hackathon Submission for DeerHacks V 2026] <replace this text>",
    techTags: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Claude API"],
    featured: true,
    githubUrl: "https://github.com/AlMaini/clair",
    liveUrl: "",
  },
];
