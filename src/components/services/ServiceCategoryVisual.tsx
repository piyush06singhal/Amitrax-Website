import React, { useEffect, useRef } from 'react';

interface ServiceCategoryVisualProps {
  type: 'software' | 'ai' | 'automation' | 'design' | 'cloud';
  accentColor?: string;
  className?: string;
}

export const ServiceCategoryVisual: React.FC<ServiceCategoryVisualProps> = ({
  type,
  accentColor,
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
    let height = (canvas.height = canvas.parentElement?.clientHeight || 260);

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

      if (type === 'software') {
        // Architectural Geometry: 3D rotating isometric cube lattice (Gold / Amber)
        const primary = accentColor || '#f59e0b';
        const size = 50;
        const cos = Math.cos(t * 0.8);
        const sin = Math.sin(t * 0.8);

        // Projected vertices of a wireframe prism
        const vertices = [
          [-1, -1, -1],
          [1, -1, -1],
          [1, 1, -1],
          [-1, 1, -1],
          [-1, -1, 1],
          [1, -1, 1],
          [1, 1, 1],
          [-1, 1, 1],
        ].map(([x, y, z]) => {
          const rx = x * cos - z * sin;
          const rz = x * sin + z * cos;
          const ry = y * Math.cos(t * 0.5) - rz * Math.sin(t * 0.5);
          return {
            x: cx + rx * size,
            y: cy + ry * size,
          };
        });

        // Draw connecting edges
        const edges = [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 0],
          [4, 5],
          [5, 6],
          [6, 7],
          [7, 4],
          [0, 4],
          [1, 5],
          [2, 6],
          [3, 7],
        ];

        ctx.strokeStyle = primary;
        ctx.lineWidth = 1.5;
        edges.forEach(([i, j]) => {
          ctx.beginPath();
          ctx.moveTo(vertices[i].x, vertices[i].y);
          ctx.lineTo(vertices[j].x, vertices[j].y);
          ctx.stroke();
        });

        // Golden vertex points
        vertices.forEach((v) => {
          ctx.beginPath();
          ctx.arc(v.x, v.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = '#fde68a';
          ctx.fill();
        });
      } else if (type === 'ai') {
        // Dynamic Neural Cognitive Network (Radiant Violet)
        const primary = accentColor || '#a855f7';
        const nodeCount = 7;
        const nodes: { x: number; y: number }[] = [];

        for (let i = 0; i < nodeCount; i++) {
          const angle = (i / nodeCount) * Math.PI * 2 + t * 0.3;
          const dist = 65 + Math.sin(t + i * 2) * 15;
          nodes.push({
            x: cx + Math.cos(angle) * dist,
            y: cy + Math.sin(angle) * dist,
          });
        }

        // Center hub
        nodes.push({ x: cx, y: cy });

        ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
        ctx.lineWidth = 1.2;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Glowing synapse nodes
        nodes.forEach((n, idx) => {
          ctx.beginPath();
          ctx.arc(n.x, n.y, idx === nodes.length - 1 ? 6 : 3.5, 0, Math.PI * 2);
          ctx.fillStyle = idx === nodes.length - 1 ? '#e879f9' : primary;
          ctx.fill();
        });
      } else if (type === 'automation') {
        // Flow transforming chaotic input into simplified path (Emerald)
        const primary = accentColor || '#10b981';

        // Chaotic left branches
        for (let b = -2; b <= 2; b++) {
          const startY = cy + b * 24;
          ctx.beginPath();
          ctx.moveTo(cx - 100, startY);
          ctx.bezierCurveTo(cx - 40, startY + Math.sin(t * 2 + b) * 15, cx - 20, cy, cx + 10, cy);
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.25)';
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Single streamlined forward beam
        ctx.beginPath();
        ctx.moveTo(cx + 10, cy);
        ctx.lineTo(cx + 110, cy);
        ctx.strokeStyle = primary;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Traveling pulse
        const pulseX = cx + 10 + ((t * 80) % 100);
        ctx.beginPath();
        ctx.arc(pulseX, cy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#6ee7b7';
        ctx.shadowColor = '#6ee7b7';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (type === 'design') {
        // Layered Interface Planes (Rose / Coral)
        const primary = accentColor || '#fb7185';
        const w = 110;
        const h = 60;

        for (let layer = 0; layer < 3; layer++) {
          const yOff = (layer - 1) * 28 + Math.sin(t + layer) * 5;
          const xOff = (layer - 1) * 12;

          ctx.fillStyle = `rgba(251, 113, 133, ${0.08 + layer * 0.05})`;
          ctx.fillRect(cx - w / 2 + xOff, cy - h / 2 + yOff, w, h);

          ctx.strokeStyle = layer === 2 ? primary : 'rgba(251, 113, 133, 0.3)';
          ctx.lineWidth = 1.5;
          ctx.strokeRect(cx - w / 2 + xOff, cy - h / 2 + yOff, w, h);
        }
      } else {
        // Cloud / Distributed Edge (Cyan / Cobalt)
        const primary = accentColor || '#38bdf8';

        // Orbit rings
        ctx.beginPath();
        ctx.arc(cx, cy, 70, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(cx, cy, 85, 30, t * 0.4, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.stroke();

        // Edge beacon nodes
        for (let i = 0; i < 4; i++) {
          const angle = (i / 4) * Math.PI * 2 + t * 0.6;
          const bx = cx + Math.cos(angle) * 70;
          const by = cy + Math.sin(angle) * 70;
          ctx.beginPath();
          ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = primary;
          ctx.fill();
        }

        // Central hub
        ctx.beginPath();
        ctx.arc(cx, cy, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#0284c7';
        ctx.fill();
        ctx.strokeStyle = '#bae6fd';
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [type, accentColor]);

  return (
    <div className={`relative w-full h-[180px] sm:h-[220px] rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
