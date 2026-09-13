/**
 * AmitraX Services Configuration
 * Honest, capability-focused engineering services without pricing packages or artificial tiers.
 */

export interface ServiceDetail {
  id: string;
  name: string;
  category: 'Engineering' | 'Intelligence' | 'Platforms' | 'Design & Strategy';
  shortExplanation: string;
  typicalProblemsSolved: string;
  deliverables: string[];
  technologies: string[];
  accentColor: string;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: 'product-development',
    name: 'Product Development',
    category: 'Engineering',
    shortExplanation: 'Turning an initial idea into a working, maintainable, and scalable digital product.',
    typicalProblemsSolved:
      'Founders and teams have a compelling concept or operational need but lack the integrated product-engineering expertise to take it from zero to a reliable, deployed reality without cutting corners.',
    deliverables: [
      'Production-ready full-stack application',
      'End-to-end component design system',
      'Automated testing & CI/CD deployment pipeline',
      'Comprehensive architectural documentation'
    ],
    technologies: ['React 19', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    accentColor: '#38bdf8'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    category: 'Engineering',
    shortExplanation: 'Modern web applications and digital experiences engineered for real-world speed and responsiveness.',
    typicalProblemsSolved:
      'Existing websites are slow, difficult to update, fragmented across screen sizes, or fail to communicate value cleanly to modern users.',
    deliverables: [
      'Responsive, accessible multi-page web platform',
      'Instant page transitions and fluid animations',
      'Optimized Core Web Vitals (sub-second load)',
      'Search engine and social sharing metadata foundation'
    ],
    technologies: ['TypeScript', 'Vite', 'Motion', 'Tailwind CSS', 'HTML5 Semantic Web'],
    accentColor: '#06b6d4'
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    category: 'Engineering',
    shortExplanation: 'Custom software systems built around specific business or institutional requirements.',
    typicalProblemsSolved:
      'Off-the-shelf software forces teams into awkward workarounds, lacks custom business rule validation, or struggles to integrate with existing legacy databases.',
    deliverables: [
      'Custom business logic engines and services',
      'Deterministic state models and transaction flows',
      'Strict type safety from database to interface',
      'Thorough test suites for critical paths'
    ],
    technologies: ['TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'Docker'],
    accentColor: '#3b82f6'
  },
  {
    id: 'ai-intelligent-systems',
    name: 'AI & Intelligent Systems',
    category: 'Intelligence',
    shortExplanation: 'AI-powered applications, intelligent workflows, and structured data automation.',
    typicalProblemsSolved:
      'Generic AI wrappers hallucinate, leak private data, or output unstructured responses that break downstream code. We build deterministic safeguards, RAG pipelines, and verifiable decision logs.',
    deliverables: [
      'Retrieval-augmented generation (RAG) vector pipelines',
      'Strict schema enforcement and grammar constraints',
      'Multimodal ingestion and structured document extraction',
      'Security guardrails and privacy sanitization layers'
    ],
    technologies: ['Gemini Multimodal SDK', 'Vector Stores', 'Python', 'FastAPI', 'LangGraph'],
    accentColor: '#a855f7'
  },
  {
    id: 'ui-ux-product-design',
    name: 'UI/UX & Product Design',
    category: 'Design & Strategy',
    shortExplanation: 'Interfaces and experiences designed around usability, cognitive ergonomics, and real-world needs.',
    typicalProblemsSolved:
      'Dense technical tools overwhelm users with cluttered layouts, cryptic error states, and clunky navigation, driving up support costs and user frustration.',
    deliverables: [
      'Figma design systems with strict token hierarchy',
      'Interactive click-through prototypes',
      'High-contrast accessible theme palettes',
      'Ergonomic workflow wireframes and journey maps'
    ],
    technologies: ['Figma', 'Design Tokens', 'Motion', 'Radix Primitives', 'WCAG AA Guidelines'],
    accentColor: '#ec4899'
  },
  {
    id: 'backend-api-engineering',
    name: 'Backend & API Engineering',
    category: 'Platforms',
    shortExplanation: 'Reliable application backends, APIs, integrations, and supporting data systems.',
    typicalProblemsSolved:
      'Backend services crash under load spikes, expose inconsistent endpoint schemas, suffer from N+1 query bottlenecks, or lack observability during outages.',
    deliverables: [
      'High-throughput REST and gRPC API endpoints',
      'Optimized relational schemas and migration scripts',
      'Sub-50ms caching layers with Redis',
      'Interactive OpenAPI / Swagger documentation'
    ],
    technologies: ['Node.js', 'Express', 'Go', 'PostgreSQL', 'Redis', 'OpenAPI'],
    accentColor: '#10b981'
  },
  {
    id: 'automation-solutions',
    name: 'Workflow & Process Automation',
    category: 'Engineering',
    shortExplanation: 'Workflow automation and technology solutions designed to reduce manual repetitive processes.',
    typicalProblemsSolved:
      'Team members spend hours every week copying data across disconnected systems, manually re-entering records, and troubleshooting human typos.',
    deliverables: [
      'Event-driven background job consumers',
      'Bi-directional webhook integration buses',
      'Dead-letter queue retry mechanisms',
      'Executive operational status dashboards'
    ],
    technologies: ['Temporal.io', 'BullMQ', 'Serverless Queues', 'Webhooks', 'TypeScript'],
    accentColor: '#14b8a6'
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    category: 'Platforms',
    shortExplanation: 'Scalable deployment and infrastructure architecture engineered for resilience.',
    typicalProblemsSolved:
      'Unpredictable cloud bills, fragile deployment scripts, lack of rollback mechanisms, and zero monitoring when services degrade.',
    deliverables: [
      'Infrastructure as Code (Terraform / Manifests)',
      'Containerized deployment pipelines',
      'Distributed tracing and alerting monitors',
      'Disaster recovery and zero-downtime rollback runbooks'
    ],
    technologies: ['Google Cloud Run', 'Docker', 'Terraform', 'Prometheus', 'OpenTelemetry'],
    accentColor: '#6366f1'
  },
  {
    id: 'technology-consulting',
    name: 'Technology Consulting',
    category: 'Design & Strategy',
    shortExplanation: 'Technical exploration, architecture audits, feasibility analysis, and product direction.',
    typicalProblemsSolved:
      'Founders and technical leads face critical architectural decisions—such as build vs. buy, database selection, or framework migrations—and need objective, vendor-neutral engineering advice.',
    deliverables: [
      'Comprehensive architectural audit & debt assessment',
      'Pragmatic technical feasibility reports',
      'Vendor-neutral technology stack recommendations',
      'Actionable phased engineering roadmap'
    ],
    technologies: ['Architecture Blueprints', 'Threat Modeling', 'Cost Analysis', 'RFC Frameworks'],
    accentColor: '#f59e0b'
  }
];
