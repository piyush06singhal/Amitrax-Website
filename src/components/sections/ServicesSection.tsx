import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, ServiceDetail } from '../../data/services';
import { Button } from '../ui/Button';
import { ServiceCategoryVisual } from '../services/ServiceCategoryVisual';
import { 
  AppWindow, 
  Globe, 
  Cpu, 
  BrainCircuit, 
  Palette, 
  Server, 
  Workflow, 
  Cloud, 
  Compass, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);

  const categories = ['All', 'Engineering', 'Intelligence', 'Platforms', 'Design & Strategy'];

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const getServiceVisualType = (id: string): 'software' | 'ai' | 'automation' | 'design' | 'cloud' => {
    switch (id) {
      case 'ai-intelligent-systems':
        return 'ai';
      case 'automation-solutions':
        return 'automation';
      case 'ui-ux-product-design':
        return 'design';
      case 'cloud-infrastructure':
      case 'backend-api-engineering':
        return 'cloud';
      default:
        return 'software';
    }
  };

  const getServiceColors = (id: string) => {
    switch (id) {
      case 'software-engineering':
      case 'product-development':
        return {
          accent: '#d97706',
          border: 'border-amber-500/30',
          badge: 'text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/20',
          tag: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/20',
        };
      case 'ai-intelligent-systems':
        return {
          accent: '#9333ea',
          border: 'border-purple-500/30',
          badge: 'text-purple-700 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
          tag: 'text-purple-700 dark:text-purple-300 bg-purple-500/10 border-purple-500/20',
        };
      case 'automation-solutions':
        return {
          accent: '#047857',
          border: 'border-emerald-500/30',
          badge: 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
          tag: 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
        };
      case 'ui-ux-product-design':
        return {
          accent: '#e11d48',
          border: 'border-rose-500/30',
          badge: 'text-rose-700 dark:text-rose-400 bg-rose-500/10 border-rose-500/20',
          tag: 'text-rose-700 dark:text-rose-300 bg-rose-500/10 border-rose-500/20',
        };
      case 'cloud-infrastructure':
      case 'backend-api-engineering':
      case 'web-development':
        return {
          accent: '#0284c7',
          border: 'border-cyan-500/30',
          badge: 'text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
          tag: 'text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
        };
      default:
        return {
          accent: '#d97706',
          border: 'border-amber-500/30',
          badge: 'text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/20',
          tag: 'text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/20',
        };
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'product-development':
        return <AppWindow className="w-5 h-5 text-amber-400" />;
      case 'web-development':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'software-engineering':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'ai-intelligent-systems':
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'ui-ux-product-design':
        return <Palette className="w-5 h-5 text-rose-400" />;
      case 'backend-api-engineering':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'automation-solutions':
        return <Workflow className="w-5 h-5 text-emerald-400" />;
      case 'cloud-infrastructure':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'technology-consulting':
        return <Compass className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative w-full py-20 lg:py-28 bg-white dark:bg-[#05070e] border-t border-slate-200 dark:border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Filter (page hero already provides the heading) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-100 dark:bg-[#0a0f24] border border-slate-300 dark:border-white/10 shadow-lg mb-10 w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`btn-service-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/[0.05]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services List with Expandable Deep Breakdowns */}
        <div className="space-y-4 mb-16">
          {filteredServices.map((service: ServiceDetail, index: number) => {
            const isExpanded = expandedId === service.id;
            const colors = getServiceColors(service.id);
            const visualType = getServiceVisualType(service.id);

            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isExpanded
                    ? `bg-gradient-to-br from-slate-50 via-white to-white dark:from-[#0c142c] dark:via-[#090e20] dark:to-[#060a17] ${colors.border} shadow-xl dark:backdrop-blur-md`
                    : 'bg-white dark:bg-[#090d1c]/80 border-slate-200 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-[#0c1226]'
                }`}
              >
                {/* Header Row */}
                <button
                  type="button"
                  id={`service-header-${service.id}`}
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-white">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400">
                      {isExpanded ? 'Hide Details' : 'View Scope & Deliverables'}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-7 pt-2 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: Explanation & Problems Solved (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: colors.accent }}>
                          Overview
                        </h4>
                        <p className="text-sm sm:text-base text-slate-800 dark:text-white leading-relaxed">
                          {service.shortExplanation}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-100 dark:bg-[#060914]/80 border border-slate-200 dark:border-white/10 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-300">
                          <AlertCircle className="w-4 h-4" />
                          <span>Typical Problems We Help Solve</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {service.typicalProblemsSolved}
                        </p>
                      </div>
                    </div>

                    {/* Middle: Visual Story Representation (3 cols - Section 19) */}
                    <div className="lg:col-span-3 space-y-2">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                        SPATIAL TOPOLOGY SPEC
                      </span>
                      <ServiceCategoryVisual type={visualType} accentColor={colors.accent} />
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 text-center block">
                        Procedural {service.category} Model
                      </span>
                    </div>

                    {/* Right: Deliverables & Tech Stack (4 cols) */}
                    <div className="lg:col-span-4 space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-2">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-slate-200 dark:border-white/10">
                        <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-2">
                          Representative Technologies
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((t, idx) => (
                            <span
                              key={idx}
                              className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${colors.tag}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section 17: Natural CTA After Services */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-white dark:from-[#181105] dark:via-[#120d04] dark:to-[#0c0903] border border-amber-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pragmatic Technical Engagement</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                Have something worth building?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Tell us what you're trying to solve. We can start by understanding the problem and evaluating technical feasibility.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto !bg-amber-500 hover:!bg-amber-400 !text-black font-semibold border-none"
                  iconRight={<ArrowUpRight className="w-4 h-4" />}
                >
                  Start a Technical Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
