import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { COMPANY_IDENTITY } from '../../data/companyData';
import { Logo } from '../ui/Logo';

const LINKS = [['Home', '/'], ['Work', '/products'], ['Services', '/services'], ['Process', '/architecture'], ['About', '/about'], ['Capabilities', '/capabilities']];

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer bg-[#080e14] py-8 text-slate-300 sm:py-10">
      <div className="studio-container">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr_1fr] md:items-center">
          <div><Link to="/" aria-label="AmitraX home" className="inline-block"><Logo size="md" showSubline={false} inverse /></Link><p className="mt-4 text-base text-slate-400">Independent digital studio.<br />Thoughtful design. Considered engineering.</p></div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 content-start gap-x-6">{LINKS.map(([label, to]) => <Link key={to} to={to} className="inline-flex min-h-11 items-center text-base hover:text-cyan-300">{label}</Link>)}</nav>
          <div><p className="mb-2 text-sm text-slate-400">Email the studio</p><a className="inline-flex min-h-11 max-w-full items-center break-all text-base text-white underline decoration-white/30 underline-offset-4 hover:text-cyan-300" href={`mailto:${COMPANY_IDENTITY.contactEmail}`}>{COMPANY_IDENTITY.contactEmail}</a></div>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} AmitraX Digital Studio</p>
          <button type="button" onClick={() => { window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); document.getElementById('nav-home')?.focus({ preventScroll: true }); }} className="inline-flex min-h-11 items-center gap-2 text-slate-300 hover:text-cyan-300">Back to top <ArrowUp size={16} aria-hidden="true" /></button>
        </div>
      </div>
    </footer>
  );
};
