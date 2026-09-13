import React from 'react';
import { WHO_WE_BUILD_FOR, ACCESSIBILITY_PRINCIPLES } from '../../data/company';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  Building2, 
  Landmark, 
  Rocket, 
  Users, 
  ShieldCheck, 
  Smartphone, 
  Eye, 
  Zap, 
  Sparkles,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export const WhoWeBuildForSection: React.FC = () => {
  const getAudienceIcon = (id: string) => {
    switch (id) {
      case 'businesses':
        return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'institutions':
        return <Landmark className="w-6 h-6 text-blue-400" />;
      case 'startups':
        return <Rocket className="w-6 h-6 text-purple-400" />;
      case 'digital-users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      default:
        return <Users className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getPrincipleIcon = (title: string) => {
    if (title.includes('Accessible')) return <Eye className="w-4 h-4 text-cyan-400" />;
    if (title.includes('Clarity')) return <Sparkles className="w-4 h-4 text-blue-400" />;
    if (title.includes('Fluidity')) return <Smartphone className="w-4 h-4 text-purple-400" />;
    if (title.includes('Reliability')) return <Zap className="w-4 h-4 text-amber-400" />;
    return <HeartHandshake className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#05070e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <SectionHeader
          label="WHO WE BUILD FOR"
          sublabel="Purpose-Driven Partnerships"
          title="Designed for Those"
          titleHighlight="Solving Hard Problems"
          description="Rather than transactional vendor relationships, we work alongside leaders and teams who require high technical rigor and enduring digital tools."
          badgeVariant="emerald"
        />

        {/* 4 Audience Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_WE_BUILD_FOR.map((seg) => (
            <div
              key={seg.id}
              className="p-7 rounded-2xl bg-gradient-to-b from-[#0a0f24] to-[#060914] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 w-fit group-hover:scale-110 transition-transform">
                  {getAudienceIcon(seg.id)}
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {seg.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mb-3">
                    {seg.tagline}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {seg.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 mt-4 space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Typical Engagement
                </span>
                {seg.typicalNeeds.slice(0, 3).map((need, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">{need}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section 14: Accessibility & Real-World Use Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0c1530] via-[#091024] to-[#070c1b] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 mb-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ACCESSIBILITY & REAL-WORLD USE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Accessibility as a Core Engineering Standard
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We treat accessibility, responsiveness, and cognitive clarity as non-negotiable foundations of good product engineering—never an afterthought or a compliance checklist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACCESSIBILITY_PRINCIPLES.map((principle, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  {getPrincipleIcon(principle.title)}
                  <span className="text-xs font-bold text-white">{principle.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
