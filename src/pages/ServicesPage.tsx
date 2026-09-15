import React, { useEffect } from 'react';
import { ServicesSection } from '../components/sections/ServicesSection';
import { UnsplashFigure } from '../components/ui/UnsplashFigure';
import { Award, CheckCircle2 } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative overflow-hidden">
      {/* Unique Warm Gold & Amber Ambient Atmospheric Glow */}
      <div className="absolute top-20 left-1/3 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[400px] right-10 w-[450px] h-[450px] bg-yellow-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-semibold shadow-sm dark:shadow-[0_0_15px_rgba(245,158,11,0.18)]">
            <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>EXECUTIVE CRAFT & DELIVERY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
            Practical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-amber-400 dark:via-amber-200 dark:to-amber-500">
              Engineering
            </span>{' '}
            Services
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            We partner with businesses, institutions, and founders to architect and deliver high-impact digital systems. We avoid generic pricing tiers and tailor our engineering directly to your operational requirements.
          </p>
        </div>
      </div>

      {/* Services Section with 9 services, procedural category visualizers and CTA */}
      <ServicesSection />

      {/* Editorial band — how a partnership with AmitraX actually works */}
      <section className="relative w-full py-20 bg-slate-50 dark:bg-[#05070e] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
                  <span className="text-amber-700 dark:text-amber-300 font-semibold">HOW WE PARTNER</span>
                  <span>ENGINEERING DISCOVERY FIRST</span>
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                  Engineering that starts with the problem, not the stack
                </h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  A project begins with a structured discovery conversation. We map the operational constraints, sketch the architecture on a whiteboard, and only then commit to a build plan. This is how we avoid expensive rewrites later.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">One accountable engineer,</span> not a rotating hand-off chain.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">Honest scoping.</span> We tell you what is unnecessary complexity in the first conversation.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">Production thinking throughout.</span> Deployability and observability are designed in, not bolted on.
                  </p>
                </li>
              </ul>
            </div>
            <UnsplashFigure
              className="lg:col-span-5 order-1 lg:order-2"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Developer writing code on a laptop beside a secondary monitor showing a terminal"
              caption="TACTICAL ENGINEERING PARTNERSHIP"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
