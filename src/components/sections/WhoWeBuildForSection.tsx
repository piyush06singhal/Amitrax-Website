import React from 'react';
import { Reveal } from '../motion/Reveal';

export const WhoWeBuildForSection: React.FC = () => (
  <section className="studio-section bg-slate-100/70 dark:bg-white/[0.025]">
    <div className="studio-container">
      <Reveal className="max-w-2xl">
        <p className="studio-kicker mb-4">WHO WE BUILD FOR</p>
        <h2 className="studio-title">Different starting points.<br />A shared need for clarity.</h2>
      </Reveal>
      <div className="mt-9 grid gap-8 md:grid-cols-3 md:gap-12">
        {[
          ['Businesses', 'A clearer website, a better customer journey, or less time lost moving information between tools.'],
          ['Founders', 'A focused first version that makes an idea tangible and gives people something useful to respond to.'],
          ['Organisations', 'Content and digital services that help different audiences find their way, with room to grow.'],
        ].map(([title, description], index) => (
          <Reveal key={title} delay={index * 0.06}>
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{title}</h3>
            <p className="studio-copy mt-3">{description}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 border-t border-slate-300/70 pt-7 dark:border-white/15">
        <p className="studio-copy max-w-3xl"><strong className="font-semibold text-slate-950 dark:text-white">And always, the person on the other side of the screen.</strong> Readable content, keyboard-friendly interactions, and comfortable mobile layouts are part of how we approach the work.</p>
      </Reveal>
    </div>
  </section>
);
