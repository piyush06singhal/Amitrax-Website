import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug, AMITRAX_PRODUCTS } from '../data/products';
import { ProductStatusBadge } from '../components/products/ProductStatusBadge';
import { ProductStage3D } from '../components/products/ProductStage3D';
import { ProductVideoPlayer } from '../components/products/ProductVideoPlayer';
import { ProductMediaGallery } from '../components/products/ProductMediaGallery';
import { ProductMediaPresentation } from '../components/media/ProductMediaPresentation';
import { PRODUCT_STATUS_CONFIG } from '../types/products';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu, 
  Terminal, 
  ShieldAlert, 
  Calendar, 
  GitBranch, 
  Activity,
  Share2,
  Lock,
  ArrowUpRight
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [animationPhase, setAnimationPhase] = useState<number>(0);

  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (product) {
      document.title = `${product.name} | AmitraX Product Lab`;
    } else {
      document.title = 'Product Not Found | AmitraX';
    }

    // Cinematic Intro Sequence
    const timer1 = setTimeout(() => setAnimationPhase(1), 80);
    const timer2 = setTimeout(() => setAnimationPhase(2), 220);
    const timer3 = setTimeout(() => setAnimationPhase(3), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [product, slug]);

  // Handle Invalid Product Slug (Clean Fallback State)
  if (!product) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 pt-28 pb-20 bg-[#04060d]">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#080d1e] border border-white/10 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold font-display text-white">
              Product Not Found
            </h1>
            <p className="text-sm text-slate-300">
              The product or lab specification you requested is not currently registered in the AmitraX ecosystem.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Product Lab</span>
          </Link>
        </div>
      </div>
    );
  }

  const statusConfig = PRODUCT_STATUS_CONFIG[product.status];
  const isLive = product.status === 'live';

  // Dynamic Primary CTA destination
  const getCtaLink = () => {
    if (isLive && product.websiteUrl) {
      return product.websiteUrl;
    }
    return `/contact?inquiry=Product%20Collaboration&project=${encodeURIComponent(product.name)}`;
  };

  return (
    <div className="w-full pt-28 pb-24 bg-[#04060d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Product Lab</span>
          </Link>
        </div>

        {/* 10. Cinematic Hero Section */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-slate-300">
              CODE: {product.codeName || 'SPEC-01'}
            </div>
            <ProductStatusBadge status={product.status} size="md" />
            <span className="text-xs font-mono text-cyan-400">{product.category}</span>
          </div>

          <div
            className={`space-y-4 transition-all duration-500 ${
              animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight">
              {product.name}
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-200 font-display font-medium max-w-3xl">
              {product.tagline}
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Dynamic CTA Row */}
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-500 ${
              animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {isLive && product.websiteUrl ? (
              <a
                href={product.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 transition-all group"
              >
                <span>Open Live Product</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <Link
                to={getCtaLink()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 transition-all group"
              >
                <span>{statusConfig.defaultCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white text-sm font-medium transition-all"
            >
              <span>Contact Engineering Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Large Product Visual / 3D Stage / Video */}
        <div
          className={`transition-all duration-700 ${
            animationPhase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
          }`}
        >
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

        {/* 9. Storytelling Flow: Problem → Insight → Solution → Impact */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0a1026] via-[#070b1a] to-[#04060e] border border-white/10 space-y-10 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ENGINEERING NARRATIVE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Why We Engineered {product.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* The Problem */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <span className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider block">
                01 // THE SYSTEMIC PROBLEM
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                Real-World Friction
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.story.problem}
              </p>
            </div>

            {/* The Insight */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                02 // FIRST-PRINCIPLES INSIGHT
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                Architectural Truth
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.story.insight}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                03 // ENGINEERED SOLUTION
              </span>
              <h3 className="text-lg font-bold text-white font-display">
                Deterministic Output
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.story.solution}
              </p>
            </div>
          </div>

          {/* Impact summary quote */}
          {product.story.impact && (
            <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                  MEASURABLE VALUE OUTCOME
                </span>
                <p className="text-sm sm:text-base leading-relaxed">
                  {product.story.impact}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Key Capabilities */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>CAPABILITIES & SPECIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              What It Actually Does
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.keyCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#080d1e] border border-white/10 hover:border-cyan-400/30 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
                {cap.technicalDetail && (
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-xs text-slate-400">
                    <span className="text-cyan-400 font-semibold">SPEC: </span>
                    {cap.technicalDetail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 16. Technology Display with Specific Roles (Not Just Logos) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080d1e] border border-white/10 space-y-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>STACK ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Production Toolchain & Roles
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Technologies chosen strictly for runtime performance, memory safety, and deterministic consensus—never vanity trends.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    {tech.category || 'Core'}
                  </span>
                  <h4 className="text-base font-bold text-white font-display mt-0.5">
                    {tech.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                  {tech.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Development State & Milestones */}
        <div className="p-8 rounded-3xl bg-[#060914] border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                LIFECYCLE STATUS
              </span>
              <h3 className="text-xl font-bold font-display text-white mt-1">
                Current Development State
              </h3>
            </div>
            <ProductStatusBadge status={product.status} size="lg" />
          </div>

          {product.statusNotes && (
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              {product.statusNotes}
            </p>
          )}

          {/* Milestones if present */}
          {product.milestones && product.milestones.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {product.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${
                    m.status === 'completed'
                      ? 'bg-emerald-500/[0.04] border-emerald-500/20'
                      : m.status === 'active'
                      ? 'bg-cyan-500/[0.08] border-cyan-500/30'
                      : 'bg-white/[0.02] border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="text-slate-400">{m.date || 'TBD'}</span>
                    <span
                      className={`uppercase font-semibold ${
                        m.status === 'completed'
                          ? 'text-emerald-400'
                          : m.status === 'active'
                          ? 'text-cyan-400'
                          : 'text-slate-500'
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display">{m.phase}</h4>
                  <p className="text-xs text-slate-400 mt-1">{m.note}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Multi-Perspective Spatial Presentation (Sections 6 & 7) */}
        {(product.media?.[0]?.url || product.videoDemo?.posterUrl) && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Layers className="w-3.5 h-3.5" />
              <span>SPATIAL INTERFACE VIEWPORTS</span>
            </div>
            <ProductMediaPresentation
              asset={{
                id: `view-${product.id}`,
                type: 'image',
                src: product.media?.[0]?.url || product.videoDemo?.posterUrl || '',
                alt: `${product.name} interface view`,
                caption: `${product.name} operational viewport`,
                isConceptual: product.status !== 'live',
                badgeText: product.status !== 'live' ? 'CONCEPTUAL PROTOTYPE' : 'PRODUCTION RUNTIME',
              }}
              productTitle={product.name}
              initialStyle="floating"
            />
          </div>
        )}

        {/* Media Gallery */}
        {product.media && product.media.length > 0 && (
          <ProductMediaGallery media={product.media} productName={product.name} />
        )}

        {/* Ecosystem Relationships */}
        {product.relationships && product.relationships.length > 0 && (
          <div className="p-8 rounded-3xl bg-[#080d1e] border border-white/10 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                ECOSYSTEM RELATIONSHIPS
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">
                Connected Technologies
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.relationships.map((rel, idx) => (
                <Link
                  key={idx}
                  to={`/products/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                      {rel.relationshipType.replace('-', ' ')}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-slate-300">{rel.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Contact / Action Bar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c1533] via-[#080e24] to-[#050916] border border-cyan-500/30 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Interested in {product.name}?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you want to follow its development roadmap, test early alpha releases, or discuss technical integration with your infrastructure.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={getCtaLink()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all"
            >
              <span>{statusConfig.defaultCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-sm font-medium transition-all"
            >
              <span>Browse All Products</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
