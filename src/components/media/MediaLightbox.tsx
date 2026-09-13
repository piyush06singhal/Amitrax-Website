import React, { useEffect, useRef } from 'react';
import { MediaAsset } from '../../types/media';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

interface MediaLightboxProps {
  assets: MediaAsset[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  title?: string;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({
  assets,
  activeIndex,
  onClose,
  onSelectIndex,
  title = 'System Media Inspector',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = activeIndex !== null && assets[activeIndex] !== undefined;
  const currentAsset = isOpen ? assets[activeIndex] : null;

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard Navigation: Esc to close, Arrows to navigate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((activeIndex! + 1) % assets.length);
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((activeIndex! - 1 + assets.length) % assets.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, assets.length, onClose, onSelectIndex]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left -> next
        onSelectIndex((activeIndex! + 1) % assets.length);
      } else {
        // Swiped right -> prev
        onSelectIndex((activeIndex! - 1 + assets.length) % assets.length);
      }
    }
    touchStartX.current = null;
  };

  if (!isOpen || !currentAsset) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} - image ${activeIndex! + 1} of ${assets.length}`}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Controls Bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full z-10">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xs font-semibold">
            {title.toUpperCase()}
          </span>
          <span className="text-slate-500 font-mono text-xs">
            // FRAME {String(activeIndex! + 1).padStart(2, '0')} / {String(assets.length).padStart(2, '0')}
          </span>
          {currentAsset.isConceptual && (
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono text-[10px]">
              <Sparkles className="w-2.5 h-2.5" />
              <span>CONCEPTUAL SPEC</span>
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Close media viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Center Media Viewport */}
      <div className="relative flex-1 flex items-center justify-center my-3 max-w-6xl mx-auto w-full">
        {currentAsset.type === 'video' ? (
          <video
            src={currentAsset.src}
            controls
            autoPlay
            playsInline
            className="max-h-[72vh] max-w-full rounded-2xl shadow-2xl border border-white/10"
          />
        ) : (
          <img
            src={currentAsset.src}
            alt={currentAsset.alt || 'High resolution view'}
            className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        )}

        {/* Previous Navigation Button */}
        {assets.length > 1 && (
          <button
            type="button"
            onClick={() => onSelectIndex((activeIndex! - 1 + assets.length) % assets.length)}
            className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/70 hover:bg-cyan-500/30 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Previous media"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Navigation Button */}
        {assets.length > 1 && (
          <button
            type="button"
            onClick={() => onSelectIndex((activeIndex! + 1) % assets.length)}
            className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/70 hover:bg-cyan-500/30 text-white border border-white/15 backdrop-blur-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Next media"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Information & Thumbnails Bar */}
      <div className="max-w-4xl mx-auto w-full text-center space-y-3">
        {currentAsset.caption && (
          <p className="text-sm text-slate-200 font-medium">
            {currentAsset.caption}
          </p>
        )}

        {/* Mini Thumbnails Strip */}
        {assets.length > 1 && (
          <div className="flex items-center justify-center gap-2 pt-1 overflow-x-auto py-1">
            {assets.map((item, idx) => (
              <button
                key={item.id || idx}
                onClick={() => onSelectIndex(idx)}
                className={`w-14 h-9 rounded-lg overflow-hidden border shrink-0 transition-all ${
                  idx === activeIndex
                    ? 'border-cyan-400 ring-2 ring-cyan-400/40 scale-105 opacity-100'
                    : 'border-white/20 opacity-40 hover:opacity-100'
                }`}
                aria-label={`Jump to frame ${idx + 1}`}
              >
                <img src={item.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
