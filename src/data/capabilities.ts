/**
 * AmitraX Capabilities Configuration
 * Defines the kinds of digital work AmitraX can help clients create.
 */

export interface CapabilityItem {
  id: string;
  title: string;
  shortName: string;
  tagline: string;
  summary: string;
  detailedScope: string[];
  technologies: string[];
  accentColor: string;
  nodePosition: { x: number; y: number; angle: number };
  systemGuarantees: string[];
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'digital-products',
    title: 'Digital Experiences',
    shortName: 'Experiences',
    tagline: 'Websites and digital products shaped around real user needs',
    summary:
      'We help turn an idea into a focused, polished digital experience that customers and teams can actually use.',
    detailedScope: [
      'Goals, audiences, and user journeys',
      'Wireframes and interactive prototypes',
      'Responsive website or application development',
      'A clear path for future improvements'
    ],
    technologies: ['Responsive design', 'Content structure', 'Interactive prototypes', 'Web development'],
    accentColor: '#38bdf8',
    nodePosition: { x: 0, y: -160, angle: 0 },
    systemGuarantees: ['Clear user journeys', 'Responsive layouts', 'Accessible foundations']
  },
  {
    id: 'software-platforms',
    title: 'Team Tools',
    shortName: 'Team Tools',
    tagline: 'Useful web apps and tools for the way your team works',
    summary:
      'We create custom tools for teams that have outgrown spreadsheets, disconnected systems, or generic software.',
    detailedScope: [
      'Simple, focused feature planning',
      'Dashboards, forms, and content workflows',
      'Connected data and third-party services',
      'A maintainable foundation for your team'
    ],
    technologies: ['Dashboards', 'Forms', 'Content workflows', 'Connected services'],
    accentColor: '#3b82f6',
    nodePosition: { x: 140, y: -80, angle: 60 },
    systemGuarantees: ['Useful workflows', 'Clear information', 'Room to grow']
  },
  {
    id: 'intelligent-systems',
    title: 'Smart Workflows',
    shortName: 'Smart Workflows',
    tagline: 'Thoughtful automation where it genuinely helps',
    summary:
      'When automation or AI can remove repetitive work or improve a customer experience, we help introduce it carefully and practically.',
    detailedScope: [
      'Workflow and automation opportunities',
      'Content and information organisation',
      'Human-friendly AI-assisted features',
      'Clear review points and sensible guardrails'
    ],
    technologies: ['Automation', 'AI-assisted features', 'Content organisation', 'Human review'],
    accentColor: '#a855f7',
    nodePosition: { x: 140, y: 80, angle: 120 },
    systemGuarantees: ['Practical use cases', 'Human oversight', 'Clear expectations']
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    shortName: 'Web Apps',
    tagline: 'Responsive experiences that feel good on every screen',
    summary:
      'We build web experiences that are easy to navigate, quick to understand, and comfortable to use on phones, tablets, and desktops.',
    detailedScope: [
      'Responsive page and component design',
      'Accessible navigation and interaction states',
      'Subtle motion that supports the experience',
      'Content, forms, and integrations'
    ],
    technologies: ['Responsive layouts', 'Accessible interactions', 'Motion', 'Integrations'],
    accentColor: '#10b981',
    nodePosition: { x: 0, y: 160, angle: 180 },
    systemGuarantees: ['Mobile-friendly layouts', 'Accessible interactions', 'Polished details']
  },
  {
    id: 'automation',
    title: 'Automation & Workflows',
    shortName: 'Automation',
    tagline: 'Workflows that reduce repetitive work and simplify complex processes',
    summary:
      'We connect the tools you already use and reduce repetitive handoffs, copying, and follow-up work.',
    detailedScope: [
      'Workflow mapping',
      'Forms, notifications, and follow-ups',
      'Third-party integrations',
      'Documentation your team can understand'
    ],
    technologies: ['Forms', 'Notifications', 'Webhooks', 'Connected services'],
    accentColor: '#06b6d4',
    nodePosition: { x: -140, y: 80, angle: 240 },
    systemGuarantees: ['Less manual work', 'Clear ownership', 'Understandable workflows']
  },
  {
    id: 'technology-products',
    title: 'Custom Solutions',
    shortName: 'Custom Solutions',
    tagline: 'Focused digital solutions for a specific business need',
    summary:
      'For unusual or specialised challenges, we create a focused solution instead of forcing your needs into a generic template.',
    detailedScope: [
      'A clear definition of the problem',
      'A focused concept or prototype',
      'Design and development around the use case',
      'A practical plan for what comes next'
    ],
    technologies: ['Prototyping', 'Web development', 'Integrations', 'Automation'],
    accentColor: '#ec4899',
    nodePosition: { x: -140, y: -80, angle: 300 },
    systemGuarantees: ['Focused scope', 'Honest recommendations', 'Room for learning']
  }
];
