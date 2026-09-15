import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroScene } from '../3d/HeroScene';
import { HeroMediaMode } from '../../types/media';
import { ArrowDown, ArrowUpRight, Layers, Box, Video, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Magnetic } from '../motion/Magnetic';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroMode, setHeroMode] = useState<HeroMediaMode>('3d');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text container subtle scroll-away parallax
  const textOpacity = Math.max(1 - scrollY / 650, 0);
  const textTranslateY = scrollY * 0.16;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[96vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-12 overflow-hidden bg-[#f8fafc] dark:bg-[#04060d] text-slate-900 dark:text-slate-100 transition-colors duration-500"
    >
      {/* Background Architectural Grid & Atmospheric Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10 dark:from-cyan-500/15 dark:via-blue-600/10 dark:to-purple-600/10 blur-[150px] pointer-events-none" />

      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Editorial Headline & Staggered Reveal (6 cols) */}
          <motion.div
            className="lg:col-span-6 flex flex-col space-y-6 pt-4 lg:pt-0"
            style={{
              opacity: textOpacity,
              transform: `translate3d(0, ${textTranslateY}px, 0)`,
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Engineering Status Chip */}
            <motion.div variants={lineVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 tracking-wide font-mono">
                  AMITRAX • SYSTEM ARCHITECTURE
                </span>
              </div>
            </motion.div>

            {/* Editorial Multi-Line Headline */}
            <div className="space-y-1 font-display tracking-tight text-slate-950 dark:text-white select-none">
              <motion.div variants={lineVariants} className="overflow-hidden">
                <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02]">
                  Technology,
                </span>
              </motion.div>

              <motion.div variants={lineVariants} className="overflow-hidden">
                <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] text-slate-700 dark:text-slate-300">
                  built with
                </span>
              </motion.div>

              <motion.div variants={lineVariants} className="overflow-hidden">
                <span className="block text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-300 dark:via-sky-200 dark:to-blue-400">
                  purpose.
                </span>
              </motion.div>
            </div>

            {/* Supporting Statement */}
            <motion.p
              variants={lineVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed pt-2"
            >
              We build modern digital products, intelligent systems, and scalable digital infrastructure designed to solve real-world problems.
            </motion.p>

            {/* Action Group with Magnetic CTA */}
            <motion.div variants={lineVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <Magnetic strength={0.25}>
                <Link to="/contact">
                  <Button
                    id="hero-cta-conversation"
                    variant="primary"
                    size="lg"
                    iconRight={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Start a Conversation
                  </Button>
                </Link>
              </Magnetic>

              <Magnetic strength={0.15}>
                <Link to="/capabilities">
                  <Button
                    id="hero-cta-explore"
                    variant="secondary"
                    size="lg"
                    iconLeft={<Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                  >
                    Explore Capabilities
                  </Button>
                </Link>
              </Magnetic>
            </motion.div>

            {/* Micro Metrics row — all values grounded in real data layer */}
            <motion.div variants={lineVariants} className="pt-4 flex items-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-white font-bold">5</span>
                <span>Architecture Layers</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-white font-bold">9</span>
                <span>Services</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-white font-bold">Strict</span>
                <span>Type Contracts</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Spatial Canvas Stage (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center gap-4">
            <div
              className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-black/60 shadow-xl backdrop-blur-md"
            >
              {/* Mode A: 3D Spatial Interactive Canvas */}
              {heroMode === '3d' && (
                <div className="relative w-full h-full">
                  <HeroScene scrollProgress={scrollY / 600} />
                </div>
              )}

              {/* Mode B: Cinematic Video */}
              {heroMode === 'video' && (
                <div className="relative w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                    poster="/videos/hero-globe-poster.jpg"
                    src="/videos/hero-cinematic-globe.mp4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-mono text-cyan-400">CINEMATIC TELEMETRY</span>
                    <h4 className="text-lg font-bold font-display">Deterministic Systems in Motion</h4>
                  </div>
                </div>
              )}

              {/* Mode C: Static High-Performance Fallback */}
              {heroMode === 'static' && (
                <div className="relative w-full h-full bg-slate-900 flex flex-col justify-between p-8 text-white">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400 font-semibold">[HIGH-EFFICIENCY STATIC VIEWPORT]</span>
                    <span>ZERO-WEBGL OVERHEAD</span>
                  </div>

                  <div className="text-center space-y-4 max-w-md mx-auto my-auto">
                    <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto">
                      <Layers className="w-10 h-10 text-cyan-400" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-2xl font-bold font-display text-white">
                        Resilient Core Architecture
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Instantaneous paint for low-power mobile engines, limited battery profiles, or reduced-motion preferences.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mode Switcher HUD */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/90 dark:bg-black/60 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md text-xs font-mono">
              <span className="text-[10px] text-slate-500 px-2 uppercase tracking-wider hidden sm:inline">
                Viewport Mode:
              </span>
              <button
                type="button"
                onClick={() => setHeroMode('3d')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl transition-all ${
                  heroMode === '3d'
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <Box className="w-3.5 h-3.5" />
                <span>3D Spatial</span>
              </button>

              <button
                type="button"
                onClick={() => setHeroMode('video')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl transition-all ${
                  heroMode === 'video'
                    ? 'bg-purple-500 text-white font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Cinematic Video</span>
              </button>

              <button
                type="button"
                onClick={() => setHeroMode('static')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl transition-all ${
                  heroMode === 'static'
                    ? 'bg-emerald-500 text-white font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Static Hi-Perf</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Operational Systems Online</span>
        </div>

        <a
          href="#what-we-build"
          className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
        >
          <span>Scroll down to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
