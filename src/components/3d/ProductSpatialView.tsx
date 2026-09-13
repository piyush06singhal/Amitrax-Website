import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, ChevronRight, Cpu, Network, ShieldCheck } from 'lucide-react';

interface StageConcept {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  targetPos: { x: number; y: number; z: number };
  targetLook: { x: number; y: number; z: number };
}

const STAGE_CONCEPTS: StageConcept[] = [
  {
    id: 'surface',
    step: '01',
    title: 'Adaptive Surface Plane',
    subtitle: 'High-Fidelity Interface System',
    category: 'Spatial Human Interface',
    description: 'Dynamic canvas rendering millions of vector points at native display refresh rates. Designed for continuous data density without perceptual lag.',
    metrics: [
      { label: 'Render Budget', value: '16.6ms / frame' },
      { label: 'Node Capacity', value: '100k+ instanced' },
      { label: 'Feedback Loop', value: '< 2ms tactile' },
    ],
    targetPos: { x: -2.2, y: 0.5, z: 4.5 },
    targetLook: { x: -2.0, y: 0, z: 0 },
  },
  {
    id: 'pipeline',
    step: '02',
    title: 'Cognitive Inference Bus',
    subtitle: 'Deterministic AI Pipeline',
    category: 'Intelligent Orchestration',
    description: 'Directed graph orchestrating parallel multi-model reasoning, JSON contract verification, and autonomous semantic validation before state commitment.',
    metrics: [
      { label: 'Contract Integrity', value: '100% Zod validated' },
      { label: 'Parallel Branches', value: 'Up to 32 concurrent' },
      { label: 'Token Efficiency', value: '-38% vs raw prompt' },
    ],
    targetPos: { x: 0.2, y: 0.8, z: 5.2 },
    targetLook: { x: 0, y: 0, z: 0 },
  },
  {
    id: 'fabric',
    step: '03',
    title: 'Distributed State Mesh',
    subtitle: 'Conflict-Free Data Fabric',
    category: 'Real-time Infrastructure',
    description: 'Mathematical CRDT protocol synchronizing local mutations across distributed peer nodes with zero centralized lock contention and cryptographic verification.',
    metrics: [
      { label: 'Local Convergence', value: 'Sub-millisecond' },
      { label: 'Network Fallback', value: 'WebRTC → WS → HTTP' },
      { label: 'Conflict Rate', value: '0.00% by design' },
    ],
    targetPos: { x: 2.4, y: 0.3, z: 4.6 },
    targetLook: { x: 2.0, y: 0, z: 0 },
  },
];

