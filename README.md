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
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview production build
```

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