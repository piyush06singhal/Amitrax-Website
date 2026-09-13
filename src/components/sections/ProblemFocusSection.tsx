import React, { useState } from 'react';
import { PROBLEM_TRANSFORMATION } from '../../data/companyData';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ArrowRight, AlertCircle, Compass, Cpu, Layers, Sparkles } from 'lucide-react';

export const ProblemFocusSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2); // Default on Engineering

  const getStageIcon = (type: string) => {
    switch (type) {
      case 'friction':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'analysis':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'engineering':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'product':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'impact':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#06080d] border-t border-white/5 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          label="09 // CORE CREED"
          sublabel="FIRST-PRINCIPLES VALUE"
          title={PROBLEM_TRANSFORMATION.headline}
          description={PROBLEM_TRANSFORMATION.subheadline}
          align="center"
        />

        {/* Visual Transformation Continuum Pipeline: Problem → Understanding → Engineering → Product → Impact */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {PROBLEM_TRANSFORMATION.stages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.step}
                type="button"
                id={`problem-pipeline-step-${stage.step}`}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0a0e17] border-cyan-500/60 shadow-xl ring-1 ring-cyan-500/30'
                    : 'bg-[#080d16]/70 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-slate-500">{stage.step}</span>
                    <div className="p-1.5 rounded-lg bg-white/5">
                      {getStageIcon(stage.stateType)}
                    </div>
                  </div>
                  <div className="font-mono text-[11px] text-cyan-400 uppercase mb-1">
                    {stage.label}
                  </div>
                  <div className="font-display font-bold text-sm sm:text-base text-white">
                    {stage.title}
                  </div>
                </div>

                {/* Arrow connector indicator */}
                {idx < PROBLEM_TRANSFORMATION.stages.length - 1 && (
                  <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-500/40" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Transformation Card */}
        {activeStageIndex !== null && (
          <Card variant="feature" padding="lg" className="max-w-3xl mx-auto border-cyan-500/30 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                {getStageIcon(PROBLEM_TRANSFORMATION.stages[activeStageIndex].stateType)}
              </div>
              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block">
                  TRANSFORMATION STAGE {PROBLEM_TRANSFORMATION.stages[activeStageIndex].step}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {PROBLEM_TRANSFORMATION.stages[activeStageIndex].title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
              {PROBLEM_TRANSFORMATION.stages[activeStageIndex].description}
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>AmitraX Methodology</span>
              <Badge variant="accent" size="sm">
                Deterministic Value Creation
              </Badge>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};