export const ProductSpatialView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const activeConcept = STAGE_CONCEPTS[activeStep];

  const cameraTargetPos = useRef<THREE.Vector3>(new THREE.Vector3(-2.2, 0.5, 4.5));
  const cameraTargetLook = useRef<THREE.Vector3>(new THREE.Vector3(-2.0, 0, 0));
  const currentCameraLook = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const target = STAGE_CONCEPTS[activeStep];
    cameraTargetPos.current.set(target.targetPos.x, target.targetPos.y, target.targetPos.z);
    cameraTargetLook.current.set(target.targetLook.x, target.targetLook.y, target.targetLook.z);
  }, [activeStep]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(-2.2, 0.5, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3, 15);
    cyanLight.position.set(-2, 3, 3);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3, 15);
    purpleLight.position.set(2, 3, 3);
    scene.add(purpleLight);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(16, 24, 0x38bdf8, 0x1e293b);
    gridHelper.position.y = -1.6;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.25;
    scene.add(gridHelper);

    // Helper: Create holographic screen panels
    const createScreenPanel = (
      x: number,
      y: number,
      z: number,
      rotY: number,
      borderColor: number,
      accentColor: number
    ) => {
      const group = new THREE.Group();
      group.position.set(x, y, z);
      group.rotation.y = rotY;

      // Plane frame
      const frameGeo = new THREE.PlaneGeometry(2.4, 1.5);
      const frameMat = new THREE.MeshBasicMaterial({
        color: 0x070d18,
        transparent: true,
        opacity: 0.82,
        side: THREE.DoubleSide,
      });
      const frame = new THREE.Mesh(frameGeo, frameMat);
      group.add(frame);

      // Border outline
      const edges = new THREE.EdgesGeometry(frameGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: borderColor,
        transparent: true,
        opacity: 0.8,
        linewidth: 1.5,
      });
      const wireframe = new THREE.LineSegments(edges, edgeMat);
      group.add(wireframe);

      // Internal holographic UI elements (abstract lines & charts)
      const lineGeo = new THREE.BufferGeometry();
      const linePts: number[] = [];
      for (let i = 0; i < 6; i++) {
        const yOff = 0.4 - i * 0.16;
        linePts.push(-0.9, yOff, 0.02, 0.9 - Math.random() * 0.4, yOff, 0.02);
      }
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePts, 3));
      const internalLines = new THREE.LineSegments(
        lineGeo,
        new THREE.LineBasicMaterial({ color: accentColor, transparent: true, opacity: 0.6 })
      );
      group.add(internalLines);

      // Holographic corner bracket pins
      const pinGeo = new THREE.BoxGeometry(0.08, 0.08, 0.04);
      const pinMat = new THREE.MeshBasicMaterial({ color: borderColor });
      [-1.15, 1.15].forEach((px) => {
        [-0.7, 0.7].forEach((py) => {
          const pin = new THREE.Mesh(pinGeo, pinMat);
          pin.position.set(px, py, 0.02);
          group.add(pin);
        });
      });

      return group;
    };

    const panel1 = createScreenPanel(-2.0, 0.1, 0, 0.25, 0x38bdf8, 0x0284c7);
    const panel2 = createScreenPanel(0, 0.4, -0.6, 0.0, 0xa855f7, 0x7c3aed);
    const panel3 = createScreenPanel(2.0, 0.1, 0, -0.25, 0x34d399, 0x059669);

    scene.add(panel1);
    scene.add(panel2);
    scene.add(panel3);

    // Connecting Data Beams between panels
    const beamGeo = new THREE.BufferGeometry();
    const beamPts = new Float32Array([
      -0.8, 0.1, 0.05, 0.0, 0.4, -0.55,
      0.0, 0.4, -0.55, 0.8, 0.1, 0.05,
    ]);
    beamGeo.setAttribute('position', new THREE.BufferAttribute(beamPts, 3));
    const beamMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const beams = new THREE.LineSegments(beamGeo, beamMat);
    scene.add(beams);

    // Floating orbital data particles
    const pGeo = new THREE.BufferGeometry();
    const pCount = 80;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 8;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 3;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pPoints = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.04,
        transparent: true,
        opacity: 0.5,
      })
    );
    scene.add(pPoints);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Camera lerping to target
      camera.position.lerp(cameraTargetPos.current, 0.045);
      currentCameraLook.current.lerp(cameraTargetLook.current, 0.045);
      camera.lookAt(currentCameraLook.current);

      // Subtle float on panels
      panel1.position.y = 0.1 + Math.sin(elapsed * 1.5) * 0.05;
      panel2.position.y = 0.4 + Math.sin(elapsed * 1.5 + 1) * 0.06;
      panel3.position.y = 0.1 + Math.sin(elapsed * 1.5 + 2) * 0.05;

      // Particle subtle drift
      pPoints.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      gridHelper.dispose();
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#070b13] overflow-hidden shadow-2xl">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-[#090e1a]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            Interactive Product Spatial View // 3D Architecture Canvas
          </span>
        </div>

        {/* Step Selector Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/40 border border-white/10">
          {STAGE_CONCEPTS.map((concept, index) => (
            <button
              key={concept.id}
              id={`spatial-tab-${concept.id}`}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeStep === index
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>{concept.step}</span>
              <span className="hidden sm:inline">{concept.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left Side: Three.js Interactive Holographic Camera Stage (7 cols) */}
        <div className="lg:col-span-7 relative h-[360px] lg:h-[520px] w-full bg-gradient-to-b from-[#070b13] to-[#04060a]">
          <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

          {/* Hint Overlay */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 border border-white/10 font-mono text-[11px] text-slate-400 backdrop-blur-md">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Focusing Plane {activeConcept.step}: {activeConcept.title}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 pointer-events-none text-[11px] font-mono text-slate-500">
            Spatial viewpoint rotates automatically on step selection
          </div>
        </div>

        {/* Right Side: Detailed Engineered Breakdown of the Selected Spatial Layer (5 cols) */}
        <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#090e1a]/60 backdrop-blur-md">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                LAYER {activeConcept.step} // {activeConcept.category}
              </span>
              <span className="font-mono text-xs text-slate-500">AMITRAX SYSTEM SPECS</span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-1 tracking-tight">
              {activeConcept.title}
            </h3>
            <p className="text-sm font-medium text-cyan-400/90 mb-4">
              {activeConcept.subtitle}
            </p>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {activeConcept.description}
            </p>

            {/* Architecture Metrics Grid */}
            <div className="space-y-2.5 mb-6">
              <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                Engineering Benchmarks
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeConcept.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-black/40 border border-white/10 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-mono text-slate-400">{metric.label}</span>
                    <span className="text-sm font-semibold font-mono text-white mt-1">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation to next layer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : STAGE_CONCEPTS.length - 1))}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              ← Previous Plane
            </button>
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev < STAGE_CONCEPTS.length - 1 ? prev + 1 : 0))}
              className="px-4 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 transition-colors flex items-center gap-1.5"
            >
              <span>Next Plane</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
