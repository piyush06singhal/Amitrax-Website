import React from 'react';
import { Reveal } from '../motion/Reveal';
import { StudioWorkbench } from '../studio/StudioWorkbench';

export const AboutSection: React.FC = () => (
  <section id="about" className="studio-section">
    <div className="studio-container grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
      <Reveal className="order-2 lg:order-1">
        <p className="studio-kicker mb-4">WHY AMITRAX EXISTS</p>
        <h2 className="studio-title">Less friction.<br />More intention.</h2>
        <div className="studio-copy mt-6 space-y-5">
          <p>AmitraX began with a simple conviction: digital work should make life easier for the people using it. A website should explain. A tool should help. Neither should get in the way.</p>
          <p>We’re a small, independent studio at the beginning of our journey. Our focus is on websites, web applications, and connected workflows, with content, design, and code considered together.</p>
          <p>That means asking questions before adding features, getting the essential experience right, and leaving a foundation that can be understood and improved.</p>
        </div>
      </Reveal>
      <Reveal className="order-1 lg:order-2" delay={0.1}>
        <StudioWorkbench />
      </Reveal>
    </div>
  </section>
);
