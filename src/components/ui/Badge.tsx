import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'cyan' | 'sapphire' | 'purple' | 'emerald' | 'amber' | 'rose' | 'mono';
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  pulse = false,
  className = '',
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-full',
    md: 'text-xs px-3 py-1 rounded-full',
  };

  const variantStyles = {
    default: 'bg-white/[0.06] text-slate-200 border-white/10',
    accent: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]',
    cyan: 'bg-cyan-500/15 text-cyan-200 border-cyan-500/30 shadow-[0_0_12px_rgba(56,189,248,0.15)]',
    sapphire: 'bg-blue-500/15 text-blue-200 border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.15)]',
    purple: 'bg-purple-500/15 text-purple-200 border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.15)]',
    emerald: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]',
    amber: 'bg-amber-500/15 text-amber-200 border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]',
    rose: 'bg-rose-500/15 text-rose-200 border-rose-500/30 shadow-[0_0_12px_rgba(244,63,94,0.15)]',
    mono: 'bg-slate-900/60 text-slate-300 border-white/10 font-mono',
  };

  const pulseColors = {
    accent: 'bg-cyan-400',
    cyan: 'bg-cyan-400',
    sapphire: 'bg-blue-400',
    purple: 'bg-purple-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    rose: 'bg-rose-400',
    default: 'bg-slate-300',
    mono: 'bg-slate-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-medium transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {pulse && (
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse shrink-0 ${pulseColors[variant] || 'bg-cyan-400'}`}
        />
      )}
      <span className="whitespace-nowrap">{children}</span>
    </span>
  );
};
