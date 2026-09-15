import React, { useEffect } from 'react';
import { ButtonLink } from '../components/ui/Button';
import { HowWeBuildSection } from '../components/sections/HowWeBuildSection';
import { TechArchitectureSection } from '../components/sections/TechArchitectureSection';
import { AbstractTechFilmSection } from '../components/sections/AbstractTechFilmSection';
import { ArrowUpRight, ShieldCheck, Activity, Boxes, Gauge, Radar } from 'lucide-react';
import { UnsplashFigure } from '../components/ui/UnsplashFigure';

const DESIGN_PRINCIPLES = [
  {
    icon: <Boxes className="w-5 h-5 text-emerald-400" />,
    title: 'Defensive system topology',
    description:
      'Zero-trust auth, role-based access control, and sanitized boundaries at every tier. Fault tolerance with graceful degradation, so one failing service never takes down the whole platform.',
  },
  {
    icon: <Gauge className="w-5 h-5 text-emerald-400" />,
    title: 'Empirical verification',
    description:
      'Every build is proven before it meets real users — synthetic load, edge-case chaos tests, WCAG AA accessibility audits, and measured Core Web Vitals rather than assumed performance.',
  },
  {
    icon: <Radar className="w-5 h-5 text-emerald-400" />,
    title: 'Telemetry-driven improvement',
    description:
      'OpenTelemetry tracing, structured logging, and error budgets are wired in from the first commit, enabling zero-downtime optimizations as adoption grows.',
  },
];

export const ArchitecturePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative overflow-hidden">
      {/* Unique Quantum Emerald & Mint Ambient Atmospheric Glow */}
      <div className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[480px] right-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            <span>TOPOLOGY, PROTOCOLS & RUNTIME RESILIENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-cyan-700 dark:from-emerald-400 dark:via-cyan-200 dark:to-cyan-400">
              Build
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Engineering excellence is not an accident. Explore our disciplined 6-stage product lifecycle, 5-tier system topology, and pragmatic approach to emerging technologies.
          </p>
        </div>
      </div>

      {/* How We Build: 6-Stage Lifecycle with Evolving Shape Visualizer */}
      <HowWeBuildSection />

      {/* Abstract Tech Film: Live stream of data topology */}
      <AbstractTechFilmSection />

      {/* System Topology, Emerging Tech, & Tech Stack */}
      <TechArchitectureSection />

      {/* Editorial band — the defensive principles behind every topology */}
      <section className="relative w-full py-20 bg-slate-50 dark:bg-[#05070e] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">DEFENSIVE ENGINEERING</span>
                  <span>RUNTIME RESILIENCE PRINCIPLES</span>
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                  Architecture that survives real operational pressure
                </h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  A diagram is not an architecture. Our systems are designed so that every tier can fail, every request can be traced, and every change can be verified — without taking the product down.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {DESIGN_PRINCIPLES.map((p) => (
                  <div
                    key={p.title}
                    className="p-5 rounded-2xl bg-white dark:bg-[#090d1c]/80 border border-slate-200 dark:border-white/10 space-y-3 transition-colors hover:border-emerald-500/40 dark:hover:border-emerald-400/40"
                  >
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-500/20 w-fit">
                      {p.icon}
                    </div>
                    <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <UnsplashFigure
              className="lg:col-span-5"
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Low-angle photograph of a modern glass office tower against a clear sky"
              caption="ARCHITECTURE WITH STAYING POWER"
              aspect="aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Page Bottom CTA with Emerald Styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-white dark:from-[#041913] dark:via-[#02120d] dark:to-[#010a07] border border-emerald-200 dark:border-emerald-500/30 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-mono">
              <Activity className="w-3 h-3" />
              <span>CONSENSUS AUDIT READY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Need technical clarity on your system architecture?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              We review system architecture, evaluate technology feasibility, and design robust implementation roadmaps.
            </p>
          </div>

          <ButtonLink
            to="/contact"
            variant="primary"
            size="lg"
            className="shrink-0 !bg-emerald-500 hover:!bg-emerald-400 !text-black font-semibold border-none shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            iconRight={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a Conversation
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
