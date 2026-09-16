# AmitraX — Website

Marketing site for **AmitraX Technologies Inc.** — engineering services, architecture, and the AmitraX product lab.

## Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4 (class-based dark mode)
- Three.js (3D hero + product visualizations)
- Motion (react) for animations
- react-router-dom v7

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm start        # serve dist/ + contact API (see below)
```

## Contact form email (Resend)

The contact form POSTs to `/api/contact`, which forwards the message to your inbox via [Resend](https://resend.com). The API key lives **server-side only**:

- `npm run dev` — a Vite dev middleware serves the route
- `npm start` — [server.mjs](server.mjs) serves it in production
- **Vercel** — [api/contact.mjs](api/contact.mjs) runs as a serverless function (Vercel static hosting doesn't run `server.mjs` or the Vite middleware)

Configure via env or `.env` (see [.env.example](.env.example)):

```bash
RESEND_API_KEY=re_...          # from https://resend.com/api-keys
CONTACT_TO=your-resend-account-email@gmail.com  # must be the Resend account owner's email while sending from onboarding@resend.dev
RESEND_FROM="AmitraX Website <onboarding@resend.dev>"   # no verified domain needed — delivery is limited to the account owner
```

While sending from `onboarding@resend.dev` (no verified domain), Resend only delivers to the account owner's email — so set `CONTACT_TO` to your own address. Once you verify a domain, switch `RESEND_FROM` to an address on it and you can set `CONTACT_TO` to any address.

## Structure

```
src/
  pages/          # route pages (Home, Products, Services, Architecture, About, Contact…)
  components/     # hero, sections, products, 3d, media, ui, motion, methodology
  data/           # products, services, architecture, company content
  types/          # shared TypeScript models
public/videos/    # locally-hosted hero media
```

The site is light-first adaptive: every section uses `bg-white dark:bg-…`, and deliberately-dark surfaces are reserved for media viewports (3D canvases, cinematic video, product media).