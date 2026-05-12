export type Locale = "en" | "pl";

export const LOCALES: Locale[] = ["en", "pl"];
export const DEFAULT_LOCALE: Locale = "en";

const enTranslations = {
    banner: {
      openToRoles: "Open to new roles",
      fulltime: "Full-time",
      productDesign: "Product Design",
      location: "Warsaw · Remote / Hybrid",
    },
    nav: {
      work: "Work",
      bragbook: "Bragbook",
      about: "About",
      cv: "CV ↓",
    },
    home: {
      chips: ["Product Designer", "Facilitator", "System Thinker"],
      heroLine1: "Hey, I'm",
      heroName: "Natalia.",
      heroDescription:
        "Designing high-impact features that convert user needs into business growth - grounded in research, built with systems thinking, measured by outcomes.",
      gog: "GOG.com - CD PROJEKT Group",
      twc: "CodeYourBrand / TwoContinents",
      location: "Warsaw, Poland · 3+ years XP",
      viewWork: "View Work",
      selectedWork: "Selected Work",
      allProjects: "All Projects",
      capabilities: [
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
      ],
      letsWork: "Let's work together.",
      letsWorkSub: "Open to Senior Product Design roles.",
      getInTouch: "Get in touch →",
    },
    work: {
      title: "Work",
      description:
        "Selected case studies. Each project starts with a real problem, runs through research and systems thinking, and ends with measurable outcomes.",
    },
    project: {
      backToWork: "← All Work",
      overview: "Overview",
      problem: "The Problem",
      process: "Process",
      ndaLabel: "NDA",
      ndaText:
        "Wireframes, sketches, and UI designs for this project are covered by a non-disclosure agreement and cannot be shared publicly. Happy to walk through the work in detail during a conversation.",
      livePreview: "Live Preview",
      sketches: "Lo-fi Sketches",
      designSystem: "Design System",
      designs: "Designs",
      desktop: "Desktop",
      mobile: "Mobile",
      outcome: "Outcome",
      nextProject: "Next Project",
      inProgressBadge: "In Progress",
    },
    about: {
      title: "About",
      bio1: "Product Designer. Facilitator. Mentor. 3+ years of experience.",
      bio2:
        "I design high-impact features that convert user needs into business growth. My work spans 0→1 products, mature platforms, gaming (GOG.com), and travel e-commerce - always grounded in research, built with systems thinking, and measured by real outcomes.",
      bio3Highlight:
        "I care about closing the gap between design and engineering",
      bio3Rest:
        " - through quality handoffs, weekly review sessions, and WCAG-compliant systems that developers can actually build from. I'm actively growing into Product Engineering - learning Next.js and TypeScript on the side. This portfolio is the first shipped result.",
      linkedin: "LinkedIn ↗",
      email: "Email ↗",
      cv: "CV ↓",
      experienceLabel: "Experience & Education",
      certificationsLabel: "Certifications",
      letsWork: "Let's work together.",
      letsWorkSub: "Open to Senior Product Design roles.",
      getInTouch: "Get in touch →",
      timelineNotes: [
        "TwoContinents platform - website redesign (+30% conversion), internal dashboard, design system (50+ components), research strategy.",
        "R&D team - 0→1 newsletter system (+20% CTR, +10% revenue), 10 user interviews, product card research, pre-launch validation.",
        "",
      ],
      timelineRoles: [
        "Product Designer",
        "Product Designer",
        "BA · Information Technology",
      ],
    },
    bragbook: {
      kicker: "Bragbook",
      title: "Things I'm\nproud of.",
      intro:
        "Initiatives, decisions, and shipped work that shaped my last 3.5 years. Tap a category to dig in.",
      initiativesLabel: "Initiatives shipped",
      areasLabel: "Areas of impact",
      yearsLabel: "Years",
      footerLine: "Want to talk about any of these?",
      footerLink: "Get in touch",
      downloadCv: "Download CV ↓",
      itemsPlural: "items",
      itemsSingular: "item",
    },
    footer: {
      copyright: "Natalia Tomala",
      linkedin: "LinkedIn ↗",
      email: "Email ↗",
    },
};

export type Translations = typeof enTranslations;

