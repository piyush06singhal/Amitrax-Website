import React, { useEffect } from 'react';
import { ButtonLink } from '../components/ui/Button';
import { ArrowUpRight, SearchX, Compass } from 'lucide-react';
import { Logo } from '../components/ui/Logo';

/**
 * AmitraX Branded 404 — This page doesn't exist.
 * Never expose technical routing errors; always a designed, calm escape.
 */
export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Page Not Found | AmitraX';
  }, []);

  return (
    <div className="w-full pt-28 pb-28 relative overflow-hidden">
      {/* Ambient brand glow */}
      <div className="absolute top-16 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold shadow-sm dark:shadow-[0_0_15px_rgba(56,189,248,0.18)]">
            <SearchX className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            <span>ERROR 404 — ROUTE NOT FOUND</span>
          </div>

          {/* Wordmark mark */}
          <div className="inline-flex items-center justify-center gap-3">
            <Logo size="md" showSubline={false} />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-900 dark:text-white tracking-tight leading-tight">
            This page{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-500 to-purple-600 dark:from-cyan-300 dark:via-sky-200 dark:to-purple-300">
              doesn't exist.
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-lg mx-auto font-body">
            The system couldn't find what you were looking for. The rest of the platform is
            operational — let's get you back to it.
          </p>

          {/* Action group */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <ButtonLink
              to="/"
              variant="primary"
              size="lg"
              magnetic
              iconRight={<ArrowUpRight className="w-4 h-4" />}
            >
              Return Home
            </ButtonLink>

            <ButtonLink
              to="/products"
              variant="secondary"
              size="lg"
              iconLeft={<Compass className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />}
            >
              Explore Product Lab
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;