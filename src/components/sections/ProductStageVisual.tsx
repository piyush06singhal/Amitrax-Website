import React, { useState } from 'react';
import { 
  Lightbulb, 
  Cpu, 
  GitBranch, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  ArrowRight,
  ShieldAlert,
  Activity,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type ProductLifecycleState = 'idea' | 'prototype' | 'system' | 'product';

interface LifecycleStep {
  id: ProductLifecycleState;
  title: string;
  code: string;
  tagline: string;
  description: string;
  technicalMilestones: string[];
  systemStatus: string;
  readinessValue: number;
}

const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    id: 'idea',
    title: 'Idea & Problem Definition',
    code: 'PHASE-01 // HYPOTHESIS',
    tagline: 'Formalizing real-world friction into mathematical constraints',
    description:
      'Every AmitraX product begins by isolating a systemic inefficiency—not with technology looking for a problem. We outline technical boundaries, compute feasibility, and establish deterministic requirements.',
    technicalMilestones: [
      'Problem constraint mapping & threat modeling',
      'First-principles algorithmic feasibility check',
      'No-hype necessity audit (Can this be simpler?)',
    ],
    systemStatus: 'THEORETICAL SPECIFICATION',
    readinessValue: 25,
  },
  {
    id: 'prototype',
    title: 'Prototype & Experimentation',
    code: 'PHASE-02 // EXPERIMENT',
    tagline: 'Stress-testing logic DAGs and kernel performance',
    description:
      'We turn the hypothesis into interactive prototypes. We benchmark data throughput, test edge-case failures, and measure human cognitive load when interacting with complex states.',
    technicalMilestones: [
      'Interactive reactive state spike',
      'Synthetic stress testing (100k events/sec)',
      'Memory footprint and GC pressure profiling',
    ],
    systemStatus: 'BENCHMARKING EXPERIMENTAL KERNEL',
    readinessValue: 50,
  },
  {
    id: 'system',
    title: 'System & Architecture',
    code: 'PHASE-03 // ARCHITECTURE',
    tagline: 'Hardening distributed state machines and reliability',
    description:
      'Transforming working prototypes into resilient, fault-tolerant infrastructure. We enforce zero-trust security contracts, configure automatic failover, and ensure cross-platform reproducibility.',
    technicalMilestones: [
      'End-to-end schema validation & typed contracts',
      'Idempotent transactional event pipelines',
      'Multi-region high-availability topology',
    ],
    systemStatus: 'DISTRIBUTED CONSENSUS VALIDATED',
    readinessValue: 78,
  },
  {
    id: 'product',
    title: 'Product & Deployment',
    code: 'PHASE-04 // RELEASE',
    tagline: 'Polished digital instrument operating with purpose',
    description:
      'The mature product: accessible, ultra-responsive, and unobtrusive. It delivers continuous real-world value with deterministic uptime, minimal battery/compute overhead, and human-first clarity.',
    technicalMilestones: [
      'Sub-50ms perceptual interaction latency',
      'Strict WCAG AA accessibility compliance',
      'Zero-compromise telemetry and observational observability',
    ],
    systemStatus: 'CONTINUOUS PRODUCTION DEPLOYMENT',
    readinessValue: 100,
  },
];

