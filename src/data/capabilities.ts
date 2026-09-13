/**
 * AmitraX Capabilities Configuration
 * Defines what AmitraX builds across 6 core pillars, along with interactive node data.
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
    title: 'Digital Products',
    shortName: 'Products',
    tagline: 'Web and software products designed around real user needs',
    summary:
      'We conceive, design, and engineer modern digital products from zero to one. Every interaction is sculpted to eliminate friction and maximize intuitive workflow speed.',
    detailedScope: [
      'Full-lifecycle product strategy and user journey mapping',
      'End-to-end interactive prototypes and design system tokenization',
      'Production application development with modern reactive architectures',
      'Telemetry instrumentation and continuous user feedback loops'
    ],
    technologies: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
    accentColor: '#38bdf8',
    nodePosition: { x: 0, y: -160, angle: 0 },
    systemGuarantees: ['Sub-16ms tactile UI feedback', 'Zero-bloat bundle payloads', 'Strict WCAG AA accessibility']
  },
  {
    id: 'software-platforms',
    title: 'Software Platforms',
    shortName: 'Platforms',
    tagline: 'Scalable platforms for businesses, institutions, and digital ecosystems',
    summary:
      'We engineer durable multi-tenant backends, resilient application services, and unified data backbones built to handle high concurrency without operational degradation.',
    detailedScope: [
      'Distributed services and modular backend architectures',
      'Relational and document database schema modeling',
      'Role-based granular access control (RBAC) and security boundaries',
      'High-throughput asynchronous job workers and streaming queues'
    ],
    technologies: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'REST / gRPC'],
    accentColor: '#3b82f6',
    nodePosition: { x: 140, y: -80, angle: 60 },
    systemGuarantees: ['High-throughput concurrency', 'Strict schema validation', 'Sub-50ms query optimization']
  },
  {
    id: 'intelligent-systems',
    title: 'Intelligent Systems',
    shortName: 'AI & Systems',
    tagline: 'AI-powered applications, intelligent workflows, and data-driven systems',
    summary:
      'We integrate machine intelligence not as a marketing novelty, but as a grounded computational layer that extracts actionable insight and automates high-dimensional decisions.',
    detailedScope: [
      'Context-aware retrieval augmented generation (RAG) pipelines',
      'Strict schema validation and deterministic output enforcement',
      'Multimodal document understanding and structured entity extraction',
      'Autonomous agent verification loops and safety guardrails'
    ],
    technologies: ['Gemini Multimodal SDK', 'Vector Databases', 'Python', 'FastAPI', 'Embeddings'],
    accentColor: '#a855f7',
    nodePosition: { x: 140, y: 80, angle: 120 },
    systemGuarantees: ['Zero ungrounded hallucinations', 'Cryptographic safety filtering', 'Transparent decision telemetry']
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    shortName: 'Web Apps',
    tagline: 'Modern, responsive, performant applications for real-world use',
    summary:
      'We push the capabilities of modern browsers with high-performance client rendering, offline-first state persistence, and fluid spatial micro-interactions.',
    detailedScope: [
      'Single-page and multi-page hybrid web architectures',
      'Offline-capable local-first state caching and synchronization',
      'WebGL and hardware-accelerated 3D visual environments',
      'Progressive Web App (PWA) compliance and service worker caching'
    ],
    technologies: ['Three.js', 'WebGL', 'Motion', 'IndexedDB', 'Web Workers'],
    accentColor: '#10b981',
    nodePosition: { x: 0, y: 160, angle: 180 },
    systemGuarantees: ['60+ FPS fluid frame rates', 'Sub-second initial paint', 'Instant responsive layout shifts']
  },
  {
    id: 'automation',
    title: 'Automation & Workflows',
    shortName: 'Automation',
    tagline: 'Systems designed to reduce repetitive work and simplify complex processes',
    summary:
      'We construct intelligent automation pipelines that replace manual handoffs, connect disparate third-party services, and run self-healing operational loops.',
    detailedScope: [
      'Event-driven asynchronous job scheduling and orchestration',
      'Bi-directional synchronization between legacy tools and modern apps',
      'Automated data ingestion, sanitization, and alert routing',
      'Exception recovery and dead-letter queue resolution'
    ],
    technologies: ['Temporal', 'Event Streams', 'Webhooks', 'Async Queues', 'BullMQ'],
    accentColor: '#06b6d4',
    nodePosition: { x: -140, y: 80, angle: 240 },
    systemGuarantees: ['Zero silent job failures', 'Idempotent execution', 'Comprehensive audit trails']
  },
  {
    id: 'technology-products',
    title: 'Technology Products',
    shortName: 'Tech Products',
    tagline: 'Purpose-built solutions combining software, systems, and emerging tech',
    summary:
      'We combine software engineering with advanced systems research to prototype purpose-built digital tools that address emerging organizational barriers.',
    detailedScope: [
      'Exploratory prototypes tackling high-friction technical bottlenecks',
      'Cross-cutting distributed synchronization protocols',
      'Zero-overhead runtime telemetry and performance probes',
      'Specialized developer tools and internal software SDKs'
    ],
    technologies: ['WebAssembly', 'WebRTC DataChannels', 'CRDTs', 'Edge Runtimes'],
    accentColor: '#ec4899',
    nodePosition: { x: -140, y: -80, angle: 300 },
    systemGuarantees: ['Mathematical state convergence', 'Sub-millisecond local latency', 'Open standards compliance']
  }
];
