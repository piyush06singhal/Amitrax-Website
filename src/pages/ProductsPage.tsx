import React, { useEffect } from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { PageIntro } from '../components/ui/PageIntro';
import { ButtonLink } from '../components/ui/Button';
import { Reveal } from '../components/motion/Reveal';
const fieldnotesUrl = new URL('../components/hero/homepage-fieldnotes.svg', import.meta.url).href;
const daylightUrl = new URL('../components/hero/homepage-daylight.svg', import.meta.url).href;

const explorations = [
  {
    id: 'fieldnotes' as const,
    name: 'Fieldnotes — a quieter place to read',
    discipline: 'Content design / Editorial interface',
    summary: 'An original exploration of a small reading library: generous type, deliberate hierarchy, and just enough navigation.',
    question: 'How can a growing collection of articles stay inviting instead of becoming an endless feed?',
    decisions: 'Lead with the article title and a short description. Keep category choices visible, make the active filter explicit, and let the content carry the visual identity.',
    next: 'A fuller prototype would explore article reading, saved items, and search. The category filter here is a working interaction; article destinations are not implemented.',
  },
  {
    id: 'daylight' as const,
    name: 'Daylight — the next step, in view',
    discipline: 'Product thinking / Workflow interface',
    summary: 'A lightweight enquiry workspace concept that gives each request a clear status and a useful next action.',
    question: 'How can a focused workspace help someone decide what deserves attention next?',
    decisions: 'Keep the daily view calm and action-oriented. Surface the next useful step instead of turning a simple workflow into a dashboard of metrics.',
    next: 'A fuller prototype would add saved preferences, calendar connections, and a fuller mobile flow. This is a local concept study, not a connected product.',
  },
];

export const ProductsPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Studio explorations | AmitraX'; }, []);

  return (
    <div className="w-full pt-24 sm:pt-28">
      <PageIntro icon={<Compass className="h-4 w-4" />} eyebrow="FROM THE STUDIO" title="Ideas made" highlight="tangible." accent="cyan" description="Two original concept explorations in content and useful tools. Self-initiated interface studies, not commissioned client projects or claims of measured results." />
      <section aria-label="Studio concept explorations" className="studio-section !pt-5 sm:!pt-8">
        <div className="studio-container space-y-16 sm:space-y-24">
          {explorations.map((work, index) => (
            <article key={work.id} aria-labelledby={`${work.id}-title`}>
              <Reveal>
                <figure className="overflow-hidden bg-[#10292d]">
                  <img src={work.id === 'fieldnotes' ? fieldnotesUrl : daylightUrl} width="1200" height="900" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" alt={work.id === 'fieldnotes' ? 'Fieldnotes editorial website concept with a sculptural ochre sun and journal layout.' : 'Daylight planning application concept showing a weekly schedule and focus session.'} className="block h-auto w-full transition-transform duration-700 hover:scale-[1.02]" />
                  <figcaption className="px-5 py-3 text-sm text-[#c4dddd]">Original local artwork · Responsive interface study</figcaption>
                </figure>
                <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                  <div>
                    <p className="studio-kicker mb-3">0{index + 1} / STUDIO CONCEPT</p>
                    <h2 id={`${work.id}-title`} className="font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">{work.name}</h2>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{work.discipline}</p>
                  </div>
                  <div>
                    <p className="studio-copy">{work.summary}</p>
                    <details className="group mt-5 border-y border-slate-300/70 dark:border-white/15">
                      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 py-3 font-medium text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600 dark:text-white [&::-webkit-details-marker]:hidden">
                        Inside the exploration
                        <span aria-hidden="true" className="text-xl text-cyan-700 group-open:hidden dark:text-cyan-300">+</span>
                        <span aria-hidden="true" className="hidden text-xl text-cyan-700 group-open:inline dark:text-cyan-300">−</span>
                      </summary>
                      <div className="space-y-5 pb-6 pt-2">
                        <div><h3 className="font-semibold text-slate-950 dark:text-white">The question</h3><p className="studio-copy mt-2">{work.question}</p></div>
                        <div><h3 className="font-semibold text-slate-950 dark:text-white">Design decisions</h3><p className="studio-copy mt-2">{work.decisions}</p></div>
                        <div><h3 className="font-semibold text-slate-950 dark:text-white">Prototype boundaries</h3><p className="studio-copy mt-2">{work.next}</p></div>
                      </div>
                    </details>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
      <section className="studio-section bg-slate-100/70 dark:bg-white/[0.025]">
        <Reveal className="studio-container flex flex-col items-start justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="studio-kicker mb-4">YOUR NEXT PROJECT</p>
            <h2 className="studio-title">What could we make useful for you?</h2>
            <p className="studio-copy mt-4">Bring a real problem. We’ll help shape a clear direction and a practical first step.</p>
          </div>
          <ButtonLink to="/contact" size="lg" className="shrink-0" iconRight={<ArrowUpRight className="h-4 w-4" />}>Start a conversation</ButtonLink>
        </Reveal>
      </section>
    </div>
  );
};
