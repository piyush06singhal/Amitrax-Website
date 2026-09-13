import React, { useRef, useState } from 'react';
import { Play, Pause, Maximize2, Sparkles, Film, Eye } from 'lucide-react';

interface MediaFrameProps {
  title: string;
  type?: 'video' | 'abstract' | 'interactive';
  videoSrc?: string;
  posterSrc?: string;
  tag?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9' | 'auto';
  className?: string;
}

export const MediaFrame: React.FC<MediaFrameProps> = ({
  title,
  type = 'abstract',
  videoSrc,
  posterSrc,
  tag = 'SYSTEM ASSET',
  aspectRatio = '16/9',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // 3D Tilt Physics
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 25;
    const tiltY = (centerX - x) / 25;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '16/9':
        return 'aspect-video';
      case '4/3':
        return 'aspect-4/3';
      case '21/9':
        return 'aspect-[21/9]';
      default:
        return 'h-[340px]';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className={`relative w-full rounded-2xl bg-[#090e1a] border border-white/10 overflow-hidden shadow-2xl group ${className}`}
    >
      {/* Container with specified aspect ratio */}
      <div className={`relative w-full ${getAspectClass()} overflow-hidden bg-black/60 flex items-center justify-center`}>
        {type === 'video' && videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          /* High-fidelity abstract engineered visual canvas */
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#070b14] via-[#091122] to-[#04070e]">
            {/* Tech grid mesh */}
            <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

            {/* Glowing optical elements */}
            <div className="w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl animate-pulse" />
            <div className="absolute w-48 h-48 border border-cyan-500/20 rounded-full animate-spin [animation-duration:20s]" />
            <div className="absolute w-36 h-36 border border-dashed border-indigo-500/30 rounded-full animate-spin [animation-duration:14s] [animation-direction:reverse]" />

            {/* Center Monolith Tag */}
            <div className="relative z-10 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md text-center space-y-1">
              <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block">
                {tag}
              </span>
              <span className="font-display font-bold text-sm text-white block">
                {title}
              </span>
              <span className="font-mono text-[10px] text-slate-500 block">
                RENDER ENGINE // PROCEDURAL
              </span>
            </div>
          </div>
        )}

        {/* Top HUD bar */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none font-mono text-[10px]">
          <span className="px-2 py-0.5 rounded bg-black/70 border border-white/10 text-slate-300 backdrop-blur-md">
            AMITRAX MEDIA SURFACE
          </span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 backdrop-blur-md">
            PROD READY
          </span>
        </div>

        {/* Video Controls if video type */}
        {type === 'video' && videoSrc && (
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between">
            <button
              type="button"
              onClick={togglePlayback}
              className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white border border-white/10 backdrop-blur-md text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
