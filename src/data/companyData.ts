/**
 * AmitraX Company Data Hub
 * Central re-export hub aggregating modular data files for backward compatibility.
 */

export * from './company';
export * from './capabilities';
export * from './services';
export * from './values';
export * from './architecture';

export const ARCHITECTURE_LAYERS = [
  {
    id: 'ui-layer',
    level: 1,
    name: 'User Interface Layer',
    subtitle: 'Human-Centric Digital Surfaces',
    description: 'Engineered for instant visual clarity, sub-frame tactile feedback, and accessible multi-device fluidity. Built with modern declarative component architectures.',
    components: ['React 19 & Next.js Core', 'Fluid Responsive Layouts', 'Hardware-Accelerated Motion', 'WCAG 2.1 AA Conformance'],
    guarantees: ['< 16ms frame render targets', 'Zero layout thrashing', 'Full screen-reader accessibility'],
    latencySpec: '< 16ms'
  },
  {
    id: 'app-layer',
    level: 2,
    name: 'Application & State Layer',
    subtitle: 'Deterministic Business Logic',
    description: 'Coordinates application state, user intent, data caching, and bi-directional synchronizations with rigorous type contracts.',
    components: ['Optimistic State Managers', 'Strict Type Invariants', 'Local-First Persistence', 'Edge Route Handlers'],
    guarantees: ['Zero runtime type errors', 'Instant local updates', 'Graceful offline recovery'],
    latencySpec: '< 5ms'
  },
  {
    id: 'intelligence-layer',
    level: 3,
    name: 'Intelligent Systems Layer',
    subtitle: 'Cognitive Computing & Multimodal AI',
    description: 'Empowers software with contextual awareness, vector retrieval, and structured neural reasoning grounded against real enterprise truth.',
    components: ['Multimodal Gemini Models', 'Vector Search & Embeddings', 'Structured Schema Enforcers', 'Autonomous Guardrails'],
    guarantees: ['Hallucination checks', 'Grounded source attribution', 'Strict privacy token stripping'],
    latencySpec: '150 - 400ms'
  },
  {
    id: 'data-layer',
    level: 4,
    name: 'Data & Event Streaming',
    subtitle: 'Durable Distributed Storage',
    description: 'Ensures transactional integrity, distributed event log propagation, and low-latency structured queries under heavy read/write volumes.',
    components: ['PostgreSQL Relational Storage', 'Redis InMemory Caching', 'Event Broker Streaming', 'Automated Point-in-Time Backups'],
    guarantees: ['ACID compliance', 'Strong consistency guarantees', 'Zero data loss durability'],
    latencySpec: '< 12ms'
  },
  {
    id: 'infra-layer',
    level: 5,
    name: 'Infrastructure & Cloud Tier',
    subtitle: 'Resilient Scalable Foundation',
    description: 'Containerized, zero-downtime cloud runtimes provisioned across global edge nodes with automatic failover and proactive observability.',
    components: ['Serverless Cloud Run Instances', 'Global Anycast Edge CDN', 'DDoS Mitigation Shield', 'OpenTelemetry Tracing'],
    guarantees: ['99.95% availability SLA', 'Sub-second auto-scaling', 'Immutable deployment builds'],
    latencySpec: '< 25ms Global'
  }
];