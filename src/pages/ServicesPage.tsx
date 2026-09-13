import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WhoWeBuildForSection } from '../components/sections/WhoWeBuildForSection';
import { Button } from '../components/ui/Button';
import { Cpu, CheckCircle2, ArrowUpRight, Sparkles, Award } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 pb-16 relative overflow-hidden">
      {/* Unique Warm Gold & Amber Ambient Atmospheric Glow */}
      <div className="absolute top-20 left-1/3 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[400px] right-10 w-[450px] h-[450px] bg-yellow-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-[0_0_15px_rgba(245,158,11,0.18)]">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>EXECUTIVE CRAFT & DELIVERY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
            Practical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              Engineering
            </span>{' '}
            Services
          </h1>

          <p className="text-slate-300 text-lg leading-relaxed">
            We partner with businesses, institutions, and founders to architect and deliver high-impact digital systems. We avoid generic pricing tiers and tailor our engineering directly to your operational requirements.
          </p>
        </div>
      </div>

      {/* Services Section with 9 services, procedural category visualizers and CTA */}
      <ServicesSection />

      {/* Audience & Who We Build For */}
      <WhoWeBuildForSection />
    </div>
  );
};
