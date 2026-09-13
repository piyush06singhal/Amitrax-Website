import React, { useState } from 'react';
import { ProductItem } from '../../types';
import { X, Cpu, CheckCircle, ArrowRight, Shield, Layers, Terminal } from 'lucide-react';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!product) return null;

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl my-8 p-6 sm:p-8 rounded-2xl bg-[#090e1a] border border-cyan-500/30 text-white shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-400">
            <span>LAB CODE: {product.codeName}</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              {product.stage}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-cyan-300/90 font-mono">{product.tagline}</p>
        </div>

        {/* Main Details */}
        <div className="space-y-6">
          {/* Problem & Solution block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
              <span className="font-mono text-[11px] text-slate-400 uppercase">
                Problem Addressed
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {product.problemSolved}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
              <span className="font-mono text-[11px] text-cyan-400 uppercase">
                Architecture Pattern
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {product.architectureNotes}
              </p>
            </div>
          </div>

          {/* Key Architecture Features */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              Core Capabilities Under Development
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <div className="font-mono text-[11px] text-slate-400 uppercase mb-2">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md font-mono text-xs text-slate-300 bg-white/5 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Early Access / Developer Waitlist Callout */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-cyan-500/30">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase mb-1">
              <Terminal className="w-4 h-4" />
              <span>Request Early Builder Access</span>
            </div>
            <p className="text-xs text-slate-300 mb-3">
              Join the technical advisory circle to test alpha builds and review architectural RFCs for {product.name}.
            </p>

            {isSubmitted ? (
              <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Access request recorded for {emailInput}. We will notify you when sandbox slots open.</span>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="developer@company.com"
                  className="flex-1 px-3.5 py-2 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#07090e] font-semibold text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <span>Register</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
