import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/products';
import { ProductStatusBadge } from './ProductStatusBadge';
import { ProductStage3D } from './ProductStage3D';
import { ProductVideoPlayer } from './ProductVideoPlayer';
import { ArrowRight, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

interface FeaturedProductExperienceProps {
  product: Product;
}

export const FeaturedProductExperience: React.FC<FeaturedProductExperienceProps> = ({ product }) => {
  const isLive = product.status === 'live';

  return (
    <div
      id={`featured-product-${product.slug}`}
      className="relative w-full rounded-3xl bg-gradient-to-br from-slate-100 via-white to-white dark:from-[#0a1026] dark:via-[#070c1d] dark:to-[#04060f] border border-slate-200 dark:border-cyan-500/30 overflow-hidden shadow-xl dark:shadow-2xl p-6 sm:p-8 lg:p-12"
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Product Narrative & Specs (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-mono text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>FEATURED INITIATIVE</span>
            </div>
            <ProductStatusBadge status={product.status} size="md" />
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {product.category}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
              {product.name}
            </h3>
            <p className="text-base sm:text-lg font-medium text-cyan-700 dark:text-cyan-200">
              {product.tagline}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Capabilities Bullet Points */}
          <div className="space-y-2.5 pt-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Architectural Core
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyCapabilities.slice(0, 4).map((cap, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{cap.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology with Specific Roles */}
          <div className="pt-2">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
              Integrated Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {product.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-200 flex items-center gap-2"
                  title={tech.role}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="font-semibold text-slate-900 dark:text-white">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all group"
            >
              <span>{isLive ? 'Explore product' : 'View project architecture'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {product.websiteUrl && (
              <a
                href={product.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 dark:hover:text-white hover:text-slate-900 hover:border-slate-400 text-sm font-medium transition-all"
              >
                <span>Live Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: 3D Stage or Product Video (6 cols) */}
        <div className="lg:col-span-6">
          {product.videoDemo ? (
            <ProductVideoPlayer
              videoUrl={product.videoDemo.videoUrl}
              posterUrl={product.videoDemo.posterUrl}
              title={product.videoDemo.title}
            />
          ) : (
            <ProductStage3D product={product} />
          )}
        </div>
      </div>
    </div>
  );
};
