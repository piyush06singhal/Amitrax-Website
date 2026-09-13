import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CAPABILITIES, CapabilityItem } from '../../data/capabilities';
import { 
  AppWindow, 
  BrainCircuit, 
  Server, 
  Globe, 
  Zap, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles
} from 'lucide-react';

interface ModuleNodeData {
  id: string;
  name: string;
  category: string;
  position: THREE.Vector3;
  color: number;
  highlightColor: number;
}

export const BuildingBlocks3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeModuleId, setActiveModuleId] = useState<string>(CAPABILITIES[0].id);
  const [hoveredModuleId, setHoveredModuleId] = useState<string | null>(null);

  const activeCapability =
    CAPABILITIES.find((m) => m.id === activeModuleId) || CAPABILITIES[0];

  // 6 Outer Nodes positioned symmetrically around the Central AMITRAX Node (0, 0, 0)
  const nodeRadius = 2.8;
  const moduleConfigs: ModuleNodeData[] = [
    {
      id: 'digital-products',
      name: 'Digital Products',
      category: 'User Products',
      position: new THREE.Vector3(
        Math.cos(0 * (Math.PI / 3)) * nodeRadius,
        Math.sin(0 * (Math.PI / 3)) * nodeRadius * 0.7,
        0.2
      ),
      color: 0x0284c7,
      highlightColor: 0x38bdf8,
    },
    {
      id: 'software-platforms',
      name: 'Software Platforms',
      category: 'Distributed Systems',
      position: new THREE.Vector3(
        Math.cos(1 * (Math.PI / 3)) * nodeRadius,
        Math.sin(1 * (Math.PI / 3)) * nodeRadius * 0.7,
        -0.3
      ),
      color: 0x2563eb,
      highlightColor: 0x60a5fa,
    },
    {
      id: 'intelligent-systems',
      name: 'Intelligent Systems',
      category: 'AI & Intelligence',
      position: new THREE.Vector3(
        Math.cos(2 * (Math.PI / 3)) * nodeRadius,
        Math.sin(2 * (Math.PI / 3)) * nodeRadius * 0.7,
        0.3
      ),
      color: 0x7c3aed,
      highlightColor: 0xa855f7,
    },
    {
      id: 'web-applications',
      name: 'Web Applications',
      category: 'Responsive Surfaces',
      position: new THREE.Vector3(
        Math.cos(3 * (Math.PI / 3)) * nodeRadius,
        Math.sin(3 * (Math.PI / 3)) * nodeRadius * 0.7,
        -0.2
      ),
      color: 0x059669,
      highlightColor: 0x10b981,
    },
    {
      id: 'automation',
      name: 'Automation & Workflows',
      category: 'Orchestration',
      position: new THREE.Vector3(
        Math.cos(4 * (Math.PI / 3)) * nodeRadius,
        Math.sin(4 * (Math.PI / 3)) * nodeRadius * 0.7,
        0.4
      ),
      color: 0x0891b2,
      highlightColor: 0x06b6d4,
    },
    {
      id: 'technology-products',
      name: 'Technology Products',
      category: 'Emerging Systems',
      position: new THREE.Vector3(
        Math.cos(5 * (Math.PI / 3)) * nodeRadius,
        Math.sin(5 * (Math.PI / 3)) * nodeRadius * 0.7,
        -0.4
      ),
      color: 0xdb2777,
      highlightColor: 0xf43f5e,
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight1.position.set(5, 6, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 2.0);
    dirLight2.position.set(-6, -4, 5);
    scene.add(dirLight2);

    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // ==========================================
    // 1. CENTRAL "AMITRAX" CORE NODE AT (0, 0, 0)
    // ==========================================
    const centralGroup = new THREE.Group();
    
    // Polyhedral central core
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.9,
    });
    const centralCoreMesh = new THREE.Mesh(coreGeo, coreMat);
    centralGroup.add(centralCoreMesh);

    // Central Wireframe Glow Shell
    const coreWireGeo = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(0.95, 1));
    const coreWireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const centralWireMesh = new THREE.LineSegments(coreWireGeo, coreWireMat);
    centralGroup.add(centralWireMesh);

    // Concentric orbital rings around central node
    const ringGeo1 = new THREE.RingGeometry(1.2, 1.24, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const centralRing1 = new THREE.Mesh(ringGeo1, ringMat1);
    centralGroup.add(centralRing1);

    const ringGeo2 = new THREE.RingGeometry(1.4, 1.43, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const centralRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    centralRing2.rotation.x = Math.PI / 3;
    centralGroup.add(centralRing2);

    worldGroup.add(centralGroup);

    // ==========================================
    // 2. SURROUNDING CAPABILITY NODES
    // ==========================================
    const moduleMeshes: { id: string; mesh: THREE.Group; core: THREE.Mesh; wire: THREE.LineSegments }[] = [];
    const raycastTargets: THREE.Mesh[] = [];

    moduleConfigs.forEach((mod) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(mod.position);

      const nodeCoreGeo = new THREE.BoxGeometry(0.65, 0.65, 0.65);
      const nodeCoreMat = new THREE.MeshPhysicalMaterial({
        color: mod.color,
        emissive: mod.color,
        emissiveIntensity: 0.3,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.85,
      });
      const nodeCore = new THREE.Mesh(nodeCoreGeo, nodeCoreMat);
      nodeCore.userData = { id: mod.id };
      nodeGroup.add(nodeCore);
      raycastTargets.push(nodeCore);

      const wireGeo = new THREE.WireframeGeometry(nodeCoreGeo);
      const wireMat = new THREE.LineBasicMaterial({
        color: mod.highlightColor,
        transparent: true,
        opacity: 0.9,
      });
      const wireLine = new THREE.LineSegments(wireGeo, wireMat);
      nodeGroup.add(wireLine);

      const haloGeo = new THREE.RingGeometry(0.6, 0.63, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color: mod.highlightColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      nodeGroup.add(haloMesh);

      worldGroup.add(nodeGroup);
      moduleMeshes.push({ id: mod.id, mesh: nodeGroup, core: nodeCore, wire: wireLine });
    });

    // ==========================================
    // 3. RADIAL CONNECTIONS: AMITRAX -> NODES
    // ==========================================
    const radialLines: {
      id: string;
      line: THREE.Line;
      material: THREE.LineBasicMaterial;
    }[] = [];

    const centerPoint = new THREE.Vector3(0, 0, 0);

    moduleConfigs.forEach((mod) => {
      const points = [centerPoint, mod.position];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x334155,
        transparent: true,
        opacity: 0.3,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      worldGroup.add(line);
      radialLines.push({ id: mod.id, line, material: lineMat });
    });

    // Outer Ring Connections between adjacent nodes
    for (let i = 0; i < moduleConfigs.length; i++) {
      const nextIdx = (i + 1) % moduleConfigs.length;
      const points = [moduleConfigs[i].position, moduleConfigs[nextIdx].position];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x1e293b,
        transparent: true,
        opacity: 0.2,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      worldGroup.add(line);
    }

    // Raycasting for click and hover interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(raycastTargets);
      if (intersects.length > 0) {
        const hitId = intersects[0].object.userData.id;
        setHoveredModuleId(hitId);
      } else {
        setHoveredModuleId(null);
      }
    };

    const onPointerDown = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(raycastTargets);
      if (intersects.length > 0) {
        const hitId = intersects[0].object.userData.id;
        setActiveModuleId(hitId);
      }
    };

    container.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('click', onPointerDown);

    // Resize handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) return;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let frameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const speed = prefersReducedMotion ? 0.05 : 1.0;

      // Gentle ambient drift
      worldGroup.rotation.y = Math.sin(elapsedTime * 0.15 * speed) * 0.1;
      worldGroup.rotation.x = Math.cos(elapsedTime * 0.12 * speed) * 0.06;

      // Central core continuous rotation
      centralCoreMesh.rotation.y += 0.015 * speed;
      centralCoreMesh.rotation.x += 0.008 * speed;
      centralWireMesh.rotation.y -= 0.01 * speed;
      centralRing1.rotation.z += 0.005 * speed;
      centralRing2.rotation.z -= 0.008 * speed;

      // Update node visual states based on active and hovered selection
      moduleMeshes.forEach((item) => {
        const isActive = item.id === activeModuleId;
        const isHovered = item.id === hoveredModuleId;

        const targetScale = isActive ? 1.35 : isHovered ? 1.18 : 1.0;
        item.mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        item.core.rotation.x += 0.01 * speed;
        item.core.rotation.y += 0.015 * speed;

        const mat = item.core.material as THREE.MeshPhysicalMaterial;
        mat.emissiveIntensity = isActive ? 0.8 : isHovered ? 0.5 : 0.25;
        mat.opacity = isActive ? 0.95 : isHovered ? 0.85 : 0.65;
      });

      // Update radial connection lines from AMITRAX to nodes
      radialLines.forEach((rad) => {
        const isActive = rad.id === activeModuleId;
        const isHovered = rad.id === hoveredModuleId;

        if (isActive) {
          rad.material.color.setHex(0x38bdf8);
          rad.material.opacity = 0.95;
        } else if (isHovered) {
          rad.material.color.setHex(0xa855f7);
          rad.material.opacity = 0.7;
        } else {
          rad.material.color.setHex(0x1e293b);
          rad.material.opacity = 0.25;
        }
      });

      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('click', onPointerDown);
      resizeObserver.disconnect();
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activeModuleId, hoveredModuleId]);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#080d1e] to-[#04060d] border border-white/10 overflow-hidden shadow-2xl">
      {/* Top Module HUD Selector Bar */}
      <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#070c1b]/80 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-1.5">
          {CAPABILITIES.map((mod) => (
            <button
              key={mod.id}
              type="button"
              id={`btn-3d-mod-${mod.id}`}
              onClick={() => setActiveModuleId(mod.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeModuleId === mod.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <span>{mod.shortName}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive 3D Node Mesh</span>
        </div>
      </div>

      {/* 3D Canvas Subsystem */}
      <div
        ref={containerRef}
        data-cursor="3d"
        className="w-full h-[400px] sm:h-[480px] lg:h-[520px] cursor-pointer relative z-10"
      />

      {/* Centerpiece HUD Overlay indicating AMITRAX core status */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-medium text-slate-300 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>CENTRAL CORE: <strong className="text-white">AMITRAX</strong></span>
        </div>
      </div>

      {/* Bottom Floating Architecture Telemetry & Details Card */}
      <div className="p-6 sm:p-8 border-t border-white/10 bg-[#070c1b]/95 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4" />
                <span>Active Capability Domain</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {activeCapability.title}
              </h4>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {activeCapability.summary}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-slate-300 bg-white/[0.03] border border-white/10 p-3 rounded-xl">
              <span className="font-semibold text-white">Core Guarantees</span>
              {activeCapability.systemGuarantees.map((g, i) => (
                <div key={i} className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap gap-2">
              <span className="text-slate-400 font-medium self-center">Technologies:</span>
              {activeCapability.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="text-slate-400 text-xs">
              Click any 3D node or button above to explore connections
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
