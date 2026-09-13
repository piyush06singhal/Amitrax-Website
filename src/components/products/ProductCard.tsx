import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, PRODUCT_STATUS_CONFIG } from '../../types/products';
import { ProductStatusBadge } from './ProductStatusBadge';
import { ArrowRight, Layers, Terminal, Sparkles, Cpu } from 'lucide-react';
import { TiltCard } from '../motion/TiltCard';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const statusConfig = PRODUCT_STATUS_CONFIG[product.status];

  // Dynamic category icon
  const getCategoryVisual = () => {
    switch (product.category) {
      case 'Data & Distributed':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-[#0c142e] dark:to-[#060a17] overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-300">
                <Layers className="w-8 h-8 text-cyan-400" />
              </div>
              <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider">
                DISTRIBUTED STATE MESH
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>
        );
      case 'AI & Intelligence':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-[#130d2e] dark:to-[#070517] overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-500/10 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wider">
                COGNITIVE INFERENCE DAG
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
          </div>
        );
      case 'Interface & Spatial':
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-[#0a1e1b] dark:to-[#040f0c] overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-emerald-400" />
              </div>
              <span className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider">
                SPATIAL GPU VIEWPORT
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
          </div>
        );
      default:
        return (
          <div className="relative w-full h-44 bg-gradient-to-br from-slate-900 to-slate-950 dark:from-[#101429] dark:to-[#060814] overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10 group-hover:scale-105 transition-transform duration-300">
                <Terminal className="w-8 h-8 text-indigo-400" />
              </div>
              <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider">
                RUNTIME TELEMETRY BEACON
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
          </div>
        );
    }
  };

  return (
    <TiltCard maxTilt={5} scale={1.012} className="h-full">
      <article
        id={`product-card-${product.slug}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative h-full rounded-2xl bg-white dark:bg-[#080d1e]/90 border border-slate-200/90 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-colors duration-300 overflow-hidden shadow-sm dark:shadow-xl hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)] flex flex-col justify-between group ${className}`}
      >
        {/* Top Media / Category Abstract Render Visual */}
        <div className="relative border-b border-slate-200 dark:border-white/10">
          {getCategoryVisual()}

          {/* Floating Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-black/75 border border-white/15 text-slate-200 backdrop-blur-md">
              {product.codeName || 'PROD'}
            </span>
            <ProductStatusBadge status={product.status} size="sm" />
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium mb-1">
              {product.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors">
              {product.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2">
              {product.shortDescription}
            </p>
          </div>

          {/* Technologies Breakdown Pills */}
          <div className="pt-2">
            <div className="flex flex-wrap gap-1.5">
              {product.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5"
                >
                  {tech.name}
                </span>
              ))}
              {product.technologies.length > 3 && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-slate-50 dark:bg-white/[0.03]">
                  +{product.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Action Link Row */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between mt-auto">
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {product.readinessPercentage
                ? `${product.readinessPercentage}% Complete`
                : 'Architecture Ready'}
            </span>

            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 hover:underline"
              aria-label={`Explore ${product.name}`}
            >
              <span>{statusConfig.defaultCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    </TiltCard>
  );
};
