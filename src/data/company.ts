/**
 * AmitraX Company Narrative & Identity
 * Structured, easily maintainable configuration for brand positioning and storytelling.
 */

export const COMPANY_IDENTITY = {
  name: 'AmitraX',
  tagline: 'Digital work, built with purpose.',
  headline: 'We help businesses show up better online.',
  positioning:
    'AmitraX is a small digital studio creating websites, web applications, and useful online experiences for businesses and teams. We combine clear thinking, thoughtful design, and dependable development to turn ideas into work people can use.',
  philosophy: 'Digital work should make things clearer, easier, and more useful.',
  philosophySubtext:
    'We do not add complexity for its own sake. Every page, feature, and interaction should help your customers or your team do something better.',
  foundedYear: '2026',
  status: 'Independent Digital Studio',
  contactEmail: 'amitbouddh595@gmail.com',
  location: 'Working with clients remotely',
};

export const COMPANY_STORY = {
  headline: 'How AmitraX Began',
  subheadline: 'Turning ambitious ideas into clear, useful digital experiences.',
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
      description: 'Every meaningful project starts by understanding what people need, where they get stuck, and what the business is trying to achieve.',
      accent: '#f43f5e'
    },
    {
      step: '02',
      phase: 'Idea',
      title: 'Shape the Solution',
      description: 'We translate the brief into a focused direction for the pages, content, and functionality.',
      accent: '#f59e0b'
    },
    {
      step: '03',
      phase: 'Build',
      title: 'Design & Build',
      description: 'We turn the direction into a polished, responsive experience that works across devices.',
      accent: '#38bdf8'
    },
    {
      step: '04',
      phase: 'Learn',
      title: 'Launch & Listen',
      description: 'We launch the work, gather useful feedback, and pay attention to what people actually need next.',
      accent: '#a855f7'
    },
    {
      step: '05',
      phase: 'Improve',
      title: 'Improve Over Time',
      description: 'We keep refining the experience as your business, content, and customers grow.',
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
      'We create websites, web applications, internal tools, and connected workflows that make day-to-day work clearer and easier.',
    typicalNeeds: [
      'Customer-facing websites and web apps',
      'Clearer internal workflows',
      'Useful integrations between existing tools',
      'Modern experiences replacing outdated ones'
    ],
    accentColor: '#38bdf8'
  },
  {
    id: 'institutions',
    title: 'Institutions & Organizations',
    tagline: 'Reliable, accessible systems built for long-term stewardship',
    description:
      'We create clear, accessible websites and useful digital tools for organisations with multiple audiences and moving parts.',
    typicalNeeds: [
      'Secure multi-tier access platforms',
      'Auditable data management systems',
      'WCAG AA accessible public interfaces',
      'Clear, maintainable digital foundations'
    ],
    accentColor: '#3b82f6'
  },
  {
    id: 'startups',
    title: 'Startups & Founders',
    tagline:     'Turning early-stage visions into useful digital experiences',
    description:
      'We partner with ambitious founders to shape focused first versions, polished landing pages, and practical tools that help them learn and grow.',
    typicalNeeds: [
      'First-version website or web app',
      'Clear product and content direction',
      'Rapid prototype validation',
      'Polished launch-ready pages'
    ],
    accentColor: '#a855f7'
  },
  {
    id: 'digital-users',
    title: 'Everyday Digital Users',
    tagline: 'Software that respects human attention and intent',
    description:
      'Above all, every experience we build is designed for the person using it. We aim for clear content, intuitive flows, and less unnecessary friction.',
    typicalNeeds: [
      'Clear, self-explanatory journeys',
      'Comfortable mobile experiences',
      'Readable content and useful feedback',
      'Consistent layouts across devices'
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
