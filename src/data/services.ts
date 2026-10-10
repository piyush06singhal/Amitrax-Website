/**
 * AmitraX services: practical digital work for growing businesses and teams.
 */

export interface ServiceDetail {
  id: string;
  name: string;
  category: 'Websites' | 'Web Apps' | 'Design' | 'Growth & Support';
  shortExplanation: string;
  typicalProblemsSolved: string;
  deliverables: string[];
  technologies: string[];
  accentColor: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: 'website-design-development',
    name: 'Website Design & Development',
    category: 'Websites',
    shortExplanation: 'Clear, modern websites that explain what you do and help the right people take action.',
    typicalProblemsSolved: 'Your current site feels dated, is difficult to update, or does not make your value clear to potential customers.',
    deliverables: ['Page structure and content direction', 'Responsive interface design', 'CMS or content editing setup', 'Launch-ready website'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Headless CMS'],
    accentColor: '#38bdf8'
  },
  {
    id: 'web-applications',
    name: 'Web Applications',
    category: 'Web Apps',
    shortExplanation: 'Useful web apps and internal tools that make everyday work simpler for your team or customers.',
    typicalProblemsSolved: 'Important work is spread across spreadsheets, email, and disconnected tools that were never designed for your process.',
    deliverables: ['User flows and key screens', 'Role-based experiences', 'Forms, dashboards, and data views', 'A maintainable application foundation'],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'API integrations'],
    accentColor: '#06b6d4'
  },
  {
    id: 'custom-digital-products',
    name: 'Custom Digital Products',
    category: 'Web Apps',
    shortExplanation: 'Purpose-built digital products for businesses with needs that an off-the-shelf tool cannot meet.',
    typicalProblemsSolved: 'Your team has outgrown generic tools and needs a more thoughtful way to manage a customer, content, or operational journey.',
    deliverables: ['Product scope and feature priorities', 'A focused first version', 'Connected data and workflows', 'A roadmap for future improvements'],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Cloud hosting'],
    accentColor: '#3b82f6'
  },
  {
    id: 'automation-integrations',
    name: 'Automation & Integrations',
    category: 'Growth & Support',
    shortExplanation: 'Connected workflows that reduce repetitive admin and help your existing tools work together.',
    typicalProblemsSolved: 'People spend too much time copying information between systems, chasing updates, or repeating work that could be handled automatically.',
    deliverables: ['Workflow mapping', 'Form and email automations', 'Third-party service integrations', 'Clear handover and documentation'],
    technologies: ['APIs', 'Webhooks', 'Zapier', 'Make', 'TypeScript'],
    accentColor: '#a855f7'
  },
  {
    id: 'ui-ux-brand-direction',
    name: 'UI/UX & Brand Direction',
    category: 'Design',
    shortExplanation: 'A visual direction and user experience that feels like your business and is easy to navigate.',
    typicalProblemsSolved: 'The business has strong ideas but an inconsistent visual identity, unclear messaging, or a confusing customer journey.',
    deliverables: ['Sitemap and user journeys', 'Wireframes and visual direction', 'High-fidelity screen designs', 'A reusable design system'],
    technologies: ['Figma', 'Design systems', 'Prototyping', 'Responsive design', 'Accessibility'],
    accentColor: '#ec4899'
  },
  {
    id: 'website-refreshes',
    name: 'Website Refreshes',
    category: 'Websites',
    shortExplanation: 'A focused redesign for a site that has good foundations but no longer represents the business well.',
    typicalProblemsSolved: 'Your website has useful content, but its structure, visual language, and mobile experience need a considered update.',
    deliverables: ['Content and page audit', 'Updated navigation and layout', 'Modern visual treatment', 'Staged redesign or full rebuild'],
    technologies: ['React', 'Figma', 'Content strategy', 'SEO basics', 'Analytics'],
    accentColor: '#10b981'
  },
  {
    id: 'launch-support',
    name: 'Launch & Ongoing Support',
    category: 'Growth & Support',
    shortExplanation: 'Practical help after launch, from content updates to improvements that keep the site useful.',
    typicalProblemsSolved: 'The site is live but needs a reliable partner for updates, new pages, fixes, and thoughtful next steps.',
    deliverables: ['Launch checks and handover', 'Content and design updates', 'Performance and accessibility checks', 'A prioritised improvement backlog'],
    technologies: ['Analytics', 'Content updates', 'Accessibility', 'Performance', 'Documentation'],
    accentColor: '#14b8a6'
  },
  {
    id: 'digital-direction',
    name: 'Digital Direction',
    category: 'Design',
    shortExplanation: 'A practical plan for improving your digital presence when you know something needs to change but not where to begin.',
    typicalProblemsSolved: 'There are too many ideas, competing priorities, or unclear feedback about what the next investment should be.',
    deliverables: ['Current-state review', 'Opportunity and priority map', 'Recommended next steps', 'A realistic phased plan'],
    technologies: ['Workshops', 'Content audits', 'Customer journeys', 'Prototyping', 'Roadmapping'],
    accentColor: '#6366f1'
  },
  {
    id: 'content-seo',
    name: 'Content & SEO Foundations',
    category: 'Growth & Support',
    shortExplanation: 'A clearer content structure so people can find, understand, and trust your business online.',
    typicalProblemsSolved: 'Your website has pages, but the words, structure, and search basics are not helping the right visitors find their way through it.',
    deliverables: ['Page and content recommendations', 'Search-friendly page structure', 'Metadata and sharing setup', 'Editorial guidance for your team'],
    technologies: ['Content strategy', 'SEO basics', 'Analytics', 'Semantic HTML', 'CMS'],
    accentColor: '#f59e0b'
  }
];
