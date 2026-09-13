import React from 'react';
import { ProductStatus, PRODUCT_STATUS_CONFIG } from '../../types/products';

interface ProductStatusBadgeProps {
  status: ProductStatus;
  size?: 'sm' | 'md' | 'lg';
  showDot?: boolean;
  className?: string;
}

export const ProductStatusBadge: React.FC<ProductStatusBadgeProps> = ({
  status,
  size = 'sm',
  showDot = true,
  className = '',
}) => {
  const config = PRODUCT_STATUS_CONFIG[status] || PRODUCT_STATUS_CONFIG.concept;

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider gap-1.5',
    md: 'text-xs px-2.5 py-1 tracking-wide gap-2',
    lg: 'text-sm px-3 py-1.5 tracking-wide gap-2.5',
  }[size];

  const dotSizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  }[size];

  const shouldPulse = status === 'in-development' || status === 'beta' || status === 'live';

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded-full border uppercase select-none transition-colors ${config.badgeBg} ${config.badgeBorder} ${config.badgeText} ${sizeClasses} ${className}`}
      title={config.description}
      aria-label={`Status: ${config.label}`}
    >
      {showDot && (
        <span
          className={`rounded-full shrink-0 ${config.dotColor} ${dotSizeClasses} ${
            shouldPulse ? 'animate-pulse' : 'opacity-80'
          }`}
          aria-hidden="true"
        />
      )}
      <span>{config.label}</span>
    </span>
  );
};
