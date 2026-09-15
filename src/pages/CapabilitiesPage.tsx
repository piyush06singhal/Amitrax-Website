import React, { useEffect } from 'react';
import { ButtonLink } from '../components/ui/Button';
import { Product3DShowcaseSection } from '../components/sections/Product3DShowcaseSection';
import { ImageSequencePlayer } from '../components/media/ImageSequencePlayer';
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react';

export const CapabilitiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative overflow-hidden">
      {/* Unique Hyper-Cobalt & Radiant Violet Ambient Atmospheric Glow */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold shadow-sm dark:shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
            <span>CAPABILITIES & SYSTEM DOMAINS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-rose-600 dark:from-indigo-400 dark:via-purple-300 dark:to-rose-400">Build</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            AmitraX builds modern digital products, scalable software platforms, and intelligent systems. We focus on purpose-built technology designed to solve concrete operational and human challenges.
          </p>
        </div>
      </div>

      {/* Genesis Image Sequence Feature inside Capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <ImageSequencePlayer title="Engineering Capability Pipeline" />
      </div>

      {/* 3D Interactive Spatial Product Showcase */}
      <Product3DShowcaseSection />

      {/* Page Bottom CTA with Indigo / Purple styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-50 via-white to-white dark:from-[#120f2e] dark:via-[#0d0a21] dark:to-[#070514] border border-indigo-200 dark:border-indigo-500/30 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono">
              <Sparkles className="w-3 h-3" />
              <span>BESPOKE ENGINEERING ROADMAP</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Looking to build a custom digital product?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Let's evaluate the problem space and explore technical architecture together.
            </p>
          </div>

          <ButtonLink
            to="/contact"
            variant="primary"
            size="lg"
            className="shrink-0 !bg-indigo-600 hover:!bg-indigo-500 !text-white border-none shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            iconRight={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a Conversation
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
