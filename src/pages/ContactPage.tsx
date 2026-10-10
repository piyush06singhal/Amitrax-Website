import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';
import { PageIntro } from '../components/ui/PageIntro';
import { Reveal } from '../components/motion/Reveal';
import { ContactConversationArtwork } from '../components/contact/ContactConversationArtwork';

export const ContactPage: React.FC = () => (
  <div className="w-full pt-28">
    <PageIntro icon={null} eyebrow="CONTACT" title="Let’s make" highlight="a start." accent="cyan" description="An idea, a challenge, a fresh perspective. Tell us what you have in mind." />
    <section className="studio-section pt-0" aria-labelledby="contact-start-heading">
      <div className="studio-container grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <Reveal>
          <ContactConversationArtwork />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="studio-kicker mb-4">START WITH THE THREAD</p>
          <h2 id="contact-start-heading" className="studio-title">Bring the question.<br />We’ll find the shape.</h2>
          <p className="studio-copy mt-5">You do not need a finished brief or a perfect answer. A useful first conversation is enough to understand what is getting in the way and what a better next step could look like.</p>
          <ol className="mt-7 space-y-4 border-t border-slate-300/70 pt-2 dark:border-white/15">
            {[
              ['01', 'Context', 'What is happening now, and who needs it to work better?'],
              ['02', 'Clarity', 'What should the experience make easier to understand or do?'],
              ['03', 'Direction', 'What is the most useful thing to explore together first?'],
            ].map(([number, title, copy]) => (
              <li key={number} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-slate-300/70 py-4 dark:border-white/15">
                <span className="pt-1 text-sm text-cyan-700 dark:text-cyan-300">{number}</span>
                <div><h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{copy}</p></div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
    <ContactSection />
  </div>
);