export const ProductStageVisual: React.FC = () => {
  const [activeState, setActiveState] = useState<ProductLifecycleState>('system');

  const currentStep = LIFECYCLE_STEPS.find((s) => s.id === activeState) || LIFECYCLE_STEPS[2];

  return (
    <div className="relative w-full rounded-2xl bg-[#080d17] border border-cyan-500/30 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 mb-12">
      {/* Top Banner Notice */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-2 text-cyan-400">
          <Terminal className="w-4 h-4" />
          <span className="font-semibold">AMITRAX PRODUCT TRANSFORMATION CONTINUUM</span>
        </div>
        <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
          STAGE 0{LIFECYCLE_STEPS.findIndex((s) => s.id === activeState) + 1} OF 04
        </span>
      </div>

      {/* Interactive 4-State Visual Pipeline Stepper */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
        {LIFECYCLE_STEPS.map((step, idx) => {
          const isSelected = activeState === step.id;
          return (
            <button
              key={step.id}
              type="button"
              id={`btn-product-stage-${step.id}`}
              onClick={() => setActiveState(step.id)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border relative ${
                isSelected
                  ? 'bg-[#0f172a] border-cyan-500/60 shadow-lg'
                  : 'bg-[#060a12]/80 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2 font-mono text-xs">
                <span className={isSelected ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                  0{idx + 1}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                )}
              </div>
              <div className="font-display font-semibold text-sm sm:text-base text-white truncate">
                {step.title.split('&')[0]}
              </div>
              <div className="font-mono text-[10px] text-slate-400 truncate mt-0.5">
                {step.code.split('//')[1]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Cinematic Product Stage Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Morphing Visual Chassis (7 cols) */}
        <div className="lg:col-span-7 relative h-[360px] sm:h-[420px] rounded-xl bg-[#04060a] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
          {/* Subtle Ambient Radial Light */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
              activeState === 'idea'
                ? 'bg-radial from-slate-500/10 via-transparent to-transparent'
                : activeState === 'prototype'
                ? 'bg-radial from-purple-500/10 via-transparent to-transparent'
                : activeState === 'system'
                ? 'bg-radial from-cyan-500/10 via-transparent to-transparent'
                : 'bg-radial from-emerald-500/10 via-transparent to-transparent'
            }`}
          />

          {/* Floating HUD Telemetry Header */}
          <div className="relative z-10 flex items-center justify-between font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-white font-semibold">{currentStep.code}</span>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/5">
              STATE PROGRESSION: {currentStep.readinessValue}%
            </span>
          </div>

          {/* Dynamic Graphic Content Morphing Based On State */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center p-4">
            <AnimatePresence mode="wait">
              {activeState === 'idea' && (
                <motion.div
                  key="idea"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 max-w-md"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-dashed border-slate-500/60 flex items-center justify-center mx-auto text-slate-400">
                    <Lightbulb className="w-8 h-8 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-lg text-white">
                      Algorithmic Blueprint & Constraints
                    </h5>
                    <p className="font-mono text-xs text-slate-400 mt-1">
                      f(x) = Input Constraints → Latency Minimization DAG
                    </p>
                  </div>
                  <div className="flex justify-center gap-2 font-mono text-[11px] text-slate-500">
                    <span className="px-2 py-0.5 rounded bg-black/50 border border-white/5">
                      Spec: Draft-0.1
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/50 border border-white/5">
                      Verification: Active
                    </span>
                  </div>
                </motion.div>
              )}

              {activeState === 'prototype' && (
                <motion.div
                  key="prototype"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 max-w-md"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center mx-auto text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <GitBranch className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-lg text-white">
                      Reactive DAG Flow & Execution Spike
                    </h5>
                    <p className="font-mono text-xs text-purple-300 mt-1">
                      Event Pipeline: 104,200 synthetic events / sec throughput
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-slate-300 w-full max-w-xs mx-auto">
                    <div className="p-2 rounded bg-white/5 border border-white/5">
                      Memory: 14MB
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/5">
                      P99: 1.8ms
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/5">
                      Loss: 0.00%
                    </div>
                  </div>
                </motion.div>
              )}

              {activeState === 'system' && (
                <motion.div
                  key="system"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 max-w-md"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-lg text-white">
                      Hardened Distributed Topology
                    </h5>
                    <p className="font-mono text-xs text-cyan-300 mt-1">
                      Fault-Tolerant State Machine with Consensus Guarantee
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5 font-mono text-[11px]">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      Raft Consensus
                    </span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                      Zero-Trust SSL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      Multi-Cluster
                    </span>
                  </div>
                </motion.div>
              )}

              {activeState === 'product' && (
                <motion.div
                  key="product"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 max-w-md"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                    <Layers className="w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-lg text-white">
                      Deployed Digital Instrument
                    </h5>
                    <p className="font-mono text-xs text-emerald-300 mt-1">
                      Sub-50ms Perception Latency // 99.99% Operational Guarantee
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 font-mono text-xs text-emerald-300 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Active in Production // Ready for Scale</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Chassis Meter */}
          <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
            <span>CHASSIS REF: ATX-STAGE-04</span>
            <span className="text-cyan-400 font-semibold">{currentStep.systemStatus}</span>
          </div>
        </div>

        {/* Right: Technical Specification Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <div className="font-mono text-xs text-cyan-400 uppercase tracking-wider mb-1">
              {currentStep.code}
            </div>
            <h4 className="text-2xl font-bold font-display text-white">
              {currentStep.title}
            </h4>
            <p className="font-mono text-xs text-slate-400 mt-1">
              "{currentStep.tagline}"
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {currentStep.description}
          </p>

          <div className="space-y-2 pt-1">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              Verification Milestones
            </div>
            <div className="space-y-2">
              {currentStep.technicalMilestones.map((m, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
