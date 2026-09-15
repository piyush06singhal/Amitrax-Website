import React, { useEffect } from 'react';
import { AboutSection } from '../components/sections/AboutSection';
import { CompanyValuesSection } from '../components/sections/CompanyValuesSection';
import { WhoWeBuildForSection } from '../components/sections/WhoWeBuildForSection';
import { ButtonLink } from '../components/ui/Button';
import { Compass, ArrowUpRight, HeartHandshake, MapPin, Rocket, BadgeCheck } from 'lucide-react';
import { UnsplashFigure } from '../components/ui/UnsplashFigure';
import { COMPANY_IDENTITY } from '../data/company';

const CURRENT_STANDINGS = [
  {
    icon: <Rocket className="w-5 h-5 text-rose-400" />,
    title: `Founded ${COMPANY_IDENTITY.foundedYear}`,
    description:
      'A deliberately early, ambitious engineering studio. Every quarter is about compounding reliability and craft rather than chasing scale for its own sake.',
  },
  {
    icon: <MapPin className="w-5 h-5 text-amber-400" />,
    title: 'A global digital studio',
    description:
      'Distributed across time zones and systems rather than one building — engineering diverse regions, infrastructure, and real user environments daily.',
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-cyan-400" />,
    title: 'Judged by craft, not claims',
    description:
      'We do not manufacture fake history or inflate who we are. We are builders at the beginning of an ambitious journey, measured by the resilience of what we ship.',
  },
];

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative overflow-hidden">
      {/* Unique Celestial Rose Gold & Warm Titanium Ambient Atmospheric Glow */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[480px] right-16 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-semibold shadow-sm dark:shadow-[0_0_15px_rgba(244,63,94,0.18)]">
            <Compass className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
            <span>IDENTITY, ETHOS & CRAFT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-400 to-amber-600 dark:from-rose-400 dark:via-rose-200 dark:to-amber-200">
              AmitraX
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            AmitraX is a technology company focused on building modern digital products that solve real-world problems. We unite software engineering, thoughtful design, product thinking, and emerging technologies.
          </p>
        </div>
      </div>

      {/* About & Origin Story */}
      <AboutSection />

      {/* 6 Company Values & Visual Metaphors */}
      <CompanyValuesSection />

      {/* Who We Build For & Accessibility */}
      <WhoWeBuildForSection />

      {/* Editorial band — where AmitraX stands today */}
      <section className="relative w-full py-20 bg-slate-50 dark:bg-[#05070e] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
                  <span className="text-rose-700 dark:text-rose-400 font-semibold">AMITRAX TODAY</span>
                  <span>HONEST CURRENT STATE</span>
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                  A studio at the beginning of its journey — building deliberately
                </h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  {COMPANY_IDENTITY.positioning}
                </p>
              </div>
              <div className="space-y-4">
                {CURRENT_STANDINGS.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white dark:bg-[#090d1c]/80 border border-slate-200 dark:border-white/10 flex items-start gap-4 transition-colors hover:border-rose-500/40 dark:hover:border-rose-400/40"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <UnsplashFigure
              className="lg:col-span-5 order-1 lg:order-2"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt="Close-up macro photograph of an electronic circuit board with chip components in warm light"
              caption="ENGINEERING, NOT CLAIMS"
              aspect="aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Page Bottom CTA with Rose Gold styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-rose-50 via-white to-white dark:from-[#1f0d14] dark:via-[#14080e] dark:to-[#0a0407] border border-rose-200 dark:border-rose-500/30 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-rose-500/10 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 text-xs font-mono">
              <HeartHandshake className="w-3 h-3" />
              <span>CRAFT WITHOUT COMPROMISE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Interested in collaborating or building with AmitraX?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              We welcome conversations with founders, teams, and curious engineers who value deliberate craft.
            </p>
          </div>

          <ButtonLink
            to="/contact"
            variant="primary"
            size="lg"
            className="shrink-0 !bg-rose-500 hover:!bg-rose-400 !text-white font-semibold border-none shadow-[0_0_20px_rgba(244,63,94,0.3)]"
            iconRight={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a Conversation
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
