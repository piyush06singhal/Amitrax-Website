# AmitraX — Digital studio website

Marketing site for **AmitraX**, an independent digital studio creating clear websites, useful web applications, and thoughtful digital experiences.

The current site is an editorial, image-led studio experience. It uses original local SVG artwork and labelled self-initiated concept studies rather than invented client work, stock photography, or unverified results.

## Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4
- Motion for route transitions and interaction primitives
- React Router v7
- Three.js remains available for the small number of retained spatial/engineering experiments

## Getting started

```bash
npm install
npm run dev      # start Vite at http://localhost:3000
npm run lint     # TypeScript check
npm run build    # production build
npm start        # serve dist/ + contact API
npm run preview  # build, then serve production output
```

## Contact form

The contact form posts to `/api/contact`. The server forwards messages through [Resend](https://resend.com); the API key is server-side only.

- `npm run dev` — Vite middleware serves the route locally.
- `npm start` — `server.mjs` serves the production build and API.
- **Vercel** — `api/contact.mjs` runs as a serverless function.

Configure `.env` using `.env.example`:

```bash
RESEND_API_KEY=re_...
CONTACT_TO=your-resend-account-email@gmail.com
RESEND_FROM="AmitraX Website <onboarding@resend.dev>"
```

When using `onboarding@resend.dev` without a verified domain, Resend limits delivery to the account owner's email. Verify a domain before sending to arbitrary recipients.

## Current routes

| Route | Purpose |
| --- | --- |
| `/` | Editorial homepage with animated hero, studio concepts, capabilities, process, philosophy, and CTA |
| `/products` | Work page containing the Fieldnotes and Daylight self-initiated concept studies |
| `/capabilities` | Image-led overview of what AmitraX can create |
| `/services` | Filterable service catalogue with accessible expandable details |
| `/architecture` | Interactive illustrated project process |
| `/about` | Studio story, working principles, and audiences |
| `/contact` | Conversation illustration and accessible project inquiry form |

The navigation labels the public destinations as **Home, Work, Services, Capabilities, Process, and About**. The `/products` and `/architecture` paths are retained for compatibility with existing links.

## Project structure

```text
src/
  pages/                    # route-level page compositions
  components/
    hero/                   # homepage hero, local artwork, process drawing
    sections/               # live services, capabilities, process, about, contact sections
    studio/                 # original studio illustration components
    motion/                 # Reveal, scroll progress, magnetic and tilt helpers
    navigation/             # navbar, scroll restoration
    footer/                 # compact global footer
    ui/                     # buttons, logo, PageIntro, cursor, shared UI
  data/
    studioProcess.ts        # canonical four-stage process shared by Home and Process
    capabilities.ts         # capability content
    services.ts             # service content
    company.ts              # company narrative and identity
public/                     # static public assets, when needed
DESIGN-AUDIT.md             # final design, duplication, asset, and QA audit
```

The previous product-lab implementation was removed after the editorial migration. Unused product cards, product detail routes, legacy media viewers, product data, and product-specific 3D sections are no longer part of the repository. The current `/products` page is intentionally a concept-led Work page.

## Design and motion

- Shared editorial primitives: `studio-container`, `studio-section`, `studio-kicker`, `studio-title`, `studio-copy`, and `Reveal`.
- Original local SVG artwork is used for the hero, Fieldnotes, Daylight, workbench, contact conversation, services, and process scenes.
- Hero motion includes spatial drift, restrained aurora movement, desktop pointer depth, and a pause control.
- Scroll reveals use IntersectionObserver and settle through opacity, blur, scale, and vertical motion.
- A lightweight scroll-progress indicator provides orientation on longer pages.
- Reduced-motion preferences disable continuous CSS, canvas, Three.js, cursor, route, and reveal motion where applicable.
- Continuous scenes pause when not visible where the implementation supports it.

Motion is used to guide attention and explain the work. It is not used as a substitute for content, proof, or layout hierarchy.

## Content policy

The Work page contains self-initiated concept studies. They are labelled as concepts and do not imply live products, client engagements, performance results, or testimonials. Replace them with approved real project material only when the relevant assets and claims are available.

## Verification

Run the following before shipping:

```bash
npm run lint
npm run build
git diff --check
```

Also verify in a browser at narrow and wide viewports:

- Navigation open/close, Escape, focus restoration, and keyboard traversal.
- Both themes and `prefers-reduced-motion`.
- Hero pause control and scroll-triggered reveals.
- Services filter and accordion state.
- Process stage selection and mobile fallback.
- Contact form labels, errors, success state, and API delivery in the deployment environment.
- 404 recovery links and back-to-top behaviour.

The production build may report a non-blocking bundle-size warning while retained Motion/Three.js modules are included. If performance becomes a priority, split retained spatial experiments using route-level dynamic imports and measure real Core Web Vitals before and after.
