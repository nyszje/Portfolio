import { getProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { getLocale } from "@/lib/locale";
import { t as tr } from "@/lib/i18n";

export const metadata = {
  title: "Work - Natalia Tomala",
  description: "Case studies and projects by Natalia Tomala, Product Designer.",
};

export default async function WorkPage() {
  const locale = await getLocale();
  const t = tr(locale);
  const projects = getProjects(locale);

  return (
    <section className="px-6 md:px-10 pt-48 pb-24">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 pb-4">
        <h1 className="font-display font-extrabold text-display-lg text-paper leading-none">
          {t.work.title}
        </h1>
        <div className="flex flex-col justify-end">
          <p className="font-body text-base text-smoke leading-relaxed max-w-sm">
            {t.work.description}
          </p>
        </div>
      </div>

      {/* Project list */}
      <div>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            inProgressLabel={t.project.inProgressBadge}
          />
        ))}
      </div>
    </section>
  );
}
