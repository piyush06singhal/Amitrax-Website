import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HowWeBuildSection } from '../components/sections/HowWeBuildSection';
import { TechArchitectureSection } from '../components/sections/TechArchitectureSection';
import { AbstractTechFilmSection } from '../components/sections/AbstractTechFilmSection';
import { Button } from '../components/ui/Button';
import { Layers, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';

export const ArchitecturePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative overflow-hidden">
      {/* Unique Quantum Emerald & Mint Ambient Atmospheric Glow */}
      <div className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[480px] right-20 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>TOPOLOGY, PROTOCOLS & RUNTIME RESILIENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400">
              Build
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
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

      {/* Page Bottom CTA with Emerald Styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#041913] via-[#02120d] to-[#010a07] border border-emerald-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">
              <Activity className="w-3 h-3" />
              <span>CONSENSUS AUDIT READY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Need technical clarity on your system architecture?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              We review system architecture, evaluate technology feasibility, and design robust implementation roadmaps.
            </p>
          </div>

          <Link to="/contact" className="shrink-0">
            <Button
              variant="primary"
              size="lg"
              className="!bg-emerald-500 hover:!bg-emerald-400 !text-black font-semibold border-none shadow-[0_0_20px_rgba(16,185,129,0.3)]"
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
