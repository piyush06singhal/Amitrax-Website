import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/hero/Hero';
import { CorePhilosophySection } from '../components/sections/CorePhilosophySection';
import { WhatWeBuildSection } from '../components/sections/WhatWeBuildSection';
import { ProductLabSection } from '../components/sections/ProductLabSection';
import { UnsplashFigure } from '../components/ui/UnsplashFigure';
import {
  ArrowRight,
  Award,
  Building2,
  Compass,
  FlaskConical,
  Layers,
} from 'lucide-react';

const EXPLORE_LINKS = [
  {
    to: '/services',
    icon: <Award className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    title: 'Engineering Services',
    description: 'End-to-end architecture, product development, and production systems built around your constraints.',
    eyebrow: 'DELIVERY & CRAFT',
    accent: 'hover:border-amber-500/50 dark:hover:border-amber-400/40',
    tag: 'text-amber-700 dark:text-amber-300',
  },
  {
    to: '/architecture',
    icon: <Building2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    title: 'Architecture & Methodology',
    description: 'A disciplined 6-stage lifecycle and defensive technical foundations for durable, evolvable systems.',
    eyebrow: 'SYSTEM DESIGN',
    accent: 'hover:border-emerald-500/50 dark:hover:border-emerald-400/40',
    tag: 'text-emerald-700 dark:text-emerald-300',
  },
  {
    to: '/capabilities',
    icon: <Layers className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    title: 'Capabilities',
    description: 'The systems we build — from 3D web interfaces to intelligent pipelines and distributed infrastructure.',
    eyebrow: 'SYSTEM DOMAINS',
    accent: 'hover:border-indigo-500/50 dark:hover:border-indigo-400/40',
    tag: 'text-indigo-700 dark:text-indigo-300',
  },
  {
    to: '/about',
    icon: <Compass className="w-5 h-5 text-rose-500 dark:text-rose-400" />,
    title: 'About AmitraX',
    description: 'Who we are, the principles we operate by, and the people we build for.',
    eyebrow: 'IDENTITY & ETHOS',
    accent: 'hover:border-rose-500/50 dark:hover:border-rose-400/40',
    tag: 'text-rose-700 dark:text-rose-300',
  },
];

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <CorePhilosophySection />
      <WhatWeBuildSection />

      {/* Product Lab — compact homepage preview strip (full lab lives at /products) */}
      <ProductLabSection preview />

      {/* Where to Explore Next */}
      <section className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#04060d] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
                <FlaskConical className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
                <span className="text-cyan-700 dark:text-cyan-400 font-semibold">AMITRAX OVERVIEW</span>
                <span>WHERE TO EXPLORE NEXT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
                Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-300 dark:via-sky-200 dark:to-indigo-300">platform</span> and methodology
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-white dark:text-cyan-300 dark:border dark:border-white/10 text-xs font-mono font-medium transition-all group shrink-0"
            >
              <span>Visit Product Lab</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {EXPLORE_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`group p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 transition-all duration-300 flex flex-col justify-between h-full ${item.accent}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {item.icon}
                    <span className={`text-[10px] font-mono tracking-wider ${item.tag}`}>{item.eyebrow}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                </div>
                <span className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-700 dark:text-cyan-300">
                  <span>OPEN</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial brand band */}
      <section className="relative w-full py-20 lg:py-28 bg-slate-50 dark:bg-[#05070e] border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <UnsplashFigure
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              alt="Modern server racks in a dimly lit data center with a single cyan status light"
              caption="DISTRIBUTED INFRASTRUCTURE"
              aspect="aspect-[16/11]"
            />
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
                  <span className="text-cyan-700 dark:text-cyan-400 font-semibold">AMITRAX ENGINEERING</span>
                  <span>BUILT TO LAST</span>
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                  Architecture decoupled from hype
                </h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  Every AmitraX system is engineered first — typed contracts, defensible data flow, and an intentional rendering stack. The result is software that behaves predictably under real operational pressure, not just in a demo.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">Type-safe foundations.</span> Contracts and validation enforced at the boundaries of every layer.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">Local-first, offline-safe.</span> Data stays on the edge and synchronizes when the network permits.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">Observable by design.</span> Structured telemetry baked into the stack from the first commit.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};