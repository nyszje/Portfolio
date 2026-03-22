import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "@/lib/projects";
import CounterStat from "@/components/CounterStat";
import ScrollReveal from "@/components/ScrollReveal";

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
    <article className="px-6 md:px-10 pt-44 pb-24">
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

        {/* Hero cover */}
        {project.heroCover && (
          <div className="mb-8 -mx-6 md:-mx-10">
            <img
              src={project.heroCover}
              alt={project.title.replace("\n", " ")}
              className="w-full object-cover"
            />
          </div>
        )}

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
      <div className={`grid gap-8 mb-20 pb-16 border-b border-paper/10 ${project.impact.length <= 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
        {project.impact.map((stat) => (
          <CounterStat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">
        {/* Summary */}
        <ScrollReveal className="md:col-span-4">
          <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-4">
            Overview
          </span>
          <p className="font-body text-base text-paper/80 leading-relaxed">
            {project.summary}
          </p>
        </ScrollReveal>

        {/* Problem */}
        <ScrollReveal className="md:col-span-8" delay={100}>
          <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-4">
            The Problem
          </span>
          <p className="font-body text-base text-paper/80 leading-relaxed">
            {project.problem}
          </p>
        </ScrollReveal>

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
                <p className="font-body text-sm text-paper/90 leading-relaxed">
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
                <p className="font-mono text-xs tracking-widest uppercase text-smoke mb-1">NDA</p>
                <p className="font-body text-sm text-smoke leading-relaxed">
                  Wireframes, sketches, and UI designs for this project are covered by a non-disclosure agreement
                  and cannot be shared publicly. Happy to walk through the work in detail during a conversation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Vimeo video */}
        {project.vimeoId && (
          <div className="md:col-span-12">
            <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-6">
              Live Preview
            </span>
            <div style={{ padding: "64.99% 0 0 0", position: "relative" }}>
              <iframe
                src={`https://player.vimeo.com/video/${project.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1`}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Project video"
              />
            </div>
          </div>
        )}

        {/* Images */}
        {project.images && (
          <div className="md:col-span-12 flex flex-col gap-16">
            {/* Sketches */}
            {project.images.sketches && project.images.sketches.length > 0 && (
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-6">
                  Lo-fi Sketches
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.sketches.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Sketch ${i + 1}`}
                      className="w-full object-cover border border-paper/10"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Design System */}
            {project.images.designSystem && (
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-6">
                  Design System
                </span>
                <img
                  src={project.images.designSystem}
                  alt="Design system components"
                  className="w-full border border-paper/10"
                />
              </div>
            )}

            {/* Device mockups */}
            {(project.images.desktop || project.images.mobile) && (
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-6">
                  Designs
                </span>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Laptop mockup */}
                  {project.images.desktop && (
                    <div className="flex-1">
                      <div className="relative bg-[#1a1a1a] rounded-xl pt-6 px-4 pb-2 border border-paper/10 shadow-2xl">
                        <div className="flex gap-1.5 mb-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-paper/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-paper/20" />
                          <span className="w-2.5 h-2.5 rounded-full bg-paper/20" />
                        </div>
                        <img
                          src={project.images.desktop}
                          alt="Desktop design"
                          className="w-full rounded-sm"
                        />
                      </div>
                      <p className="font-mono text-xs text-smoke/50 text-center mt-3 tracking-wider">Desktop</p>
                    </div>
                  )}

                  {/* Phone mockup */}
                  {project.images.mobile && (
                    <div className="w-48 shrink-0 mx-auto md:mx-0">
                      <div className="relative bg-[#1a1a1a] rounded-[2rem] pt-8 px-3 pb-6 border border-paper/10 shadow-2xl">
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-paper/20" />
                        <img
                          src={project.images.mobile}
                          alt="Mobile design"
                          className="w-full rounded-xl"
                        />
                      </div>
                      <p className="font-mono text-xs text-smoke/50 text-center mt-3 tracking-wider">Mobile</p>
                    </div>
                  )}
                </div>
              </div>
            )}
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
