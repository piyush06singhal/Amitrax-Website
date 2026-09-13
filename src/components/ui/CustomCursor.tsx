import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'cta' | '3d' | 'media' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointer (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!mediaQuery.matches || reducedMotionQuery.matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Determine state based on hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (
        target.closest('[data-cursor="3d"]') ||
        target.tagName.toLowerCase() === 'canvas'
      ) {
        setCursorState('3d');
      } else if (target.closest('[data-cursor="media"]')) {
        setCursorState('media');
      } else if (
        target.closest('[data-cursor="cta"]') ||
        target.closest('button[type="submit"]')
      ) {
        setCursorState('cta');
      } else if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[data-cursor="pointer"]')
      ) {
        setCursorState('pointer');
      } else if (
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea'
      ) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Smooth dampening for trailing cursor ring
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;
    const lerp = 0.2; // Snappy physical damping

    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * lerp,
        y: prev.y + (position.y - prev.y) * lerp,
      }));
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* High-precision lead point */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: cursorState === 'text' ? 0 : 1,
        }}
      >
        <div
          className={`rounded-full transition-transform duration-150 ${
            cursorState === '3d'
              ? 'w-2 h-2 bg-cyan-500 scale-125 shadow-[0_0_8px_rgba(2,132,199,0.8)]'
              : cursorState === 'cta'
              ? 'w-2 h-2 bg-blue-600 scale-125'
              : cursorState === 'media'
              ? 'w-2 h-2 bg-emerald-500 scale-110'
              : cursorState === 'pointer'
              ? 'w-1.5 h-1.5 bg-slate-900 dark:bg-white scale-110'
              : 'w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-300'
          }`}
        />
      </div>

      {/* Trailing halo ring with state morphing */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
            cursorState === '3d'
              ? 'w-10 h-10 border-cyan-500/60 bg-cyan-500/10 shadow-[0_0_15px_rgba(2,132,199,0.2)]'
              : cursorState === 'cta'
              ? 'w-9 h-9 border-blue-600/60 bg-blue-500/10 scale-110'
              : cursorState === 'media'
              ? 'w-11 h-11 border-emerald-500/60 bg-emerald-500/10'
              : cursorState === 'pointer'
              ? 'w-8 h-8 border-slate-700/50 dark:border-white/60 bg-slate-900/5 dark:bg-white/5 scale-110'
              : cursorState === 'text'
              ? 'w-6 h-6 border-slate-400/30'
              : 'w-6 h-6 border-cyan-600/30 dark:border-cyan-400/30'
          }`}
        >
          {cursorState === '3d' && (
            <span className="w-1 h-1 rounded-full bg-cyan-500 animate-ping" />
          )}
          {cursorState === 'media' && (
            <span className="text-[8px] font-mono font-bold text-emerald-600 dark:text-emerald-400">PLAY</span>
          )}
        </div>
      </div>
    </>
  );
};
