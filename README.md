# Natalia Tomala — Portfolio

**Stack:** Next.js 15 · Tailwind CSS · shadcn/ui · TypeScript

**Design:** Bold editorial · Syne (display) · DM Sans (body) · Acid-yellow accent (#C8FF00) on near-black (#0A0A0A)

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
app/
  page.tsx              → Homepage (hero, selected work, stats, capabilities)
  about/page.tsx        → About (timeline, certs, CTA)
  work/page.tsx         → All case studies
  work/[slug]/page.tsx  → Individual case study

components/
  Nav.tsx               → Fixed navigation
  Footer.tsx            → Site footer
  ProjectCard.tsx       → Case study card used on work index

lib/
  projects.ts           → ⭐ All project data lives here — edit this first
  utils.ts              → cn() helper for shadcn

public/
  CV_Tomala_Natalia.pdf → Drop your CV PDF here
```

---

## Adding your own case studies

Edit `lib/projects.ts`. Each project has:

- `slug` — URL path (e.g. `"twocontinents-redesign"`)
- `title` — Use `\n` for a line break in the big headline
- `impact` — Array of `{ label, value }` for the stat grid
- `process` — Array of strings for the process steps
- `cover` — Hex colour for the placeholder tile (swap for a real image later)

---

## Adding shadcn components

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
# etc.
```

Components land in `components/ui/`.

---

## CV download

Place your PDF at `public/CV_Tomala_Natalia.pdf`. The nav and about page both link to it with a `download` attribute.

---

## Deployment

```bash
# Vercel (recommended)
npx vercel

# or
npm run build && npm run start
```
