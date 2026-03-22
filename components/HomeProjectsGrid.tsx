"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          io.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      className="group border border-paper/10 hover:border-acid/40 transition-colors duration-300 flex flex-col"
    >
      {project.coverImage ? (
        <div className="overflow-hidden h-56 md:h-64">
          <img
            src={project.coverImage}
            alt={project.title.replace("\n", " ")}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-56 md:h-64 bg-paper/5" aria-hidden="true" />
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-extrabold text-display-sm text-paper group-hover:text-acid transition-colors duration-300 whitespace-pre-line leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-sm text-smoke leading-relaxed">
          {project.subtitle}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 border border-paper/20 text-smoke group-hover:border-acid/40 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function HomeProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} delay={i * 120} />
      ))}
    </div>
  );
}
