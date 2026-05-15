"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
              title={`Src ${project.title}`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <GitHubIcon className="w-[18px] h-[18px]" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              title={`Demo ${project.title}`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techTags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent-subtle text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
