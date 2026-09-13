/**
 * AmitraX Company Data Hub
 * Central re-export hub aggregating modular data files for backward compatibility.
 */

export * from './company';
export * from './capabilities';
export * from './services';
export * from './values';
export * from './architecture';

// Legacy alias exports to maintain zero breaks across components
import { CAPABILITIES } from './capabilities';
import { SERVICES } from './services';
import { LIFECYCLE_STAGES } from './architecture';

export const BUILD_CATEGORIES = CAPABILITIES.map((c) => ({
  id: c.id,
  title: c.title,
  tagline: c.tagline,
  description: c.summary,
  highlight: c.systemGuarantees[0] || '',
  technologies: c.technologies,
  capabilities: c.detailedScope,
  accentColor: c.accentColor
}));

export const SERVICES_LIST = SERVICES.map((s) => ({
  id: s.id,
  title: s.name,
  category: s.category === 'Design & Strategy' ? ('Strategy' as const) : s.category,
  whatWeDo: s.shortExplanation,
  whyItMatters: s.typicalProblemsSolved,
  deliverables: s.deliverables,
  technologies: s.technologies
}));

export const PROCESS_STAGES = LIFECYCLE_STAGES.map((s) => ({
  step: s.step,
  title: s.title,
  subtitle: s.subtitle,
  summary: s.focus,
  actionItems: s.methodology,
  outcome: s.outcome,
  deliverable: s.deliverable
}));

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

export const PRODUCT_LAB = [
  {
    id: 'axiom-protocol',
    name: 'Axiom Protocol',
    codeName: 'AP-01',
    stage: 'Alpha Product' as const,
    category: 'Distributed State & Data Synchronization',
    tagline: 'Zero-conflict distributed state fabric for real-time collaboration',
    description: 'A lightweight distributed state sync engine designed for applications requiring local-first speed with deterministic cloud convergence.',
    problemSolved: 'Collaborative tools suffer from complex merge conflicts, high latency, and heavy server sync overhead when networks degrade.',
    architectureNotes: 'Hybrid state-based CRDT layer over WebSockets and WebRTC with fallback to idempotent HTTP batch mutations.',
    technologies: ['TypeScript', 'Rust Core', 'WebRTC DataChannels', 'IndexedDB Local'],
    readiness: 78,
    statusBadge: 'Active Alpha Testbed',
    keyFeatures: [
      'Sub-5ms optimistic local updates',
      'Mathematical conflict-free state resolution',
      'Zero server CPU cost on unchanged documents',
      'Cryptographically signed state delta audit log'
    ]
  },
  {
    id: 'synapse-flow',
    name: 'Synapse Flow',
    codeName: 'SF-02',
    stage: 'Experiment' as const,
    category: 'Intelligent Orchestration Engine',
    tagline: 'Self-validating orchestration engine for complex LLM workflows',
    description: 'An execution framework that coordinates multi-step cognitive tasks, verifying every intermediary inference against strict JSON schema contracts.',
    problemSolved: 'Multi-step AI pipelines break unpredictably when upstream LLM calls output unexpected formats or loose reasoning.',
    architectureNotes: 'Directed acyclic graph (DAG) scheduler with automatic retry backoff, deterministic schema enforcement, and cost-aware token routing.',
    technologies: ['Gemini 2.5/3.0', 'Python AsyncIO', 'Zod / Pydantic', 'OpenTelemetry'],
    readiness: 55,
    statusBadge: 'Internal Lab Benchmark',
    keyFeatures: [
      'Formal grammar & schema constraint enforcement',
      'Parallel branch execution with early convergence',
      'Real-time token cost and latency telemetry',
      'Visual debugging trace replay'
    ]
  },
  {
    id: 'omni-surface',
    name: 'OmniSurface',
    codeName: 'OS-03',
    stage: 'Experiment' as const,
    category: 'Adaptive Spatial Interface Canvas',
    tagline: 'Next-generation adaptive spatial canvas for high-density data',
    description: 'An infinite-canvas rendering engine built on WebGL that enables users to manipulate thousands of interactive data nodes at 60+ FPS.',
    problemSolved: 'Standard DOM-based dashboards choke when displaying complex relational graphs and large multidimensional datasets.',
    architectureNotes: 'Instanced mesh rendering with GPU spatial hash indexing and hybrid HTML-overlay event delegation.',
    technologies: ['Three.js', 'GLSL Custom Shaders', 'Web Workers', 'Tailwind CSS'],
    readiness: 42,
    statusBadge: 'Experimental Prototype',
    keyFeatures: [
      'Handles 100,000+ interactive nodes in browser canvas',
      'Fluid physics-based camera easing & semantic zoom',
      'Bi-directional synchronization with relational databases',
      'Adaptive GPU power scaling on mobile devices'
    ]
  },
  {
    id: 'nova-metrics',
    name: 'NovaMetrics',
    codeName: 'NM-04',
    stage: 'Idea' as const,
    category: 'Zero-Overhead Runtime Telemetry',
    tagline: 'Sub-millisecond telemetry client for modern edge applications',
    description: 'An open lightweight telemetry probe that captures vital performance markers and client errors without inflating bundle size or user latency.',
    problemSolved: 'Modern APM SDKs often add 100KB+ to frontend bundles and introduce micro-stutters during heavy JavaScript execution.',
    architectureNotes: 'Compact ~3KB binary beacon utilizing sendBeacon API and worker-thread compression before transport.',
    technologies: ['WASM', 'Web Workers', 'Edge Key-Value', 'Brotli Stream'],
    readiness: 24,
    statusBadge: 'Concept & Specification',
    keyFeatures: [
      'Under 3.5KB gzip bundle footprint',
      'Zero main-thread CPU blocking during data collection',
      'Automatic memory leak & layout thrashing detection',
      'GDPR-compliant differential privacy hashing'
    ]
  }
];

export const PROBLEM_TRANSFORMATION = {
  headline: 'Start with the problem. Build the technology around it.',
  subheadline: 'Technology is never the goal. The goal is solving the friction that holds people and organizations back.',
  stages: [
    {
      step: '01',
      label: 'The Problem',
      title: 'Real-World Friction',
      description: 'Fragmented data, manual repetition, clunky legacy interfaces, and unscalable operational bottlenecks.',
      stateType: 'friction'
    },
    {
      step: '02',
      label: 'Understanding',
      title: 'First-Principles Analysis',
      description: 'Deconstructing the problem to its structural truth rather than throwing generic buzzwords at it.',
      stateType: 'analysis'
    },
    {
      step: '03',
      label: 'Engineering',
      title: 'Purpose-Built Architecture',
      description: 'Crafting resilient distributed systems, clean APIs, and elegant user interfaces tailored specifically for the task.',
      stateType: 'engineering'
    },
    {
      step: '04',
      label: 'The Product',
      title: 'Reliable Digital Solution',
      description: 'Deploying intuitive, high-speed, and fault-tolerant software that users genuinely enjoy operating.',
      stateType: 'product'
    },
    {
      step: '05',
      label: 'Impact',
      title: 'Measurable Human Value',
      description: 'Hours reclaimed, errors eliminated, cognitive clarity unlocked, and operations primed for long-term scale.',
      stateType: 'impact'
    }
  ]
};
