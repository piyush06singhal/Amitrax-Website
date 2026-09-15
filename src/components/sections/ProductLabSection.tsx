import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProduct, getFilteredProducts } from '../../data/products';
import { ProductCard } from '../products/ProductCard';
import { FeaturedProductExperience } from '../products/FeaturedProductExperience';
import { ProductLabEmptyState } from '../products/ProductLabEmptyState';
import {
  FlaskConical,
  ArrowRight
} from 'lucide-react';

interface ProductLabSectionProps {
  /** Compact homepage preview mode: 3-product strip, no filter bar, no featured spotlight. */
  preview?: boolean;
}

export const ProductLabSection: React.FC<ProductLabSectionProps> = ({ preview = false }) => {
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const featuredProduct = getFeaturedProduct();
  const statuses = ['All', 'live', 'in-development', 'prototype', 'exploring', 'concept'];

  const filteredProducts = getFilteredProducts({
    status: preview ? 'All' : statusFilter,
  });

  // Homepage preview strip: only the first 3 products.
  const displayProducts = preview ? filteredProducts.slice(0, 3) : filteredProducts;

  return (
    <section id="product-lab" className="relative w-full py-24 lg:py-32 bg-slate-100 dark:bg-[#070a12] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300">
              <FlaskConical className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
              <span className="text-cyan-700 dark:text-cyan-400 font-semibold">05 // INFERENTIAL LAB</span>
              <span>AMITRAX PRODUCT LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
              Ideas become products{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">
                when we build them.
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              We explore problems, experiment with technology, and turn promising ideas into products people can actually use.
            </p>
          </div>

          {/* Status Lifecycle Filter (hidden in homepage preview mode) */}
          {!preview && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-[#0d1322] border border-slate-300 dark:border-white/10">
              {statuses.map((st) => (
                <button
                  key={st}
                  type="button"
                  id={`btn-filter-${st}`}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                    statusFilter === st
                      ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {st === 'All' ? 'All' : st.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Featured Product Experience (hidden in homepage preview mode) */}
        {!preview && featuredProduct && statusFilter === 'All' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 px-1">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse" />
                ACTIVE LAB HEADLINE
              </span>
              <span>INSPECTION READY</span>
            </div>
            <FeaturedProductExperience product={featuredProduct} />
          </div>
        )}

        {/* Product Cards Grid or Empty State */}
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <ProductLabEmptyState
            title="We're building what's next."
            description="Our product ecosystem is still taking shape. We'll share the first products as they're ready."
            filteredMessage={`No products currently with status: "${statusFilter.toUpperCase()}".`}
            onResetFilter={() => setStatusFilter('All')}
          />
        )}

        {/* Footer Link to Dedicated Product Lab Page */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="text-slate-900 dark:text-white font-semibold">AMITRAX PRODUCT ECOSYSTEM</span> // Scalable Architecture
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-300 dark:border-white/10 text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200 text-xs font-mono font-medium transition-all group"
          >
            <span>Explore Dedicated Product Lab</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
