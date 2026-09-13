import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Magnetic } from '../motion/Magnetic';
import { useTheme } from '../../context/ThemeContext';

const NAV_LINKS = [
  { name: 'Overview', path: '/' },
  { name: 'Product Lab', path: '/products' },
  { name: 'What We Build', path: '/capabilities' },
  { name: 'Services', path: '/services' },
  { name: 'Architecture', path: '/architecture' },
  { name: 'About & Values', path: '/about' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 dark:bg-[#05070e]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 group"
          aria-label="AmitraX Home"
        >
          <Logo size="md" showSubline={false} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-white/85 dark:bg-[#0a0f24]/80 border border-slate-200 dark:border-white/12 backdrop-blur-xl shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? 'text-cyan-700 dark:text-white bg-cyan-50 dark:bg-gradient-to-r dark:from-cyan-500/20 dark:to-blue-600/20 border border-cyan-300/60 dark:border-cyan-400/40 shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-transparent'
                }`}
              >
                <span>{link.name}</span>
                {/* Micro-interaction bottom indicator */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-cyan-500 rounded-full transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'
                  }`}
                />
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Engineering Status Chip */}
          <div className="hidden xl:flex items-center gap-2 text-xs text-emerald-700 dark:text-slate-300 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Engineering Studio</span>
          </div>

          {/* Theme Toggle Button (Light / Dark) */}
          <button
            type="button"
            id="btn-theme-toggle"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Lighter Mode'}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Lighter Mode'}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-300" />
            )}
          </button>

          {/* Magnetic Primary CTA */}
          <Magnetic strength={0.25}>
            <Link to="/contact">
              <Button
                id="nav-cta-btn"
                variant="primary"
                size="sm"
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Start Conversation
              </Button>
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 dark:bg-[#05070e]/98 backdrop-blur-2xl border-t border-slate-200 dark:border-white/10 transition-all duration-300 flex flex-col justify-between p-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold px-3 mb-2">
            Navigation
          </div>
          {NAV_LINKS.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/15 border border-cyan-300 dark:border-cyan-500/30'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
          <NavLink
            to="/contact"
            className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
              location.pathname === '/contact'
                ? 'text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/15 border border-cyan-300 dark:border-cyan-500/30'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'
            }`}
          >
            Contact & Inquiry
          </NavLink>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Status</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active Engineering
            </span>
          </div>
          <Link to="/contact" className="block w-full">
            <Button variant="primary" size="lg" fullWidth iconRight={<ArrowUpRight className="w-4 h-4" />}>
              Start a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
