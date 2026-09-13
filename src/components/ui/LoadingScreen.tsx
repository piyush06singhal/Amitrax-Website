import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    // Snappy, non-blocking entrance sequence (< 450ms total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 220);
          }, 150);
          return 100;
        }
        return prev + 34;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' } }}
          onClick={() => {
            setIsVisible(false);
            onComplete();
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f8fafc] text-slate-900 dark:bg-[#06080d] dark:text-white select-none cursor-pointer"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Minimal AmitraX Monogram */}
            <div className="relative w-14 h-14 mb-5 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-xl border border-cyan-500/40 rotate-45 animate-spin duration-1000"
                style={{ animationDuration: '6s' }}
              />
              <div className="absolute inset-2 rounded-lg border border-slate-300 dark:border-white/10 -rotate-12" />
              <span className="font-display text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
                A<span className="text-cyan-500">X</span>
              </span>
            </div>

            {/* Brand Wordmark */}
            <h1 className="text-lg font-bold font-display tracking-[0.25em] uppercase text-slate-900 dark:text-white mb-1.5">
              Amitra<span className="text-cyan-500">X</span>
            </h1>
            <p className="text-[10px] font-mono text-slate-500 tracking-widest mb-4 uppercase">
              TECHNOLOGY, BUILT WITH PURPOSE
            </p>

            {/* Progress line */}
            <div className="w-40 h-[2px] bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-150 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
