import React, { useEffect } from 'react';
import { Hero } from '../components/hero/Hero';
import { CinematicIntro } from '../components/sections/CinematicIntro';
import { AbstractTechFilmSection } from '../components/sections/AbstractTechFilmSection';
import { CinematicConvergenceSection } from '../components/sections/CinematicConvergenceSection';
import { CorePhilosophySection } from '../components/sections/CorePhilosophySection';
import { WhatWeBuildSection } from '../components/sections/WhatWeBuildSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProductLabSection } from '../components/sections/ProductLabSection';
import { Product3DShowcaseSection } from '../components/sections/Product3DShowcaseSection';
import { WhoWeBuildForSection } from '../components/sections/WhoWeBuildForSection';
import { HowWeBuildSection } from '../components/sections/HowWeBuildSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* 3D Living Digital Core Signature Hero (3-mode: 3D, Cinematic Video, Static Fallback) */}
      <Hero />

      {/* Cinematic Perspective Storytelling Sequence: Problem → Explore → Build → Improve → Ship */}
      <CinematicIntro />

      {/* Abstract Technology Film: Full-width Procedural Data Stream Matrix */}
      <AbstractTechFilmSection />

      {/* Cinematic Convergence: 3D + Video Spatial Scene, Genesis Sequence, and Product Viewports */}
      <CinematicConvergenceSection />

      {/* Core Philosophy Reveal Statement */}
      <CorePhilosophySection />

      {/* What We Build: 3D Connected Matrix & 6 Pillars */}
      <WhatWeBuildSection />

      {/* Product Lab (Research & Scalable Ecosystem) */}
      <ProductLabSection />

      {/* 3D Spatial Product Showcase */}
      <Product3DShowcaseSection />

      {/* Practical Engineering Services with Category Procedural Visualizations */}
      <ServicesSection />

      {/* Who We Build For & Accessibility */}
      <WhoWeBuildForSection />

      {/* How We Build (6-Stage Evolving Lifecycle Visual) */}
      <HowWeBuildSection />

      {/* Contact & Inquiries */}
      <ContactSection />
    </div>
  );
};
