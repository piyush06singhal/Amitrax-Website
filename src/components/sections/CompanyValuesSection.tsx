import React from 'react';
import { Reveal } from '../motion/Reveal';

const principles = [
  ['Start with the need.', 'Before a layout or a line of code, agree on who the work is for and what it should help them do. A focused brief is part of the craft.'],
  ['Care about the details.', 'Make the small things dependable: readable copy, a useful empty state, a form that explains an error, a layout that works on a phone.'],
  ['Build for the next step.', 'Choose understandable tools, document the important decisions, and make room to improve after real people use the work.'],
];

export const CompanyValuesSection: React.FC = () => (
  <section id="values" className="studio-section">
    <div className="studio-container">
      <div className="studio-rule mb-10" />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <Reveal>
          <p className="studio-kicker mb-4">WORKING PRINCIPLES</p>
          <h2 className="studio-title">Intentions, made practical.</h2>
        </Reveal>
        <ol>
          {principles.map(([title, description], index) => (
            <li key={title} className="border-b border-slate-300/70 py-6 first:pt-0 dark:border-white/15">
              <Reveal delay={index * 0.06} className="flex gap-5 sm:gap-7">
                <span className="pt-1 text-sm text-cyan-700 dark:text-cyan-300">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white sm:text-2xl">{title}</h3>
                  <p className="studio-copy mt-3">{description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
