import React, { useState, useEffect, useRef } from 'react';
import { Layers, Compass, Code, Cpu, Play, Pause, RotateCcw, ArrowRight } from 'lucide-react';

interface StoryBeat {
  phase: string;
  statement: string;
  subtext: string;
  color: string;
}

const STORY_BEATS: StoryBeat[] = [
  {
    phase: '01',
    statement: 'We start with problems.',
    subtext: 'Not hypothetical technologies. Real human friction, bottlenecked workflows, and systemic complexity.',
    color: '#f87171',
  },
  {
    phase: '02',
    statement: 'We explore.',
    subtext: 'First-principles research, testing alternative paradigms, and separating essential truth from industry convention.',
    color: '#38bdf8',
  },
  {
    phase: '03',
    statement: 'We build.',
    subtext: 'Disciplined codebases, strict type schemas, and high-performance foundations that scale without fragile patches.',
    color: '#818cf8',
  },
  {
    phase: '04',
    statement: 'We improve.',
    subtext: 'Benchmarking latency, eliminating bloat, refining interfaces, and validating reliability under pressure.',
    color: '#c084fc',
  },
  {
    phase: '05',
    statement: 'We ship.',
    subtext: 'Deploying dependable production software that solves the original problem and endures.',
    color: '#34d399',
  },
];

export const CinematicIntro: React.FC = () => {
  const [activeBeatIndex, setActiveBeatIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeBeat = STORY_BEATS[activeBeatIndex];

  // Auto-advance loop
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveBeatIndex((prev) => (prev + 1) % STORY_BEATS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Synchronous visual changes on canvas matching the active beat
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let t = 0;

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      if (activeBeatIndex === 0) {
        // We start with problems: Scattered chaotic nodes drifting irregularly
        const particleCount = 28;
        ctx.fillStyle = '#f87171';
        for (let i = 0; i < particleCount; i++) {
          const px = cx + Math.sin(t + i * 1.5) * (80 + (i % 6) * 18);
          const py = cy + Math.cos(t * 1.2 + i * 2.1) * (60 + (i % 5) * 16);
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();

          // Broken disconnected lines
          if (i % 3 === 0) {
            ctx.strokeStyle = 'rgba(248, 113, 113, 0.2)';
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px + Math.sin(t + i) * 20, py + Math.cos(t + i) * 20);
            ctx.stroke();
          }
        }
      } else if (activeBeatIndex === 1) {
        // We explore: Divergent search rays sweeping the canvas
        const rays = 8;
        for (let r = 0; r < rays; r++) {
          const angle = (r / rays) * Math.PI * 2 + Math.sin(t * 0.5 + r) * 0.4;
          const len = 120 + Math.sin(t + r) * 30;
          const ex = cx + Math.cos(angle) * len;
          const ey = cy + Math.sin(angle) * len;

          ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(ex, ey);
          ctx.stroke();

          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (activeBeatIndex === 2) {
        // We build: Lattice converging into structured geometry
        const size = 70;
        ctx.strokeStyle = 'rgba(129, 140, 248, 0.5)';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - size, cy - size * 0.7, size * 2, size * 1.4);

        // Internal cross braces
        ctx.strokeStyle = 'rgba(129, 140, 248, 0.25)';
        ctx.beginPath();
        ctx.moveTo(cx - size, cy - size * 0.7);
        ctx.lineTo(cx + size, cy + size * 0.7);
        ctx.moveTo(cx + size, cy - size * 0.7);
        ctx.lineTo(cx - size, cy + size * 0.7);
        ctx.stroke();

        // Corner pins
        ctx.fillStyle = '#818cf8';
        [
          [-size, -size * 0.7],
          [size, -size * 0.7],
          [size, size * 0.7],
          [-size, size * 0.7],
        ].forEach(([ox, oy]) => {
          ctx.beginPath();
          ctx.arc(cx + ox, cy + oy, 4, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (activeBeatIndex === 3) {
        // We improve: Scanning harmonic radar pulse validating structure
        const ringRadius = (t * 40) % 130;
        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(192, 132, 252, ${Math.max(0, 1 - ringRadius / 130)})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Core polished node
        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(192, 132, 252, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#c084fc';
        ctx.stroke();
      } else {
        // We ship: Radiating beacon pulses delivering into the production world
        for (let b = 1; b <= 3; b++) {
          const r = ((t * 50 + b * 40) % 160);
          const alpha = Math.max(0, 1 - r / 160) * 0.6;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#34d399';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [activeBeatIndex]);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#060812] border-y border-white/5 overflow-hidden">
      {/* Subtle Luminous Light Beam */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-slate-400">
            <span className="text-cyan-400 font-semibold">01 // CINEMATIC CHRONOLOGY</span>
            <span>AMITRAX STORYTELLING CORE</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-1.5 transition-all"
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isAutoPlaying ? 'Pause Story' : 'Autoplay'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveBeatIndex(0)}
              className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-400 hover:text-white transition-all"
              aria-label="Restart story sequence"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Cinematic Split Presentation: Statement + Synchronous Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Sequential Narrative Display (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase font-semibold" style={{ color: activeBeat.color }}>
                BEAT {activeBeat.phase} OF 05
              </span>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight min-h-[1.2em]">
                {activeBeat.statement}
              </h2>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-xl min-h-[4rem]">
                {activeBeat.subtext}
              </p>
            </div>

            {/* Step Navigation Tabs */}
            <div className="flex flex-wrap gap-2 pt-4">
              {STORY_BEATS.map((beat, idx) => (
                <button
                  key={beat.phase}
                  type="button"
                  onClick={() => {
                    setActiveBeatIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                    activeBeatIndex === idx
                      ? 'bg-white/[0.1] text-white border-cyan-400/80 ring-1 ring-cyan-400/30 font-semibold'
                      : 'bg-white/[0.02] text-slate-400 border-white/5 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="opacity-60 mr-1.5">{beat.phase}</span>
                  <span>{beat.statement.replace('We ', '').replace('.', '')}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Synchronous Animated Canvas (5 cols) */}
          <div className="lg:col-span-5 relative h-[320px] sm:h-[400px] rounded-3xl bg-[#090e1f]/80 border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full block" />

            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/10 text-[10px] font-mono text-slate-400 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeBeat.color }} />
              <span>SYNCHRONIZED TOPOLOGY STATE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
