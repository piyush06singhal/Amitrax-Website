import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Sparkles, ArrowRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Magnetic } from '../motion/Magnetic';

export const ScrollProductGenesisReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // 5 Stages defined in prompt Section 18:
  // 1: Abstract geometry
  // 2: Geometry begins forming
  // 3: Interface appears
  // 4: Interface becomes recognizable
  // 5: Product information appears
  const stages = [
    {
      id: 'abstract-geo',
      number: '01',
      title: 'Abstract Geometry',
      badge: 'PHASE 01 • SPATIAL TENSOR',
      desc: 'Initial mathematical hypothesis represented as raw floating vectors, coordinate point clouds, and topological constraints.',
    },
    {
      id: 'forming-geo',
      number: '02',
      title: 'Geometry Begins Forming',
      badge: 'PHASE 02 • LATTICE SOLIDIFICATION',
      desc: 'Vectors link into rigid polygonal structures, creating the deterministic scaffolding of the runtime kernel.',
    },
    {
      id: 'interface-emerges',
      number: '03',
      title: 'Interface Appears',
      badge: 'PHASE 03 • HUD PROJECTION',
      desc: 'Data planes and responsive viewport boundaries organize into human-readable viewport surfaces.',
    },
    {
      id: 'interface-recognizable',
      number: '04',
      title: 'Interface Recognizable',
      badge: 'PHASE 04 • HIGH-FIDELITY SYNTHESIS',
      desc: 'Real-time telemetry widgets, metric gauges, and deterministic action pipelines materialize into a tactile console.',
    },
    {
      id: 'product-ready',
      number: '05',
      title: 'Technology Becomes Product',
      badge: 'PHASE 05 • PRODUCTION RUNTIME',
      desc: 'Axiom Core is live: delivering sub-millisecond consensus, enterprise resilience, and zero-downtime operations.',
    },
  ];

  // Auto-advance loop when not manually scrubbing
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isAutoPlaying, stages.length]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 bg-[#04060c] dark:bg-[#04060c] light:bg-[#f1f5f9] border-t border-slate-200/80 dark:border-white/10 transition-colors duration-500 overflow-hidden"
    >
      {/* Dynamic atmospheric radial backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 dark:bg-cyan-500/10 light:bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-300 light:text-cyan-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SCROLL-DRIVEN PRODUCT GENESIS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
              Technology becoming a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Product
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience the transition from abstract algorithmic geometry to a tactile, mission-critical digital interface.
            </p>
          </div>

          {/* Controls: Stage Indicator / Scrub buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-black/60 light:bg-white border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md">
            {stages.map((st, idx) => (
              <button
                key={st.id}
                type="button"
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStage(idx);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeStage === idx
                    ? 'bg-cyan-500 text-black font-semibold shadow-md shadow-cyan-500/20'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>{st.number}</span>
              </button>
            ))}
          </div>
        </div>

        {/* The 5-Stage Interactive Morphing Canvas / Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center p-6 sm:p-8">
            {/* Stage-dependent procedural graphics */}
            <AnimatePresence mode="wait">
              {activeStage === 0 && (
                <motion.div
                  key="stage-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full flex flex-col items-center justify-center"
                >
                  <div className="relative w-48 h-48 border border-cyan-500/40 rounded-full animate-spin duration-1000" style={{ animationDuration: '16s' }}>
                    <div className="absolute inset-4 border border-dashed border-white/20 rounded-full" />
                    <div className="absolute top-2 left-6 w-3 h-3 rounded-full bg-cyan-400 blur-[2px]" />
                    <div className="absolute bottom-4 right-8 w-2 h-2 rounded-full bg-purple-400" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45" />
                  </div>
                  <div className="mt-8 font-mono text-xs text-cyan-400 tracking-widest uppercase">
                    [STAGE 1: FLOATING POLAR COORDINATES]
                  </div>
                </motion.div>
              )}

              {activeStage === 1 && (
                <motion.div
                  key="stage-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full flex flex-col items-center justify-center"
                >
                  <div className="relative w-56 h-40 border-2 border-cyan-400/60 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-2 opacity-40">
                      <div className="border border-cyan-400/40 rounded" />
                      <div className="border border-cyan-400/40 rounded" />
                      <div className="border border-cyan-400/40 rounded" />
                      <div className="border border-cyan-400/40 rounded" />
                      <div className="border border-cyan-400/40 rounded" />
                      <div className="border border-cyan-400/40 rounded" />
                    </div>
                    <span className="font-mono text-xs text-white bg-black/80 px-3 py-1 rounded border border-cyan-500/30">
                      LATTICE SOLIDIFYING
                    </span>
                  </div>
                  <div className="mt-8 font-mono text-xs text-cyan-400 tracking-widest uppercase">
                    [STAGE 2: COMPUTATIONAL TOPOLOGY MESH]
                  </div>
                </motion.div>
              )}

              {activeStage === 2 && (
                <motion.div
                  key="stage-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full flex flex-col items-center justify-center p-6"
                >
                  <div className="w-full max-w-md bg-[#090e1f] border border-cyan-500/40 rounded-2xl p-4 shadow-2xl space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-400">INTERFACE MASK v0.3</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 rounded-lg bg-white/[0.04] border border-white/5 animate-pulse" />
                      <div className="h-16 rounded-lg bg-white/[0.04] border border-white/5 animate-pulse" />
                    </div>
                  </div>
                  <div className="mt-8 font-mono text-xs text-cyan-400 tracking-widest uppercase">
                    [STAGE 3: VIEWPORT SKELETON EMERGENCE]
                  </div>
                </motion.div>
              )}

              {activeStage === 3 && (
                <motion.div
                  key="stage-3"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full flex flex-col items-center justify-center p-4"
                >
                  <div className="w-full max-w-lg bg-[#070d1e] border border-cyan-400/50 rounded-2xl p-5 shadow-2xl space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <span className="font-display font-bold text-sm text-white">AXIOM SYSTEM RUNTIME</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                        ONLINE 99.99%
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                        <span className="text-[10px] font-mono text-slate-400 block">THROUGHPUT</span>
                        <span className="text-sm font-bold text-white font-mono">1.42 GB/s</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                        <span className="text-[10px] font-mono text-slate-400 block">LATENCY</span>
                        <span className="text-sm font-bold text-cyan-300 font-mono">0.84 ms</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10">
                        <span className="text-[10px] font-mono text-slate-400 block">NODES</span>
                        <span className="text-sm font-bold text-white font-mono">1,024</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 font-mono text-xs text-cyan-400 tracking-widest uppercase">
                    [STAGE 4: RECOGNIZABLE PRODUCTION INTERFACE]
                  </div>
                </motion.div>
              )}

              {activeStage === 4 && (
                <motion.div
                  key="stage-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center space-y-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                    alt="Axiom Core Dashboard"
                    className="w-full max-w-lg h-44 object-cover rounded-xl border border-cyan-400/40 shadow-2xl"
                  />
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      DEPLOYED PRODUCTION RUNTIME
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Informational Stage Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 font-mono text-xs">
                {stages[activeStage].badge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                {stages[activeStage].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {stages[activeStage].desc}
              </p>
            </div>

            {/* Stepper Progress Indicator */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-mono text-slate-500">
                <span>GENESIS COMPLETION</span>
                <span>{((activeStage + 1) / stages.length) * 100}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300"
                  style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
                />
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <Magnetic strength={0.2}>
                <Link
                  to="/products/axiom-core"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-xs font-mono tracking-wider uppercase hover:opacity-90 transition-all shadow-md"
                >
                  <span>Explore Axiom Product</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
