import React, { useEffect, useRef, useState } from 'react';
import { Activity } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const AbstractTechFilmSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pulseSpeed, setPulseSpeed] = useState<'normal' | 'accelerated'>('normal');
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1200);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 540);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Pause the particle canvas when it scrolls off-screen
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    intersectionObserver.observe(canvas);

    // Adaptive canvas palette (light background in light theme)
    const isDark = theme === 'dark';
    const bgFill = isDark ? 'rgba(4, 6, 13, 0.22)' : 'rgba(226, 232, 240, 0.3)';
    const gridStroke = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.06)';
    const packetHead = isDark ? '#ffffff' : '#1e293b';

    // Particle nodes flowing in topological streams
    const streamCount = 45;
    const streams: { x: number; y: number; speed: number; length: number; color: string }[] = [];
    const colors = ['#38bdf8', '#818cf8', '#34d399', '#c084fc'];

    for (let i = 0; i < streamCount; i++) {
      streams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: (Math.random() * 2 + 1) * (pulseSpeed === 'accelerated' ? 2.2 : 1),
        length: Math.random() * 60 + 20,
        color: colors[i % colors.length],
      });
    }

    const render = () => {
      animId = requestAnimationFrame(render);

      if (!isVisible) return;

      // Semi-transparent clear creates cinematic motion blur trailing
      ctx.fillStyle = bgFill;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle digital coordinate matrix
      ctx.strokeStyle = gridStroke;
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw flowing data streams
      streams.forEach((s) => {
        s.y += s.speed;
        if (s.y > height + s.length) {
          s.y = -s.length;
          s.x = Math.random() * width;
        }

        const gradient = ctx.createLinearGradient(s.x, s.y - s.length, s.x, s.y);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(1, s.color);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y - s.length);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        // Glowing packet head
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = packetHead;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      intersectionObserver.disconnect();
      cancelAnimationFrame(animId);
    };
  }, [pulseSpeed, theme]);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-slate-50 dark:bg-[#04060d] border-y border-slate-200 dark:border-white/10 overflow-hidden">
      {/* Background Animated Abstract Canvas */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-slate-50 via-transparent to-slate-50 dark:from-[#04060d] dark:via-transparent dark:to-[#04060d] pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-slate-50 via-transparent to-slate-50 dark:from-[#04060d] dark:via-transparent dark:to-[#04060d] pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-slate-300 backdrop-blur-md">
              <Activity className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">02 // ABSTRACT FILM</span>
              <span>DIGITAL INFRASTRUCTURE MATRIX</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
              Behind every screen is an architecture. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-300">
                We engineer the unseen.
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Software is not static layout—it is continuous motion, mathematical consensus, and distributed telemetry operating under strict physical constraints.
            </p>
          </div>

          {/* Stream Velocity Toggle */}
          <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-white dark:bg-black/60 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none shrink-0">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 px-2">STREAM VELOCITY:</span>
            <button
              type="button"
              onClick={() => setPulseSpeed('normal')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                pulseSpeed === 'normal'
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-semibold shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                  : 'text-slate-500 dark:text-slate-400 dark:hover:text-white hover:text-slate-900'
              }`}
            >
              Steady
            </button>
            <button
              type="button"
              onClick={() => setPulseSpeed('accelerated')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                pulseSpeed === 'accelerated'
                  ? 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/40 font-semibold shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                  : 'text-slate-500 dark:text-slate-400 dark:hover:text-white hover:text-slate-900'
              }`}
            >
              Accelerated Pulse
            </button>
          </div>
        </div>

        {/* Cinematic Telemetry Quadrant Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
          <div className="p-4 rounded-xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none backdrop-blur-md space-y-1">
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
              LATENCY PROFILE
            </span>
            <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Low Overhead
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Deterministic inter-process routing</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none backdrop-blur-md space-y-1">
            <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
              STATE CONSENSUS
            </span>
            <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Schema Verified
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Strict typed-state synchronization</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none backdrop-blur-md space-y-1">
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
              RUNTIME UPTIME
            </span>
            <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Edge Distributed
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Self-healing multi-region mesh</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none backdrop-blur-md space-y-1">
            <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider block">
              COMPUTE EFFICIENCY
            </span>
            <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
              Lean Runtime
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Lean memory & stripped dependencies</p>
          </div>
        </div>
      </div>
    </section>
  );
};
