import CounterStat from "@/components/CounterStat";
import BragbookCategory from "@/components/BragbookCategory";
import { bragbookCategories, bragbookStats } from "@/lib/bragbook-data";

export default function BragbookContent() {
  return (
    <article className="px-6 md:px-10 pt-48 pb-24 max-w-5xl mx-auto">
      <header className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest uppercase text-acid mb-4">
          Bragbook
        </p>
        <h1 className="font-display font-extrabold text-display-lg text-paper leading-[0.95] mb-6 whitespace-nowrap">
          Things I&apos;m
          <br />
          proud of.
        </h1>
        <p className="font-body text-base md:text-lg text-smoke max-w-xl leading-relaxed">
          Initiatives, decisions, and shipped work that shaped my last four
          years. Tap a category to dig in.
        </p>
      </header>

      <section
        aria-label="Summary"
        className="grid grid-cols-3 gap-6 md:gap-12 mb-16 md:mb-24 pb-12 border-b border-paper/10"
      >
        <CounterStat
          value={String(bragbookStats.initiatives)}
          label="Initiatives shipped"
        />
        <CounterStat
          value={String(bragbookStats.categories)}
          label="Areas of impact"
        />
        <CounterStat
          value={String(bragbookStats.years)}
          label="Years"
        />
      </section>

      <section aria-label="Categories">
        {bragbookCategories.map((cat, i) => (
          <BragbookCategory key={cat.slug} category={cat} index={i} />
        ))}
      </section>

      <footer className="mt-20 pt-8 border-t border-paper/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-body text-sm text-smoke max-w-md">
          Want to talk about any of these?{" "}
          <a
            href="mailto:nat.maz98@gmail.com"
            className="text-acid hover:underline"
          >
            Get in touch
          </a>
          .
        </p>
        <a
          href="/CV_Tomala_Natalia.pdf"
          download
          className="font-mono text-xs tracking-widest uppercase border border-acid text-acid px-4 py-2 hover:bg-acid hover:text-ink transition-colors"
        >
          Download CV ↓
        </a>
      </footer>
    </article>
  );
}
