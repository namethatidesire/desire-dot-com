import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground">Skills</h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <SkillBadge key={skill.name} name={skill.name} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
