import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Work — Natalia Tomala",
  description: "Case studies and projects by Natalia Tomala, Product Designer.",
};

export default function WorkPage() {
  return (
    <section className="px-6 md:px-10 pt-40 pb-24">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 border-b border-paper/20 pb-12">
        <h1 className="font-display font-extrabold text-display-lg text-paper leading-none">
          Work
        </h1>
        <div className="flex flex-col justify-end">
          <p className="font-body text-base text-smoke leading-relaxed max-w-sm">
            Selected case studies. Each project starts with a real problem,
            runs through research and systems thinking, and ends with
            measurable outcomes.
          </p>
        </div>
      </div>

      {/* Project list */}
      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
