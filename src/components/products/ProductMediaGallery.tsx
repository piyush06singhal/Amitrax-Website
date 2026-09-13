import React, { useState, useEffect } from 'react';
import { MediaAsset } from '../../types/products';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';

interface ProductMediaGalleryProps {
  media: MediaAsset[];
  productName: string;
}

export const ProductMediaGallery: React.FC<ProductMediaGalleryProps> = ({ media, productName }) => {
  const [activeViewerIndex, setActiveViewerIndex] = useState<number | null>(null);

  if (!media || media.length === 0) return null;

  // Keyboard Navigation
  useEffect(() => {
    if (activeViewerIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveViewerIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveViewerIndex((prev) => (prev !== null ? (prev + 1) % media.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveViewerIndex((prev) => (prev !== null ? (prev - 1 + media.length) % media.length : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeViewerIndex, media.length]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
          <ImageIcon className="w-4 h-4" />
          <span>SYSTEM MEDIA & ARCHITECTURAL RENDERS ({media.length})</span>
        </div>
        <span className="text-xs text-slate-400 font-mono">Click to expand viewer</span>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {media.map((asset, index) => (
          <div
            key={asset.id}
            onClick={() => setActiveViewerIndex(index)}
            className="group relative rounded-xl bg-[#080d1e] border border-white/10 overflow-hidden cursor-pointer hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
          >
            <div className="aspect-video w-full overflow-hidden bg-black/40">
              <img
                src={asset.url}
                alt={asset.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-cyan-300 uppercase tracking-wider block">
                    {asset.type.toUpperCase()}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {asset.title}
                  </h4>
                </div>
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-cyan-500/30 text-white group-hover:text-cyan-200 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Media Viewer Modal */}
      {activeViewerIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Media viewer: ${media[activeViewerIndex].title}`}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full z-10">
            <div className="font-mono text-xs text-slate-300">
              <span className="text-cyan-400 font-semibold">{productName}</span> // MEDIA 0
              {activeViewerIndex + 1} OF 0{media.length}
            </div>

            <button
              type="button"
              onClick={() => setActiveViewerIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Main Media */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full">
            <img
              src={media[activeViewerIndex].url}
              alt={media[activeViewerIndex].title}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Prev Button */}
            {media.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveViewerIndex((prev) => (prev !== null ? (prev - 1 + media.length) % media.length : 0));
                }}
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-cyan-500/30 text-white border border-white/10 transition-all hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Next Button */}
            {media.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveViewerIndex((prev) => (prev !== null ? (prev + 1) % media.length : 0));
                }}
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-cyan-500/30 text-white border border-white/10 transition-all hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Bottom Caption & Thumbnails Bar */}
          <div className="max-w-4xl mx-auto w-full text-center space-y-3">
            <h3 className="text-base font-bold text-white font-display">
              {media[activeViewerIndex].title}
            </h3>
            {media[activeViewerIndex].caption && (
              <p className="text-xs sm:text-sm text-slate-300">
                {media[activeViewerIndex].caption}
              </p>
            )}

            {/* Mini Thumbnails */}
            {media.length > 1 && (
              <div className="flex items-center justify-center gap-2 pt-2">
                {media.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveViewerIndex(idx)}
                    className={`w-12 h-8 rounded-lg overflow-hidden border transition-all ${
                      idx === activeViewerIndex
                        ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-105'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={item.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
