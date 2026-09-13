import React, { useEffect } from 'react';
import { AboutSection } from '../components/sections/AboutSection';
import { CorePhilosophySection } from '../components/sections/CorePhilosophySection';
import { CompanyValuesSection } from '../components/sections/CompanyValuesSection';
import { WhoWeBuildForSection } from '../components/sections/WhoWeBuildForSection';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Compass, ArrowUpRight, HeartHandshake, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative overflow-hidden">
      {/* Unique Celestial Rose Gold & Warm Titanium Ambient Atmospheric Glow */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[480px] right-16 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold shadow-[0_0_15px_rgba(244,63,94,0.18)]">
            <Compass className="w-3.5 h-3.5 text-rose-400" />
            <span>IDENTITY, ETHOS & CRAFT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-200 to-amber-200">
              AmitraX
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            AmitraX is a technology company focused on building modern digital products that solve real-world problems. We unite software engineering, thoughtful design, product thinking, and emerging technologies.
          </p>
        </div>
      </div>

      {/* About & Origin Story */}
      <AboutSection />

      {/* Core Philosophy Reveal */}
      <CorePhilosophySection />

      {/* 6 Company Values & Visual Metaphors */}
      <CompanyValuesSection />

      {/* Who We Build For & Accessibility */}
      <WhoWeBuildForSection />

      {/* Page Bottom CTA with Rose Gold styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1f0d14] via-[#14080e] to-[#0a0407] border border-rose-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-xs font-mono">
              <HeartHandshake className="w-3 h-3" />
              <span>CRAFT WITHOUT COMPROMISE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Interested in collaborating or building with AmitraX?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              We welcome conversations with founders, teams, and curious engineers who value deliberate craft.
            </p>
          </div>

          <Link to="/contact" className="shrink-0">
            <Button
              variant="primary"
              size="lg"
              className="!bg-rose-500 hover:!bg-rose-400 !text-white font-semibold border-none shadow-[0_0_20px_rgba(244,63,94,0.3)]"
              iconRight={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
