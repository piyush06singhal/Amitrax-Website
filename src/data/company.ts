/**
 * AmitraX Company Narrative & Identity
 * Structured, easily maintainable configuration for brand positioning and storytelling.
 */

export const COMPANY_IDENTITY = {
  name: 'AmitraX',
  tagline: 'Technology, built with purpose.',
  headline: 'We build modern digital products that solve real-world problems.',
  positioning:
    'AmitraX is an early-stage technology company focused on building modern software, intelligent systems, and scalable digital infrastructure. We combine disciplined software engineering, product thinking, and thoughtful design to turn ambitious ideas into practical, reliable digital solutions.',
  philosophy: 'Technology should not simply be built. It should be built with purpose.',
  philosophySubtext:
    'We reject technology for novelty’s sake. Every line of code, every architectural choice, and every interface interaction must trace directly to solving a tangible constraint or human friction point.',
  foundedYear: '2026',
  status: 'Active Engineering Studio',
  contactEmail: 'amitbouddh595@gmail.com',
  location: 'Global Digital Studio',
};

export const COMPANY_STORY = {
  headline: 'How AmitraX Began',
  subheadline: 'Turning ambitious ideas into practical, enduring technology.',
  narrative: [
    'AmitraX was started with a single, straightforward conviction: software exists to remove operational and human friction, not to generate unnecessary complexity.',
    'Too much modern technology is bloated, over-engineered, or abandoned at the prototype phase. We set out to build an early, agile, and technically rigorous technology studio where product thinking, engineering discipline, and modern interface design operate as one unified practice.',
    'We do not manufacture fake history or inflate who we are. We are builders at the beginning of an ambitious journey, judged purely by the architectural resilience, craft, and usefulness of the products we engineer.'
  ],
  stages: [
    {
      step: '01',
      phase: 'Problem',
      title: 'Isolate the Friction',
      description: 'Every meaningful project starts by pinpointing where users or organizations waste time, lose momentum, or hit a wall.',
      accent: '#f43f5e'
    },
    {
      step: '02',
      phase: 'Idea',
      title: 'Formulate the Solution',
      description: 'We translate raw needs into an elegant, coherent product vision grounded in realistic feasibility.',
      accent: '#f59e0b'
    },
    {
      step: '03',
      phase: 'Build',
      title: 'Engineer with Precision',
      description: 'We build production-ready systems using type safety, resilient architecture, and responsive interfaces.',
      accent: '#38bdf8'
    },
    {
      step: '04',
      phase: 'Learn',
      title: 'Observe Real Usage',
      description: 'We deploy to real environments, gather telemetry, and observe where users encounter cognitive friction.',
      accent: '#a855f7'
    },
    {
      step: '05',
      phase: 'Improve',
      title: 'Iterate & Compound Value',
      description: 'We optimize latency, refine workflows, and scale the system into an enduring digital asset.',
      accent: '#10b981'
    }
  ]
};

export const WHO_WE_BUILD_FOR = [
  {
    id: 'businesses',
    title: 'Businesses & Enterprises',
    tagline: 'Operational leverage through modern software',
    description:
      'We architect custom digital products, internal workflow tools, customer-facing platforms, and intelligent automation systems that streamline operations, eliminate manual toil, and scale seamlessly.',
    typicalNeeds: [
      'Customer-facing digital platforms',
      'Complex workflow & pipeline automation',
      'API integrations & data reconciliation',
      'Modern web applications replacing legacy software'
    ],
    accentColor: '#38bdf8'
  },
  {
    id: 'institutions',
    title: 'Institutions & Organizations',
    tagline: 'Reliable, accessible systems built for long-term stewardship',
    description:
      'We engineer stable digital infrastructure and secure platforms designed around complex multi-stakeholder workflows, institutional compliance, and strict accessibility standards.',
    typicalNeeds: [
      'Secure multi-tier access platforms',
      'Auditable data management systems',
      'WCAG AA accessible public interfaces',
      'High-uptime, maintainable infrastructure'
    ],
    accentColor: '#3b82f6'
  },
  {
    id: 'startups',
    title: 'Startups & Founders',
    tagline: 'Turning early-stage visions into production-grade reality',
    description:
      'We partner with ambitious founders to engineer high-velocity MVPs, scalable foundations, and rapid interactive prototypes that validate product-market fit without accumulating crippling technical debt.',
    typicalNeeds: [
      'Zero-to-one MVP software development',
      'Scalable cloud architecture & database modeling',
      'Rapid prototype validation & user testing',
      'High-conversion, polished product landing surfaces'
    ],
    accentColor: '#a855f7'
  },
  {
    id: 'digital-users',
    title: 'Everyday Digital Users',
    tagline: 'Software that respects human attention and intent',
    description:
      'Above all, every product we build is designed for the human being using it. We build software that loads instantly, works intuitively, and respects cognitive bandwidth.',
    typicalNeeds: [
      'Sub-millisecond tactile responsiveness',
      'Intuitive, self-explanatory workflows',
      'Zero clutter, dark-mode & accessible ergonomics',
      'Consistent performance across desktop, tablet, and mobile'
    ],
    accentColor: '#10b981'
  }
];

export const ACCESSIBILITY_PRINCIPLES = [
  {
    title: 'Accessible by Default',
    description: 'WCAG AA compliance is not an afterthought or audit checkbox; it is built into the atomic component tokens, contrast ratios, and keyboard navigation matrices from line one.'
  },
  {
    title: 'Cognitive Clarity',
    description: 'We organize complex information hierarchies with generous whitespace, clear typographic scales, and deterministic feedback states so users never guess what happens next.'
  },
  {
    title: 'Device Fluidity',
    description: 'From 32-inch ultra-wide monitors to entry-level smartphones, our interfaces dynamically adapt their density, touch targets (minimum 44px), and layouts for effortless operation.'
  },
  {
    title: 'Predictable Reliability',
    description: 'Graceful offline fallbacks, comprehensive error boundaries, and instant optimistic feedback ensure the user is never stranded during transient network drops.'
  }
];
