import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroSceneProps {
  scrollProgress?: number; // Normalized scroll 0 to 1
}

export const HeroScene: React.FC<HeroSceneProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fps, setFps] = useState<number>(60);
  const [activePreset, setActivePreset] = useState<'architecture' | 'network' | 'lattice'>('architecture');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1.0);
  const [activeNodesCount, setActiveNodesCount] = useState<number>(36);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080d, 0.045);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8.5);

    // 2. WebGL Renderer with pixel ratio capping for performance
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Lighting System (Subtle, architectural, rim-focused)
    const ambientLight = new THREE.AmbientLight(0x0a1526, 1.2);
    scene.add(ambientLight);

    // Primary cold key light
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.4);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    // Secondary deep indigo fill
    const fillLight = new THREE.DirectionalLight(0x6366f1, 1.8);
    fillLight.position.set(-6, -4, -4);
    scene.add(fillLight);

    // Subtle center point light illuminating the internal core
    const corePointLight = new THREE.PointLight(0x38bdf8, 3.0, 10, 1.8);
    corePointLight.position.set(0, 0, 0);
    scene.add(corePointLight);

    // 4. Scene Groups
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    const backgroundGroup = new THREE.Group();
    const coreGroup = new THREE.Group();
    const networkGroup = new THREE.Group();
    const foregroundGroup = new THREE.Group();

    masterGroup.add(backgroundGroup);
    masterGroup.add(coreGroup);
    masterGroup.add(networkGroup);
    masterGroup.add(foregroundGroup);

    // ==========================================
    // LAYER 1: BACKGROUND (Atmospheric depth)
    // ==========================================
    const bgParticleCount = isMobile ? 80 : 180;
    const bgGeometry = new THREE.BufferGeometry();
    const bgPositions = new Float32Array(bgParticleCount * 3);
    const bgSizes = new Float32Array(bgParticleCount);

    for (let i = 0; i < bgParticleCount; i++) {
      bgPositions[i * 3] = (Math.random() - 0.5) * 35;
      bgPositions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      bgPositions[i * 3 + 2] = -5 - Math.random() * 20; // Deep in the background
      bgSizes[i] = Math.random() * 2.0 + 0.8;
    }

    bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
    bgGeometry.setAttribute('size', new THREE.BufferAttribute(bgSizes, 1));

    const bgMaterial = new THREE.PointsMaterial({
      color: 0x475569,
      size: 0.08,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const bgPoints = new THREE.Points(bgGeometry, bgMaterial);
    backgroundGroup.add(bgPoints);

    // Subtle background reference rings
    const bgRingGeo = new THREE.RingGeometry(5.2, 5.24, 64);
    const bgRingMat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const bgRing = new THREE.Mesh(bgRingGeo, bgRingMat);
    bgRing.position.z = -4;
    backgroundGroup.add(bgRing);

    // ==========================================
    // LAYER 2: THE AMITRAX DIGITAL CORE (Midground)
    // ==========================================

    // 2.1 Central Inner Hexagonal Monolith (Engineered Seed)
    const innerGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const innerWireMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
      roughness: 0.2,
      metalness: 0.9,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerWireMat);
    coreGroup.add(innerCore);

    // Solid inner glowing kernel
    const kernelGeo = new THREE.OctahedronGeometry(0.42, 0);
    const kernelMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
    });
    const kernelMesh = new THREE.Mesh(kernelGeo, kernelMat);
    coreGroup.add(kernelMesh);

    // 2.2 Translucent Faceted Architectural Shields (Octahedral & Prismatic Shell)
    const shellGeo = new THREE.OctahedronGeometry(1.65, 1);
    const shellMat = new THREE.MeshPhysicalMaterial({
      color: 0x0c1e36,
      emissive: 0x0e2a47,
      emissiveIntensity: 0.3,
      roughness: 0.15,
      metalness: 0.1,
      transparent: true,
      opacity: 0.42,
      transmission: 0.6,
      ior: 1.3,
      wireframe: false,
    });
    const outerShell = new THREE.Mesh(shellGeo, shellMat);
    coreGroup.add(outerShell);

    // Outer wireframe framing the shell with precision lines
    const shellWireGeo = new THREE.WireframeGeometry(shellGeo);
    const shellWireLine = new THREE.LineSegments(
      shellWireGeo,
      new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.5,
        linewidth: 1,
      })
    );
    coreGroup.add(shellWireLine);

    // 2.3 Layered Coordinate Gimbals / Orbital Data Latitude Rings
    const ringMat1 = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.55,
    });
    const ringMat2 = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.45,
    });

    const createTorusRing = (radius: number, tube: number, mat: THREE.Material) => {
      const geo = new THREE.TorusGeometry(radius, tube, 4, 80);
      return new THREE.Mesh(geo, mat);
    };

    const orbitRingA = createTorusRing(2.35, 0.012, ringMat1);
    const orbitRingB = createTorusRing(2.7, 0.012, ringMat2);
    const orbitRingC = createTorusRing(3.05, 0.012, ringMat1);

    orbitRingA.rotation.x = Math.PI / 3;
    orbitRingB.rotation.y = Math.PI / 4;
    orbitRingC.rotation.z = Math.PI / 6;

    coreGroup.add(orbitRingA);
    coreGroup.add(orbitRingB);
    coreGroup.add(orbitRingC);

    // ==========================================
    // LAYER 2.4: INTERCONNECTED DATA NETWORK NODES & PACKETS
    // ==========================================
    const nodeCount = isMobile ? 22 : 36;
    setActiveNodesCount(nodeCount);

    const nodePositions: THREE.Vector3[] = [];
    const nodeSpheres: THREE.Mesh[] = [];

    const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
    });

    // Compute mathematical spherical lattice coordinates
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 2.1 + (i % 3) * 0.4;

      const pos = new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );

      nodePositions.push(pos);

      const sphere = new THREE.Mesh(nodeGeo, nodeMat);
      sphere.position.copy(pos);
      networkGroup.add(sphere);
      nodeSpheres.push(sphere);
    }

    // Dynamic interconnecting network lines
    // Find closest nodes and connect them
    const lineIndices: number[] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 1.65) {
          lineIndices.push(i, j);
        }
      }
    }

    const networkLinesGeo = new THREE.BufferGeometry();
    const networkPositionsArr = new Float32Array(lineIndices.length * 3);

    for (let k = 0; k < lineIndices.length; k++) {
      const nodeIdx = lineIndices[k];
      networkPositionsArr[k * 3] = nodePositions[nodeIdx].x;
      networkPositionsArr[k * 3 + 1] = nodePositions[nodeIdx].y;
      networkPositionsArr[k * 3 + 2] = nodePositions[nodeIdx].z;
    }

    networkLinesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(networkPositionsArr, 3)
    );

    const networkLinesMat = new THREE.LineBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });

    const networkLinesMesh = new THREE.LineSegments(networkLinesGeo, networkLinesMat);
    networkGroup.add(networkLinesMesh);

    // Traveling Data Packets along selected pipelines
    const packetCount = isMobile ? 8 : 16;
    const packetPositions = new Float32Array(packetCount * 3);
    const packetRoutes: { fromIdx: number; toIdx: number; progress: number; speed: number }[] = [];

    // Select random valid edges for packets to travel
    for (let p = 0; p < packetCount; p++) {
      const randomEdgeStart = Math.floor(Math.random() * (lineIndices.length / 2)) * 2;
      const from = lineIndices[randomEdgeStart] || 0;
      const to = lineIndices[randomEdgeStart + 1] || 1;
      packetRoutes.push({
        fromIdx: from,
        toIdx: to,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.012,
      });
    }

    const packetGeo = new THREE.BufferGeometry();
    packetGeo.setAttribute('position', new THREE.BufferAttribute(packetPositions, 3));
    const packetMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const packetPoints = new THREE.Points(packetGeo, packetMat);
    networkGroup.add(packetPoints);

    // ==========================================
    // LAYER 3: FOREGROUND (Parallax Micro-elements)
    // ==========================================
    const fgElementCount = 14;
    const fgGroup = new THREE.Group();
    foregroundGroup.add(fgGroup);

    const fgCrossGeo = new THREE.BufferGeometry();
    const fgVertices: number[] = [];

    // Small architectural crosshairs in foreground
    for (let f = 0; f < fgElementCount; f++) {
      const fx = (Math.random() - 0.5) * 8;
      const fy = (Math.random() - 0.5) * 6;
      const fz = 2.0 + Math.random() * 2.5; // Closer to camera

      // Horizontal tick
      fgVertices.push(fx - 0.04, fy, fz, fx + 0.04, fy, fz);
      // Vertical tick
      fgVertices.push(fx, fy - 0.04, fz, fx, fy + 0.04, fz);
    }

    fgCrossGeo.setAttribute('position', new THREE.Float32BufferAttribute(fgVertices, 3));
    const fgCrossMat = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.4,
    });
    const fgCrosses = new THREE.LineSegments(fgCrossGeo, fgCrossMat);
    fgGroup.add(fgCrosses);

    // ==========================================
    // 5. INTERACTION & SCROLL CONTROLLERS
    // ==========================================
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollY = window.scrollY;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 1.8; // Dampened range
      targetMouseY = y * 1.8;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize Observer for robust responsiveness
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

    // Visibility Observer to pause rendering when off-screen
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    intersectionObserver.observe(container);

    // ==========================================
    // 6. ANIMATION LOOP WITH KINEMATIC DAMPENING
    // ==========================================
    let frameId: number;
    let lastTime = performance.now();
    let frameCounter = 0;
    let fpsTimer = 0;

    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // FPS Calculation
      frameCounter++;
      fpsTimer += delta;
      if (fpsTimer >= 1.0) {
        setFps(Math.round((frameCounter / fpsTimer)));
        frameCounter = 0;
        fpsTimer = 0;
      }

      const effectiveSpeed = prefersReducedMotion ? 0.05 : speedMultiplier;

      // 6.1 Mouse Lerp (Smooth inertia)
      currentMouseX += (targetMouseX - currentMouseX) * 0.045;
      currentMouseY += (targetMouseY - currentMouseY) * 0.045;

      // 6.2 Scroll Transition Calculation (Section 7)
      // As user scrolls down, camera dollys into environment, core expands
      const scrollFactor = Math.min(Math.max(scrollY / (window.innerHeight * 0.9), 0), 1.6);

      // Camera position: base Z: 8.5 moves deeper inward as scrolled
      const targetCamZ = 8.5 - scrollFactor * 4.2;
      const targetCamY = scrollFactor * 1.2 - currentMouseY * 0.8;
      const targetCamX = currentMouseX * 1.4;

      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.06;
      camera.lookAt(0, scrollFactor * 0.4, 0);

      // 6.3 Core Rotations & Dynamic Topology
      const rotDelta = delta * 0.35 * effectiveSpeed;
      coreGroup.rotation.y += rotDelta;
      coreGroup.rotation.x += rotDelta * 0.6;

      networkGroup.rotation.y += rotDelta * 0.8;
      networkGroup.rotation.z += rotDelta * 0.4;

      backgroundGroup.rotation.y += rotDelta * 0.15;

      // Orbital gimbal counter-rotations
      orbitRingA.rotation.x += rotDelta * 1.2;
      orbitRingB.rotation.y -= rotDelta * 0.9;
      orbitRingC.rotation.z += rotDelta * 0.7;

      // Pulse the inner kernel
      const pulse = 1 + Math.sin(time * 0.0025 * effectiveSpeed) * 0.08;
      kernelMesh.scale.set(pulse, pulse, pulse);

      // Outer shell expansion based on scroll depth
      const shellExpand = 1 + scrollFactor * 0.35;
      outerShell.scale.set(shellExpand, shellExpand, shellExpand);
      shellWireLine.scale.set(shellExpand, shellExpand, shellExpand);

      // Light response to cursor
      keyLight.position.x = 5 + currentMouseX * 4;
      keyLight.position.y = 8 - currentMouseY * 4;

      // 6.4 Update Traveling Data Packets
      const positionsAttr = packetGeo.attributes.position as THREE.BufferAttribute;
      const posArray = positionsAttr.array as Float32Array;

      for (let p = 0; p < packetRoutes.length; p++) {
        const route = packetRoutes[p];
        route.progress += route.speed * effectiveSpeed;
        if (route.progress >= 1.0) {
          route.progress = 0;
          // Pick another random edge
          const randomStart = Math.floor(Math.random() * (lineIndices.length / 2)) * 2;
          route.fromIdx = lineIndices[randomStart] || 0;
          route.toIdx = lineIndices[randomStart + 1] || 1;
        }

        const vFrom = nodePositions[route.fromIdx];
        const vTo = nodePositions[route.toIdx];

        if (vFrom && vTo) {
          const currentPos = new THREE.Vector3().lerpVectors(vFrom, vTo, route.progress);
          posArray[p * 3] = currentPos.x;
          posArray[p * 3 + 1] = currentPos.y;
          posArray[p * 3 + 2] = currentPos.z;
        }
      }
      positionsAttr.needsUpdate = true;

      // Render
      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    // ==========================================
    // 7. CLEANUP
    // ==========================================
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      // Dispose Geometries & Materials
      bgGeometry.dispose();
      bgMaterial.dispose();
      bgRingGeo.dispose();
      bgRingMat.dispose();
      innerGeo.dispose();
      innerWireMat.dispose();
      kernelGeo.dispose();
      kernelMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      shellWireGeo.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      networkLinesGeo.dispose();
      networkLinesMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      fgCrossGeo.dispose();
      fgCrossMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [speedMultiplier]);

  return (
    <div className="relative w-full h-full select-none" data-cursor="3d">
      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] cursor-grab active:cursor-grabbing"
      />

      {/* Real-time Engineering HUD Overlay */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1.5 pointer-events-none font-mono text-[11px]">
        <div className="px-2.5 py-1 rounded bg-[#090e1a]/80 border border-white/10 backdrop-blur-md text-slate-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-white font-semibold">{fps} FPS</span>
          <span className="text-slate-500">|</span>
          <span>{activeNodesCount} NODES</span>
        </div>

        <div className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[10px] text-slate-500 hidden sm:block">
          <span>SPATIAL PARALLAX: ACTIVE</span>
        </div>
      </div>

      {/* Interactive Controls Pill for Viewers */}
      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 font-mono text-[11px] bg-[#090e1a]/80 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md">
        <span className="text-slate-500 hidden sm:inline">DENSITY:</span>
        <button
          type="button"
          onClick={() => setSpeedMultiplier(speedMultiplier === 1.0 ? 1.8 : speedMultiplier === 1.8 ? 0.5 : 1.0)}
          className="text-cyan-400 hover:text-cyan-300 transition-colors px-1.5 py-0.5 rounded bg-white/5 border border-white/10"
        >
          {speedMultiplier}x VELOCITY
        </button>

        <span className="text-slate-600">|</span>
        <span className="text-slate-400 hidden md:inline">SYSTEM: AMITRAX-CORE-01</span>
      </div>
    </div>
  );
};
