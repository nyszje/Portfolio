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

export const projects: Project[] = [
  {
    slug: "twocontinents-website",
    title: "TwoContinents\nWebsite",
    subtitle: "Full redesign of a Dubai travel e-commerce platform — design system from scratch, +20% conversion (goal was +10%).",
    company: "CodeYourBrand",
    year: "2024–Now",
    tags: ["UX Research", "Design System", "E-commerce", "WCAG Audit"],
    impact: [
      { label: "Conversion increase", value: "+20%" },
      { label: "Error reduction via QA", value: "−40%" },
    ],
    cover: "#131313",
    summary:
      "TwoContinents is a travel company offering attractions, trips, and accommodation in Dubai. As the only designer in the company, I led a full website redesign from scratch — starting with a WCAG/heuristics audit, introducing analytics tools, building a custom design system, and delivering a research-backed product roadmap split into five stages.",
    problem:
      "The biggest issue was the complete lack of user knowledge and data. There was no visibility into how the website was performing, where users were dropping off, or why. Without research or analytics, design decisions were guesswork — and the website lacked consistency, accessibility, and any scalable foundation.",
    process: [
      "Conducted a full audit of the existing website — WCAG compliance, accessibility, information architecture, and heuristics — producing a detailed multi-page report with prioritised findings.",
      "Introduced Hotjar (behavioural tracking), Maze (usability testing), and surveys to fill the knowledge gap. A one-month Hotjar survey revealed concrete user pain points and gave stakeholders evidence to support design decisions.",
      "Benchmarked competitor platforms (Booking, Airbnb, wakacje.pl) to understand industry UX conventions and identify differentiation opportunities.",
      "Translated research insights into a five-stage product roadmap — each stage spanning 1–3 months — covering the most critical issues first: consistency, accessibility, and core usability.",
      "Built a custom Design System from scratch using atomic design methodology (atoms → molecules → components → organisms) — creating a single source of truth for design and development.",
      "Worked closely with developers throughout implementation, running monthly UX/UI QA reviews to catch errors early. As scope grew, hired and onboarded a new UX/UI designer to accelerate delivery.",
    ],
    outcome:
      "Conversion rates increased by 20% — double the original goal of +10% — driven by the refreshed checkout flow and improved UX. Developer errors reduced by 50% through systematic QA reviews. The design system is now a living foundation that grows with the product. The project is still in progress, with upcoming focus on advanced checkout flows, search/filtering, and further usability testing.",
    role: "Lead Product Designer (sole designer) — WCAG audit, research strategy, design system, roadmap, developer collaboration, team hiring.",
    nda: false,
    wip: false,
    coverImage: "/cover-twocontinents-website.png",
    heroCover: "/hero-twocontinents-website.png",
    vimeoId: "1175917145",
    images: {
      designSystem: "/tc-design-system.png",
    },
  },
  {
    slug: "twocontinents-dashboard",
    title: "TwoContinents\nDashboard",
    subtitle: "Replacing a 30-minute manual process with a 3-minute automated flow — through discovery research and MVP design.",
    company: "CodeYourBrand",
    year: "2025–Now",
    tags: ["Dashboard", "Product Discovery", "Automation", "shadcn/ui"],
    impact: [
      { label: "Task time reduction", value: "30→3 min" },
      { label: "Users interviewed", value: "7" },
    ],
    cover: "#0F0F0F",
    summary:
      "The original tours flow was overly complex and fully manual — making it slow and error-prone, especially for new employees. Through product discovery research and a focused MVP, I redesigned it into a mostly automated flow that reduced average task time from 30 minutes to just 3.",
    problem:
      "The original tour management flow was slow, error-prone, and fully manual — making daily operations harder, especially for new employees who needed hand-holding from experienced ones. The process was a bottleneck affecting onboarding speed, training time, and task accuracy across the team.",
    process: [
      "Ran product discovery research — 1-on-1 interviews with 7 employees to understand where the existing flow broke down. Key insight: users had developed unofficial shortcuts just to get through the process, signalling deep friction in the designed flow.",
      "Created a User Flow diagram based on interview analysis to map the critical path and identify where automation could replace manual steps.",
      "Produced quick sketches in collaboration with developers to align on what was technically feasible, focusing only on the most essential components.",
      "Chose to build on the shadcn design system — giving the engineering team familiar, well-documented components to work from and keeping the design-to-dev gap minimal.",
      "Created low-fidelity wireframes for the engineering team to scope effort and validate the new flow before moving to UI. (Full wireframes and UI designs are under NDA.)",
      "Went through several concepts to identify the critical steps a user needs to create a tour and mark it as done — stripping everything non-essential from the flow.",
    ],
    outcome:
      "Average task time dropped from 30 minutes to 3 minutes. New employees can now complete tour creation independently, without guidance from senior staff — reducing training time and increasing task accuracy across the team.",
    role: "Product Designer — discovery research, user interviews, user flow, wireframing, UI design (under NDA), developer collaboration.",
    nda: true,
    wip: true,
    coverImage: "/cover-twocontinents-dashboard.png",
    heroCover: "/hero-twocontinents-dashboard.png",
    images: {
      sketches: ["/dash-sketch-1.jpg", "/dash-sketch-2.jpg", "/dash-sketch-3.jpg"],
    },
  },
  {
    slug: "gog-newsletter-system",
    title: "GOG.com\nDesign Work",
    subtitle: "Email templates, landing pages, and platform features for a global gaming platform — +10% CTR, +5% revenue.",
    company: "GOG.com · CD PROJEKT Group",
    year: "2023–2024",
    tags: ["Email Design", "Landing Pages", "Research", "A/B Testing"],
    impact: [
      { label: "Email CTR increase", value: "+10%" },
      { label: "Revenue growth", value: "+5%" },
    ],
    cover: "#0D0D0D",
    summary:
      "At GOG.com (CD PROJEKT Group), I worked across marketing emails, contest landing pages, system email redesigns, and website/GOG GALAXY platform features. My first year and a half as a Product Designer — learning to navigate projects end-to-end, from discovery through delivery.",
    problem:
      "Existing marketing emails lacked visual impact and weren't driving engagement or revenue. Separately, GOG needed compelling landing pages for user contests — including one for The Thaumaturge RPG giveaway — that could capture a game's atmosphere while motivating users to participate.",
    process: [
      "Analysed performance metrics from past email campaigns, benchmarked competitor email designs, and reviewed GOG's brand identity and tone to define a design direction.",
      "Designed a series of visually consistent, modular email templates — optimised for readability, strong CTAs, and brand alignment — built for scalability across future campaigns.",
      "For the Thaumaturge Giveaway landing page: studied the game's visual style and narrative tone, reviewed contest landing page benchmarks, and consulted with project owners to align on brand goals and player expectations.",
      "Designed the Thaumaturge landing page to translate the game's dark, mysterious atmosphere into the UI — structuring large text blocks into digestible sections while weaving visuals that supported narrative immersion.",
      "Conducted first qualitative research and usability testing sessions with real users. Participated in A/B tests to validate design decisions. Gained hands-on experience with Webflow, GetResponse, and SalesManago.",
    ],
    outcome:
      "New email templates increased CTR by 10% and revenue by 5%. The Thaumaturge landing page successfully reflected the game's tone and drove high contest participation. Introduced a research and testing culture that shaped how the team made design decisions going forward.",
    role: "Product Designer — email design, landing pages, usability testing, A/B testing, platform features (website & GOG GALAXY).",
    nda: false,
    wip: false,
    coverImage: "/cover-gog.png",
    heroCover: "/cover-gog.png",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
