import React, { useEffect } from 'react';
import { ArrowUpRight, Compass, SearchX } from 'lucide-react';
import { ButtonLink } from '../components/ui/Button';
import { PageIntro } from '../components/ui/PageIntro';
import { Reveal } from '../components/motion/Reveal';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Page Not Found | AmitraX';
  }, []);

  return (
    <div className="w-full pt-24 pb-20">
      <PageIntro icon={<SearchX className="h-4 w-4" />} eyebrow="404 / NOT FOUND" title="A useful page" highlight="is elsewhere." accent="cyan" description="That route does not exist, but there are a few good places to continue exploring." />
      <Reveal className="studio-container">
        <div className="grid gap-8 border-y border-slate-300/70 py-10 dark:border-white/15 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="studio-kicker">Try a different direction</p>
            <p className="studio-copy mt-3 max-w-xl">Explore the studio concepts, see what we can make, or return to the beginning and follow the thread from there.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/" size="lg" iconRight={<ArrowUpRight className="h-4 w-4" />}>Return home</ButtonLink>
            <ButtonLink to="/capabilities" variant="secondary" size="lg" iconLeft={<Compass className="h-4 w-4 text-cyan-600" />}>See what we build</ButtonLink>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default NotFoundPage;
