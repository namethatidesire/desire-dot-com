import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        <div className="max-w-2xl">
          {experiences.map((entry, i) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
