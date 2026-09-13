import React, { useState } from 'react';
import { CinematicScene } from '../media/CinematicScene';
import { ImageSequencePlayer } from '../media/ImageSequencePlayer';
import { ProductMediaPresentation } from '../media/ProductMediaPresentation';
import { SectionHeader } from '../ui/SectionHeader';
import { MediaAsset } from '../../types/media';
import { Sparkles, Layers, Video, Film, Eye } from 'lucide-react';

export const CinematicConvergenceSection: React.FC = () => {
  const [activeMediaTab, setActiveMediaTab] = useState<'3d-video' | 'sequence' | 'product-presentation'>('3d-video');

  const demoProductAsset: MediaAsset = {
    id: 'demo-axiom',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    alt: 'Axiom Core Real-Time Spatial Dashboard',
    caption: 'Axiom v2.4 • Distributed runtime node metrics with deterministic sub-millisecond consensus',
    isConceptual: true,
    badgeText: 'SYSTEM BENCHMARK RUNTIME',
  };

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#03050c] border-t border-white/5 overflow-hidden">
      {/* Ambient atmospheric backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <SectionHeader
          label="MEDIA ARCHITECTURE"
          sublabel="Cinematic Technology Showcase"
          title="Digital Systems in"
          titleHighlight="High Fidelity"
          description="Explore our living 3D environments, progressive genesis sequences, and multi-perspective product viewport modes—engineered without stock clichés."
          badgeVariant="cyan"
          actionSlot={
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveMediaTab('3d-video')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeMediaTab === '3d-video'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>3D + Video Spatial</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMediaTab('sequence')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeMediaTab === 'sequence'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Genesis Sequence</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMediaTab('product-presentation')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeMediaTab === 'product-presentation'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold shadow-[0_0_12px_rgba(52,211,153,0.25)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Product Viewports</span>
              </button>
            </div>
          }
        />

        {/* Tab 1: 3D + Video Combination (Section 18) */}
        {activeMediaTab === '3d-video' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <CinematicScene
              title="Axiom Distributed Consensus Telemetry"
              subtitle="Real Three.js spatial background synchronized with live floating product interface"
              posterSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
            />
          </div>
        )}

        {/* Tab 2: Progressive Image/Canvas Genesis Sequence (Section 8) */}
        {activeMediaTab === 'sequence' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <ImageSequencePlayer title="AmitraX Engineering Genesis Pipeline" />
          </div>
        )}

        {/* Tab 3: Multi-Style Product Screenshot Presentation (Sections 6 & 7) */}
        {activeMediaTab === 'product-presentation' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            <ProductMediaPresentation
              asset={demoProductAsset}
              initialStyle="floating"
              productTitle="Axiom Production Interface"
            />
          </div>
        )}
      </div>
    </section>
  );
};
