import Link from "next/link";
import { getProjects } from "@/lib/projects";
import ScrollReveal from "@/components/ScrollReveal";
import HomeProjectsGrid from "@/components/HomeProjectsGrid";
import PhotoWithVideoHover from "@/components/PhotoWithVideoHover";
import CopyEmailButton from "@/components/CopyEmailButton";
import { getLocale } from "@/lib/locale";
import { t as tr } from "@/lib/i18n";

export default async function Home() {
  const locale = await getLocale();
  const t = tr(locale);
  const projects = getProjects(locale);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 pt-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-px h-[60vh] bg-gradient-to-b from-transparent via-acid/40 to-transparent" aria-hidden="true" />

        <div className="absolute top-24 right-10 w-32 md:w-48 hidden md:block">
          <PhotoWithVideoHover
            src="/natalia.png"
            alt=""
            videoId="1175926062"
            imgClassName="object-contain opacity-60 mix-blend-luminosity"
          />
        </div>

        <div className="mb-8 animate-fade-up flex flex-wrap gap-2">
          {t.home.chips.map((label) => (
            <span key={label} className="font-mono text-xs tracking-wider uppercase text-acid border border-acid/30 px-3 py-1.5">
              {label}
            </span>
          ))}
        </div>

        <h1 className="font-display font-extrabold text-display-xl text-paper leading-none mb-8 animate-fade-up delay-100">
          {t.home.heroLine1}
          <br />
          <span className="text-paper/20" aria-hidden="true">{t.home.heroName}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 border-t border-paper/20 pt-8 animate-fade-up delay-200">
          <p className="font-body text-base md:text-lg text-smoke leading-relaxed max-w-md">
            {t.home.heroDescription}
          </p>

          <div className="flex flex-col md:items-end gap-3">
            <div className="font-mono text-xs text-smoke tracking-wider space-y-1">
              <p>{t.home.gog}</p>
              <p>{t.home.twc}</p>
              <p>{t.home.location}</p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-acid border border-acid px-4 py-2 hover:bg-acid hover:text-ink transition-all duration-200 mt-2 self-start md:self-auto"
            >
              {t.home.viewWork} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16" aria-labelledby="selected-work-heading">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h2 id="selected-work-heading" className="font-mono text-xs tracking-widest uppercase text-smoke">
              {t.home.selectedWork}
            </h2>
            <Link
              href="/work"
              className="font-mono text-xs tracking-widest uppercase text-smoke hover:text-acid transition-colors"
            >
              {t.home.allProjects} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>

        <HomeProjectsGrid projects={projects} />
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 border-t border-paper/10" aria-labelledby="capabilities-heading">
        <ScrollReveal>
          <h2 id="capabilities-heading" className="sr-only">{t.home.selectedWork}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-paper/10">
            {t.home.capabilities.map((col) => (
              <div key={col.area} className="bg-ink p-8 flex flex-col gap-6">
                <h3 className="font-mono text-xs tracking-widest uppercase text-acid whitespace-pre-line">
                  {col.area}
                </h3>
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
        </ScrollReveal>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-6 border-t border-paper/10">
        <div className="border border-paper/10 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-display-md text-paper leading-tight mb-2">
              {t.home.letsWork}
            </p>
            <p className="font-body text-sm text-smoke">
              {t.home.letsWorkSub}
            </p>
          </div>
          <CopyEmailButton
            className="font-mono text-xs tracking-widest uppercase text-ink bg-acid px-6 py-3 hover:bg-paper transition-colors duration-200 shrink-0"
          >
            {t.home.getInTouch}
          </CopyEmailButton>
        </div>
      </section>
    </>
  );
}
