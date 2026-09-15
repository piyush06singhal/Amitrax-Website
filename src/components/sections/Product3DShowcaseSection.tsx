import React from 'react';
import { ProductSpatialView } from '../3d/ProductSpatialView';

export const Product3DShowcaseSection: React.FC = () => {
  return (
    <section id="product-showcase" className="relative w-full py-24 lg:py-32 bg-slate-100 dark:bg-[#06080d] border-t border-slate-200 dark:border-white/5 overflow-hidden">
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-400">
            <span className="text-cyan-600 dark:text-cyan-400">06 // 3D SPATIAL SHOWCASE</span>
            <span>FUTURE INTERFACE PARADIGM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
            Spatial Product Film Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            AmitraX establishes a future-ready visual language for how digital platforms and complex systems can be understood. Explore our interactive multi-plane 3D architecture viewport below.
          </p>
        </div>

        {/* 3D Interactive Spatial Environment */}
        <ProductSpatialView />
      </div>
    </section>
  );
};
