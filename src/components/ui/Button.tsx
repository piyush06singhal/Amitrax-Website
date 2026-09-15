import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, Check } from 'lucide-react';
import { Magnetic } from '../motion/Magnetic';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  success?: boolean;
  magnetic?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      fullWidth = false,
      loading = false,
      success = false,
      magnetic = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Level 1 Micro-interactions: Crisp, physical, tactile, accessible
    const baseStyles =
      'relative group inline-flex items-center justify-center font-sans font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.97] cursor-pointer';

    // Size variants
    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
      md: 'text-sm px-4.5 py-2 rounded-lg gap-2',
      lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
    };

    // Visual appearance variants (Adaptive to light/dark)
    const variantStyles = {
      primary:
        'bg-slate-950 text-white dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 font-semibold shadow-md hover:shadow-lg hover:opacity-90 dark:hover:from-cyan-400 dark:hover:to-blue-500 border border-slate-800 dark:border-cyan-300/30',

      gradient:
        'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] border border-indigo-400/30',

      secondary:
        'bg-white text-slate-800 dark:bg-[#0c1224]/80 dark:text-slate-200 border border-slate-200 dark:border-white/12 hover:border-slate-400 dark:hover:border-cyan-400/40 hover:bg-slate-50 dark:hover:bg-[#131d38] hover:text-black dark:hover:text-white shadow-sm',

      ghost:
        'bg-transparent text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08]',

      text:
        'bg-transparent text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 p-0 hover:underline underline-offset-4',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const buttonContent = (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        aria-label={loading ? (props['aria-label'] ?? 'Loading…') : props['aria-label']}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthClass} ${className}`}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : success ? (
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
        ) : (
          <>
            {iconLeft && <span className="inline-flex shrink-0 items-center">{iconLeft}</span>}
            <span>{children}</span>
            {iconRight && <span className="inline-flex shrink-0 items-center transition-transform duration-200 group-hover:translate-x-1">{iconRight}</span>}
          </>
        )}
      </button>
    );

    if (magnetic) {
      return <Magnetic strength={0.2}>{buttonContent}</Magnetic>;
    }

    return buttonContent;
  }
);

interface ButtonLinkProps {
  to: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'text' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  magnetic?: boolean;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

/**
 * Renders primary/secondary button styling on a router <Link> for internal
 * paths, or an <a target="_blank"> for external/absolute URLs. Fixes the
 * invalid nested <a><button> pattern and the ProductDetailPage latent bug
 * of passing absolute URLs to react-router <Link>.
 */
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  magnetic = false,
  className = '',
  ariaLabel,
  children,
}) => {
  const isInternal = to.startsWith('/') && !to.startsWith('//');

  const baseStyles =
    'relative group inline-flex items-center justify-center font-sans font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 active:scale-[0.97] cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-4.5 py-2 rounded-lg gap-2',
    lg: 'text-base px-6 py-3 rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-slate-950 text-white dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 font-semibold shadow-md hover:shadow-lg hover:opacity-90 dark:hover:from-cyan-400 dark:hover:to-blue-500 border border-slate-800 dark:border-cyan-300/30',

    gradient:
      'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] border border-indigo-400/30',

    secondary:
      'bg-white text-slate-800 dark:bg-[#0c1224]/80 dark:text-slate-200 border border-slate-200 dark:border-white/12 hover:border-slate-400 dark:hover:border-cyan-400/40 hover:bg-slate-50 dark:hover:bg-[#131d38] hover:text-black dark:hover:text-white shadow-sm',

    ghost:
      'bg-transparent text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08]',

    text: 'bg-transparent text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 p-0 hover:underline underline-offset-4',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const linkClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      {iconLeft && <span className="inline-flex shrink-0 items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && (
        <span className="inline-flex shrink-0 items-center transition-transform duration-200 group-hover:translate-x-1">
          {iconRight}
        </span>
      )}
    </>
  );

  const linkNode = isInternal ? (
    <Link to={to} className={linkClasses} aria-label={ariaLabel}>
      {content}
    </Link>
  ) : (
    <a href={to} target="_blank" rel="noopener noreferrer" className={linkClasses} aria-label={ariaLabel}>
      {content}
    </a>
  );

  if (magnetic) {
    return <Magnetic strength={0.2}>{linkNode}</Magnetic>;
  }

  return linkNode;
};

Button.displayName = 'Button';
