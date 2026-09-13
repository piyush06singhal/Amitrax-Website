import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'feature' | 'product' | 'interactive' | 'system' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'standard',
  padding = 'md',
  hoverEffect = false,
  className = '',
  ...props
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-7',
    lg: 'p-8 sm:p-10',
  };

  const variantStyles = {
    // Standard: Rich cosmic navy glass background, subtle border
    standard:
      'bg-[#0a0f22]/70 border border-white/10 text-slate-200 backdrop-blur-md shadow-lg',
    
    // Feature: Elevated surface with subtle top luminous highlight
    feature:
      'bg-gradient-to-b from-[#101935]/80 via-[#0a0f24]/90 to-[#070b18]/95 border border-white/12 shadow-2xl backdrop-blur-xl',

    // Product: Deep tech chamber styling with cyan accent border
    product:
      'bg-gradient-to-b from-[#091124] to-[#050914] border border-cyan-500/25 shadow-2xl backdrop-blur-lg',

    // Interactive: Clickable or hoverable with border elevation and glowing shadow
    interactive:
      'bg-[#0a0f22]/75 border border-white/10 hover:border-cyan-400/50 hover:bg-[#0e1630] hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_12px_30px_rgba(56,189,248,0.15)] backdrop-blur-md',

    // Gradient: Vibrant subtle gradient border card
    gradient:
      'bg-gradient-to-br from-[#0c142c] via-[#090e1f] to-[#060a17] border border-blue-500/25 hover:border-blue-400/50 shadow-xl backdrop-blur-lg',

    // System: Technical preview with crisp contrast
    system:
      'bg-[#060914]/90 border border-white/12 text-xs backdrop-blur-md',
  };

  const hoverClass = hoverEffect && variant !== 'interactive'
    ? 'hover:border-white/25 hover:shadow-xl transition-all duration-300'
    : '';

  return (
    <div
      className={`rounded-2xl relative overflow-hidden ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
