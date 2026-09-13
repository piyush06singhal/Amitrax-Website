import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '../../data/companyData';
import { EMERGING_TECHNOLOGY, TECH_STACK_ECOSYSTEM } from '../../data/architecture';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  AppWindow, 
  Cpu, 
  BrainCircuit, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const TechArchitectureSection: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('ui-layer');
  const selectedLayer =
    ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'ui-layer':
        return <AppWindow className="w-5 h-5 text-cyan-400" />;
      case 'app-layer':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'intelligence-layer':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'data-layer':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'infra-layer':
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="architecture" className="relative w-full py-20 lg:py-28 bg-[#05070e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <SectionHeader
          label="SYSTEM ARCHITECTURE & TOOLS"
          sublabel="Full-Stack Topology"
          title="Engineered from"
          titleHighlight="Foundation to Interface"
          description="Technology fails when layers are disconnected or built without cohesive architectural intent. We engineer resilient stacks where every tier reinforces the next."
          badgeVariant="emerald"
        />

        {/* Multi-Tier Architectural Topology Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Stack Flow with Animated Tiers (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider mb-2 px-1">
              <span className="font-semibold">Integrated Architectural Tiers</span>
              <span className="text-cyan-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Active Cohesion
              </span>
            </div>

            {ARCHITECTURE_LAYERS.map((layer) => {
              const isSelected = selectedLayer.id === layer.id;

              return (
                <button
                  key={layer.id}
                  type="button"
                  id={`btn-arch-layer-${layer.id}`}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#0c1633] to-[#0a1129] border-cyan-500/60 shadow-lg ring-1 ring-cyan-400/30'
                      : 'bg-[#080d1e]/80 border-white/10 hover:border-white/20 hover:bg-[#0c142c]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 shrink-0">
                      {getLayerIcon(layer.id)}
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        TIER 0{layer.level}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white font-display">
                        {layer.name}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                    {layer.latencySpec}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Tier Telemetry & Specs (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#090f24] to-[#050914] border border-cyan-500/30 shadow-2xl backdrop-blur-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  {getLayerIcon(selectedLayer.id)}
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                    TIER 0{selectedLayer.level} DEEP SPECIFICATION
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white">
                    {selectedLayer.name}
                  </h3>
                </div>
              </div>

              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                {selectedLayer.latencySpec}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {selectedLayer.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Key Architectural Guarantees
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedLayer.guarantees.map((g, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                Core Components in this Tier:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedLayer.components.map((c, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 11: Emerging Technologies Without Hype */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0c1530] via-[#091024] to-[#070c1b] border border-white/10 shadow-xl space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EMERGING TECHNOLOGIES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {EMERGING_TECHNOLOGY.headline}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {EMERGING_TECHNOLOGY.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-white/10">
            {EMERGING_TECHNOLOGY.cycle.map((c, idx) => (
              <div key={idx} className="p-3 space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-400">{c.step} // {c.name}</span>
                <p className="text-xs text-slate-300">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {EMERGING_TECHNOLOGY.domains.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 12: Tech Stack & Tools Ecosystem */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>PRODUCTION TOOLCHAIN</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Core Technologies We Build With
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Battle-tested tools selected for developer velocity, runtime stability, and production scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK_ECOSYSTEM.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080d1e]/80 border border-white/10 backdrop-blur-md space-y-4"
              >
                <div className="flex items-center gap-2 text-cyan-400 font-bold font-display text-base">
                  <Layers className="w-4 h-4" />
                  <span>{cat.category}</span>
                </div>

                <div className="space-y-2">
                  {cat.technologies.map((tech, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{tech.name}</span>
                      <span className="text-[11px] text-slate-400">{tech.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
