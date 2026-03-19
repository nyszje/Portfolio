import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title.replace("\n", " ")} — Natalia Tomala`,
    description: project.subtitle,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="px-6 md:px-10 pt-36 pb-24">
      {/* Back */}
      <Link
        href="/work"
        className="font-mono text-xs tracking-widest uppercase text-smoke hover:text-acid transition-colors mb-16 inline-block"
      >
        ← All Work
      </Link>

      {/* Hero */}
      <div className="border-b border-paper/20 pb-16 mb-16">
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 border border-acid/40 text-acid"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-display font-extrabold text-display-lg text-paper leading-none whitespace-pre-line mb-6">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-8 font-mono text-xs text-smoke tracking-wider">
          <span>{project.company}</span>
          <span>{project.year}</span>
          <span>{project.role}</span>
        </div>
      </div>

      {/* Impact stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 pb-16 border-b border-paper/10">
        {project.impact.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="font-display font-extrabold text-display-md text-acid leading-none">
              {stat.value}
            </span>
            <span className="font-mono text-xs text-smoke tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">
        {/* Summary */}
        <div className="md:col-span-4">
          <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-4">
            Overview
          </span>
          <p className="font-body text-base text-paper/80 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Problem */}
        <div className="md:col-span-8">
          <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-4">
            The Problem
          </span>
          <p className="font-body text-base text-paper/80 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Process */}
        <div className="md:col-span-12">
          <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-8">
            Process
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.process.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 border border-paper/10 hover:border-acid/30 transition-colors duration-300"
              >
                <span className="font-mono text-xs text-smoke/40 mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm text-paper/70 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NDA notice */}
        {project.nda && (
          <div className="md:col-span-12">
            <div className="border border-paper/10 bg-paper/[0.03] px-8 py-6 flex gap-4 items-start">
              <span className="text-smoke/40 text-lg mt-0.5 shrink-0">⊘</span>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-smoke/60 mb-1">NDA</p>
                <p className="font-body text-sm text-smoke/70 leading-relaxed">
                  Wireframes, sketches, and UI designs for this project are covered by a non-disclosure agreement
                  and cannot be shared publicly. Happy to walk through the work in detail during a conversation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* WIP notice */}
        {project.wip && (
          <div className="md:col-span-12">
            <div className="border border-acid/20 bg-acid/[0.03] px-8 py-6 flex gap-4 items-start">
              <span className="text-acid/60 text-lg mt-0.5 shrink-0">🚧</span>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-acid/60 mb-1">Work in Progress</p>
                <p className="font-body text-sm text-smoke/70 leading-relaxed">
                  This project is actively ongoing. Details and outcomes will continue to be updated as the work progresses.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="md:col-span-8">
          <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-4">
            Outcome
          </span>
          <p className="font-body text-lg text-paper leading-relaxed font-display">
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Next project */}
      <div className="mt-24 pt-12 border-t border-paper/20">
        <span className="font-mono text-xs tracking-widest uppercase text-smoke block mb-6">
          Next Project
        </span>
        {(() => {
          const currentIndex = projects.findIndex((p) => p.slug === slug);
          const next = projects[(currentIndex + 1) % projects.length];
          return (
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between hover:opacity-80 transition-opacity"
            >
              <span className="font-display font-extrabold text-display-md text-paper group-hover:text-acid transition-colors duration-300 whitespace-pre-line">
                {next.title}
              </span>
              <span className="font-display text-3xl text-smoke group-hover:text-acid group-hover:translate-x-2 transition-all duration-300">
                →
              </span>
            </Link>
          );
        })()}
      </div>
    </article>
  );
}
