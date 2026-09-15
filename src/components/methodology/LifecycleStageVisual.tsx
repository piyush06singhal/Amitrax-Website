import React, { useEffect, useRef } from 'react';

interface LifecycleStageVisualProps {
  stageIndex: number; // 0 to 5
  className?: string;
}

export const LifecycleStageVisual: React.FC<LifecycleStageVisualProps> = ({
  stageIndex,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 300);

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

      // Stage 0 (01: Understand): Scattered particles
      if (stageIndex === 0) {
        const count = 35;
        for (let i = 0; i < count; i++) {
          const px = cx + Math.sin(t * 0.8 + i * 1.3) * (70 + (i % 7) * 12);
          const py = cy + Math.cos(t * 0.9 + i * 1.7) * (50 + (i % 6) * 10);
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#fb7185';
          ctx.fill();
        }
      }
      // Stage 1 (02: Explore): Branching paths
      else if (stageIndex === 1) {
        const branches = 6;
        for (let b = 0; b < branches; b++) {
          const angle = (b / branches) * Math.PI * 2 + t * 0.2;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          const midX = cx + Math.cos(angle - 0.2) * 60;
          const midY = cy + Math.sin(angle - 0.2) * 60;
          const endX = cx + Math.cos(angle) * (110 + Math.sin(t + b) * 15);
          const endY = cy + Math.sin(angle) * (110 + Math.sin(t + b) * 15);

          ctx.quadraticCurveTo(midX, midY, endX, endY);
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
          ctx.lineWidth = 1.8;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(endX, endY, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = '#fbbf24';
          ctx.fill();
        }
      }
      // Stage 2 (03: Design): Paths converging into structural nodes
      else if (stageIndex === 2) {
        const nodes = [
          { x: cx - 60, y: cy - 40 },
          { x: cx + 60, y: cy - 40 },
          { x: cx + 60, y: cy + 40 },
          { x: cx - 60, y: cy + 40 },
          { x: cx, y: cy },
        ];

        // Converging animated lines
        nodes.forEach((n) => {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(n.x, n.y);
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.fill();
        });
      }
      // Stage 3 (04: Build): Lattice solidifying into geometry
      else if (stageIndex === 3) {
        const w = 120;
        const h = 75;
        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - w / 2, cy - h / 2, w, h);

        // Internal cross truss
        ctx.beginPath();
        ctx.moveTo(cx - w / 2, cy - h / 2);
        ctx.lineTo(cx + w / 2, cy + h / 2);
        ctx.moveTo(cx + w / 2, cy - h / 2);
        ctx.lineTo(cx - w / 2, cy + h / 2);
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.3)';
        ctx.stroke();

        // Nodes
        [
          [-w / 2, -h / 2],
          [w / 2, -h / 2],
          [w / 2, h / 2],
          [-w / 2, h / 2],
          [0, 0],
        ].forEach(([ox, oy]) => {
          ctx.beginPath();
          ctx.arc(cx + ox, cy + oy, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#93c5fd';
          ctx.fill();
        });
      }
      // Stage 4 (05: Validate): Scanning laser/pulse stress-testing the lattice
      else if (stageIndex === 4) {
        const size = 90;
        ctx.strokeStyle = 'rgba(192, 132, 252, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(cx - size / 2, cy - size / 2, size, size);

        // Sweeping scan laser line
        const scanY = cy - size / 2 + ((t * 80) % size);
        ctx.beginPath();
        ctx.moveTo(cx - size / 2 - 15, scanY);
        ctx.lineTo(cx + size / 2 + 15, scanY);
        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#c084fc';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      // Stage 5 (06: Improve/Ship): Polished glowing crystalline form
      else {
        const radius = 55;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2 + t * 0.3;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(52, 211, 153, 0.15)';
        ctx.fill();
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.shadowColor = '#34d399';
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(cx, cy, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#6ee7b7';
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [stageIndex]);

  return (
    <div className={`relative w-full h-[240px] sm:h-[280px] rounded-2xl bg-black/60 border border-white/10 overflow-hidden flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 border border-white/10 font-mono text-[10px] text-slate-400 backdrop-blur-md">
        <span>LIFECYCLE STAGE 0{stageIndex + 1} SHAPE EVOLUTION</span>
      </div>
    </div>
  );
};
