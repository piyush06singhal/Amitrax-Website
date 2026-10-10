/**
 * AmitraX Company Values Configuration
 * Six concise, genuine values that guide our client work.
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
      'We start with the people, goals, and constraints behind a project so the work has a clear reason to exist.',
    visualSystem: 'Target & Convergence Grid',
    accentColor: '#38bdf8'
  },
  {
    id: 'craft',
    name: 'Craft',
    tagline: 'Care about implementation details.',
    description:
      'Good work is felt in the details: clear content, considered layouts, accessible interactions, and a finish that builds trust.',
    visualSystem: 'Precision Isometric Geometry',
    accentColor: '#3b82f6'
  },
  {
    id: 'curiosity',
    name: 'Curiosity',
    tagline: 'Explore and learn continuously.',
    description:
      'We stay curious, learn continuously, and bring new tools into a project only when they improve the experience or the outcome.',
    visualSystem: 'Expanding Synaptic Network',
    accentColor: '#a855f7'
  },
  {
    id: 'practicality',
    name: 'Practicality',
    tagline: 'Prefer useful solutions over unnecessary complexity.',
    description:
      'We prefer a focused solution that people can understand and use over unnecessary features, layers, or jargon.',
    visualSystem: 'Direct Linear Vector',
    accentColor: '#10b981'
  },
  {
    id: 'iteration',
    name: 'Iteration',
    tagline: 'Build, test, learn, improve.',
    description:
      'Launch is a beginning. We use feedback, conversations, and real-world learning to decide what should improve next.',
    visualSystem: 'Continuous Dynamic Loop',
    accentColor: '#f59e0b'
  },
  {
    id: 'responsibility',
    name: 'Responsibility',
    tagline: 'Build technology thoughtfully.',
    description:
      'We design for real people with respect for their time, privacy, accessibility needs, and attention.',
    visualSystem: 'Protected Integrity Shield',
    accentColor: '#ec4899'
  }
];
