import CounterStat from "@/components/CounterStat";
import BragbookCategory from "@/components/BragbookCategory";
import {
  getBragbookCategories,
  getBragbookStats,
} from "@/lib/bragbook-data";
import { getLocale } from "@/lib/locale";
import { t as tr } from "@/lib/i18n";

export default async function BragbookContent() {
  const locale = await getLocale();
  const t = tr(locale);
  const categories = getBragbookCategories(locale);
  const stats = getBragbookStats();

  return (
    <article className="px-6 md:px-10 pt-48 pb-24 max-w-5xl mx-auto">
      <header className="mb-16 md:mb-24">
        <p className="font-mono text-xs tracking-widest uppercase text-acid mb-4">
          {t.bragbook.kicker}
        </p>
        <h1 className="font-display font-extrabold text-display-lg text-paper leading-[0.95] mb-6 whitespace-pre-line">
          {t.bragbook.title}
        </h1>
        <p className="font-body text-base md:text-lg text-smoke max-w-xl leading-relaxed">
          {t.bragbook.intro}
        </p>
      </header>

      <section
        aria-label="Summary"
        className="grid grid-cols-3 gap-6 md:gap-12 mb-16 md:mb-24"
      >
        <CounterStat
          value={String(stats.initiatives)}
          label={t.bragbook.initiativesLabel}
          subLabel={t.bragbook.initiativesSubLabel}
        />
        <CounterStat
          value={String(stats.categories)}
          label={t.bragbook.areasLabel}
          subLabel={t.bragbook.areasSubLabel}
        />
        <CounterStat
          value={String(stats.years)}
          label={t.bragbook.yearsLabel}
        />
      </section>

      <section aria-label="Categories">
        {categories.map((cat, i) => (
          <BragbookCategory
            key={cat.slug}
            category={cat}
            index={i}
            itemsLabel={t.bragbook.itemsPlural}
            itemLabel={t.bragbook.itemsSingular}
          />
        ))}
      </section>

      <footer className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-body text-sm text-smoke max-w-md">
          {t.bragbook.footerLine}{" "}
          <a
            href="mailto:nat.maz98@gmail.com"
            className="text-acid hover:underline"
          >
            {t.bragbook.footerLink}
          </a>
          .
        </p>
        <a
          href="/CV_Tomala_Natalia.pdf"
          download
          className="font-mono text-xs tracking-widest uppercase border border-acid text-acid px-4 py-2 hover:bg-acid hover:text-ink transition-colors"
        >
          {t.bragbook.downloadCv}
        </a>
      </footer>
    </article>
  );
}
