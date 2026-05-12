import type { Translations } from "@/lib/i18n";

export default function Footer({ t }: { t: Translations }) {
  return (
    <footer className="border-t border-paper/10 px-6 md:px-10 py-8 mt-24">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="font-mono text-xs text-smoke tracking-wider">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>

        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/natalia-mazińska/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider uppercase text-smoke hover:text-acid transition-colors duration-200"
          >
            {t.footer.linkedin}
          </a>
          <a
            href="mailto:nat.maz98@gmail.com"
            className="font-mono text-xs tracking-wider uppercase text-smoke hover:text-acid transition-colors duration-200"
          >
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
