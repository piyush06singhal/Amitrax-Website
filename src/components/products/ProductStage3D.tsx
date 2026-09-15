import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Product } from '../../types/products';
import { Eye } from 'lucide-react';

interface ProductStage3DProps {
  product: Product;
  className?: string;
  autoRotate?: boolean;
}

export const ProductStage3D: React.FC<ProductStage3DProps> = ({
  product,
  className = '',
  autoRotate = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 420;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050712, 0.08);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Dynamic accent color based on product
    const accentColorHex = product.colorAccent
      ? parseInt(product.colorAccent.replace('#', '0x'), 16)
      : 0x38bdf8;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(accentColorHex, 4, 12);
    keyLight.position.set(2, 3, 3);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x4338ca, 3, 10);
    fillLight.position.set(-2, -1, 2);
    scene.add(fillLight);

    // Root Group for the 3D Product Stage
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // 1. Floating 3D Outer Architectural Frame
    const frameGeometry = new THREE.BoxGeometry(2.8, 1.7, 0.1);
    const frameEdges = new THREE.EdgesGeometry(frameGeometry);
    const frameLineMaterial = new THREE.LineBasicMaterial({
      color: accentColorHex,
      transparent: true,
      opacity: 0.6,
      linewidth: 1.5,
    });
    const frameWireframe = new THREE.LineSegments(frameEdges, frameLineMaterial);
    stageGroup.add(frameWireframe);

    // 2. Translucent Floating Glass Surface (Main Canvas Plane)
    const glassGeometry = new THREE.PlaneGeometry(2.7, 1.6);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x090e1f,
      metalness: 0.1,
      roughness: 0.2,
      transmission: 0.85,
      thickness: 0.5,
      transparent: true,
      opacity: 0.9,
      reflectivity: 0.5,
    });
    const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
    stageGroup.add(glassMesh);

    // 3. Layered Inner UI Planes (Abstract Floating Architectural Interface)
    const layer1Geo = new THREE.PlaneGeometry(2.3, 0.4);
    const layer1Mat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const layer1Mesh = new THREE.Mesh(layer1Geo, layer1Mat);
    layer1Mesh.position.set(0, 0.45, 0.05);
    stageGroup.add(layer1Mesh);

    // Secondary UI blocks
    const block1Geo = new THREE.PlaneGeometry(1.0, 0.6);
    const block1Mat = new THREE.MeshBasicMaterial({
      color: accentColorHex,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });
    const block1 = new THREE.Mesh(block1Geo, block1Mat);
    block1.position.set(-0.6, -0.25, 0.08);
    stageGroup.add(block1);

    const block2Geo = new THREE.PlaneGeometry(1.1, 0.6);
    const block2Mat = new THREE.MeshBasicMaterial({
      color: 0x312e81,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const block2 = new THREE.Mesh(block2Geo, block2Mat);
    block2.position.set(0.55, -0.25, 0.08);
    stageGroup.add(block2);

    // 4. Subtle Ambient Particle Constellation
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 4;
      positions[i + 2] = (Math.random() - 0.5) * 3;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: accentColorHex,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 5. Circular Base Platform (Subtle Horizon Ring)
    const ringGeo = new THREE.RingGeometry(1.6, 1.62, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: accentColorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.1;
    scene.add(ring);

    // Animation Loop with visibility gating
    let clock = new THREE.Clock();
    let isVisible = true;
    let isLooping = false;

    const animate = () => {
      if (!isVisible || !isLooping) return;

      const elapsedTime = clock.getElapsedTime();

      // Floating gentle bobbing
      stageGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08;

      if (autoRotate && !isDragging.current) {
        stageGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.22;
        stageGroup.rotation.x = Math.cos(elapsedTime * 0.3) * 0.06;
      }

      particleSystem.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    const startLoop = () => {
      if (isLooping || !isVisible) return;
      isLooping = true;
      animationFrameId = requestAnimationFrame(animate);
    };

    const stopLoop = () => {
      isLooping = false;
      cancelAnimationFrame(animationFrameId);
    };

    startLoop();

    // Mouse Interaction
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      stageGroup.rotation.y += deltaX * 0.006;
      stageGroup.rotation.x += deltaY * 0.006;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Responsive Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Visibility Observer to stop the animation loop when off-screen
    const visibilityObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    });
    visibilityObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      // Dispose geometries
      frameGeometry.dispose();
      frameEdges.dispose();
      glassGeometry.dispose();
      layer1Geo.dispose();
      block1Geo.dispose();
      block2Geo.dispose();
      particleGeometry.dispose();
      ringGeo.dispose();

      // Dispose materials
      frameLineMaterial.dispose();
      glassMaterial.dispose();
      layer1Mat.dispose();
      block1Mat.dispose();
      block2Mat.dispose();
      particleMaterial.dispose();
      ringMat.dispose();

      renderer.renderLists.dispose();
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [product, autoRotate]);

  return (
    <div
      className={`relative w-full rounded-2xl bg-gradient-to-b from-[#090f24]/90 to-[#04060e] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md group ${className}`}
    >
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-[320px] sm:h-[400px] lg:h-[460px] cursor-grab active:cursor-grabbing block"
      />

      {/* Floating HUD Information Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10 font-mono text-xs">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-slate-300">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: product.colorAccent || '#38bdf8' }}
          />
          <span className="font-semibold text-white">3D STAGE // {product.codeName || 'SYSTEM'}</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-slate-400 text-[11px]">
          <Eye className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Drag to Orbit</span>
        </div>
      </div>

      {/* Bottom Architectural Spec Pill */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="p-3 rounded-xl bg-black/70 border border-white/10 backdrop-blur-md max-w-sm">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
            {product.category}
          </span>
          <p className="text-xs text-slate-200 font-medium truncate">
            {product.tagline}
          </p>
        </div>
      </div>
    </div>
  );
};
