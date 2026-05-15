"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  index: number;
}

export default function SkillBadge({ name, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-accent-subtle text-accent border border-accent/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors duration-200 cursor-default select-none"
    >
      {name}
    </motion.span>
  );
}
