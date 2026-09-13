import React, { useState } from 'react';
import { COMPANY_IDENTITY, COMPANY_STORY } from '../../data/company';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  Code2, 
  BrainCircuit, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Target,
  Rocket
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeStoryStep, setActiveStoryStep] = useState<number>(0);

  const disciplines = [
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Software Engineering',
      description: 'Disciplined, typed codebases, resilient backend APIs, and modern architecture built for high reliability and scale.',
    },
    {
      icon: <Target className="w-5 h-5 text-blue-400" />,
      title: 'Product Thinking',
      description: 'Focusing on the actual problem before writing code. Defining clear user jobs-to-be-done and business constraints.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: 'Thoughtful Design',
      description: 'Crafting interfaces that feel intuitive, fast, and accessible, turning complex data and workflows into human experiences.',
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
      title: 'Emerging Technologies',
      description: 'Pragmatic application of machine intelligence, spatial 3D web, and automation without speculative hype or bloat.',
    },
  ];

  return (
    <section id="about" className="relative w-full py-20 lg:py-28 bg-[#04060d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <SectionHeader
          label="COMPANY INTRODUCTION"
          sublabel="Identity & Origin"
          title="Building Technology for"
          titleHighlight="Real-World Utility"
          description="AmitraX is a technology company focused on building modern digital products that solve real-world problems. We reject artificial complexity and focus on durable software engineering."
          badgeVariant="cyan"
        />

        {/* 1. Who We Are, What We Believe, What We Build */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#090e21]/80 border border-white/10 space-y-3 backdrop-blur-md">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
              01 • IDENTITY
            </span>
            <h3 className="text-xl font-bold font-display text-white">Who are we?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We are an ambitious software and product engineering company founded to bridge the divide between theoretical innovation and resilient, production-ready software.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#090e21]/80 border border-white/10 space-y-3 backdrop-blur-md">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
              02 • CREED
            </span>
            <h3 className="text-xl font-bold font-display text-white">What do we believe?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We believe technology is not an end in itself. Software exists to remove human friction, automate tedious labor, and provide clarity to organizations navigating complexity.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#090e21]/80 border border-white/10 space-y-3 backdrop-blur-md">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block">
              03 • OBJECTIVE
            </span>
            <h3 className="text-xl font-bold font-display text-white">What are we building?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We are building modern digital products, reliable multi-tenant software platforms, and grounded intelligent systems that deliver tangible value from day one.
            </p>
          </div>
        </div>

        {/* 2. The 4 Interlocking Disciplines */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a1024] to-[#060914] border border-cyan-500/20 shadow-xl space-y-6">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
              THE AMITRAX INTERSECTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Where Engineering Meets Craft
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              True technological leverage happens when four distinct disciplines work in tight harmony:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {disciplines.map((disc, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/10 w-fit mb-3">
                  {disc.icon}
                </div>
                <h4 className="text-base font-bold text-white font-display">{disc.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{disc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Company Story: Visual Storytelling (Problem → Idea → Build → Learn → Improve) */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
              ORIGIN & TRAJECTORY
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {COMPANY_STORY.headline}
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl mt-1">
              {COMPANY_STORY.subheadline}
            </p>
          </div>

          {/* Horizontal Step Progression Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {COMPANY_STORY.stages.map((step, idx) => (
              <button
                key={step.phase}
                type="button"
                id={`story-step-${step.step}`}
                onClick={() => setActiveStoryStep(idx)}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                  activeStoryStep === idx
                    ? 'bg-gradient-to-b from-cyan-500/20 to-blue-600/20 border-cyan-400 text-white shadow-lg'
                    : 'bg-[#080d1e]/80 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-cyan-400 font-mono">{step.step}</span>
                  {activeStoryStep === idx && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <div className="font-bold text-sm sm:text-base text-white">{step.phase}</div>
                <div className="text-[11px] text-slate-400 truncate">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Active Story Step Focus Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090e21] border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  PHASE {COMPANY_STORY.stages[activeStoryStep].step} // {COMPANY_STORY.stages[activeStoryStep].phase}
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  {COMPANY_STORY.stages[activeStoryStep].title}
                </h4>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {COMPANY_STORY.stages[activeStoryStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
