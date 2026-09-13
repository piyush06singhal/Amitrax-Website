export type ProductStatus = 
  | 'concept'
  | 'exploring'
  | 'prototype'
  | 'in-development'
  | 'beta'
  | 'live'
  | 'archived';

export type ProductCategory =
  | 'Platform'
  | 'AI & Intelligence'
  | 'Automation'
  | 'Data & Distributed'
  | 'Interface & Spatial'
  | 'Developer Tools'
  | 'Enterprise'
  | 'Consumer'
  | 'Experimental';

export interface ProductTechnology {
  name: string;
  role: string;
  category?: 'Runtime' | 'Intelligence' | 'Data' | 'Interface' | 'Protocol' | 'Infrastructure';
}

export interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'render';
  title: string;
  url: string;
  caption?: string;
  poster?: string;
}

export interface ProductMilestone {
  phase: string;
  date?: string;
  status: 'completed' | 'active' | 'upcoming';
  note: string;
}

export interface ProductMetric {
  label: string;
  value: string;
  note?: string;
}

export interface ProductRelationship {
  slug: string;
  name: string;
  relationshipType: 'shares-infrastructure' | 'powers-intelligence' | 'companion-tool' | 'integrates-with';
  description: string;
}

export interface ProductStory {
  problem: string;
  insight: string;
  solution: string;
  impact?: string;
}

export interface ProductCapability {
  title: string;
  description: string;
  technicalDetail?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  status: ProductStatus;
  category: ProductCategory;
  featured?: boolean;
  colorAccent?: string; // hex or tailwind name e.g. '#38bdf8'
  codeName?: string; // e.g. 'AX-01'

  // Storytelling Architecture: Problem -> Insight -> Solution -> Impact
  story: ProductStory;

  // Key Capabilities
  keyCapabilities: ProductCapability[];

  // Technology Display with concrete purpose/role
  technologies: ProductTechnology[];

  // Current Development State
  statusNotes?: string;
  readinessPercentage?: number; // 0 to 100
  milestones?: ProductMilestone[];

  // Verified Metrics (only shown when non-empty, never fake numbers)
  metrics?: ProductMetric[];

  // Media & Video
  media?: MediaAsset[];
  videoDemo?: {
    videoUrl: string;
    posterUrl?: string;
    title: string;
    duration?: string;
  };

  // Ecosystem Connections
  relationships?: ProductRelationship[];
  ecosystemTier?: string;

  // Action / Links
  websiteUrl?: string | null;
  githubUrl?: string | null;
  docsUrl?: string | null;
  launchDate?: string;

  // SEO
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
  };
}

export interface StatusConfig {
  label: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  dotColor: string;
  defaultCtaText: string;
  defaultCtaAction: 'external' | 'contact' | 'waitlist' | 'docs';
  description: string;
}

export const PRODUCT_STATUS_CONFIG: Record<ProductStatus, StatusConfig> = {
  concept: {
    label: 'Concept',
    badgeBg: 'bg-slate-500/10',
    badgeBorder: 'border-slate-500/30',
    badgeText: 'text-slate-300',
    dotColor: 'bg-slate-400',
    defaultCtaText: 'Learn more',
    defaultCtaAction: 'contact',
    description: 'Formalized problem definition and algorithmic feasibility modeling.',
  },
  exploring: {
    label: 'Exploring',
    badgeBg: 'bg-indigo-500/10',
    badgeBorder: 'border-indigo-500/30',
    badgeText: 'text-indigo-300',
    dotColor: 'bg-indigo-400',
    defaultCtaText: 'Explore research',
    defaultCtaAction: 'contact',
    description: 'Active experimentation with novel architectural hypotheses.',
  },
  prototype: {
    label: 'Prototype',
    badgeBg: 'bg-purple-500/10',
    badgeBorder: 'border-purple-500/30',
    badgeText: 'text-purple-300',
    dotColor: 'bg-purple-400',
    defaultCtaText: 'Follow development',
    defaultCtaAction: 'contact',
    description: 'Interactive working prototype undergoing internal stress benchmarks.',
  },
  'in-development': {
    label: 'In Development',
    badgeBg: 'bg-cyan-500/10',
    badgeBorder: 'border-cyan-500/30',
    badgeText: 'text-cyan-300',
    dotColor: 'bg-cyan-400',
    defaultCtaText: 'View progress',
    defaultCtaAction: 'contact',
    description: 'Under active software engineering, distributed state hardening, and UI design.',
  },
  beta: {
    label: 'Beta',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-300',
    dotColor: 'bg-amber-400',
    defaultCtaText: 'Request access',
    defaultCtaAction: 'waitlist',
    description: 'Limited closed release with select enterprise and pilot partners.',
  },
  live: {
    label: 'Live',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-300',
    dotColor: 'bg-emerald-400',
    defaultCtaText: 'Open product',
    defaultCtaAction: 'external',
    description: 'Production release operating in active public or customer environments.',
  },
  archived: {
    label: 'Archived',
    badgeBg: 'bg-zinc-800/40',
    badgeBorder: 'border-zinc-700/40',
    badgeText: 'text-zinc-400',
    dotColor: 'bg-zinc-500',
    defaultCtaText: 'View archive',
    defaultCtaAction: 'docs',
    description: 'Concluded initiative; key architectural learnings merged into the core platform.',
  },
};
