import SectionWrapper from "@/components/ui/SectionWrapper";
import AvatarImage from "@/components/ui/AvatarImage";
import { GraduationCap, MapPin, Code2, Star } from "lucide-react";

const facts = [
  { icon: GraduationCap, text: "HBSc CS, Math & Statistics @ UofT" },
  { icon: MapPin, text: "Mississauga, ON || Toronto, ON" },
  { icon: Code2, text: "Full-Stack, Backend, Scripting" },
  { icon: Star, text: "Dean's List · GPA 3.88 / 4.0" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground">About</h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-[160px_1fr] gap-10 items-start">
          {/* Avatar — drop your photo at public/avatar.jpg */}
          <div className="flex justify-center md:justify-start">
            <AvatarImage
              src="/avatar.jpg"
              alt="Carl Cabading"
              initials="CC"
              variant="profile"
            />
          </div>

          {/* Bio + facts */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              I&apos;m a Computer Science, Mathematics &amp; Statistics student at the
              University of Toronto, currently on my PEY Co-op as a
              Software Developer at i4i. I care about writing elegant, performant,
              maintainable code; whether that&apos;s modernizing legacy systems,
              building full-stack web apps, or architecting backend pipelines.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I&apos;ve worked across the stack in production environments,
              from Vue.js + Go backends to C# Office Open XML document pipelines. I&apos;m
              always looking for problems where good engineering actually changes
              outcomes for real users.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I&apos;m eager to begin exploring topics in Machine Learning
              and AI.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {facts.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <Icon size={16} className="text-accent shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
