import React, { useState } from 'react';
import { ScreenshotPresentationStyle, MediaAsset } from '../../types/media';
import {
  Laptop,
  Layers,
  Maximize2,
  Compass,
  Eye,
  Terminal,
  Activity
} from 'lucide-react';

interface ProductMediaPresentationProps {
  asset: MediaAsset;
  initialStyle?: ScreenshotPresentationStyle;
  allowStyleSwitching?: boolean;
  productTitle?: string;
  className?: string;
}

export const ProductMediaPresentation: React.FC<ProductMediaPresentationProps> = ({
  asset,
  initialStyle = 'floating',
  allowStyleSwitching = true,
  productTitle = 'AmitraX System Workspace',
  className = '',
}) => {
  const [currentStyle, setCurrentStyle] = useState<ScreenshotPresentationStyle>(initialStyle);

  const styles: { id: ScreenshotPresentationStyle; label: string; icon: React.ReactNode }[] = [
    { id: 'floating', label: 'Floating 3D', icon: <Compass className="w-3.5 h-3.5" /> },
    { id: 'device', label: 'Device Frame', icon: <Laptop className="w-3.5 h-3.5" /> },
    { id: 'layered', label: 'Layered Depth', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'fullscreen', label: 'Widescreen', icon: <Maximize2 className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Interactive Presentation Style Switcher */}
      {allowStyleSwitching && (
        <div className="flex items-center justify-between gap-3 pb-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>PRESENTATION VIEWPORT:</span>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md">
            {styles.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentStyle(s.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  currentStyle === s.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-[0_0_10px_rgba(56,189,248,0.2)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {s.icon}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Render selected presentation style */}
      {currentStyle === 'floating' && (
        <div className="relative p-6 sm:p-12 rounded-3xl bg-gradient-to-b from-[#090f24]/90 to-[#04060e] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
          {/* Ambient Lighting Spheres */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />

          {/* Floating 3D Tilted Card */}
          <div className="relative w-full max-w-4xl transform transition-transform duration-500 hover:rotate-1 hover:scale-[1.01] perspective-[1000px]">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(56,189,248,0.15)] bg-[#0a0f21]">
              {/* Window Bar */}
              <div className="px-4 py-2.5 bg-black/70 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-400 ml-2 font-medium">{productTitle}</span>
                </div>
                <span className="text-[10px] text-cyan-400">FLOATING SPATIAL HUD</span>
              </div>

              <img
                src={asset.src}
                alt={asset.alt || productTitle}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      )}

      {currentStyle === 'device' && (
        <div className="relative p-4 sm:p-8 rounded-3xl bg-[#060a14] border border-white/10 flex items-center justify-center">
          {/* Realistic Minimalist Workstation/Laptop Device Frame */}
          <div className="w-full max-w-4xl rounded-2xl bg-[#131726] border border-white/20 p-2 sm:p-3 shadow-2xl shadow-black/80 space-y-2">
            {/* Top Webcam / Sensor Notch */}
            <div className="flex justify-center items-center py-1">
              <div className="w-3 h-3 rounded-full bg-black/90 border border-white/20 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-cyan-400/80 animate-pulse" />
              </div>
            </div>

            {/* Display Bezel */}
            <div className="rounded-xl overflow-hidden border border-black/80 bg-black">
              <img
                src={asset.src}
                alt={asset.alt || productTitle}
                className="w-full h-auto block"
              />
            </div>

            {/* Bottom Keyboard Base Hinge */}
            <div className="h-2 rounded-b-xl bg-gradient-to-r from-[#1c2238] via-[#2a3352] to-[#1c2238] flex items-center justify-center">
              <div className="w-20 h-1 rounded-full bg-black/50" />
            </div>
          </div>
        </div>
      )}

      {currentStyle === 'layered' && (
        <div className="relative p-6 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1229] via-[#080c1d] to-[#04060f] border border-white/10 overflow-hidden shadow-2xl">
          {/* Base Layer */}
          <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/15 bg-[#090e1f] shadow-2xl">
            <img
              src={asset.src}
              alt={asset.alt || productTitle}
              className="w-full h-auto opacity-75 blur-[0.5px] block"
            />
          </div>

          {/* Floating Layer 1: Telemetry Inspector Overlay */}
          <div className="absolute top-8 left-8 sm:top-14 sm:left-14 p-4 rounded-xl bg-black/85 border border-cyan-500/40 backdrop-blur-xl shadow-2xl max-w-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                LAYER 01 // KERNEL
              </span>
              <span className="text-emerald-400 text-[10px]">SYNCED</span>
            </div>
            <p className="text-xs text-slate-300">
              Deterministic state synchronization active with low-latency consensus response.
            </p>
          </div>

          {/* Floating Layer 2: Core Spec Overlay */}
          <div className="absolute bottom-8 right-8 sm:bottom-14 sm:right-14 p-4 rounded-xl bg-black/85 border border-purple-500/40 backdrop-blur-xl shadow-2xl max-w-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-purple-400 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                LAYER 02 // PIPELINE
              </span>
              <span className="text-purple-300 text-[10px]">READY</span>
            </div>
            <p className="text-xs text-slate-300">
              Spatial interface planes isolated from compute loops for fluid frame pacing.
            </p>
          </div>
        </div>
      )}

      {currentStyle === 'fullscreen' && (
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
          <img
            src={asset.src}
            alt={asset.alt || productTitle}
            className="w-full h-auto object-cover block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 p-6 flex flex-col justify-between pointer-events-none">
            <div className="flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-cyan-400 font-semibold">
                FULL-BLEED INTERFACE VIEWPORT
              </span>
              <span className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-slate-300">
                100% SCALE DISPLAY
              </span>
            </div>

            <div className="text-slate-300 text-xs font-mono">
              {asset.caption || productTitle}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
