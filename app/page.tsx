import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 pt-32 relative overflow-hidden">
        {/* Decorative acid line */}
        <div className="absolute top-0 right-0 w-px h-[60vh] bg-gradient-to-b from-transparent via-acid/40 to-transparent" />

        {/* Natalia's photo — positioned top-right */}
        <div className="absolute top-24 right-10 w-32 md:w-48 opacity-60 mix-blend-luminosity hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/natalia.png" alt="Natalia Tomala" className="w-full object-contain" />
        </div>

        {/* Role tag */}
        <div className="mb-8 animate-fade-up">
          <span className="font-mono text-xs tracking-widest uppercase text-acid border border-acid/30 px-3 py-1.5">
            Product Designer · Facilitator · System Thinker
          </span>
        </div>

        {/* Big name */}
        <h1 className="font-display font-extrabold text-display-xl text-paper leading-none mb-8 animate-fade-up delay-100">
          Hey, I&apos;m
          <br />
          <span className="text-paper/20">Natalia.</span>
        </h1>

        {/* Descriptor row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 border-t border-paper/20 pt-8 animate-fade-up delay-200">
          <p className="font-body text-base md:text-lg text-smoke leading-relaxed max-w-md">
            Designing high-impact features that convert user needs into business growth —
            grounded in research, built with systems thinking, measured by outcomes.
          </p>

          <div className="flex flex-col md:items-end gap-3">
            <div className="font-mono text-xs text-smoke tracking-wider space-y-1">
              <p>GOG.com — CD PROJEKT Group</p>
              <p>CodeYourBrand / TwoContinents</p>
              <p>Warsaw, Poland · 3+ years XP</p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-acid border border-acid px-4 py-2 hover:bg-acid hover:text-ink transition-all duration-200 mt-2 self-start md:self-auto"
            >
              View Work <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16">
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-xs tracking-widest uppercase text-smoke">
            Selected Work
          </span>
          <Link
            href="/work"
            className="font-mono text-xs tracking-widest uppercase text-smoke hover:text-acid transition-colors"
          >
            All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group border border-paper/10 hover:border-acid/40 transition-colors duration-300 flex flex-col"
            >
              {project.coverImage ? (
                <div className="overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title.replace("\n", " ")}
                    className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="h-48 bg-paper/5" />
              )}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h2 className="font-display font-extrabold text-display-sm text-paper group-hover:text-acid transition-colors duration-300 whitespace-pre-line leading-tight">
                  {project.title}
                </h2>
                <p className="font-body text-sm text-smoke leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2 py-1 border border-paper/20 text-smoke group-hover:border-acid/40 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 border-t border-paper/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-paper/10">
          {[
            {
              area: "Product Strategy\n& Research",
              items: [
                "Align design with business goals",
                "User research & discovery",
                "Workshops & facilitation",
                "Metrics tracking",
              ],
            },
            {
              area: "Design System\n& Execution",
              items: [
                "Design systems (50+ components)",
                "WCAG accessibility",
                "Developer collaboration",
                "Handoff quality",
              ],
            },
            {
              area: "Framework\n& Delivery",
              items: [
                "Prototyping",
                "Agile workflows",
                "Figma · FigJam · Miro",
                "Webflow · HTML · CSS",
              ],
            },
            {
              area: "Knowledge\nSharing",
              items: [
                "Mentoring designers",
                "Workshop facilitation",
                "Stakeholder comms",
                "Design culture",
              ],
            },
          ].map((col) => (
            <div key={col.area} className="bg-ink p-8 flex flex-col gap-6">
              <span className="font-mono text-xs tracking-widest uppercase text-acid whitespace-pre-line">
                {col.area}
              </span>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="font-body text-sm text-smoke">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
