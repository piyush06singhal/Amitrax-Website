import React, { useState, useEffect, useRef } from 'react';
import { ImageSequenceFrame } from '../../types/media';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Layers, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Activity,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const DEFAULT_SEQUENCE_FRAMES: ImageSequenceFrame[] = [
  {
    id: 'f1',
    frameIndex: 0,
    phaseLabel: 'PHASE 01 // INITIALIZATION',
    title: 'System Initialization & Core Telemetry',
    description: 'Kernel boots with immutable state definitions and cryptographic peer verification.',
    techSpec: 'Memory allocation: 14MB • Cold startup: 32ms • Zero ungrounded dependencies',
    colorAccent: '#38bdf8',
  },
  {
    id: 'f2',
    frameIndex: 1,
    phaseLabel: 'PHASE 02 // ARCHITECTURE',
    title: 'Topological Architecture & Schema Bounds',
    description: 'Data pipelines instantiate typed graphs and distributed consensus boundaries.',
    techSpec: 'DAG verification: 100% deterministic • Latency tier: Sub-millisecond IPC',
    colorAccent: '#6366f1',
  },
  {
    id: 'f3',
    frameIndex: 2,
    phaseLabel: 'PHASE 03 // DATA INGESTION',
    title: 'Streaming Ingestion & Cognitive Routing',
    description: 'Neural inference pipelines process live vector inputs with deterministic guardrails.',
    techSpec: 'Throughput: 85,000 events/sec • Guardrail verification: Strict zero-drift',
    colorAccent: '#a855f7',
  },
  {
    id: 'f4',
    frameIndex: 3,
    phaseLabel: 'PHASE 04 // INTERFACE SYNTHESIS',
    title: 'Spatial Interface & GPU Rendering Plane',
    description: 'Sub-pixel responsive interface components project data directly to WebGL viewports.',
    techSpec: 'Frame budget: 120 FPS rock-steady • Zero render thrash • Spatial projection',
    colorAccent: '#10b981',
  },
  {
    id: 'f5',
    frameIndex: 4,
    phaseLabel: 'PHASE 05 // DEPLOYMENT',
    title: 'Hardened Production Instrument',
    description: 'The complete software ecosystem operates securely across global edge infrastructure.',
    techSpec: 'Global edge coverage • Multi-region active-active • Continuous self-healing',
    colorAccent: '#06b6d4',
  },
];

interface ImageSequencePlayerProps {
  frames?: ImageSequenceFrame[];
  title?: string;
  className?: string;
  autoPlayDefault?: boolean;
}

