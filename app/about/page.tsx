import Link from "next/link";

export const metadata = {
  title: "About — Natalia Tomala",
  description: "Product Designer based in Warsaw, Poland.",
};

const timeline = [
  {
    year: "2024–Now",
    role: "Product Designer",
    company: "CodeYourBrand",
    note: "TwoContinents platform — website redesign (+30% conversion), internal dashboard, design system (50+ components), research strategy.",
  },
  {
    year: "2023–2024",
    role: "Product Designer",
    company: "GOG.com · CD PROJEKT Group",
    note: "R&D team — 0→1 newsletter system (+20% CTR, +10% revenue), 10 user interviews, product card research, pre-launch validation.",
  },
  {
    year: "2021–2024",
    role: "BA · Information Technology",
    company: "University of Information Technology (WIT), Warsaw",
    note: "",
  },
];

const certificates = [
  { name: "Product Metrics", issuer: "[ation] center — Michał Witkowski", year: "2025" },
  { name: "Product Discovery", issuer: "[ation] center — Iga Mościchowska", year: "2025" },
  { name: "Google Analytics 4", issuer: "Owwwla — Aleksandra Görlich", year: "2026" },
];

export default function AboutPage() {
  return (
    <div className="px-6 md:px-10 pt-40 pb-24">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-paper/20 pb-16 mb-20">
        <div className="flex flex-col gap-6">
          <h1 className="font-display font-extrabold text-display-lg text-paper leading-none">
            About
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/natalia.png"
            alt="Natalia Tomala"
            className="w-40 opacity-80 mix-blend-luminosity"
          />
        </div>
        <div className="flex flex-col justify-end gap-6">
          <p className="font-body text-base text-smoke leading-relaxed">
            Product Designer. Facilitator. Mentor. 3+ years of experience.
          </p>
          <p className="font-body text-base text-smoke leading-relaxed">
            I design high-impact features that convert user needs into business growth.
            My work spans 0→1 products, mature platforms, gaming (GOG.com),
            and travel e-commerce — always grounded in research, built with
            systems thinking, and measured by real outcomes.
          </p>
          <p className="font-body text-base text-smoke leading-relaxed">
            I care about closing the gap between design and engineering —
            through quality handoffs, weekly review sessions, and WCAG-compliant systems
            that developers can actually build from.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://linkedin.com/in/natalia-mazińska/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-acid border border-acid px-4 py-2 hover:bg-acid hover:text-ink transition-all duration-200"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:nat.maz98@gmail.com"
              className="font-mono text-xs tracking-widest uppercase text-smoke border border-smoke/30 px-4 py-2 hover:border-acid hover:text-acid transition-all duration-200"
            >
              Email ↗
            </a>
            <a
              href="/CV_Tomala_Natalia.pdf"
              download
              className="font-mono text-xs tracking-widest uppercase text-smoke border border-smoke/30 px-4 py-2 hover:border-acid hover:text-acid transition-all duration-200"
            >
              CV ↓
            </a>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-10">
          Experience & Education
        </span>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 py-8 border-t border-paper/10 hover:border-paper/30 transition-colors duration-300 group"
            >
              <div className="col-span-3 md:col-span-2">
                <span className="font-mono text-xs text-smoke tracking-wider">
                  {item.year}
                </span>
              </div>
              <div className="col-span-9 md:col-span-4">
                <p className="font-display font-bold text-lg text-paper group-hover:text-acid transition-colors duration-300">
                  {item.role}
                </p>
                <p className="font-mono text-xs text-smoke mt-1">{item.company}</p>
              </div>
              {item.note && (
                <div className="col-span-12 md:col-span-6 md:col-start-7">
                  <p className="font-body text-sm text-smoke/70 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="mb-20">
        <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-10">
          Certifications
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {certificates.map((cert) => (
            <div key={cert.name} className="bg-ink p-6 flex flex-col gap-2">
              <p className="font-display font-bold text-base text-paper">{cert.name}</p>
              <p className="font-mono text-xs text-smoke">{cert.issuer}</p>
              <p className="font-mono text-xs text-acid mt-auto">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border border-paper/10 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-display-md text-paper leading-tight mb-2">
            Let's work together.
          </p>
          <p className="font-body text-sm text-smoke">
            Open to Senior Product Design and Product Engineer roles.
          </p>
        </div>
        <a
          href="mailto:nat.maz98@gmail.com"
          className="font-mono text-xs tracking-widest uppercase text-ink bg-acid px-6 py-3 hover:bg-paper transition-colors duration-200 shrink-0"
        >
          Get in touch →
        </a>
      </div>
    </div>
  );
}
