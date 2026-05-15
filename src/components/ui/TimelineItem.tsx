"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/types";
import AvatarImage from "@/components/ui/AvatarImage";

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0, 0, 0.2, 1] }}
      className="relative flex gap-6"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent-subtle mt-1.5 shrink-0 z-10" />
        {!isLast && <div className="w-px flex-1 bg-border mt-1" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? "" : ""}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
          <AvatarImage
            src={entry.logoUrl}
            alt={`${entry.organization} logo`}
            initials={entry.logoPlaceholder ?? entry.organization.slice(0, 2).toUpperCase()}
            variant="logo"
          />
          <div>
            <h3 className="text-base font-semibold text-foreground leading-tight">
              {entry.role}
            </h3>
            <p className="text-sm text-muted-foreground">
              {entry.organization} · {entry.startDate} – {entry.endDate}
            </p>
          </div>
        </div>

        <ul className="mt-3 space-y-1.5 list-none">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