export const ImageSequencePlayer: React.FC<ImageSequencePlayerProps> = ({
  frames = DEFAULT_SEQUENCE_FRAMES,
  title = 'System Genesis Sequence',
  className = '',
  autoPlayDefault = false,
}) => {
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlayDefault);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeFrame = frames[currentFrameIdx] || frames[0];

  // Auto-play timer loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentFrameIdx((prev) => (prev + 1) % frames.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying, frames.length]);

  // Procedural canvas rendering corresponding to the current frame index
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };
    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const accent = activeFrame.colorAccent;

      // Draw background subtle digital coordinate grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw procedural geometry based on current frame
      if (currentFrameIdx === 0) {
        // Frame 1: Core initialization point & expanding scan circles
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.fill();

        for (let r = 1; r <= 4; r++) {
          const radius = ((time * 20 + r * 35) % 150);
          const alpha = Math.max(0, 1 - radius / 150) * 0.4;
          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      } else if (currentFrameIdx === 1) {
        // Frame 2: Architectural lattice branches out
        const nodeCount = 8;
        const nodes: { x: number; y: number }[] = [];
        for (let i = 0; i < nodeCount; i++) {
          const angle = (i / nodeCount) * Math.PI * 2 + time * 0.2;
          const dist = 90 + Math.sin(time + i) * 15;
          nodes.push({ x: cx + Math.cos(angle) * dist, y: cy + Math.sin(angle) * dist });
        }

        ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.lineWidth = 1.5;
        nodes.forEach((n, i) => {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();

          const next = nodes[(i + 1) % nodes.length];
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#6366f1';
          ctx.fill();
        });
      } else if (currentFrameIdx === 2) {
        // Frame 3: Streaming packets flowing through neural tracks
        const tracks = 6;
        for (let t = 0; t < tracks; t++) {
          const yPos = cy - 70 + t * 28;
          ctx.beginPath();
          ctx.moveTo(cx - 180, yPos);
          ctx.lineTo(cx + 180, yPos);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Packet
          const packetX = cx - 180 + ((time * 120 + t * 40) % 360);
          ctx.beginPath();
          ctx.arc(packetX, yPos, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#c084fc';
          ctx.shadowColor = '#c084fc';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      } else if (currentFrameIdx === 3) {
        // Frame 4: Spatial interface plane assembling
        const boxW = 240;
        const boxH = 140;
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(cx - boxW / 2, cy - boxH / 2, boxW, boxH);

        // Header bar
        ctx.fillStyle = 'rgba(16, 185, 129, 0.1)';
        ctx.fillRect(cx - boxW / 2, cy - boxH / 2, boxW, 24);

        // Horizontal bars
        for (let b = 0; b < 3; b++) {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
          ctx.fillRect(cx - boxW / 2 + 16, cy - boxH / 2 + 38 + b * 26, (boxW - 32) * (0.5 + Math.sin(time + b) * 0.3), 12);
        }
      } else {
        // Frame 5: Complete interconnected glowing sphere with orbiting rings
        ctx.beginPath();
        ctx.arc(cx, cy, 50, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
        ctx.fill();
        ctx.strokeStyle = '#06b6d4';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Orbit ring
        ctx.beginPath();
        ctx.ellipse(cx, cy, 120, 45, time * 0.4, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(cx, cy, 140, 55, -time * 0.3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [currentFrameIdx, activeFrame]);

  return (
    <div
      className={`relative w-full rounded-3xl bg-gradient-to-br from-[#090f24] via-[#060917] to-[#04060e] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider block" style={{ color: activeFrame.colorAccent }}>
            {activeFrame.phaseLabel}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
            {activeFrame.title}
          </h3>
        </div>

        {/* Play / Pause / Reset Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-white flex items-center gap-1.5 transition-all"
            aria-label={isPlaying ? 'Pause sequence' : 'Play sequence'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause' : 'Autoplay'}</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentFrameIdx(0)}
            className="p-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white transition-all"
            aria-label="Restart sequence"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Procedural Visual Canvas Stage */}
      <div className="relative w-full h-[260px] sm:h-[340px] rounded-2xl bg-black/60 border border-white/5 overflow-hidden flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Frame Spec Overlay */}
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md max-w-md">
          <p className="text-xs text-slate-300 font-medium">
            {activeFrame.description}
          </p>
          <div className="text-[11px] font-mono text-cyan-400 mt-1 truncate">
            {activeFrame.techSpec}
          </div>
        </div>
      </div>

      {/* Frame Scrubber Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>PROGRESSIVE SEQUENCE SCRUBBER</span>
          <span>STEP {currentFrameIdx + 1} OF {frames.length}</span>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {frames.map((frame, idx) => {
            const isActive = idx === currentFrameIdx;
            return (
              <button
                key={frame.id}
                type="button"
                onClick={() => {
                  setCurrentFrameIdx(idx);
                  setIsPlaying(false);
                }}
                className={`p-2 rounded-xl border text-left transition-all ${
                  isActive
                    ? 'bg-white/[0.08] border-cyan-400/80 ring-1 ring-cyan-400/40'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                }`}
              >
                <span className="text-[10px] font-mono block text-slate-400">0{idx + 1}</span>
                <span className="text-xs font-semibold text-white truncate block">
                  {frame.phaseLabel.split('//')[1]?.trim() || frame.phaseLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
