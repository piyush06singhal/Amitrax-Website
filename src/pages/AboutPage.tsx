import React, { useEffect } from 'react';
import { Compass, ArrowUpRight } from 'lucide-react';
import { AboutSection } from '../components/sections/AboutSection';
import { CompanyValuesSection } from '../components/sections/CompanyValuesSection';
import { WhoWeBuildForSection } from '../components/sections/WhoWeBuildForSection';
import { ButtonLink } from '../components/ui/Button';
import { PageIntro } from '../components/ui/PageIntro';
import { Reveal } from '../components/motion/Reveal';

export const AboutPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); document.title = 'About the studio | AmitraX'; }, []);

  return (
    <div className="w-full pt-24 sm:pt-28">
      <PageIntro icon={<Compass className="h-4 w-4" />} eyebrow="THE STUDIO" title="Small studio." highlight="Considered work." accent="cyan" description="AmitraX brings clear thinking, design, and development together to make useful digital experiences." />
      <AboutSection />
      <CompanyValuesSection />
      <WhoWeBuildForSection />
      <section className="studio-section">
        <Reveal className="studio-container">
          <div className="studio-rule mb-8" />
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="studio-kicker mb-4">LET’S MAKE SOMETHING USEFUL</p>
              <h2 className="studio-title">Good work starts with a conversation.</h2>
              <p className="studio-copy mt-4">Tell us what you’re working on, what feels difficult, and what you’d like to change.</p>
            </div>
            <ButtonLink to="/contact" size="lg" className="shrink-0" iconRight={<ArrowUpRight className="h-4 w-4" />}>Start a conversation</ButtonLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
