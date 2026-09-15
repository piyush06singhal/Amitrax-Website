import React from 'react';

interface UnsplashFigureProps {
  src: string;
  alt: string;
  /** Optional short caption chip text overlaid at the bottom of the image. */
  caption?: string;
  className?: string;
  /** Rounded corner radius. Defaults to rounded-3xl. */
  rounded?: string;
  /** Fixed aspect ratio class to keep image heights consistent. */
  aspect?: string;
}

/**
 * Shared figure wrapper for Unsplash imagery. Renders a lazily-loaded,
 * locally-cached image with a light/dark adaptive edge soft-fade and an
 * optional caption chip. Overlays are gradients, never colored filmy panels,
 * so the image stays crisp in both themes.
 */
export const UnsplashFigure: React.FC<UnsplashFigureProps> = ({
  src,
  alt,
  caption,
  className = '',
  rounded = 'rounded-3xl',
  aspect = 'aspect-[16/10]',
}) => {
  const imgSrc = src.includes('?') ? `${src}&auto=format&fit=crop&w=1600&q=80` : `${src}?auto=format&fit=crop&w=1600&q=80`;

  return (
    <figure
      className={`relative overflow-hidden ${rounded} ${aspect} bg-slate-200 dark:bg-[#0a0f22] border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl ${className}`}
    >
      <img
        src={imgSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Adaptive edge soft-fade so the image blends with either theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-transparent to-transparent dark:from-[#04060d]/85 dark:via-transparent dark:to-transparent pointer-events-none" />

      {caption && (
        <figcaption className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/80 dark:bg-black/60 border border-slate-200/70 dark:border-white/10 backdrop-blur-md font-mono text-[11px] text-slate-700 dark:text-slate-300">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};