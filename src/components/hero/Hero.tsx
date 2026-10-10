import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import './homepage-editorial.css';

const sceneUrl = new URL('./homepage-spatial.svg', import.meta.url).href;

export const Hero = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => setReducedMotion(preference.matches);
    syncPreference();
    preference.addEventListener('change', syncPreference);
    let inView = true;
    const syncVisibility = () => {
      scene.dataset.inactive = String(!inView || document.hidden);
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncVisibility();
    });
    observer.observe(scene);
    document.addEventListener('visibilitychange', syncVisibility);
    syncVisibility();
    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion || window.matchMedia('(pointer: coarse)').matches) return;
      const bounds = scene.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      scene.style.setProperty('--scene-x', `${Math.max(-1, Math.min(1, x))}`);
      scene.style.setProperty('--scene-y', `${Math.max(-1, Math.min(1, y))}`);
    };
    const resetPointer = () => {
      scene.style.setProperty('--scene-x', '0');
      scene.style.setProperty('--scene-y', '0');
    };
    scene.addEventListener('pointermove', onPointerMove);
    scene.addEventListener('pointerleave', resetPointer);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', syncPreference);
      document.removeEventListener('visibilitychange', syncVisibility);
      scene.removeEventListener('pointermove', onPointerMove);
      scene.removeEventListener('pointerleave', resetPointer);
    };
  }, []);

  return (
    <section id="hero" className="home-hero" aria-labelledby="home-heading">
      <div className="studio-container home-hero-layout">
        <div className="home-hero-copy">
          <p className="home-eyebrow">AmitraX / Independent digital studio</p>
          <h1 id="home-heading">Digital work.<br />Human <span>by design.</span></h1>
          <p className="home-hero-description">Clear websites. Useful web applications. Thoughtful digital experiences, built around the people who use them.</p>
          <div className="home-actions">
            <ButtonLink to="/contact" size="lg" className="home-primary" iconRight={<ArrowUpRight size={18} />}>Start a conversation</ButtonLink>
            <ButtonLink to="/capabilities" variant="ghost" size="lg" className="home-secondary">Explore capabilities</ButtonLink>
          </div>
        </div>
        <div ref={sceneRef} className="home-hero-scene" data-paused={paused || reducedMotion}>
          <div className="home-scene-halo" aria-hidden="true" />
          <img className="home-spatial-art" src={sceneUrl} width="900" height="840" alt="Original studio artwork: a luminous cyan architectural arch and layered editorial interface floating in an ink-blue space." fetchPriority="high" />
          <div className="home-scene-caption"><span>Form meets function.</span><span>Studio study / 001</span></div>
          <button type="button" className="home-motion-control" onClick={() => setPaused(value => !value)} disabled={reducedMotion} aria-pressed={paused || reducedMotion} aria-label={reducedMotion ? 'Scene is static: reduced motion enabled' : paused ? 'Play scene animation' : 'Pause scene animation'}>
            {paused || reducedMotion ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
            {reducedMotion ? 'Motion off' : paused ? 'Play scene' : 'Pause scene'}
          </button>
        </div>
      </div>
      <div className="studio-container home-hero-bottom"><span>Strategy, design & development</span><a href="#selected-experiments">Explore the studio <ArrowDown size={16} aria-hidden="true" /></a></div>
    </section>
  );
};
