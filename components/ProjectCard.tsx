import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-t border-paper/20 py-10 hover:border-acid transition-colors duration-300"
    >
      <div className="grid grid-cols-12 gap-4 items-start">
        {/* Index */}
        <div className="col-span-1 hidden md:block">
          <span className="font-mono text-xs text-smoke">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title block */}
        <div className="col-span-12 md:col-span-6">
          <h2 className="font-display font-800 text-display-md text-paper group-hover:text-acid transition-colors duration-300 whitespace-pre-line">
            {project.title}
          </h2>
        </div>

        {/* Meta */}
        <div className="col-span-12 md:col-span-5 md:pt-2 flex flex-col gap-4">
          <p className="font-body text-sm text-smoke leading-relaxed max-w-xs">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-1 border border-paper/20 text-smoke group-hover:border-acid/40 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
            {project.nda && (
              <span className="font-mono text-xs px-2 py-1 border border-paper/20 text-smoke/40">
                NDA
              </span>
            )}
            {project.wip && (
              <span className="font-mono text-xs px-2 py-1 border border-acid/30 text-acid/60">
                In Progress
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="font-mono text-xs text-smoke">{project.company}</span>
            <span className="font-mono text-xs text-smoke/40">—</span>
            <span className="font-mono text-xs text-smoke">{project.year}</span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      {project.coverImage && (
        <div className="mt-8 overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title.replace("\n", " ")}
            className="w-full max-h-[320px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
          />
        </div>
      )}

      {/* Arrow indicator */}
      <div className="flex justify-end mt-4">
        <span className="font-display text-smoke group-hover:text-acid transition-all duration-300 group-hover:translate-x-1 inline-block">
          →
        </span>
      </div>
    </Link>
  );
}
