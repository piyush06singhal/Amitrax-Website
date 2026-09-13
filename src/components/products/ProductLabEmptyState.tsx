import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, ShieldCheck, Mail } from 'lucide-react';

interface ProductLabEmptyStateProps {
  filteredMessage?: string;
  onResetFilter?: () => void;
  title?: string;
  description?: string;
}

export const ProductLabEmptyState: React.FC<ProductLabEmptyStateProps> = ({
  filteredMessage,
  onResetFilter,
  title = "We're building what's next.",
  description = "Our product ecosystem is still taking shape. We'll share the first products as they're ready.",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle animated wireframe structure suggesting products taking shape
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 240);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 240;
    };
    window.addEventListener('resize', handleResize);

    // Geometric lattice nodes forming an abstract architectural cube / product scaffold
    const nodes: { x: number; y: number; z: number; ox: number; oy: number; oz: number }[] = [];
    const size = 65;
    for (let x = -1; x <= 1; x += 2) {
      for (let y = -1; y <= 1; y += 2) {
        for (let z = -1; z <= 1; z += 2) {
          nodes.push({
            x: x * size,
            y: y * size,
            z: z * size,
            ox: x * size,
            oy: y * size,
            oz: z * size,
          });
        }
      }
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angle += 0.008;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const cosY = Math.cos(angle * 0.7);
      const sinY = Math.sin(angle * 0.7);

      const cx = width / 2;
      const cy = height / 2;

      // Project 3D cube nodes to 2D
      const projected = nodes.map((node) => {
        // Rotate around Y and X
        const x1 = node.ox * cos - node.oz * sin;
        const z1 = node.ox * sin + node.oz * cos;
        const y2 = node.oy * cosY - z1 * sinY;
        const z2 = node.oy * sinY + z1 * cosY;

        const fov = 300;
        const scale = fov / (fov + z2 + 100);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
        };
      });

      // Draw subtle lattice connecting lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 1.2;

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = nodes[i].ox - nodes[j].ox;
          const dy = nodes[i].oy - nodes[j].oy;
          const dz = nodes[i].oz - nodes[j].oz;
          const distSq = dx * dx + dy * dy + dz * dz;

          // Connect if edge length equals 2 * size
          if (Math.abs(Math.sqrt(distSq) - size * 2) < 5) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      projected.forEach((p, idx) => {
        const radius = 2.5 * p.scale;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, radius), 0, Math.PI * 2);
        ctx.fillStyle = idx % 2 === 0 ? '#38bdf8' : '#818cf8';
        ctx.fill();

        // Subtle glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(2, radius * 2.2), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id="product-empty-state"
      className="relative w-full rounded-3xl bg-gradient-to-b from-[#090e21]/90 via-[#060a17]/90 to-[#04060e] border border-cyan-500/30 p-8 sm:p-12 text-center overflow-hidden shadow-2xl backdrop-blur-xl"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />

      {/* 3D Animated Canvas Scaffold */}
      <div className="relative w-full max-w-md mx-auto h-[180px] sm:h-[220px] mb-4">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>INCUBATION PROTOCOL</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
          {title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {filteredMessage && (
          <p className="text-xs text-slate-400 font-mono pt-2">
            {filteredMessage}
          </p>
        )}

        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          {onResetFilter ? (
            <button
              type="button"
              onClick={onResetFilter}
              className="px-5 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-medium transition-all"
            >
              Reset Filter View
            </button>
          ) : (
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/20 transition-all group"
            >
              <Mail className="w-4 h-4" />
              <span>Inquire About Current Research</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          <Link
            to="/architecture"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Explore How We Engineer</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
