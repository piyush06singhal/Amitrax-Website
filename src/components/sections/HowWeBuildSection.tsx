import React, { useState } from 'react';
import { LIFECYCLE_STAGES, CONVERGENCE_SYSTEMS } from '../../data/architecture';
import { SectionHeader } from '../ui/SectionHeader';
import { LifecycleStageVisual } from '../methodology/LifecycleStageVisual';
import { 
  Compass, 
  Search, 
  Palette, 
  Code2, 
  ShieldCheck, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers
} from 'lucide-react';

export const HowWeBuildSection: React.FC = () => {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0);
  const activeStage = LIFECYCLE_STAGES[selectedStageIdx] || LIFECYCLE_STAGES[0];

  const getStageIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Compass className="w-5 h-5 text-rose-400" />;
      case '02':
        return <Search className="w-5 h-5 text-amber-400" />;
      case '03':
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case '04':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case '05':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      case '06':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default:
        return <Compass className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="methodology" className="relative w-full py-20 lg:py-28 bg-[#04060d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <SectionHeader
          label="ENGINEERING LIFECYCLE"
          sublabel="Disciplined Methodology"
          title="How We"
          titleHighlight="Build"
          description="We take a disciplined, problem-first approach to building software. Rather than jumping directly into writing code, we follow a rigorous 6-stage lifecycle to ensure enduring value."
          badgeVariant="blue"
        />

        {/* 6-Stage Interactive Lifecycle */}
        <div className="space-y-6">
          {/* Horizontal Step Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LIFECYCLE_STAGES.map((stage, idx) => {
              const isSelected = selectedStageIdx === idx;

              return (
                <button
                  key={stage.step}
                  type="button"
                  id={`btn-lifecycle-${stage.step}`}
                  onClick={() => setSelectedStageIdx(idx)}
                  className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-500/20 to-blue-600/20 border-cyan-400 text-white shadow-lg'
                      : 'bg-[#080d1e]/80 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">{stage.step}</span>
                    {getStageIcon(stage.step)}
                  </div>
                  <div className="font-bold text-sm text-white font-display">{stage.title}</div>
                  <div className="text-[11px] text-slate-400 truncate">{stage.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Deep Dive Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#090f24] to-[#050914] border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    STAGE {activeStage.step} // {activeStage.title.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-400">
                    {activeStage.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {activeStage.focus}
                </h3>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Core Methodology
                  </h4>
                  <div className="space-y-2">
                    {activeStage.methodology.map((m, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
                {/* Evolving Lifecycle Visual Scene (Section 20) */}
                <LifecycleStageVisual stageIndex={selectedStageIdx} />

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                    Tangible Deliverable
                  </span>
                  <p className="text-sm font-bold text-white">
                    {activeStage.deliverable}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                    Definitive Outcome
                  </span>
                  <p className="text-sm font-bold text-white">
                    {activeStage.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering & Design Balance (Convergence Systems) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0c1530] via-[#091024] to-[#070c1b] border border-cyan-500/30 shadow-2xl space-y-8">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>THE BALANCED EQUATION</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {CONVERGENCE_SYSTEMS.synthesis.headline}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {CONVERGENCE_SYSTEMS.synthesis.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Engineering Discipline Column */}
            <div className="p-6 rounded-2xl bg-[#070b1a]/90 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    {CONVERGENCE_SYSTEMS.engineering.title}
                  </h4>
                  <p className="text-xs text-cyan-400/90">
                    {CONVERGENCE_SYSTEMS.engineering.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {CONVERGENCE_SYSTEMS.engineering.attributes.map((attr, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="text-xs font-bold text-white">{attr.name}</div>
                    <div className="text-[11px] text-slate-400 leading-tight">{attr.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thoughtful Design Column */}
            <div className="p-6 rounded-2xl bg-[#070b1a]/90 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <Palette className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display">
                    {CONVERGENCE_SYSTEMS.design.title}
                  </h4>
                  <p className="text-xs text-purple-400/90">
                    {CONVERGENCE_SYSTEMS.design.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {CONVERGENCE_SYSTEMS.design.attributes.map((attr, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="text-xs font-bold text-white">{attr.name}</div>
                    <div className="text-[11px] text-slate-400 leading-tight">{attr.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