const plTranslations: Translations = {
    banner: {
      openToRoles: "Otwarta na nowe role",
      fulltime: "Pełen etat",
      productDesign: "Product Design",
      location: "Warszawa · Zdalnie / Hybrydowo",
    },
    nav: {
      work: "Projekty",
      bragbook: "Bragbook",
      about: "O mnie",
      cv: "CV ↓",
    },
    home: {
      chips: ["Product Designer", "Facylitatorka", "Myślicielka systemowa"],
      heroLine1: "Cześć, jestem",
      heroName: "Natalia.",
      heroDescription:
        "Projektuję funkcje, które zamieniają potrzeby użytkowników w realny wzrost biznesu - oparte na researchu, zbudowane z myślą systemową, mierzone wynikami.",
      gog: "GOG.com - CD PROJEKT Group",
      twc: "CodeYourBrand / TwoContinents",
      location: "Warszawa, Polska · 3+ lata doświadczenia",
      viewWork: "Zobacz projekty",
      selectedWork: "Wybrane projekty",
      allProjects: "Wszystkie projekty",
      capabilities: [
        {
          area: "Strategia produktu\ni research",
          items: [
            "Łączenie designu z celami biznesowymi",
            "User research i discovery",
            "Warsztaty i facylitacja",
            "Śledzenie metryk",
          ],
        },
        {
          area: "Design System\ni wdrażanie",
          items: [
            "Design systemy (50+ komponentów)",
            "Dostępność WCAG",
            "Współpraca z developerami",
            "Jakość handoffu",
          ],
        },
        {
          area: "Framework\ni delivery",
          items: [
            "Prototypowanie",
            "Workflowy Agile",
            "Figma · FigJam · Miro",
            "Webflow · HTML · CSS",
          ],
        },
        {
          area: "Dzielenie się\nwiedzą",
          items: [
            "Mentoring designerów",
            "Facylitacja warsztatów",
            "Komunikacja ze stakeholderami",
            "Kultura designu",
          ],
        },
      ],
      letsWork: "Zróbmy coś razem.",
      letsWorkSub: "Otwarta na role Senior Product Designer.",
      getInTouch: "Napisz do mnie →",
    },
    work: {
      title: "Projekty",
      description:
        "Wybrane case studies. Każdy projekt zaczyna się od realnego problemu, przechodzi przez research i myślenie systemowe, a kończy się mierzalnym rezultatem.",
    },
    project: {
      backToWork: "← Wszystkie projekty",
      overview: "Przegląd",
      problem: "Problem",
      process: "Proces",
      ndaLabel: "NDA",
      ndaText:
        "Wireframe'y, szkice i projekty UI tego projektu są objęte umową o poufności i nie mogą być publikowane. Chętnie omówię szczegóły w rozmowie.",
      livePreview: "Podgląd na żywo",
      sketches: "Szkice lo-fi",
      designSystem: "Design System",
      designs: "Projekty",
      desktop: "Desktop",
      mobile: "Mobile",
      outcome: "Rezultat",
      nextProject: "Następny projekt",
      inProgressBadge: "W trakcie",
    },
    about: {
      title: "O mnie",
      bio1: "Product Designer. Facylitatorka. Mentorka. Ponad 3 lata doświadczenia.",
      bio2:
        "Projektuję funkcje o dużym wpływie - takie, które zamieniają potrzeby użytkowników we wzrost biznesu. Moja praca obejmuje produkty 0→1, dojrzałe platformy, gaming (GOG.com) i e-commerce turystyczny - zawsze oparta na researchu, zbudowana z myślą systemową i mierzona realnymi wynikami.",
      bio3Highlight:
        "Zależy mi na zamknięciu luki między designem a engineeringiem",
      bio3Rest:
        " - przez jakościowe handoffy, cotygodniowe sesje review i systemy zgodne z WCAG, z których developerzy faktycznie mogą budować. Aktualnie kształtuję się w kierunku Product Engineeringu - uczę się Next.js i TypeScripta po godzinach. To portfolio jest pierwszym wdrożonym efektem.",
      linkedin: "LinkedIn ↗",
      email: "Email ↗",
      cv: "CV ↓",
      experienceLabel: "Doświadczenie i edukacja",
      certificationsLabel: "Certyfikaty",
      letsWork: "Zróbmy coś razem.",
      letsWorkSub: "Otwarta na role Senior Product Designer.",
      getInTouch: "Napisz do mnie →",
      timelineNotes: [
        "Platforma TwoContinents - redesign strony (+30% konwersji), wewnętrzny dashboard, design system (50+ komponentów), strategia researchu.",
        "Zespół R&D - system newsletterów 0→1 (+20% CTR, +10% przychodu), 10 wywiadów z użytkownikami, research kart produktowych, walidacja przed launchem.",
        "",
      ],
      timelineRoles: [
        "Product Designer",
        "Product Designer",
        "Licencjat · Informatyka",
      ],
    },
    bragbook: {
      kicker: "Bragbook",
      title: "Z czego jestem\ndumna.",
      intro:
        "Inicjatywy, decyzje i wdrożenia, które ukształtowały moje ostatnie 3.5 roku. Kliknij kategorię, żeby zobaczyć szczegóły.",
      initiativesLabel: "Wdrożonych inicjatyw",
      areasLabel: "Obszary wpływu",
      yearsLabel: "Lat",
      footerLine: "Chcesz pogadać o którymś z tych?",
      footerLink: "Napisz do mnie",
      downloadCv: "Pobierz CV ↓",
      itemsPlural: "pozycji",
      itemsSingular: "pozycja",
    },
    footer: {
      copyright: "Natalia Tomala",
      linkedin: "LinkedIn ↗",
      email: "Email ↗",
    },
};

export const translations: Record<Locale, Translations> = {
  en: enTranslations,
  pl: plTranslations,
};

export function t(locale: Locale): Translations {
  return translations[locale];
}
