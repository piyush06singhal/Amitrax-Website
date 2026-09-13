import React, { useState } from 'react';
import { BuildingBlocks3D } from '../3d/BuildingBlocks3D';
import { CAPABILITIES } from '../../data/capabilities';
import { 
  AppWindow, 
  BrainCircuit, 
  Server, 
  Globe, 
  Workflow, 
  Cpu, 
  Layers, 
  Box,
  ShieldCheck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const WhatWeBuildSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');

  const getIcon = (id: string) => {
    switch (id) {
      case 'digital-products':
        return <AppWindow className="w-6 h-6 text-cyan-400" />;
      case 'software-platforms':
        return <Server className="w-6 h-6 text-blue-400" />;
      case 'intelligent-systems':
        return <BrainCircuit className="w-6 h-6 text-purple-400" />;
      case 'web-applications':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'automation':
        return <Workflow className="w-6 h-6 text-teal-400" />;
      case 'technology-products':
        return <Cpu className="w-6 h-6 text-pink-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="what-we-build" className="relative w-full py-20 lg:py-28 bg-[#05070e] border-t border-white/5">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="WHAT AMITRAX BUILDS"
          sublabel="6 Core Pillars"
          title="Engineered for"
          titleHighlight="Real-World Impact"
          description="We do not build generic software. We engineer purposeful digital products, scalable multi-tenant platforms, and grounded intelligent systems designed for durability and human utility."
          badgeVariant="cyan"
          actionSlot={
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#0a0f24] border border-white/10 shadow-lg">
              <button
                type="button"
                id="btn-view-3d"
                onClick={() => setViewMode('3d')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === '3d'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Spatial Matrix</span>
              </button>

              <button
                type="button"
                id="btn-view-grid"
                onClick={() => setViewMode('grid')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Domain Breakdown</span>
              </button>
            </div>
          }
        />

        {/* 3D Interactive Connected System (Centerpiece) */}
        {viewMode === '3d' ? (
          <BuildingBlocks3D />
        ) : (
          /* Detailed 6 Domains Cards Matrix with Rich Color Accents */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="p-7 rounded-2xl bg-[#090e21]/80 border border-white/10 flex flex-col justify-between group hover:border-cyan-400/50 hover:bg-[#0c1430] transition-all duration-300 shadow-xl backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 shadow-inner">
                      {getIcon(cap.id)}
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-white/[0.05] border border-white/10 text-slate-300">
                      {cap.shortName}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mb-3">
                    {cap.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {cap.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Scope of Work
                    </span>
                    {cap.detailedScope.map((scope, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.technologies.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/[0.04] border border-white/5 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
