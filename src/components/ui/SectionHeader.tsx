import React from 'react';

export interface SectionHeaderProps {
  label: string;
  sublabel?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  actionSlot?: React.ReactNode;
  align?: 'left' | 'center';
  badgeVariant?: 'cyan' | 'sapphire' | 'purple' | 'emerald' | 'amber';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  sublabel,
  title,
  titleHighlight,
  description,
  actionSlot,
  align = 'left',
  badgeVariant = 'cyan',
  className = '',
}) => {
  const isCentered = align === 'center';

  const badgeStyles = {
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    sapphire: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
  };

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 ${
        isCentered ? 'text-center items-center' : ''
      } ${className}`}
    >
      <div className={`space-y-4 max-w-3xl ${isCentered ? 'mx-auto' : ''}`}>
        {/* Modern Pill Category Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-medium tracking-wide shadow-sm ${
            badgeStyles[badgeVariant]
          } ${isCentered ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span className="font-semibold">{label}</span>
          {sublabel && (
            <>
              <span className="opacity-40">•</span>
              <span className="opacity-80 font-normal">{sublabel}</span>
            </>
          )}
        </div>

        {/* Primary Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
          {title}{' '}
          {titleHighlight && (
            <span className="gradient-text-cyan">{titleHighlight}</span>
          )}
        </h2>

        {/* Supporting Explanatory Paragraph */}
        {description && (
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>

      {actionSlot && <div className="shrink-0">{actionSlot}</div>}
    </div>
  );
};
