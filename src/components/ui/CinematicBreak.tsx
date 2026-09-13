import React, { useEffect, useState } from 'react';

interface CinematicBreakProps {
  phrase: string;
  subphrase?: string;
  technicalCode?: string;
}

export const CinematicBreak: React.FC<CinematicBreakProps> = ({
  phrase,
  subphrase = 'ENGINEERING DISCIPLINE // DETERMINISTIC VALUE',
  technicalCode = 'SEC-TRANSITION // 0x4F',
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setScrollProgress(scrollPos * 0.05);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full py-16 sm:py-24 overflow-hidden bg-[#05070c] select-none border-y border-white/5">
      {/* Background Animated Optical Horizon Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[70px] bg-cyan-500/10 blur-[45px] pointer-events-none" />

      {/* Large Typography Passing Through Viewport */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 font-mono text-[10px] text-slate-500 mb-3 tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>{technicalCode}</span>
        </div>

        <div className="overflow-hidden">
          <h3
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-white to-slate-500 uppercase transition-transform duration-300"
            style={{
              transform: `translate3d(${Math.sin(scrollProgress) * 6}px, 0, 0)`,
            }}
          >
            {phrase}
          </h3>
        </div>

        <p className="font-mono text-xs sm:text-sm text-cyan-400/80 tracking-widest mt-2 uppercase">
          {subphrase}
        </p>

        {/* Precision coordinate ticks */}
        <div className="flex items-center justify-center gap-6 mt-4 text-[10px] font-mono text-slate-600">
          <span>LAT // 37.7749° N</span>
          <span>•</span>
          <span>CONTINUOUS HORIZON</span>
          <span>•</span>
          <span>LON // 122.4194° W</span>
        </div>
      </div>
    </div>
  );
};
