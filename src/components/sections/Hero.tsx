"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import SocialLink from "@/components/ui/SocialLink";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100svh] flex items-center justify-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium text-accent mb-2 tracking-widest uppercase"
        >
          This is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight mb-4"
        >
          Carl Cabading.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-muted-foreground mb-6"
        >
          Software Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Computer Science @ University of Toronto
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          {/* <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
          >
            Download Resume
          </a> */}
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3"
        >
          <SocialLink
            href="https://github.com/namethatidesire"
            icon={<GitHubIcon className="w-[18px] h-[18px]" />}
            label="GitHub profile"
            title="GitHub | namethatidesire"
            external
          />
          <SocialLink
            href="https://linkedin.com/in/carl-cabading"
            icon={<LinkedInIcon className="w-[18px] h-[18px]" />}
            label="LinkedIn profile"
            title="LinkedIn | Carl Cabading"
            external
          />
          <SocialLink
            href="mailto:carlcabadingdev@gmail.com"
            icon={<Mail size={18} />}
            label="Email carlcabadingdev@gmail.com"
            title="carlcabadingdev@gmail.com"
          />
          {/* <SocialLink
            href="/resume.pdf"
            icon={<Download size={18} />}
            label="Download resume PDF"
            title="View Resume"
            download
          /> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
