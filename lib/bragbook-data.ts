import type { Locale } from "./i18n";

type T = { en: string; pl: string };

export type LocalizedBragbookItem = {
  title: T;
  year: string;
  description?: T;
};

export type LocalizedBragbookCategory = {
  slug: string;
  title: T;
  blurb: T;
  items: LocalizedBragbookItem[];
};

export type BragbookItem = {
  title: string;
  year: string;
  description?: string;
};

export type BragbookCategory = {
  slug: string;
  title: string;
  blurb: string;
  items: BragbookItem[];
};

const localizedCategories: LocalizedBragbookCategory[] = [
  {
    slug: "design-strategy",
    title: {
      en: "Design Strategy & Systems",
      pl: "Strategia i systemy projektowe",
    },
    blurb: {
      en: "Setting design direction, building scalable systems, and turning ad-hoc work into repeatable processes.",
      pl: "Wyznaczanie kierunku projektowego, budowanie skalowalnych systemów i zmienianie ad-hoc'owej pracy w powtarzalne procesy.",
    },
    items: [
      {
        title: {
          en: "Built Design System from scratch for TWC",
          pl: "Zbudowanie Design Systemu od zera dla TWC",
        },
        year: "2024",
        description: {
          en: "50+ components, atomic methodology - single source of truth for design and development.",
          pl: "50+ komponentów, metodologia atomic design - jedno źródło prawdy dla designu i developmentu.",
        },
      },
      {
        title: {
          en: "Created Ideas Hub",
          pl: "Stworzenie Ideas Hub",
        },
        year: "2025",
        description: {
          en: "Centralised place for product ideas, helping the team prioritise without losing context.",
          pl: "Scentralizowane miejsce na pomysły produktowe, pomagające zespołowi priorytetyzować bez utraty kontekstu.",
        },
      },
      {
        title: {
          en: "Dashboard project for TWC",
          pl: "Projekt Dashboardu dla TWC",
        },
        year: "2025-2026",
        description: {
          en: "Discovery research + MVP design that cut a 30-minute manual flow down to 3 minutes.",
          pl: "Discovery research i design MVP, które skróciły 30-minutowy ręczny proces do 3 minut.",
        },
      },
    ],
  },
  {
    slug: "leadership",
    title: {
      en: "Leadership & Team Support",
      pl: "Liderowanie i wsparcie zespołu",
    },
    blurb: {
      en: "Mentoring designers, leading reviews, and creating the conditions for the team to grow.",
      pl: "Mentoring designerów, prowadzenie review i tworzenie warunków do rozwoju zespołu.",
    },
    items: [
      {
        title: {
          en: "Mentoring 2 junior UX/UI designers",
          pl: "Mentoring 2 juniorek UX/UI",
        },
        year: "2025",
        description: {
          en: "Marta and Dominika - weekly 1:1s, design reviews, growth plans.",
          pl: "Marta i Dominika - cotygodniowe 1:1, design review, plany rozwojowe.",
        },
      },
      {
        title: {
          en: "Running UX/UI reviews",
          pl: "Prowadzenie review UX/UI",
        },
        year: "2024-2026",
        description: {
          en: "Monthly QA on shipped work - caught 40% more issues before they hit production.",
          pl: "Miesięczne QA wdrażanych prac - wyłapywanie o 40% więcej błędów zanim trafią na produkcję.",
        },
      },
      {
        title: {
          en: "Onboarded junior UX/UI Designer into Webflow / courses platform",
          pl: "Wdrożenie junior UX/UI Designerki do projektu Webflow / platforma kursów",
        },
        year: "2025",
        description: {
          en: "Transferred ownership of a key project to grow team capacity.",
          pl: "Przekazanie ownership'u kluczowego projektu, żeby zwiększyć moce przerobowe zespołu.",
        },
      },
      {
        title: {
          en: "Built Product Team board",
          pl: "Stworzenie boarda dla całego Product Teamu",
        },
        year: "2025-2026",
        description: {
          en: "Cross-functional planning artefact aligning design + engineering work.",
          pl: "Artefakt do cross-funkcyjnego planowania, synchronizujący pracę designu i engineeringu.",
        },
      },
    ],
  },
  {
    slug: "research",
    title: {
      en: "Research & Discovery",
      pl: "Research i Discovery",
    },
    blurb: {
      en: "Bringing user data into decisions - interviews, surveys, usability tests, analytics.",
      pl: "Wprowadzanie danych użytkowników do decyzji - wywiady, ankiety, testy użyteczności, analityka.",
    },
    items: [
      {
        title: {
          en: "Product Discovery research for Dashboard",
          pl: "Product Discovery research dla Dashboardu",
        },
        year: "2025",
        description: {
          en: "7 employee interviews uncovered unofficial shortcuts pointing to deep friction in the flow.",
          pl: "7 wywiadów z pracownikami odsłoniło nieoficjalne skróty wskazujące na głęboką friction we flow.",
        },
      },
      {
        title: {
          en: "Introduced product metrics",
          pl: "Wprowadzenie metryk produktowych",
        },
        year: "2025-2026",
        description: {
          en: "Posthog + Hotjar + Maze. Turned guesswork into evidence-backed design decisions.",
          pl: "Posthog + Hotjar + Maze. Zamiana zgadywania na decyzje projektowe oparte na danych.",
        },
      },
      {
        title: {
          en: "TWC website survey via Posthog",
          pl: "Ankieta strony TWC przez Posthog",
        },
        year: "2025-2026",
        description: {
          en: "Direct user voice surfaced 3 critical issues prioritised in next-quarter roadmap.",
          pl: "Bezpośredni głos użytkowników ujawnił 3 krytyczne problemy spriorytetyzowane w roadmapie na kolejny kwartał.",
        },
      },
      {
        title: {
          en: "Usability tests",
          pl: "Testy użyteczności",
        },
        year: "2026",
        description: {
          en: "Moderated sessions validating new checkout flow before development started.",
          pl: "Moderowane sesje walidujące nowy flow checkoutu przed rozpoczęciem developmentu.",
        },
      },
      {
        title: {
          en: "Qualitative research A-Z",
          pl: "Badania jakościowe od A do Z",
        },
        year: "2025",
        description: {
          en: "Owned full cycle - planning, recruiting, interviews, synthesis, presenting findings.",
          pl: "Pełen cykl - planowanie, rekrutacja, wywiady, synteza, prezentacja wniosków.",
        },
      },
    ],
  },
  {
    slug: "workshops",
    title: {
      en: "Workshops & Knowledge Sharing",
      pl: "Warsztaty i dzielenie się wiedzą",
    },
    blurb: {
      en: "Facilitating sessions that align teams and turn opinions into testable decisions.",
      pl: "Prowadzenie sesji, które synchronizują zespoły i zamieniają opinie na testowalne decyzje.",
    },
    items: [
      {
        title: {
          en: "Internal workshops series",
          pl: "Seria warsztatów wewnętrznych",
        },
        year: "2024-2026",
        description: {
          en: "Multiple sessions covering design thinking, research methods, and component-driven design.",
          pl: "Wiele sesji obejmujących design thinking, metody researchu i component-driven design.",
        },
      },
      {
        title: {
          en: "Product Discovery workshop",
          pl: "Warsztaty Product Discovery",
        },
        year: "2025",
        description: {
          en: "Two-day workshop with stakeholders - aligned the team on problem definition and MVP scope.",
          pl: "Dwudniowe warsztaty ze stakeholderami - synchronizacja zespołu wokół definicji problemu i zakresu MVP.",
        },
      },
    ],
  },
  {
    slug: "prototyping",
    title: {
      en: "Prototyping & Implementation",
      pl: "Prototypowanie i wdrażanie",
    },
    blurb: {
      en: "Closing the gap between design and code through prototypes, tokens, and dev collaboration.",
      pl: "Zamykanie luki między designem a kodem przez prototypy, tokeny i współpracę z developerami.",
    },
    items: [
      {
        title: {
          en: "Implemented Prototypes",
          pl: "Wdrożenie prototypów",
        },
        year: "2024/2025",
        description: {
          en: "High-fidelity interactive prototypes used in usability tests and stakeholder reviews.",
          pl: "Wysokiej jakości interaktywne prototypy używane w testach użyteczności i review ze stakeholderami.",
        },
      },
    ],
  },
  {
    slug: "self-improvement",
    title: {
      en: "Performance & Self-Improvement",
      pl: "Performance i samorozwój",
    },
    blurb: {
      en: "Investing in skills that compound - new tools, frameworks, and ways of working.",
      pl: "Inwestycja w umiejętności o efekcie procentu składanego - nowe narzędzia, frameworki i sposoby pracy.",
    },
    items: [
      {
        title: {
          en: "Self-evaluation 2024/2025",
          pl: "Ocena własnej pracy 2024/2025",
        },
        year: "2024-2025",
        description: {
          en: "Personal retrospective covering strengths, gaps, and growth plan for the year ahead.",
          pl: "Osobista retrospektywa pokrywająca mocne strony, luki i plan rozwojowy na kolejny rok.",
        },
      },
      {
        title: {
          en: "Vibe-coding",
          pl: "Vibe-coding",
        },
        year: "2026",
        description: {
          en: "Learning Next.js + TypeScript - this portfolio is the first shipped result.",
          pl: "Nauka Next.js i TypeScript - to portfolio jest pierwszym wdrożonym efektem.",
        },
      },
    ],
  },
];

function resolveCategory(
  c: LocalizedBragbookCategory,
  locale: Locale,
): BragbookCategory {
  return {
    slug: c.slug,
    title: c.title[locale],
    blurb: c.blurb[locale],
    items: c.items.map((i) => ({
      title: i.title[locale],
      year: i.year,
      description: i.description?.[locale],
    })),
  };
}

export function getBragbookCategories(locale: Locale): BragbookCategory[] {
  return localizedCategories.map((c) => resolveCategory(c, locale));
}

export function getBragbookStats() {
  return {
    initiatives: localizedCategories.reduce(
      (sum, c) => sum + c.items.length,
      0,
    ),
    categories: localizedCategories.length,
    years: "3.5",
  };
}
