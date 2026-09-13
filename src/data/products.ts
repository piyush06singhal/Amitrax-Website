import { Product, ProductCategory, ProductStatus } from '../types/products';

/**
 * AmitraX Product Ecosystem Registry
 * 
 * Scalable data model supporting:
 * - Empty state (0 products)
 * - Emerging Lab initiatives (in-development, prototype, concept)
 * - Scalable growth to dozens of production releases without code redesign
 */
export const AMITRAX_PRODUCTS: Product[] = [
  {
    id: 'axiom-protocol',
    slug: 'axiom-protocol',
    name: 'Axiom Protocol',
    codeName: 'AX-01',
    tagline: 'Zero-conflict distributed state fabric for real-time collaboration',
    shortDescription:
      'A lightweight distributed synchronization engine engineered for applications requiring local-first responsiveness with deterministic cloud convergence.',
    status: 'in-development',
    category: 'Data & Distributed',
    featured: true,
    colorAccent: '#38bdf8', // Cyan
    ecosystemTier: 'Core Tier 04 (Data & Streaming)',
    readinessPercentage: 78,
    statusNotes:
      'Core CRDT algorithm benchmarked and stable. Currently implementing WebRTC data channel mesh and multi-region relay failovers.',
    story: {
      problem:
        'Collaborative software applications frequently suffer from destructive merge conflicts, ballooning server synchronization costs, and degraded user experience whenever network latency spikes or packets drop.',
      insight:
        'Instead of treating network lag as an exception, local state mutations should be instantaneous and mathematically deterministic using conflict-free replicated data types, synchronizing state deltas in the background asynchronously.',
      solution:
        'Axiom combines a compact binary state delta format with hybrid WebSockets and WebRTC channels, enabling sub-5ms local edits and guaranteed multi-peer consensus without centralized database locks.',
      impact:
        'Eliminates lost user changes during intermittent connectivity while cutting server synchronization CPU load by up to 60% compared to traditional operational transformation servers.',
    },
    keyCapabilities: [
      {
        title: 'Optimistic Sub-5ms Local Mutation',
        description: 'Updates commit instantly to local IndexedDB/memory state before any network roundtrip occurs.',
        technicalDetail: 'Zero frame drops; UI thread remains 100% responsive under continuous user input.',
      },
      {
        title: 'State-Based CRDT Delta Resolution',
        description: 'State reconciliations happen mathematically at the mathematical layer, guaranteeing convergence across all peers.',
        technicalDetail: 'Vector clock ordering with cryptographic SHA-256 state delta chaining.',
      },
      {
        title: 'Adaptive Transport Fallback',
        description: 'Dynamically routes deltas over direct peer-to-peer WebRTC channels, falling back to WebSockets and idempotent HTTP batches.',
        technicalDetail: 'Gracefully switches protocols in under 200ms when network topology shifts.',
      },
      {
        title: 'Differential Snapshot Compaction',
        description: 'Automatically compacts historical delta trees into clean state snapshots to prevent memory bloat.',
        technicalDetail: 'Garbage collection runs concurrently in background web workers.',
      },
    ],
    technologies: [
      {
        name: 'TypeScript & Rust',
        role: 'Ultra-fast memory-safe delta serialization and cross-platform client SDK',
        category: 'Runtime',
      },
      {
        name: 'WebRTC DataChannels',
        role: 'Peer-to-peer low-latency delta transport bypassing server intermediaries',
        category: 'Protocol',
      },
      {
        name: 'IndexedDB & WASM',
        role: 'Local-first persistent client storage engine running in browser threads',
        category: 'Data',
      },
      {
        name: 'OpenTelemetry',
        role: 'Structured observability for packet roundtrip times and merge latency',
        category: 'Infrastructure',
      },
    ],
    milestones: [
      { phase: 'Mathematical Specification', date: 'Q1 2025', status: 'completed', note: 'Formal state convergence proofs verified' },
      { phase: 'Local-First Core Engine', date: 'Q2 2025', status: 'completed', note: 'IndexedDB layer and delta serialization tested' },
      { phase: 'WebRTC P2P Transport', date: 'Q3 2025', status: 'active', note: 'Signaling server and NAT traversal benchmark' },
      { phase: 'Developer Alpha Release', date: 'Q4 2025', status: 'upcoming', note: 'Select client pilot integrations' },
    ],
    relationships: [
      {
        slug: 'omnisurface',
        name: 'OmniSurface',
        relationshipType: 'shares-infrastructure',
        description: 'Powers OmniSurface’s multi-user canvas synchronization and node state persistence.',
      },
      {
        slug: 'novametrics',
        name: 'NovaMetrics',
        relationshipType: 'integrates-with',
        description: 'Monitors real-time peer convergence latency and bandwidth consumption.',
      },
    ],
    media: [
      {
        id: 'ax-architecture-diagram',
        type: 'render',
        title: 'Axiom P2P Mesh Topology',
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        caption: 'Distributed peer-to-peer delta propagation with fallback edge relays.',
      },
      {
        id: 'ax-benchmark-telemetry',
        type: 'image',
        title: 'Local Latency Benchmarks',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sub-5ms optimistic mutations verified against simulated 300ms network latency.',
      },
    ],
    websiteUrl: null,
    githubUrl: null,
    docsUrl: null,
    seo: {
      title: 'Axiom Protocol | AmitraX Product Lab',
      description: 'Zero-conflict distributed state fabric for real-time collaboration and local-first software.',
    },
  },
  {
    id: 'synapse-flow',
    slug: 'synapse-flow',
    name: 'Synapse Flow',
    codeName: 'SF-02',
    tagline: 'Self-validating orchestration engine for complex multi-agent workflows',
    shortDescription:
      'An execution framework that coordinates multi-step cognitive tasks, rigorously validating intermediary inferences against deterministic type contracts.',
    status: 'prototype',
    category: 'AI & Intelligence',
    featured: false,
    colorAccent: '#a855f7', // Purple
    ecosystemTier: 'Core Tier 03 (Intelligence Layer)',
    readinessPercentage: 55,
    statusNotes:
      'DAG scheduler and JSON schema contract verification running in lab benchmarks. Implementing visual telemetry trace replay.',
    story: {
      problem:
        'Multi-step AI pipelines break unpredictably in production because foundational models output unstructured text, drift into hallucinations, or fail mid-sequence with zero recovery hooks.',
      insight:
        'Treating AI model inferences as untyped strings is fundamentally flawed. Intermediary model outputs must be bound to immutable schema contracts and managed by deterministic state-machine graphs.',
      solution:
        'Synapse Flow provides a directed acyclic graph (DAG) scheduler that validates each step against strict schemas, performs automated retry backoffs with semantic repair, and logs complete execution traces.',
      impact:
        'Guarantees 100% downstream schema compliance for multi-agent workflows, eliminating silent pipeline crashes in complex enterprise intelligence tools.',
    },
    keyCapabilities: [
      {
        title: 'Deterministic Type Enforcers',
        description: 'Every inference is intercepted and validated against Zod and JSON Schema definitions before downstream handoff.',
        technicalDetail: 'Zero untyped payloads enter business logic layers.',
      },
      {
        title: 'Semantic Repair Retries',
        description: 'When validation fails, the engine feeds exact schema diffs back into the model for self-correction without restarting the graph.',
        technicalDetail: 'Reduces catastrophic workflow re-runs by up to 85%.',
      },
      {
        title: 'Dynamic DAG Routing',
        description: 'Routes independent reasoning steps in parallel, converging branches only when prerequisites succeed.',
        technicalDetail: 'Non-blocking async scheduling minimizes end-to-end task duration.',
      },
    ],
    technologies: [
      {
        name: 'Gemini 2.5 / 3.0 API',
        role: 'Multimodal foundation models for structured cognitive generation',
        category: 'Intelligence',
      },
      {
        name: 'TypeScript & Python',
        role: 'High-performance async DAG orchestrator and graph state transitions',
        category: 'Runtime',
      },
      {
        name: 'Zod & JSON Schema',
        role: 'Zero-tolerance runtime contract validators',
        category: 'Protocol',
      },
      {
        name: 'OpenTelemetry Spans',
        role: 'Fine-grained latency, token cost, and execution step tracing',
        category: 'Infrastructure',
      },
    ],
    milestones: [
      { phase: 'Core DAG Engine', date: 'Q1 2025', status: 'completed', note: 'Graph execution scheduler built' },
      { phase: 'Schema Repair Loop', date: 'Q2 2025', status: 'completed', note: 'Self-healing validation tested' },
      { phase: 'Visual Trace Inspector', date: 'Q3 2025', status: 'active', note: 'UI debugging console in progress' },
      { phase: 'Beta Sandbox Testbed', date: 'Q4 2025', status: 'upcoming', note: 'Developer preview' },
    ],
    relationships: [
      {
        slug: 'novametrics',
        name: 'NovaMetrics',
        relationshipType: 'integrates-with',
        description: 'Provides real-time token cost and inference latency telemetry.',
      },
    ],
    media: [
      {
        id: 'sf-dag-visualizer',
        type: 'render',
        title: 'Directed Acyclic Graph Orchestration',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        caption: 'Parallelized step execution with automatic type contract gates.',
      },
    ],
    websiteUrl: null,
    githubUrl: null,
    docsUrl: null,
    seo: {
      title: 'Synapse Flow | AmitraX Product Lab',
      description: 'Self-validating orchestration engine for reliable multi-agent workflows and cognitive computing.',
    },
  },
  {
    id: 'omnisurface',
    slug: 'omnisurface',
    name: 'OmniSurface',
    codeName: 'OS-03',
    tagline: 'Next-generation adaptive spatial canvas for high-density multidimensional data',
    shortDescription:
      'An infinite-canvas rendering engine built on WebGL and WebGPU that empowers operators to explore hundreds of thousands of relational nodes at native display refresh rates.',
    status: 'exploring',
    category: 'Interface & Spatial',
    featured: false,
    colorAccent: '#10b981', // Emerald
    ecosystemTier: 'Core Tier 01 (Interface Layer)',
    readinessPercentage: 42,
    statusNotes:
      'Instanced shader pipeline and spatial hash indexing running at 60 FPS in early prototypes. Refining touch and gesture controls.',
    story: {
      problem:
        'Standard DOM and SVG-based dashboards bottleneck and freeze when visualizing complex graphs, logistics topologies, or interconnected enterprise datasets exceeding a few hundred elements.',
      insight:
        'Interface rendering for complex systems must leverage hardware-accelerated GPU pipelines with instanced geometry and spatial partitioning, decoupling visual density from UI responsiveness.',
      solution:
        'OmniSurface utilizes an instanced WebGL rendering loop coupled with spatial hash grid partitioning, allowing fluid zooming, panning, and interaction across 100k+ elements with sub-16ms frames.',
      impact:
        'Enables technical operators and domain experts to perceive systemic relationships across massive datasets without visual lag or pagination barriers.',
    },
    keyCapabilities: [
      {
        title: 'Instanced GPU Geometry',
        description: 'Draws massive node clusters in single GPU render calls, maintaining 60+ FPS under intense interactions.',
        technicalDetail: 'Custom GLSL shaders handle animated highlights and edge connections.',
      },
      {
        title: 'Spatial Hash Grid Indexing',
        description: 'Instant mouse-picking and hit-detection across dense canvases in O(1) time complexity.',
        technicalDetail: 'Calculated in web workers to prevent main-thread stutter.',
      },
      {
        title: 'Semantic Zoom LOD System',
        description: 'Automatically transitions details from abstract clusters to granular telemetry cards as the camera zooms.',
        technicalDetail: 'Adaptive level-of-detail prevents visual and cognitive overload.',
      },
    ],
    technologies: [
      {
        name: 'Three.js & WebGL / WebGPU',
        role: 'Hardware-accelerated viewport rendering and custom instanced shaders',
        category: 'Interface',
      },
      {
        name: 'GLSL Custom Shaders',
        role: 'GPU-bound mathematical layouts and real-time visual signal pulses',
        category: 'Interface',
      },
      {
        name: 'Web Workers',
        role: 'Background spatial index calculations and graph layout computation',
        category: 'Runtime',
      },
    ],
    milestones: [
      { phase: 'GPU Instancing Pipeline', date: 'Q1 2025', status: 'completed', note: '100k node render benchmark verified' },
      { phase: 'Spatial Hash Indexing', date: 'Q2 2025', status: 'completed', note: 'O(1) hit testing verified' },
      { phase: 'Multi-Touch & Spatial Interaction', date: 'Q3 2025', status: 'active', note: 'Gesture controls under test' },
    ],
    relationships: [
      {
        slug: 'axiom-protocol',
        name: 'Axiom Protocol',
        relationshipType: 'shares-infrastructure',
        description: 'Relies on Axiom for low-latency multi-user canvas state synchronization.',
      },
    ],
    media: [
      {
        id: 'os-render-preview',
        type: 'render',
        title: 'Spatial Topology Viewport',
        url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
        caption: 'High-density relational node explorer running with spatial LOD.',
      },
    ],
    websiteUrl: null,
    githubUrl: null,
    docsUrl: null,
    seo: {
      title: 'OmniSurface | AmitraX Product Lab',
      description: 'Adaptive spatial canvas engine for complex multidimensional data exploration.',
    },
  },
  {
    id: 'novametrics',
    slug: 'novametrics',
    name: 'NovaMetrics',
    codeName: 'NM-04',
    tagline: 'Zero-overhead client-side telemetry probe for modern edge applications',
    shortDescription:
      'A compact telemetry beacon that captures perceptual performance markers and client exceptions without inflating application bundle size or stealing main-thread CPU cycles.',
    status: 'concept',
    category: 'Developer Tools',
    featured: false,
    colorAccent: '#6366f1', // Indigo
    ecosystemTier: 'Core Tier 05 (Infra & Telemetry)',
    readinessPercentage: 24,
    statusNotes:
      'Formalized binary transport specification and privacy hashing model. Initial bundle size benchmark: 3.2KB gzipped.',
    story: {
      problem:
        'Standard Application Performance Monitoring (APM) libraries often add 100KB+ to web client bundles, invoke heavy DOM observers that cause micro-stutters, and collect noisy telemetry that obscures true user friction.',
      insight:
        'Observability must be engineered with the same performance rigor as the application itself—prioritizing tiny binary beacons and non-blocking background workers.',
      solution:
        'NovaMetrics utilizes a compact binary protocol with browser `sendBeacon` APIs and web workers, reporting perceptual interaction latency (INP, LCP) without degrading frame rates.',
      impact:
        'Provides engineering teams with high-fidelity production telemetry while preserving lightning-fast load times and user privacy.',
    },
    keyCapabilities: [
      {
        title: 'Ultra-Compact Footprint',
        description: 'Weighs under 3.5KB gzipped with zero external dependencies.',
        technicalDetail: 'Minimal parse and evaluation overhead on mobile CPUs.',
      },
      {
        title: 'Non-Blocking Background Collection',
        description: 'Runs metric batching and Brotli compression in background web workers.',
        technicalDetail: 'Zero main-thread blocking during critical user interactions.',
      },
      {
        title: 'Differential Privacy by Default',
        description: 'Locally anonymizes user attributes using cryptographic salting before transmission.',
        technicalDetail: 'Fully compliant with strict global privacy mandates.',
      },
    ],
    technologies: [
      {
        name: 'TypeScript & WASM',
        role: 'Micro-footprint client beacon and fast binary compression',
        category: 'Runtime',
      },
      {
        name: 'Browser Beacon API',
        role: 'Reliable asynchronous transmission during page unload',
        category: 'Protocol',
      },
      {
        name: 'Web Workers',
        role: 'Asynchronous event batching isolated from main UI thread',
        category: 'Infrastructure',
      },
    ],
    milestones: [
      { phase: 'Protocol Specification', date: 'Q2 2025', status: 'completed', note: 'Binary serialization format finalized' },
      { phase: 'Worker Beacon Prototype', date: 'Q3 2025', status: 'active', note: 'Telemetry accuracy benchmarking' },
    ],
    relationships: [
      {
        slug: 'axiom-protocol',
        name: 'Axiom Protocol',
        relationshipType: 'companion-tool',
        description: 'Instruments distributed state convergence telemetry across peers.',
      },
    ],
    media: [
      {
        id: 'nm-architecture-card',
        type: 'render',
        title: 'Zero-Overhead Beacon Architecture',
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Isolated worker telemetry collection and non-blocking dispatch.',
      },
    ],
    websiteUrl: null,
    githubUrl: null,
    docsUrl: null,
    seo: {
      title: 'NovaMetrics | AmitraX Product Lab',
      description: 'Zero-overhead client-side telemetry probe for modern edge applications.',
    },
  },
];

