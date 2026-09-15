import React, { useState } from 'react';
import { COMPANY_VALUES } from '../../data/values';
import { SectionHeader } from '../ui/SectionHeader';
import {
  Target,
  Sparkles,
  Compass,
  Layers,
  RotateCcw,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export const CompanyValuesSection: React.FC = () => {
  const [activeValueId, setActiveValueId] = useState<string>('purpose');
  const activeValue = COMPANY_VALUES.find((v) => v.id === activeValueId) || COMPANY_VALUES[0];

  const getValueIcon = (id: string) => {
    switch (id) {
      case 'purpose':
        return <Target className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />;
      case 'craft':
        return <Cpu className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'curiosity':
        return <Compass className="w-5 h-5 text-purple-700 dark:text-purple-400" />;
      case 'practicality':
        return <Layers className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />;
      case 'iteration':
        return <RotateCcw className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'responsibility':
        return <ShieldCheck className="w-5 h-5 text-rose-700 dark:text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="values" className="relative w-full py-20 lg:py-28 bg-slate-50 dark:bg-[#05070e] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <SectionHeader
          label="CORE VALUES"
          sublabel="Our Operating System"
          title="Principles That Guide"
          titleHighlight="Every Line of Code"
          description="We do not write generic corporate mission statements. These six principles govern our technical architecture, product decisions, and operational discipline."
          badgeVariant="cyan"
        />

        {/* Values Grid & Metaphor Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 6 Values interactive cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPANY_VALUES.map((val) => {
              const isSelected = val.id === activeValue.id;

              return (
                <div
                  key={val.id}
                  id={`value-card-${val.id}`}
                  onClick={() => setActiveValueId(val.id)}
                  className={`p-5 rounded-2xl transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-[#0c1633] dark:to-[#070d1e] border-cyan-400/80 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/40'
                      : 'bg-white dark:bg-[#080d1e]/80 border-slate-200 dark:border-white/10 dark:hover:border-white/20 hover:border-slate-300 hover:bg-slate-50 dark:hover:bg-[#0b1228]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10">
                        {getValueIcon(val.id)}
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                        {val.visualSystem}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-1">
                        {val.name}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mb-2">
                        {val.tagline}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 dark:text-slate-400">Systemic Standard</span>
                    <span className="text-cyan-700 dark:text-cyan-400 font-medium">Active Rule</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Value Visual Metaphor (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 via-white to-white dark:from-[#0a1024] dark:via-[#0a0f24]/90 dark:to-[#050814] border border-slate-200 dark:border-cyan-500/30 shadow-2xl backdrop-blur-xl space-y-6 sticky top-28">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block">
                VISUAL METAPHOR IN ACTION
              </span>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                {activeValue.name}
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                "{activeValue.tagline}"
              </p>
            </div>

            {/* Geometric Metaphor Representation */}
            <div className="relative h-44 rounded-2xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/10 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 blur-xl"
                style={{ backgroundColor: activeValue.accentColor }}
              />
              <div className="relative z-10 text-center space-y-2 p-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/[0.05] border border-slate-300 dark:border-white/20 mx-auto flex items-center justify-center shadow-lg">
                  {getValueIcon(activeValue.id)}
                </div>
                <div className="text-xs font-mono text-cyan-700 dark:text-cyan-300 tracking-wider">
                  METAPHOR: {activeValue.visualSystem.toUpperCase()}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                How It Translates to Execution
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeValue.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
