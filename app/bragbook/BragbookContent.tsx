export default function BragbookContent() {
  return (
    <article className="px-6 md:px-10 pt-48 pb-24 max-w-3xl mx-auto">
      <header className="mb-16">
        <h1 className="font-display font-extrabold text-display-lg text-paper leading-none mb-6">
          Bragbook
        </h1>
        <p className="font-body text-base text-smoke max-w-xl leading-relaxed">
          A curated set of case studies, recommendations, and impact summaries
          - the parts of my work I&apos;m most proud of.
        </p>
      </header>

      <section className="prose prose-invert max-w-none">
        <p className="font-body text-base text-paper leading-relaxed mb-6">
          {/* TODO: wklej tutaj treść bragbooka — możesz skopiować z Notion. */}
          {/* Edytuj plik app/bragbook/BragbookContent.tsx */}
          Coming soon. Replace this placeholder with content from your Notion
          bragbook - text sections, screenshots, recommendations.
        </p>

        <p className="font-body text-sm text-smoke italic">
          (Plik do edycji: <code>app/bragbook/BragbookContent.tsx</code>)
        </p>
      </section>
    </article>
  );
}