/**
 * Helper Utilities for scalable product data queries
 */
export function getProductBySlug(slug: string): Product | undefined {
  return AMITRAX_PRODUCTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedProduct(): Product | undefined {
  return AMITRAX_PRODUCTS.find((p) => p.featured) || AMITRAX_PRODUCTS[0];
}

export function getAllProductCategories(): ProductCategory[] {
  const categories = new Set<ProductCategory>();
  AMITRAX_PRODUCTS.forEach((p) => categories.add(p.category));
  return Array.from(categories);
}

export function getAllProductStatuses(): ProductStatus[] {
  const statuses = new Set<ProductStatus>();
  AMITRAX_PRODUCTS.forEach((p) => statuses.add(p.status));
  return Array.from(statuses);
}

export function getFilteredProducts(options: {
  category?: string;
  status?: string;
  search?: string;
}): Product[] {
  return AMITRAX_PRODUCTS.filter((product) => {
    // Category match
    if (options.category && options.category !== 'All' && product.category !== options.category) {
      return false;
    }

    // Status match
    if (options.status && options.status !== 'All' && product.status !== options.status) {
      return false;
    }

    // Search query match (ready for future search interface)
    if (options.search && options.search.trim() !== '') {
      const q = options.search.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.shortDescription.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      const matchTech = product.technologies.some((t) => t.name.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchCat && !matchTech) {
        return false;
      }
    }

    return true;
  });
}
