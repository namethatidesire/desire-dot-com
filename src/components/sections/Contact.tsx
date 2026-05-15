import SectionWrapper from "@/components/ui/SectionWrapper";
import SocialLink from "@/components/ui/SocialLink";
import { Mail, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Let&apos;s Talk...</h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full mx-auto" />
        </div>

        <p className="max-w-lg mx-auto text-muted-foreground leading-relaxed mb-8">
          I&apos;m actively looking for internships and new grad opportunities, and
          always happy to connect with fellow developers.
          <br /><br />
          Feel free to reach
          out at any of the platforms below!
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
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
            label="Send an email"
            title="carlcabadingdev@gmail.com"
          />
          <SocialLink
            href="/resume.pdf"
            icon={<Download size={18} />}
            label="Download resume PDF"
            title="View Resume"
            download
          />
        </div>

        <a
          href="https://github.com/namethatidesire/desire-dot-com"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          this.repo.open()
        </a>

        <p className="mt-16 text-xs text-muted-foreground">
          Built with Next.js, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </SectionWrapper>
  );
}
