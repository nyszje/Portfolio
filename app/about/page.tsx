import PhotoWithVideoHover from "@/components/PhotoWithVideoHover";
import CopyEmailButton from "@/components/CopyEmailButton";
import { getLocale } from "@/lib/locale";
import { t as tr } from "@/lib/i18n";

export const metadata = {
  title: "About - Natalia Tomala",
  description: "Product Designer based in Warsaw, Poland.",
};

const certificates = [
  { name: "Product Metrics", issuer: "[ation] center - Michał Witkowski", year: "2025" },
  { name: "Product Discovery", issuer: "[ation] center - Iga Mościchowska", year: "2025" },
  { name: "Google Analytics 4", issuer: "Owwwla - Aleksandra Görlich", year: "2026" },
];

export default async function AboutPage() {
  const locale = await getLocale();
  const t = tr(locale);

  const timeline = [
    {
      year: "2024-04/2026",
      role: t.about.timelineRoles[0],
      company: "CodeYourBrand",
      note: t.about.timelineNotes[0],
    },
    {
      year: "2023–2024",
      role: t.about.timelineRoles[1],
      company: "GOG.com · CD PROJEKT Group",
      note: t.about.timelineNotes[1],
    },
    {
      year: "2021–2024",
      role: t.about.timelineRoles[2],
      company: "University of Information Technology (WIT), Warsaw",
      note: t.about.timelineNotes[2],
    },
  ];

  return (
    <div className="px-6 md:px-10 pt-48 pb-24">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="flex flex-col gap-6">
          <h1 className="font-display font-extrabold text-display-lg text-paper leading-none">
            {t.about.title}
          </h1>
          <PhotoWithVideoHover
            src="/natalia.png"
            alt="Natalia Tomala"
            videoId="1175926062"
            imgClassName="opacity-80 mix-blend-luminosity"
            className="w-40"
          />
        </div>
        <div className="flex flex-col justify-end gap-6">
          <p className="font-body text-base text-smoke leading-relaxed">
            {t.about.bio1}
          </p>
          <p className="font-body text-base text-smoke leading-relaxed">
            {t.about.bio2}
          </p>
          <p className="font-body text-base text-smoke leading-relaxed">
            <mark className="bg-acid text-ink box-decoration-clone px-1">
              {t.about.bio3Highlight}
            </mark>
            {t.about.bio3Rest}
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://linkedin.com/in/natalia-mazińska/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-acid border border-acid px-4 py-2 hover:bg-acid hover:text-ink transition-all duration-200"
            >
              {t.about.linkedin}
            </a>
            <CopyEmailButton
              className="font-mono text-xs tracking-widest uppercase text-smoke border border-smoke/30 px-4 py-2 hover:border-acid hover:text-acid transition-all duration-200"
            >
              {t.about.email}
            </CopyEmailButton>
            <a
              href="/CV_Tomala_Natalia.pdf"
              download
              className="font-mono text-xs tracking-widest uppercase text-smoke border border-smoke/30 px-4 py-2 hover:border-acid hover:text-acid transition-all duration-200"
            >
              {t.about.cv}
            </a>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <span className="font-mono text-xs tracking-widest uppercase text-acid block mb-10">
          {t.about.experienceLabel}
        </span>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 py-8 border-t border-paper/10 group"
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
          {t.about.certificationsLabel}
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
            {t.about.letsWork}
          </p>
          <p className="font-body text-sm text-smoke">
            {t.about.letsWorkSub}
          </p>
        </div>
        <CopyEmailButton
          className="font-mono text-xs tracking-widest uppercase text-ink bg-acid px-6 py-3 hover:bg-paper transition-colors duration-200 shrink-0"
        >
          {t.about.getInTouch}
        </CopyEmailButton>
      </div>
    </div>
  );
}
