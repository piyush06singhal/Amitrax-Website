import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_IDENTITY } from '../../data/companyData';
import { Logo } from '../ui/Logo';
import { Badge } from '../ui/Badge';
import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-white dark:bg-[#04060b] border-t border-slate-200/90 dark:border-white/10 pt-16 pb-12 text-slate-600 dark:text-slate-400 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
          {/* Col 1: Brand & Creed (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/">
              <Logo size="md" showSubline={false} />
            </Link>

            <p className="text-slate-900 dark:text-white font-semibold text-base font-display">
              {COMPANY_IDENTITY.tagline}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">
              {COMPANY_IDENTITY.positioning}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <Badge variant="emerald" size="sm" pulse={true}>
                Active Engineering Studio
              </Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400">Built with Purpose</span>
            </div>
          </div>

          {/* Col 2: Navigation Multi-Page Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider block font-display">
              Pages
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Overview & Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-600 dark:text-cyan-300 font-medium">
                  Product Lab & Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
                  What We Build
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Architecture & Approach
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
                  About & Company Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-600 dark:text-cyan-300 font-medium">
                  Start a Conversation <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiry & Office (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider block font-display">
              Start a Conversation
            </span>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Have a problem worth solving or looking to build a resilient digital product?
            </p>
            <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
              <a href={`mailto:${COMPANY_IDENTITY.contactEmail}`} className="hover:underline flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> {COMPANY_IDENTITY.contactEmail}
              </a>
            </div>

            <div className="pt-3">
              <Link to="/contact">
                <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-500 text-xs font-medium text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-all flex items-center gap-2">
                  <span>Send Project Inquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Coordinates, Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} AmitraX Technologies Inc.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">LATENCY: OPTIMAL</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-slate-200 dark:border-white/10 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-white transition-all flex items-center gap-1.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
