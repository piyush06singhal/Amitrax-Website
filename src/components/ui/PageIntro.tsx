import React from 'react';
import { Reveal } from '../motion/Reveal';

interface PageIntroProps {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  accent: 'cyan' | 'indigo' | 'amber' | 'emerald' | 'rose';
  supporting?: React.ReactNode;
}

export const PageIntro: React.FC<PageIntroProps> = ({ icon, eyebrow, title, highlight, description, supporting }) => (
  <header className="studio-container py-7 sm:py-10 lg:py-14">
    <Reveal className="grid items-end gap-7 lg:grid-cols-12 lg:gap-12">
      <div className={supporting ? 'lg:col-span-8' : 'lg:col-span-12'}>
        <p className="studio-kicker mb-5 inline-flex items-center gap-2">
          <span aria-hidden="true">{icon}</span>{eyebrow}
        </p>
        <h1 className="max-w-5xl font-display text-[clamp(2.25rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-slate-950 dark:text-white">
          {title}{' '}<span className="text-cyan-700 dark:text-cyan-300">{highlight}</span>
        </h1>
        <p className="studio-copy mt-5 max-w-2xl">{description}</p>
      </div>
      {supporting && <div className="w-full lg:col-span-4">{supporting}</div>}
    </Reveal>
  </header>
);
