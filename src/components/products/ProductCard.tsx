import React from 'react';
import { Link } from 'react-router-dom';
import { Product, PRODUCT_STATUS_CONFIG } from '../../types/products';
import { ProductStatusBadge } from './ProductStatusBadge';
import { ArrowRight, Layers, Terminal, Sparkles, Cpu } from 'lucide-react';
import { TiltCard } from '../motion/TiltCard';

interface ProductCardProps {
  product: Product;
  className?: string;
}

/** Fallback accent per category when a product has no explicit colorAccent. */
const CATEGORY_ACCENTS: Record<string, string> = {
  'Data & Distributed': '#38bdf8',
  'AI & Intelligence': '#a855f7',
  'Interface & Spatial': '#10b981',
  'Developer Tools': '#6366f1',
  Platform: '#38bdf8',
  Automation: '#f59e0b',
  Enterprise: '#10b981',
  Consumer: '#f43f5e',
  Experimental: '#8b5cf6',
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const statusConfig = PRODUCT_STATUS_CONFIG[product.status];

  // Every product carries a real accent — drive the whole card visual from it.
  const accent = product.colorAccent || CATEGORY_ACCENTS[product.category] || '#38bdf8';

  // Translucent accent layers (8-digit hex).
  const accentGlow = `${accent}2e`;
  const accentBorder = `${accent}40`;
  const accentTile = `${accent}1c`;

  const getCategoryIcon = () => {
    switch (product.category) {
      case 'Data & Distributed':
        return <Layers className="w-8 h-8" />;
      case 'AI & Intelligence':
        return <Sparkles className="w-8 h-8" />;
      case 'Interface & Spatial':
        return <Cpu className="w-8 h-8" />;
      default:
        return <Terminal className="w-8 h-8" />;
    }
  };

  return (
    <TiltCard maxTilt={5} scale={1.012} className="h-full w-full">
      <article
        id={`product-card-${product.slug}`}
        style={
          {
            '--card-accent': accent,
            '--card-accent-glow': accentGlow,
          } as React.CSSProperties
        }
        className={`relative h-full rounded-2xl bg-white dark:bg-[#080d1e]/90 border border-slate-200/90 dark:border-white/10 hover:border-[color:var(--card-accent)] transition-colors duration-300 overflow-hidden shadow-sm dark:shadow-xl hover:shadow-xl dark:hover:shadow-[0_10px_30px_var(--card-accent-glow)] flex flex-col justify-between group ${className}`}
      >
        {/* Top Media / Category Abstract Visual */}
        <div className="relative border-b border-slate-200 dark:border-white/10">
          <div className="relative w-full h-44 overflow-hidden bg-slate-950">
            {/* Accent-tinted gradient wash (deliberately dark media viewport) */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(120% 130% at 15% 0%, ${accent}30, transparent 55%), linear-gradient(160deg, #0b1122 0%, #060a17 100%)`,
              }}
            />

            {/* Dotted data-grid tinted with the product accent */}
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `radial-gradient(${accent} 1px, transparent 1px)`,
                backgroundSize: '16px 16px',
              }}
            />

            {/* Slow-spinning dashed orbit rings */}
            <div
              className="absolute -right-10 -top-10 w-44 h-44 rounded-full border border-dashed opacity-40 animate-spin [animation-duration:26s]"
              style={{ borderColor: accentBorder }}
            />
            <div
              className="absolute -right-4 -top-4 w-28 h-28 rounded-full border opacity-20 animate-spin [animation-duration:18s] [animation-direction:reverse]"
              style={{ borderColor: accentBorder }}
            />

            {/* Floating signal nodes */}
            <div
              className="absolute left-[12%] top-[22%] w-1.5 h-1.5 rounded-full animate-pulse [animation-delay:0.2s]"
              style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
            />
            <div
              className="absolute left-[30%] bottom-[22%] w-1 h-1 rounded-full animate-pulse [animation-delay:1.1s]"
              style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
            />
            <div
              className="absolute right-[20%] top-[30%] w-1 h-1 rounded-full animate-pulse [animation-delay:0.7s]"
              style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
            />

            {/* Center icon tile — accent-tinted */}
            <div className="relative z-10 flex flex-col items-center gap-2 h-full justify-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300"
                style={{
                  color: accent,
                  background: accentTile,
                  border: `1px solid ${accentBorder}`,
                  boxShadow: `0 0 24px ${accentGlow}`,
                }}
              >
                {getCategoryIcon()}
              </div>
              <span
                className="text-[11px] font-mono uppercase tracking-wider"
                style={{ color: accent }}
              >
                {product.category}
              </span>
            </div>

            {/* Hover scan-line sweep */}
            <div
              className="absolute top-0 left-0 right-0 h-10 opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-[200px] transition-all duration-700 pointer-events-none"
              style={{
                background: `linear-gradient(180deg, transparent, ${accent}55, ${accent}, ${accent}55, transparent)`,
                boxShadow: `0 0 14px ${accent}`,
              }}
            />

            {/* Bottom accent under-glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}cc, transparent)` }}
            />
          </div>

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
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white group-hover:text-[color:var(--card-accent)] transition-colors">
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

          {/* Lifecycle Readiness — grounded in real product data */}
          {typeof product.readinessPercentage === 'number' && (
            <div className="pt-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                <span className="uppercase tracking-wider">Lifecycle Readiness</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {product.readinessPercentage}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-200/80 dark:bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${product.readinessPercentage}%`,
                    background: `linear-gradient(90deg, ${accent}99, ${accent})`,
                    boxShadow: `0 0 8px ${accentGlow}`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Action Link Row */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between mt-auto">
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {statusConfig.defaultCtaText}
            </span>

            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 group-hover:text-[color:var(--card-accent)] hover:underline"
              aria-label={`Explore ${product.name}`}
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    </TiltCard>
  );
};