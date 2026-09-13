/**
 * AmitraX Company Values Configuration
 * Six concise, genuine values represented through geometric and systemic visual metaphors.
 */

export interface CompanyValue {
  id: string;
  name: string;
  tagline: string;
  description: string;
  visualSystem: string; // Describes the geometric representation
  accentColor: string;
}

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: 'purpose',
    name: 'Purpose',
    tagline: 'Build around real problems.',
    description:
      'We reject building technology just because it is novel or trendy. Every architecture, feature, and workflow must trace directly to solving a tangible constraint.',
    visualSystem: 'Target & Convergence Grid',
    accentColor: '#38bdf8'
  },
  {
    id: 'craft',
    name: 'Craft',
    tagline: 'Care about implementation details.',
    description:
      'Great software is felt in the details: sub-frame responsiveness, strict type invariants, zero layout shifts, and clean abstractions that make future changes painless.',
    visualSystem: 'Precision Isometric Geometry',
    accentColor: '#3b82f6'
  },
  {
    id: 'curiosity',
    name: 'Curiosity',
    tagline: 'Explore and learn continuously.',
    description:
      'We actively experiment with emerging computational paradigms—from neural model runtimes to edge state fabrics—to evaluate what is genuinely ready for production.',
    visualSystem: 'Expanding Synaptic Network',
    accentColor: '#a855f7'
  },
  {
    id: 'practicality',
    name: 'Practicality',
    tagline: 'Prefer useful solutions over unnecessary complexity.',
    description:
      'The most elegant code is often the simplest architecture that solves the problem robustly. We favor maintainable systems over convoluted micro-frameworks.',
    visualSystem: 'Direct Linear Vector',
    accentColor: '#10b981'
  },
  {
    id: 'iteration',
    name: 'Iteration',
    tagline: 'Build, test, learn, improve.',
    description:
      'Software is never complete at launch. We treat every release as an empirical hypothesis, listening to telemetry and refining the product continuously.',
    visualSystem: 'Continuous Dynamic Loop',
    accentColor: '#f59e0b'
  },
  {
    id: 'responsibility',
    name: 'Responsibility',
    tagline: 'Build technology thoughtfully.',
    description:
      'We design for real human beings. That means non-negotiable data privacy, strict accessibility standards, predictable costs, and software that respects human attention.',
    visualSystem: 'Protected Integrity Shield',
    accentColor: '#ec4899'
  }
];
