import React, { useEffect, useRef, useState } from 'react';
import { AMITRAX_PRODUCTS } from '../../data/products';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

interface NodeItem {
  id: string;
  name: string;
  type: 'core' | 'product' | 'category' | 'layer';
  x: number;
  y: number;
  radius: number;
  color: string;
  link?: string;
  subtitle?: string;
}

export const ProductEcosystemVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState<NodeItem | null>(null);
  const selectedNodeRef = useRef<NodeItem | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 460);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 460;
    };
    window.addEventListener('resize', handleResize);

    const isDark = theme === 'dark';
    const ringStroke = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.12)';
    const ringStrokeOuter = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.08)';
    const connectorProduct = isDark ? 'rgba(56, 189, 248, 0.18)' : 'rgba(8, 145, 178, 0.22)';
    const connectorLayer = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.10)';
    const nodeFillCore = isDark ? '#0b1633' : '#e2e8f0';
    const nodeFill = isDark ? '#070c1a' : '#cbd5e1';
    const labelFill = isDark ? '#ffffff' : '#0f172a';

    const cx = width / 2;
    const cy = height / 2;

    // Center Node: AmitraX Core
    const coreNode: NodeItem = {
      id: 'amitrax-core',
      name: 'AmitraX Core',
      type: 'core',
      x: cx,
      y: cy,
      radius: 36,
      color: '#38bdf8',
      subtitle: 'Central Engineering & Systems Hub',
    };

    // Orbit 1: Products
    const productNodes: NodeItem[] = AMITRAX_PRODUCTS.map((p, idx) => {
      const angle = (idx / AMITRAX_PRODUCTS.length) * Math.PI * 2 - Math.PI / 2;
      const dist = 145;
      return {
        id: p.slug,
        name: p.name,
        type: 'product',
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        radius: 24,
        color: p.colorAccent || '#38bdf8',
        link: `/products/${p.slug}`,
        subtitle: `${p.status.toUpperCase()} // ${p.category}`,
      };
    });

    // Orbit 2: Broad Tech Capabilities / Layers
    const layers = [
      { name: 'Distributed State', color: '#60a5fa' },
      { name: 'Cognitive Inference', color: '#c084fc' },
      { name: 'Spatial Viewports', color: '#34d399' },
      { name: 'Telemetry Beacons', color: '#818cf8' },
    ];

    const layerNodes: NodeItem[] = layers.map((l, idx) => {
      const angle = ((idx + 0.5) / layers.length) * Math.PI * 2 - Math.PI / 2;
      const dist = 195;
      return {
        id: `layer-${idx}`,
        name: l.name,
        type: 'layer',
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        radius: 16,
        color: l.color,
        subtitle: 'Foundational Architectural Capability',
      };
    });

    const allNodes = [coreNode, ...productNodes, ...layerNodes];

    let t = 0;

    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw Orbit Rings
      ctx.beginPath();
      ctx.arc(cx, cy, 145, 0, Math.PI * 2);
      ctx.strokeStyle = ringStroke;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 195, 0, Math.PI * 2);
      ctx.strokeStyle = ringStrokeOuter;
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Connection Lines between Core and Products
      productNodes.forEach((pNode) => {
        ctx.beginPath();
        ctx.moveTo(coreNode.x, coreNode.y);
        ctx.lineTo(pNode.x, pNode.y);
        ctx.strokeStyle = connectorProduct;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Traveling pulse packet along line
        const pulseProgress = (t + productNodes.indexOf(pNode) * 0.4) % 1;
        const px = coreNode.x + (pNode.x - coreNode.x) * pulseProgress;
        const py = coreNode.y + (pNode.y - coreNode.y) * pulseProgress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pNode.color;
        ctx.shadowColor = pNode.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connection lines between products and capabilities
      productNodes.forEach((pNode, i) => {
        const correspondingLayer = layerNodes[i];
        if (correspondingLayer) {
          ctx.beginPath();
          ctx.moveTo(pNode.x, pNode.y);
          ctx.lineTo(correspondingLayer.x, correspondingLayer.y);
          ctx.strokeStyle = connectorLayer;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw all nodes
      allNodes.forEach((node) => {
        const isHoveredOrSelected = selectedNodeRef.current?.id === node.id;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (isHoveredOrSelected ? 6 : 3), 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}20`;
        ctx.fill();

        // Solid Body
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.type === 'core' ? nodeFillCore : nodeFill;
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = isHoveredOrSelected ? 2.5 : 1.5;
        ctx.stroke();

        // Text label
        ctx.fillStyle = labelFill;
        ctx.font = `${node.type === 'core' ? 'bold 11px' : '10px'} "Space Grotesk", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.name, node.x, node.y + (node.type === 'core' ? 0 : node.radius + 12));
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Canvas click detection
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let clicked: NodeItem | null = null;
      allNodes.forEach((node) => {
        const dist = Math.hypot(node.x - mouseX, node.y - mouseY);
        if (dist <= node.radius + 10) {
          clicked = node;
        }
      });
      selectedNodeRef.current = clicked;
      setSelectedNode(clicked);
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="relative w-full rounded-2xl bg-white dark:bg-[#060914] border border-slate-200 dark:border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200 dark:border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ECOSYSTEM TOPOLOGY</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
            Connected Engineering Graph
          </h3>
        </div>

        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
          Click any node to inspect relationships
        </span>
      </div>

      {/* Interactive Graph Canvas */}
      <div className="relative w-full h-[460px] flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full block cursor-pointer" />

        {/* Selected Node Inspector Flyout */}
        {selectedNode && (
          <div className="absolute bottom-4 right-4 max-w-xs p-4 rounded-xl bg-white/95 dark:bg-black/80 border border-cyan-500/40 backdrop-blur-xl shadow-2xl text-left space-y-2 z-20">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase text-cyan-400 font-semibold">
                {selectedNode.type.toUpperCase()} NODE
              </span>
              <button
                onClick={() => {
                  selectedNodeRef.current = null;
                  setSelectedNode(null);
                }}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">{selectedNode.name}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">{selectedNode.subtitle}</p>
            {selectedNode.link && (
              <Link
                to={selectedNode.link}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline pt-1"
              >
                <span>Inspect Product Page</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
