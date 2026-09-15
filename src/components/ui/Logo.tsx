import React from 'react';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubline?: boolean;
  /** Render the wordmark light-on-dark (e.g. for the dark-ink footer). */
  inverse?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubline = false,
  inverse = false,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`inline-flex flex-col select-none group cursor-pointer ${className}`}>
      <div className="flex items-center gap-2">
        {/* Monolith geometric accent anchor */}
        <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400 group-hover:bg-cyan-300 transition-colors duration-200 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        
        {/* Core Brand Wordmark */}
        <span
          className={`font-display font-bold tracking-tight ${inverse ? 'text-white' : 'text-slate-900 dark:text-white'} ${sizeStyles[size]} transition-colors duration-200`}
        >
          Amitra<span className="text-cyan-400">X</span>
        </span>
      </div>

      {showSubline && (
        <span className="font-mono text-[9px] text-slate-500 dark:text-slate-400 tracking-widest uppercase pl-4.5 mt-0.5">
          ENGINEERING SYSTEMS
        </span>
      )}
    </div>
  );
};
