import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MediaVideo } from './MediaVideo';
import { Sparkles, Eye, Maximize2, Shield, Cpu, Activity, Play } from 'lucide-react';

interface CinematicSceneProps {
  title?: string;
  subtitle?: string;
  demoVideoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export const CinematicScene: React.FC<CinematicSceneProps> = ({
  title = 'Axiom Distributed State Engine',
  subtitle = 'Zero-latency consensus synchronization demonstrated in active runtime topology',
  demoVideoSrc,
  posterSrc = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80',
  className = '',
}) => {
  const threeCanvasRef = useRef<HTMLDivElement>(null);
  const [interactiveDepth, setInteractiveDepth] = useState(1);

  useEffect(() => {
    const container = threeCanvasRef.current;
    if (!container) return;

    let animId: number;
    const width = container.clientWidth || 1000;
    const height = container.clientHeight || 560;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04060d, 0.04);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Particle field
    const particleCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 14;
      pos[i + 1] = (Math.random() - 0.5) * 8;
      pos[i + 2] = (Math.random() - 0.5) * 8;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.03,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Torus volumetric ring
    const ringGeo = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.35 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Dynamic mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = elapsed * 0.01;

      ring.rotation.z = elapsed * 0.05;

      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const nw = entry.contentRect.width;
        const nh = entry.contentRect.height;
        if (nw > 0 && nh > 0) {
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      className={`relative w-full min-h-[580px] lg:min-h-[680px] rounded-3xl overflow-hidden bg-[#04060d] border border-white/10 shadow-2xl flex items-center justify-center p-4 sm:p-8 lg:p-12 ${className}`}
    >
      {/* 3D Background WebGL Canvas Layer */}
      <div ref={threeCanvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Floating Center Product Demonstration Viewport */}
      <div className="relative z-10 w-full max-w-4xl space-y-6">
        {/* Top Floating Telemetry Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-black/75 border border-cyan-500/30 backdrop-blur-xl shadow-2xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-semibold">3D + VIDEO SPATIAL CONVERGENCE</span>
              <span className="text-slate-500">// RUNTIME HUD</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">{title}</h3>
            <p className="text-xs text-slate-300">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded-lg bg-white/[0.06] border border-white/10 font-mono text-xs text-slate-300">
              60 FPS SYNC
            </span>
          </div>
        </div>

        {/* Video demonstration frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.12)]">
          {demoVideoSrc ? (
            <MediaVideo
              src={demoVideoSrc}
              poster={posterSrc}
              title={title}
              autoplayMuted={true}
              loop={true}
              aspectRatio="16/9"
            />
          ) : (
            <div className="relative aspect-video w-full bg-gradient-to-br from-[#0c1329] via-[#070b1a] to-[#03050c] flex items-center justify-center overflow-hidden">
              <img
                src={posterSrc}
                alt={title}
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
                <div className="flex items-center justify-between font-mono text-xs text-cyan-300">
                  <span>[SPATIAL SIMULATION SPEC]</span>
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    STREAM 01 ACTIVE
                  </span>
                </div>

                <div className="text-center space-y-2 max-w-md mx-auto">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/90 text-black flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/30">
                    <Play className="w-6 h-6 ml-0.5 fill-black" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    Interactive Live Consensus Pipeline
                  </h4>
                  <p className="text-xs text-slate-300">
                    Observing active transaction throughput and sub-millisecond edge validation across global nodes.
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>LATENCY: 0.8ms</span>
                  <span>BANDWIDTH: 10 Gbps</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
