import type { Locale } from "./i18n";

type TString = { en: string; pl: string };
type TStringArr = { en: string[]; pl: string[] };
type TImpact = { label: TString; value: string };

export type LocalizedProject = {
  slug: string;
  title: TString;
  subtitle: TString;
  company: string;
  year: string;
  tags: TStringArr;
  impact: TImpact[];
  cover: string;
  summary: TString;
  problem: TString;
  process: TStringArr;
  outcome: TString;
  role: TString;
  nda: boolean;
  wip: boolean;
  coverImage?: string;
  heroCover?: string;
  vimeoId?: string;
  images?: {
    designSystem?: string;
    desktop?: string;
    mobile?: string;
    sketches?: string[];
  };
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  year: string;
  tags: string[];
  impact: { label: string; value: string }[];
  cover: string;
  summary: string;
  problem: string;
  process: string[];
  outcome: string;
  role: string;
  nda: boolean;
  wip: boolean;
  coverImage?: string;
  heroCover?: string;
  vimeoId?: string;
  images?: {
    designSystem?: string;
    desktop?: string;
    mobile?: string;
    sketches?: string[];
  };
};

const localizedProjects: LocalizedProject[] = [
  {
    slug: "twocontinents-website",
    title: {
      en: "TwoContinents\nWebsite",
      pl: "TwoContinents\nWebsite",
    },
    subtitle: {
      en: "Full redesign of a Dubai travel e-commerce platform - design system from scratch, +20% conversion (goal was +10%).",
      pl: "Pełny redesign platformy e-commerce do podróży po Dubaju - design system od zera, +20% konwersji (cel: +10%).",
    },
    company: "CodeYourBrand",
    year: "2024-04/2026",
    tags: {
      en: ["UX Research", "Design System", "E-commerce", "WCAG Audit"],
      pl: ["UX Research", "Design System", "E-commerce", "Audyt WCAG"],
    },
    impact: [
      {
        label: {
          en: "Conversion increase",
          pl: "Wzrost konwersji",
        },
        value: "+20%",
      },
      {
        label: {
          en: "Error reduction via QA",
          pl: "Spadek błędów dzięki QA",
        },
        value: "−40%",
      },
    ],
    cover: "#131313",
    summary: {
      en: "TwoContinents is a travel company offering attractions, trips, and accommodation in Dubai. As the only designer in the company, I led a full website redesign from scratch - starting with a WCAG/heuristics audit, introducing analytics tools, building a custom design system, and delivering a research-backed product roadmap split into five stages.",
      pl: "TwoContinents to firma turystyczna oferująca atrakcje, wycieczki i noclegi w Dubaju. Jako jedyna projektantka w firmie poprowadziłam pełny redesign strony od zera - zaczynając od audytu WCAG i heurystycznego, wprowadzając narzędzia analityczne, budując własny design system i dostarczając research'em poparty roadmap produktowy podzielony na pięć etapów.",
    },
    problem: {
      en: "The biggest issue was the complete lack of user knowledge and data. There was no visibility into how the website was performing, where users were dropping off, or why. Without research or analytics, design decisions were guesswork - and the website lacked consistency, accessibility, and any scalable foundation.",
      pl: "Największym problemem był całkowity brak wiedzy o użytkownikach i danych. Nie było widoczności, jak działa strona, gdzie użytkownicy odpadają i dlaczego. Bez researchu i analityki decyzje projektowe były zgadywaniem - a strona pozbawiona była spójności, dostępności i skalowalnych fundamentów.",
    },
    process: {
      en: [
        "Conducted a full audit of the existing website - WCAG compliance, accessibility, information architecture, and heuristics - producing a detailed multi-page report with prioritised findings.",
        "Introduced Hotjar (behavioural tracking), Maze (usability testing), and surveys to fill the knowledge gap. A one-month Hotjar survey revealed concrete user pain points and gave stakeholders evidence to support design decisions.",
        "Benchmarked competitor platforms (Booking, Airbnb, wakacje.pl) to understand industry UX conventions and identify differentiation opportunities.",
        "Translated research insights into a five-stage product roadmap - each stage spanning 1–3 months - covering the most critical issues first: consistency, accessibility, and core usability.",
        "Built a custom Design System from scratch using atomic design methodology (atoms → molecules → components → organisms) - creating a single source of truth for design and development.",
        "Worked closely with developers throughout implementation, running monthly UX/UI QA reviews to catch errors early. As scope grew, hired and onboarded a new UX/UI designer to accelerate delivery.",
      ],
      pl: [
        "Przeprowadziłam pełny audyt istniejącej strony - zgodność z WCAG, dostępność, architektura informacji i heurystyki - tworząc szczegółowy wielostronicowy raport z priorytetyzowanymi wnioskami.",
        "Wprowadziłam Hotjar (śledzenie zachowań), Maze (testy użyteczności) i ankiety, żeby zasypać lukę wiedzy. Miesięczna ankieta w Hotjarze ujawniła konkretne bolączki użytkowników i dała stakeholderom dowody pod decyzje projektowe.",
        "Zrobiłam benchmark platform konkurencyjnych (Booking, Airbnb, wakacje.pl), żeby zrozumieć konwencje UX w branży i znaleźć możliwości wyróżnienia.",
        "Przekuła wnioski z researchu w pięcioetapowy roadmap produktowy - każdy etap to 1-3 miesiące - obejmujący najpierw najbardziej krytyczne kwestie: spójność, dostępność i podstawową użyteczność.",
        "Zbudowałam własny Design System od zera w metodologii atomic design (atomy → molekuły → komponenty → organizmy) - tworząc jedno źródło prawdy dla designu i developmentu.",
        "Ściśle współpracowałam z developerami przez całe wdrożenie, prowadząc miesięczne UX/UI QA review, żeby łapać błędy wcześnie. Gdy zakres się rozrastał, zrekrutowałam i wdrożyłam nową projektantkę UX/UI, żeby przyspieszyć dostarczanie.",
      ],
    },
    outcome: {
      en: "Conversion rates increased by 20% - double the original goal of +10% - driven by the refreshed checkout flow and improved UX. Developer errors reduced by 40% through systematic QA reviews. The design system is now a living foundation that grows with the product. The project is still in progress, with upcoming focus on advanced checkout flows, search/filtering, and further usability testing.",
      pl: "Konwersja wzrosła o 20% - dwa razy więcej niż pierwotny cel +10% - dzięki odświeżonemu flow checkoutu i lepszemu UX. Błędy developerskie spadły o 40% dzięki systematycznym QA review. Design system jest teraz żywym fundamentem, który rośnie razem z produktem. Projekt jest nadal w toku, kolejne kroki to zaawansowane flow checkoutu, wyszukiwanie/filtry i dalsze testy użyteczności.",
    },
    role: {
      en: "Lead Product Designer (sole designer) - WCAG audit, research strategy, design system, roadmap, developer collaboration, team hiring.",
      pl: "Lead Product Designer (jedyna projektantka) - audyt WCAG, strategia researchu, design system, roadmap, współpraca z developerami, rekrutacja zespołu.",
    },
    nda: false,
    wip: false,
    coverImage: "/cover-twocontinents-website.png",
    heroCover: "/cover_TWC.png",
    vimeoId: "1175917145",
    images: {
      designSystem: "/tc-design-system.png",
    },
  },
  {
    slug: "twocontinents-dashboard",
    title: {
      en: "TwoContinents\nDashboard",
      pl: "TwoContinents\nDashboard",
    },
    subtitle: {
      en: "Replacing a 30-minute manual process with a 3-minute automated flow - through discovery research and MVP design.",
      pl: "Zastąpienie 30-minutowego procesu manualnego 3-minutowym automatycznym flow - przez discovery research i design MVP.",
    },
    company: "CodeYourBrand",
    year: "2025-04/2026",
    tags: {
      en: ["B2B", "Dashboard", "Product Discovery", "Automation"],
      pl: ["B2B", "Dashboard", "Product Discovery", "Automatyzacja"],
    },
    impact: [
      {
        label: { en: "Task time reduction", pl: "Skrócenie czasu zadania" },
        value: "30→3 min",
      },
      {
        label: { en: "Users interviewed", pl: "Przeprowadzone wywiady" },
        value: "7",
      },
    ],
    cover: "#0F0F0F",
    summary: {
      en: "The original tours flow was overly complex and fully manual - making it slow and error-prone, especially for new employees. Through product discovery research and a focused MVP, I redesigned it into a mostly automated flow that reduced average task time from 30 minutes to just 3.",
      pl: "Oryginalny flow zarządzania wycieczkami był zbyt złożony i w pełni manualny - powolny i podatny na błędy, szczególnie dla nowych pracowników. Przez product discovery research i skupiony MVP zaprojektowałam go na nowo w niemal w pełni zautomatyzowany flow, który skrócił średni czas zadania z 30 minut do 3.",
    },
    problem: {
      en: "The original tour management flow was slow, error-prone, and fully manual - making daily operations harder, especially for new employees who needed hand-holding from experienced ones. The process was a bottleneck affecting onboarding speed, training time, and task accuracy across the team.",
      pl: "Oryginalny flow zarządzania wycieczkami był powolny, podatny na błędy i w pełni manualny - utrudniał codzienne operacje, szczególnie nowym pracownikom potrzebującym wsparcia od doświadczonych kolegów. Proces był wąskim gardłem wpływającym na tempo onboardingu, czas szkoleń i dokładność zadań w całym zespole.",
    },
    process: {
      en: [
        "Ran product discovery research - 1-on-1 interviews with 7 employees to understand where the existing flow broke down. Key insight: users had developed unofficial shortcuts just to get through the process, signalling deep friction in the designed flow.",
        "Created a User Flow diagram based on interview analysis to map the critical path and identify where automation could replace manual steps.",
        "Produced quick sketches in collaboration with developers to align on what was technically feasible, focusing only on the most essential components.",
        "Chose to build on the shadcn design system - giving the engineering team familiar, well-documented components to work from and keeping the design-to-dev gap minimal.",
        "Created low-fidelity wireframes for the engineering team to scope effort and validate the new flow before moving to UI. (Full wireframes and UI designs are under NDA.)",
        "Went through several concepts to identify the critical steps a user needs to create a tour and mark it as done - stripping everything non-essential from the flow.",
      ],
      pl: [
        "Przeprowadziłam product discovery research - wywiady 1-na-1 z 7 pracownikami, żeby zrozumieć, gdzie istniejący flow się sypie. Kluczowe odkrycie: użytkownicy wypracowali nieoficjalne skróty, żeby w ogóle przejść przez proces - sygnał głębokiej friction w zaprojektowanym flow.",
        "Stworzyłam diagram User Flow oparty na analizie wywiadów, żeby zmapować ścieżkę krytyczną i zidentyfikować, gdzie automatyzacja może zastąpić ręczne kroki.",
        "Zrobiłam szybkie szkice we współpracy z developerami, żeby uzgodnić, co jest technicznie wykonalne, skupiając się tylko na najbardziej istotnych komponentach.",
        "Wybrałam shadcn design system jako fundament - dając zespołowi engineering znane, dobrze udokumentowane komponenty i minimalizując dystans design-do-dev.",
        "Stworzyłam wireframe'y low-fi dla zespołu engineering, żeby oszacować wysiłek i zwalidować nowy flow przed przejściem do UI. (Pełne wireframe'y i projekty UI są pod NDA.)",
        "Przeszłam przez kilka koncepcji, żeby zidentyfikować krytyczne kroki, których użytkownik potrzebuje, by stworzyć wycieczkę i oznaczyć ją jako zrobioną - eliminując z flow wszystko, co zbędne.",
      ],
    },
    outcome: {
      en: "Average task time dropped from 30 minutes to 3 minutes. New employees can now complete tour creation independently, without guidance from senior staff - reducing training time and increasing task accuracy across the team.",
      pl: "Średni czas zadania spadł z 30 minut do 3 minut. Nowi pracownicy mogą teraz samodzielnie tworzyć wycieczki, bez wsparcia od doświadczonych kolegów - skracając czas szkoleń i zwiększając dokładność zadań w całym zespole.",
    },
    role: {
      en: "Product Designer - discovery research, user interviews, user flow, wireframing, UI design (under NDA), developer collaboration.",
      pl: "Product Designer - discovery research, wywiady, user flow, wireframing, projektowanie UI (pod NDA), współpraca z developerami.",
    },
    nda: true,
    wip: false,
    coverImage: "/cover-twocontinents-dashboard.png",
    heroCover: "/cover_dashboard.png",
  },
  {
    slug: "gog-newsletter-system",
    title: {
      en: "GOG.com",
      pl: "GOG.com",
    },
    subtitle: {
      en: "Email templates, landing pages, and platform features for a global gaming platform - +10% CTR, +5% revenue.",
      pl: "Szablony emaili, landing pages i funkcje platformy dla globalnej platformy gamingowej - +10% CTR, +5% przychodu.",
    },
    company: "GOG.com · CD PROJEKT Group",
    year: "2023–2024",
    tags: {
      en: ["Email Design", "Landing Pages", "Research", "A/B Testing"],
      pl: ["Projektowanie emaili", "Landing Pages", "Research", "Testy A/B"],
    },
    impact: [
      {
        label: { en: "Email CTR increase", pl: "Wzrost CTR emaili" },
        value: "+12%",
      },
      {
        label: { en: "Unsubscribe reduction", pl: "Spadek wypisów" },
        value: "−10%",
      },
    ],
    cover: "#0D0D0D",
    summary: {
      en: "At GOG.com (CD PROJEKT Group), I worked across marketing emails, contest landing pages, system email redesigns, and website/GOG GALAXY platform features. My first year and a half as a Product Designer - learning to navigate projects end-to-end, from discovery through delivery.",
      pl: "W GOG.com (CD PROJEKT Group) pracowałam nad emailami marketingowymi, landing page'ami konkursowymi, redesignem maili systemowych i funkcjami platformy website/GOG GALAXY. Moje pierwsze półtora roku jako Product Designer - nauka prowadzenia projektów end-to-end, od discovery po delivery.",
    },
    problem: {
      en: "Existing marketing emails lacked visual impact and weren't driving engagement or revenue. Separately, GOG needed compelling landing pages for user contests - including one for The Thaumaturge RPG giveaway - that could capture a game's atmosphere while motivating users to participate.",
      pl: "Istniejące emaile marketingowe nie miały wizualnego impactu i nie napędzały zaangażowania ani przychodu. Osobno GOG potrzebował angażujących landing page'y do konkursów dla użytkowników - w tym do giveaway'a The Thaumaturge RPG - takich, które oddałyby atmosferę gry, jednocześnie motywując do udziału.",
    },
    process: {
      en: [
        "Analysed performance metrics from past email campaigns, benchmarked competitor email designs, and reviewed GOG's brand identity and tone to define a design direction.",
        "Designed a series of visually consistent, modular email templates - optimised for readability, strong CTAs, and brand alignment - built for scalability across future campaigns.",
        "For the Thaumaturge Giveaway landing page: studied the game's visual style and narrative tone, reviewed contest landing page benchmarks, and consulted with project owners to align on brand goals and player expectations.",
        "Designed the Thaumaturge landing page to translate the game's dark, mysterious atmosphere into the UI - structuring large text blocks into digestible sections while weaving visuals that supported narrative immersion.",
        "Conducted first qualitative research and usability testing sessions with real users. Participated in A/B tests to validate design decisions. Gained hands-on experience with Webflow, GetResponse, and SalesManago.",
      ],
      pl: [
        "Przeanalizowałam metryki z poprzednich kampanii emailowych, zrobiłam benchmark projektów emaili konkurencji i przeanalizowałam identyfikację wizualną oraz ton GOG, żeby zdefiniować kierunek projektowy.",
        "Zaprojektowałam serię spójnych wizualnie, modułowych szablonów emaili - zoptymalizowanych pod czytelność, mocne CTA i zgodność z brandem - skalowalnych pod przyszłe kampanie.",
        "Dla landing page'a Thaumaturge Giveaway: przeanalizowałam styl wizualny i narracyjny ton gry, zrobiłam benchmark landingów konkursowych i konsultowałam się z project ownerami, żeby ustalić cele brandowe i oczekiwania graczy.",
        "Zaprojektowałam landing Thaumaturge tak, żeby przełożyć mroczny, tajemniczy klimat gry na UI - dzieląc duże bloki tekstu na strawne sekcje i wplatając wizualizacje wspierające immersję narracyjną.",
        "Przeprowadziłam pierwsze sesje badań jakościowych i testów użyteczności z realnymi użytkownikami. Brałam udział w testach A/B walidujących decyzje projektowe. Zdobyłam hands-on doświadczenie z Webflow, GetResponse i SalesManago.",
      ],
    },
    outcome: {
      en: "This initiative was validated through A/B testing and led directly to: +12% increase in Click-Through Rate (CTR), 10% reduction in unsubscribes, and a positive increase in gross revenue. The Thaumaturge landing page successfully reflected the game's tone and drove high contest participation. Introduced a research and testing culture that shaped how the team made design decisions going forward.",
      pl: "Inicjatywa została zwalidowana przez testy A/B i przyniosła: +12% wzrostu Click-Through Rate (CTR), 10% spadku wypisów oraz pozytywny wzrost przychodu brutto. Landing Thaumaturge skutecznie oddał ton gry i napędził wysoki udział w konkursie. Wprowadziłam kulturę researchu i testów, która ukształtowała, jak zespół podejmował decyzje projektowe.",
    },
    role: {
      en: "Product Designer - email design, landing pages, usability testing, A/B testing, platform features (website & GOG GALAXY).",
      pl: "Product Designer - projektowanie emaili, landing pages, testy użyteczności, testy A/B, funkcje platformy (website i GOG GALAXY).",
    },
    nda: false,
    wip: false,
    coverImage: "/cover-gog.png",
    heroCover: "/cover-gog.png",
  },
];

function resolve(p: LocalizedProject, locale: Locale): Project {
  return {
    ...p,
    title: p.title[locale],
    subtitle: p.subtitle[locale],
    tags: p.tags[locale],
    impact: p.impact.map((i) => ({ label: i.label[locale], value: i.value })),
    summary: p.summary[locale],
    problem: p.problem[locale],
    process: p.process[locale],
    outcome: p.outcome[locale],
    role: p.role[locale],
  };
}

export function getProjects(locale: Locale): Project[] {
  return localizedProjects.map((p) => resolve(p, locale));
}

export function getProject(slug: string, locale: Locale): Project | undefined {
  const p = localizedProjects.find((x) => x.slug === slug);
  return p ? resolve(p, locale) : undefined;
}

export function getAllSlugs(): string[] {
  return localizedProjects.map((p) => p.slug);
}
