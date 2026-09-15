import React, { useEffect, useRef, useState } from 'react';
import { Target } from 'lucide-react';
import { COMPANY_IDENTITY } from '../../data/companyData';

export const CorePhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 sm:py-36 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#05070e] dark:via-[#070d1e] dark:to-[#05070e] border-t border-b border-slate-200 dark:border-white/10 overflow-hidden"
    >
      {/* Dynamic atmospheric radial backdrop */}
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-blue-600/10 via-cyan-500/5 to-transparent dark:from-blue-600/15 dark:via-cyan-500/8 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-600/15 to-purple-500/10 dark:from-cyan-500/10 dark:via-blue-600/15 dark:to-purple-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        {/* Subtle Category Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <Target className="w-3.5 h-3.5" />
          <span>CORE OPERATING PHILOSOPHY</span>
        </div>

        {/* The Major Visual Statement */}
        <div className="space-y-4">
          <h2
            className={`text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-slate-900 dark:text-white leading-[1.18] transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-8'
            }`}
          >
            Technology should not simply be built.{' '}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-400">
              It should be built with purpose.
            </span>
          </h2>
        </div>

        {/* Supporting Narrative - Human, Calm, Intentional */}
        <p
          className={`text-slate-600 dark:text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {COMPANY_IDENTITY.philosophySubtext}
        </p>

        {/* 3 Core Grounding Pillars */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-white/10 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f24]/60 border border-slate-200 dark:border-white/10 text-left space-y-2 backdrop-blur-md shadow-sm">
            <span className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider block">
              01 • Rejection of Bloat
            </span>
            <h4 className="text-slate-900 dark:text-white font-bold font-display text-lg">Pragmatic Restraint</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              We do not add complex microservices or trendy AI wrappers when a clean modular architecture solves the problem with zero overhead.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f24]/60 border border-slate-200 dark:border-white/10 text-left space-y-2 backdrop-blur-md shadow-sm">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider block">
              02 • Human Ergonomics
            </span>
            <h4 className="text-slate-900 dark:text-white font-bold font-display text-lg">Respecting Attention</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Interfaces exist to serve people. Every interaction must feel intuitive, tactile, accessible, and fast, removing cognitive strain.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f24]/60 border border-slate-200 dark:border-white/10 text-left space-y-2 backdrop-blur-md shadow-sm">
            <span className="text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider block">
              03 • Enduring Craft
            </span>
            <h4 className="text-slate-900 dark:text-white font-bold font-display text-lg">Long-Term Resilience</h4>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              We architect systems with disciplined type contracts, thorough testing, and clean maintainability so your technology evolves for years without rewrite fatigue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
