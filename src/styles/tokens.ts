/**
 * AmitraX Design System - Core Design Tokens
 * 
 * Centralized, immutable tokens defining:
 * - Color palette (Rich Obsidian, Cosmic Navy, Electric Cyan, Sapphire, Ultraviolet)
 * - Typography scale & fluid clamps
 * - Spacing scale & container constraints
 * - Motion curves & transitions
 */

export const COLOR_TOKENS = {
  // Primary environment: Rich deep cosmic canvas
  bg: '#05070e',
  bgDarker: '#030408',
  bgCard: '#090d1a',
  bgElevated: '#0e1428',
  bgSubtle: '#141c36',

  // Borders & Dividers
  border: 'rgba(255, 255, 255, 0.08)',
  borderHover: 'rgba(255, 255, 255, 0.18)',
  borderAccent: 'rgba(56, 189, 248, 0.4)',
  borderSapphire: 'rgba(59, 130, 246, 0.35)',
  borderPurple: 'rgba(168, 85, 247, 0.35)',

  // Typography
  textPrimary: '#f8fafc',
  textSecondary: '#cbd5e1',
  textMuted: '#94a3b8',

  // Distinctive AmitraX Vibrant Color Family
  cyan: '#38bdf8',
  cyanHover: '#0ea5e9',
  cyanGlow: 'rgba(56, 189, 248, 0.25)',

  sapphire: '#3b82f6',
  sapphireHover: '#2563eb',
  sapphireGlow: 'rgba(59, 130, 246, 0.25)',

  purple: '#a855f7',
  purpleHover: '#9333ea',
  purpleGlow: 'rgba(168, 85, 247, 0.25)',

  emerald: '#10b981',
  emeraldGlow: 'rgba(16, 185, 129, 0.25)',

  amber: '#f59e0b',
  rose: '#f43f5e',
} as const;

export const TYPOGRAPHY_TOKENS = {
  fontSans: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontDisplay: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
  fontMono: "'JetBrains Mono', monospace",

  // Fluid responsive clamps
  display: 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
  h1: 'clamp(2rem, 3.5vw + 0.5rem, 3.25rem)',
  h2: 'clamp(1.5rem, 2.2vw + 0.25rem, 2.25rem)',
  h3: 'clamp(1.2rem, 1.4vw + 0.2rem, 1.5rem)',
  body: 'clamp(0.95rem, 0.4vw + 0.85rem, 1.0625rem)',
  small: '0.875rem',
  label: '0.75rem',
} as const;

export const SPACING_TOKENS = {
  containerMaxWidth: '80rem', // 1280px (max-w-7xl)
  sectionVertical: 'clamp(4.5rem, 7vw, 7rem)',
  gridGap: '1.5rem', // 24px
  cardPadding: '1.75rem', // 28px
  borderSubtleRadius: '0.875rem', // 14px
} as const;
