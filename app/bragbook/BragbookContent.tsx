export default function BragbookContent({ employer }: { employer: string }) {
  return (
    <article className="px-6 md:px-10 pt-48 pb-24 max-w-3xl mx-auto">
      <header className="mb-16">
        <p className="font-mono text-xs tracking-widest uppercase text-acid mb-4">
          Welcome, {employer}
        </p>
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

      <footer className="mt-20 pt-8 border-t border-paper/10 flex items-center justify-between">
        <p className="font-mono text-xs text-smoke">
          Confidential. Please do not share.
        </p>
        <form action="/api/bragbook/logout" method="POST">
          <button
            type="submit"
            className="font-mono text-xs tracking-widest uppercase text-smoke hover:text-acid transition-colors"
          >
            Sign out
          </button>
        </form>
      </footer>
    </article>
  );
}
