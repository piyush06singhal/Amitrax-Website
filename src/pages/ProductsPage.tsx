import React, { useState, useEffect, useMemo } from 'react';
import { 
  AMITRAX_PRODUCTS, 
  getFeaturedProduct, 
  getAllProductCategories, 
  getAllProductStatuses, 
  getFilteredProducts 
} from '../data/products';
import { ProductCategory, ProductStatus } from '../types/products';
import { ProductCard } from '../components/products/ProductCard';
import { FeaturedProductExperience } from '../components/products/FeaturedProductExperience';
import { ProductLabEmptyState } from '../components/products/ProductLabEmptyState';
import { ProductEcosystemVisualization } from '../components/products/ProductEcosystemVisualization';
import { SectionHeader } from '../components/ui/SectionHeader';
import { 
  FlaskConical, 
  Filter, 
  Sparkles, 
  Layers, 
  GitBranch, 
  CheckCircle2, 
  Search,
  Share2
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showEcosystemGraph, setShowEcosystemGraph] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Product Lab & Ecosystem | AmitraX';
  }, []);

  const featuredProduct = useMemo(() => getFeaturedProduct(), []);
  const allCategories = useMemo(() => ['All', ...getAllProductCategories()], []);
  const allStatuses: (string)[] = [
    'All',
    'live',
    'beta',
    'in-development',
    'prototype',
    'exploring',
    'concept',
  ];

  const filteredProducts = useMemo(() => {
    return getFilteredProducts({
      category: selectedCategory,
      status: selectedStatus,
      search: searchQuery,
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedStatus('All');
    setSearchQuery('');
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#04060d] relative overflow-hidden">
      {/* Unique Aurora Teal & Neon Violet Ambient Atmospheric Glow */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[480px] right-10 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-slate-300">
            <FlaskConical className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-teal-400 font-semibold">AMITRAX PRODUCT LAB</span>
            <span>// R&D & ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
            Ideas become products <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-fuchsia-300">
              when we build them.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-body">
            We explore problems, experiment with technology, and turn promising ideas into products people can actually use.
          </p>
        </div>

        {/* Featured Product Experience (Shown when available and unfiltered) */}
        {featuredProduct && selectedCategory === 'All' && selectedStatus === 'All' && !searchQuery && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SPOTLIGHT INITIATIVE
              </span>
              <span>LIFECYCLE TIER 01</span>
            </div>
            <FeaturedProductExperience product={featuredProduct} />
          </div>
        )}

        {/* Filter & Controls Bar */}
        <div className="space-y-6 pt-4 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold font-display text-white">
                All Products & Lab Initiatives
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Explore technology transitioning from initial mathematical hypotheses to production software.
              </p>
            </div>

            {/* Ecosystem Topology Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowEcosystemGraph(!showEcosystemGraph)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all flex items-center gap-2 cursor-pointer ${
                  showEcosystemGraph
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                    : 'bg-white/[0.04] text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{showEcosystemGraph ? 'Hide Graph' : 'Ecosystem Topology'}</span>
              </button>
            </div>
          </div>

          {/* Ecosystem Graph Accordion */}
          {showEcosystemGraph && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              <ProductEcosystemVisualization />
            </div>
          )}

          {/* Filtering Controls */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#080d1e] border border-white/10 space-y-4 shadow-xl">
            {/* Category Pills */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Filter by Category:
              </span>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      selectedCategory === cat
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-white hover:border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Pills */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Filter by Lifecycle Status:
              </span>
              <div className="flex flex-wrap gap-2">
                {allStatuses.map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setSelectedStatus(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                      selectedStatus === st
                        ? 'bg-blue-600/30 text-blue-200 border border-blue-400/40 font-semibold'
                        : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-white hover:border-white/10'
                    }`}
                  >
                    {st === 'All' ? 'All Statuses' : st.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid or Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <ProductLabEmptyState
            filteredMessage={`No products found matching category "${selectedCategory}" and status "${selectedStatus}".`}
            onResetFilter={handleResetFilters}
          />
        )}
      </div>
    </div>
  );
};
