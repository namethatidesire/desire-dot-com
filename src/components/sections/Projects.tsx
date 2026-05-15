import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          <div className="w-12 h-1 bg-accent mt-3 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
