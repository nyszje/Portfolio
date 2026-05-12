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

export const bragbookCategories: BragbookCategory[] = [
  {
    slug: "design-strategy",
    title: "Design Strategy & Systems",
    blurb:
      "Setting design direction, building scalable systems, and turning ad-hoc work into repeatable processes.",
    items: [
      {
        title: "Built Design System from scratch for TWC",
        year: "2024",
        description:
          "50+ components, atomic methodology - single source of truth for design and development.",
      },
      {
        title: "Created Case Study for TWC",
        year: "2025",
        description:
          "Internal artefact summarising research, decisions, and impact of the website redesign.",
      },
      {
        title: "Added Ideas Hub to TWC board",
        year: "2025",
        description:
          "Centralised place for product ideas, helping the team prioritise without losing context.",
      },
      {
        title: "Dashboard project for TWC",
        year: "2025-2026",
        description:
          "Discovery research + MVP design that cut a 30-minute manual flow down to 3 minutes.",
      },
    ],
  },
  {
    slug: "leadership",
    title: "Leadership & Team Support",
    blurb:
      "Mentoring designers, leading reviews, and creating the conditions for the team to grow.",
    items: [
      {
        title: "Mentoring 2 junior UX/UI designers",
        year: "2025",
        description:
          "Marta and Dominika - weekly 1:1s, design reviews, growth plans.",
      },
      {
        title: "Running UX/UI reviews",
        year: "2024-2026",
        description:
          "Monthly QA on shipped work - caught 40% more issues before they hit production.",
      },
      {
        title: "Onboarded Marta into Webflow / courses platform",
        year: "2025",
        description: "Transferred ownership of a key project to grow team capacity.",
      },
      {
        title: "Built Product Team board",
        year: "2025-2026",
        description: "Cross-functional planning artefact aligning design + engineering work.",
      },
    ],
  },
  {
    slug: "research",
    title: "Research & Discovery",
    blurb:
      "Bringing user data into decisions - interviews, surveys, usability tests, analytics.",
    items: [
      {
        title: "Product Discovery research for Dashboard",
        year: "2025",
        description:
          "7 employee interviews uncovered unofficial shortcuts pointing to deep friction in the flow.",
      },
      {
        title: "Introduced product metrics",
        year: "2025-2026",
        description:
          "Posthog + Hotjar + Maze. Turned guesswork into evidence-backed design decisions.",
      },
      {
        title: "TWC website survey via Posthog",
        year: "2025-2026",
        description:
          "Direct user voice surfaced 3 critical issues prioritised in next-quarter roadmap.",
      },
      {
        title: "Usability tests",
        year: "2026",
        description:
          "Moderated sessions validating new checkout flow before development started.",
      },
      {
        title: "Qualitative research A-Z",
        year: "2025",
        description:
          "Owned full cycle - planning, recruiting, interviews, synthesis, presenting findings.",
      },
    ],
  },
  {
    slug: "workshops",
    title: "Workshops & Knowledge Sharing",
    blurb:
      "Facilitating sessions that align teams and turn opinions into testable decisions.",
    items: [
      {
        title: "Internal workshops series",
        year: "2024-2026",
        description:
          "Multiple sessions covering design thinking, research methods, and component-driven design.",
      },
      {
        title: "Product Discovery workshop",
        year: "2025",
        description:
          "Two-day workshop with stakeholders - aligned the team on problem definition and MVP scope.",
      },
    ],
  },
  {
    slug: "prototyping",
    title: "Prototyping & Implementation",
    blurb:
      "Closing the gap between design and code through prototypes, tokens, and dev collaboration.",
    items: [
      {
        title: "Implemented Prototypes",
        year: "2024/2025",
        description:
          "High-fidelity interactive prototypes used in usability tests and stakeholder reviews.",
      },
    ],
  },
  {
    slug: "self-improvement",
    title: "Performance & Self-Improvement",
    blurb:
      "Investing in skills that compound - new tools, frameworks, and ways of working.",
    items: [
      {
        title: "Self-evaluation 2024/2025",
        year: "2024-2025",
        description:
          "Personal retrospective covering strengths, gaps, and growth plan for the year ahead.",
      },
      {
        title: "Vibe-coding (SELF IMPROVEMENT)",
        year: "2026",
        description:
          "Learning Next.js + TypeScript - this portfolio is the first shipped result.",
      },
    ],
  },
];

export const bragbookStats = {
  initiatives: bragbookCategories.reduce(
    (sum, c) => sum + c.items.length,
    0,
  ),
  categories: bragbookCategories.length,
  years: 4,
};
