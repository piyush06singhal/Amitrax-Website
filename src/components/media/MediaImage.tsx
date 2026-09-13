import React, { useState } from 'react';
import { MediaAsset } from '../../types/media';
import { Maximize2, ImageOff, Sparkles, ShieldAlert } from 'lucide-react';

interface MediaImageProps {
  asset: MediaAsset;
  className?: string;
  onExpand?: (asset: MediaAsset) => void;
  showCaption?: boolean;
  priority?: boolean;
}

export const MediaImage: React.FC<MediaImageProps> = ({
  asset,
  className = '',
  onExpand,
  showCaption = true,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectRatioClass = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-4/3',
    '21/9': 'aspect-[21/9]',
    '1/1': 'aspect-square',
    '9/16': 'aspect-[9/16]',
  }[asset.aspectRatio || '16/9'];

  return (
    <figure className={`relative group flex flex-col space-y-2 ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-[#080d1a] border border-white/10 ${aspectRatioClass} transition-all duration-300 group-hover:border-cyan-500/40`}
      >
        {/* Shimmer skeleton while loading */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.06] to-white/[0.02] animate-pulse" />
        )}

        {/* Fallback state on error */}
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-2 bg-[#090e1f]">
            <ImageOff className="w-8 h-8 text-slate-500" />
            <span className="text-xs font-mono text-slate-400">Media Asset Rendering Unavailable</span>
            <span className="text-[11px] text-slate-500">{asset.alt || 'Asset identifier fallback'}</span>
          </div>
        ) : (
          <img
            src={asset.src}
            alt={asset.alt || 'AmitraX engineering media asset'}
            loading={priority ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } group-hover:scale-105`}
          />
        )}

        {/* Conceptual vs Real distinction badge (Section 23) */}
        {asset.isConceptual && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 border border-purple-500/40 text-purple-300 font-mono text-[10px] tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              <span>{asset.badgeText || 'CONCEPTUAL R&D SPEC'}</span>
            </span>
          </div>
        )}

        {/* Expand Trigger Button (Lightbox) */}
        {onExpand && !hasError && (
          <button
            type="button"
            onClick={() => onExpand(asset)}
            className="absolute bottom-3 right-3 z-10 p-2 rounded-xl bg-black/70 hover:bg-cyan-500/30 text-white hover:text-cyan-200 border border-white/15 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Expand image in high-resolution viewer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Media Caption (Section 17) */}
      {showCaption && asset.caption && (
        <figcaption className="text-xs font-mono text-slate-400 px-1 flex items-center justify-between">
          <span>{asset.caption}</span>
          {asset.isConceptual && (
            <span className="text-[10px] text-purple-400/80">Conceptual Simulation</span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
