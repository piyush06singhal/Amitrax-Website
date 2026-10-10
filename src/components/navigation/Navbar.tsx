import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { ButtonLink } from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Capabilities', path: '/capabilities' },
  { name: 'Process', path: '/architecture' },
  { name: 'About', path: '/about' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => setOpen(false), [location.key]);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Make every branch outside the dialog inert, including the page and header controls.
    const inertElements: HTMLElement[] = [];
    let branch: HTMLElement = dialog;
    while (branch.parentElement && branch !== document.body) {
      for (const sibling of Array.from<Element>(branch.parentElement.children)) {
        if (sibling !== branch && sibling instanceof HTMLElement && !sibling.hasAttribute('inert')) {
          sibling.setAttribute('inert', '');
          inertElements.push(sibling);
        }
      }
      branch = branch.parentElement;
    }
    const focusable = (): HTMLElement[] => Array.from<HTMLElement>(dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
    focusable()[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key !== 'Tab') return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const containFocus = (event: FocusEvent) => {
      if (!dialog.contains(event.target as Node)) focusable()[0]?.focus();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('focusin', containFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('focusin', containFocus);
      inertElements.forEach(element => element.removeAttribute('inert'));
      // The mobile trigger is hidden after resizing; restore to the brand instead.
      const target = window.matchMedia('(min-width: 1024px)').matches
        ? document.getElementById('nav-home') : triggerRef.current;
      target?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-[#f7f7f2]/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#080e14]/95">
      <div className="studio-container flex h-20 items-center justify-between gap-3">
        <Link id="nav-home" to="/" aria-label="AmitraX home" className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-cyan-500">
          <Logo size="md" showSubline={false} />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(link => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'} className={({ isActive }) => `px-3 py-3 text-sm font-medium transition-colors hover:text-cyan-700 dark:hover:text-cyan-300 ${isActive ? 'text-cyan-700 dark:text-cyan-300' : 'text-slate-600 dark:text-slate-300'}`}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <button type="button" onClick={toggleTheme} className="flex size-11 items-center justify-center rounded-full text-slate-700 hover:bg-slate-900/5 focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-slate-200 dark:hover:bg-white/10" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
          </button>
          <div className="hidden lg:block"><ButtonLink to="/contact" className="min-h-11" iconRight={<ArrowUpRight size={16} aria-hidden="true" />}>Let’s talk</ButtonLink></div>
          <button ref={triggerRef} type="button" onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} aria-controls={open ? 'mobile-navigation' : undefined} aria-haspopup="dialog" className="flex size-11 items-center justify-center rounded-full text-slate-900 focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-white lg:hidden"><Menu aria-hidden="true" /></button>
        </div>
      </div>
      {open && (
        <div ref={dialogRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title" className="fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-[#f7f7f2] px-6 pb-8 text-slate-950 dark:bg-[#080e14] dark:text-white">
          <div className="flex min-h-20 items-center justify-between">
            <span id="mobile-navigation-title" className="studio-kicker">Explore AmitraX</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close navigation" className="flex size-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-cyan-500"><X aria-hidden="true" /></button>
          </div>
          <nav aria-label="Mobile navigation" className="my-5">
            {NAV_LINKS.map((link, index) => <NavLink key={link.path} to={link.path} end={link.path === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-5 border-b border-slate-900/10 py-3 font-display text-3xl dark:border-white/10 ${isActive ? 'text-cyan-700 dark:text-cyan-300' : ''}`}><span className="font-sans text-sm text-slate-500">0{index + 1}</span>{link.name}</NavLink>)}
          </nav>
          <Link to="/capabilities" onClick={() => setOpen(false)} className="mb-6 inline-flex min-h-11 items-center gap-2 text-base">Explore capabilities <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <div className="mt-auto" onClick={(event) => { if ((event.target as HTMLElement).closest('a')) setOpen(false); }}><ButtonLink to="/contact" size="lg" fullWidth iconRight={<ArrowUpRight size={18} aria-hidden="true" />}>Let’s talk</ButtonLink></div>
        </div>
      )}
    </header>
  );
};
