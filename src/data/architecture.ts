/**
 * AmitraX Architecture & Engineering Methodology Configuration
 * Defines our 6-stage lifecycle, engineering + design convergence, and technology stack.
 */

export interface LifecycleStage {
  step: string;
  title: string;
  subtitle: string;
  focus: string;
  methodology: string[];
  deliverable: string;
  outcome: string;
  accentColor: string;
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: '01',
    title: 'Understand',
    subtitle: 'Define the problem and users',
    focus: 'Problem Discovery & Constraint Mapping',
    methodology: [
      'Deconstruct root-cause inefficiencies vs. superficial symptoms',
      'Map primary user workflows and cognitive friction points',
      'Establish strict latency, security, and compliance boundaries',
      'Define clear, empirical metrics for project success'
    ],
    deliverable: 'Problem Specification & Constraint Matrix',
    outcome: 'Unambiguous scope without speculation',
    accentColor: '#f43f5e'
  },
  {
    step: '02',
    title: 'Explore',
    subtitle: 'Research possible technical and product approaches',
    focus: 'Feasibility & Architectural Prototyping',
    methodology: [
      'Compare trade-offs between architectural paradigms',
      'Build rapid proof-of-concept spikes for high-risk assumptions',
      'Benchmark data access patterns and network payloads',
      'Select pragmatic, maintainable technologies that avoid early obsolescence'
    ],
    deliverable: 'Architecture RFC & Benchmarked Proof-of-Concept',
    outcome: 'De-risked technical direction',
    accentColor: '#f59e0b'
  },
  {
    step: '03',
    title: 'Design',
    subtitle: 'Turn the solution into a clear product experience',
    focus: 'Ergonomic System & Interface Modeling',
    methodology: [
      'Model state transitions and data schemas with rigorous type contracts',
      'Construct high-fidelity interactive wireframes and component tokens',
      'Audit visual contrast, keyboard navigation, and touch ergonomics',
      'Eliminate visual noise to prioritize task completion'
    ],
    deliverable: 'Complete Design System & State Blueprint',
    outcome: 'Validated, frictionless user journey',
    accentColor: '#38bdf8'
  },
  {
    step: '04',
    title: 'Build',
    subtitle: 'Engineer the product and underlying systems',
    focus: 'Production Software Construction',
    methodology: [
      'Implement strict end-to-end type safety from database to UI',
      'Construct modular, testable components with zero bloat',
      'Integrate observability, telemetry, and structured logging',
      'Continuous automated integration and build verification'
    ],
    deliverable: 'Hardened Production Application Codebase',
    outcome: 'Resilient, maintainable software asset',
    accentColor: '#3b82f6'
  },
  {
    step: '05',
    title: 'Validate',
    subtitle: 'Test, measure, and learn from real usage',
    focus: 'Empirical Verification & User Testing',
    methodology: [
      'Subject services to synthetic load and edge-case chaos tests',
      'Verify WCAG AA accessibility across screen readers and devices',
      'Measure real-world Core Web Vitals, p99 latencies, and CPU footprint',
      'Gather qualitative feedback from real early users'
    ],
    deliverable: 'Verification Matrix & Performance Scorecard',
    outcome: 'Proven stability under production stress',
    accentColor: '#a855f7'
  },
  {
    step: '06',
    title: 'Improve',
    subtitle: 'Iterate, optimize, and scale',
    focus: 'Continuous Telemetry & Value Compounding',
    methodology: [
      'Monitor error budgets, query execution profiles, and user drop-offs',
      'Refactor emerging bottlenecks as adoption expands',
      'Deploy continuous optimizations with zero downtime',
      'Incorporate user insights into next-generation roadmap milestones'
    ],
    deliverable: 'Optimization Plan & Scaling Roadmap',
    outcome: 'Compounding software utility over time',
    accentColor: '#10b981'
  }
];

export const CONVERGENCE_SYSTEMS = {
  engineering: {
    title: 'Engineering Discipline',
    subtitle: 'Architectural rigor & foundational resilience',
    attributes: [
      { name: 'Architecture', desc: 'Modular, decoupled system topologies' },
      { name: 'Scalability', desc: 'Predictable performance as throughput scales' },
      { name: 'Reliability', desc: 'Fault tolerance with graceful degradation' },
      { name: 'Performance', desc: 'Sub-second response curves & zero jank' },
      { name: 'Security', desc: 'Zero-trust auth, RBAC, and sanitized inputs' },
      { name: 'Maintainability', desc: 'Clean abstractions that future engineers appreciate' }
    ]
  },
  design: {
    title: 'Thoughtful Design',
    subtitle: 'Cognitive clarity & human ergonomics',
    attributes: [
      { name: 'Usability', desc: 'Self-evident workflows requiring zero training' },
      { name: 'Accessibility', desc: 'WCAG AA compliance baked into every component' },
      { name: 'Clarity', desc: 'Zero visual bloat; only essential information' },
      { name: 'Interaction', desc: 'Tactile, predictable, sub-16ms responsive feedback' },
      { name: 'Experience', desc: 'Consistent, delightful flow across user journeys' },
      { name: 'Visual Hierarchy', desc: 'Mathematical typographic scales and optical balance' }
    ]
  },
  synthesis: {
    headline: 'Useful products happen when engineering and design work together.',
    description:
      'Code without design produces unintuitive tools people struggle to use. Design without engineering produces fragile prototypes that collapse under load. At AmitraX, both disciplines operate as a single, indivisible craft.'
  }
};

export const EMERGING_TECHNOLOGY = {
  headline: 'Emerging Technology, Explored with Discipline',
  subheadline:
    'We do not adopt every new tool simply because it is trending. We follow a strict exploratory cycle: Explore → Experiment → Validate → Apply.',
  cycle: [
    { step: '01', name: 'Explore', desc: 'Track technical breakthroughs across academic and open-source ecosystems.' },
    { step: '02', name: 'Experiment', desc: 'Construct targeted benchmark spikes in our internal lab testbeds.' },
    { step: '03', name: 'Validate', desc: 'Stress-test reliability, latency cost, and security boundaries.' },
    { step: '04', name: 'Apply', desc: 'Integrate into production systems only where it delivers undeniable real-world utility.' }
  ],
  domains: [
    {
      title: 'Artificial Intelligence & ML',
      description: 'Context-grounded reasoning, retrieval pipelines, and domain-adapted inference models.',
      status: 'Active Lab Focus',
      accentColor: '#a855f7'
    },
    {
      title: 'Generative AI & LLM Systems',
      description: 'Strict schema-enforced generation, structured tool calling, and multimodal understanding.',
      status: 'Production Integrated',
      accentColor: '#38bdf8'
    },
    {
      title: 'Advanced Automation',
      description: 'Distributed event-driven orchestrators, self-healing background workers, and webhook meshes.',
      status: 'Production Integrated',
      accentColor: '#10b981'
    },
    {
      title: 'Data-Driven Systems',
      description: 'Real-time vector indexing, event logging, and distributed caching topologies.',
      status: 'Active Lab Focus',
      accentColor: '#3b82f6'
    },
    {
      title: 'Advanced Web & 3D',
      description: 'Hardware-accelerated WebGL environments, spatial interfaces, and WebAssembly computing.',
      status: 'Active Lab Focus',
      accentColor: '#f59e0b'
    },
    {
      title: 'Modern Cloud Infrastructure',
      description: 'Serverless containerization, edge runtimes, and zero-downtime distributed rollouts.',
      status: 'Production Integrated',
      accentColor: '#06b6d4'
    }
  ]
};

export const TECH_STACK_ECOSYSTEM = [
  {
    category: 'Frontend & Surfaces',
    technologies: [
      { name: 'TypeScript', role: 'End-to-end static type safety' },
      { name: 'React 19', role: 'Declarative component architecture' },
      { name: 'Next.js / Vite', role: 'Blazing fast bundle optimization' },
      { name: 'Tailwind CSS', role: 'Mathematical utility styling system' },
      { name: 'Motion', role: 'Physics-based layout transitions' },
      { name: 'Three.js & WebGL', role: 'GPU-accelerated spatial experiences' }
    ],
    accentColor: '#38bdf8'
  },
  {
    category: 'Backend & Services',
    technologies: [
      { name: 'Node.js & TS', role: 'Event-driven high-throughput services' },
      { name: 'Go', role: 'Low-latency, concurrent microservices' },
      { name: 'Express / Fastify', role: 'Deterministic REST APIs' },
      { name: 'gRPC & Protocol Buffers', role: 'High-speed inter-service communication' },
      { name: 'Python / FastAPI', role: 'Cognitive computing & machine learning pipelines' }
    ],
    accentColor: '#3b82f6'
  },
  {
    category: 'Intelligent Systems & AI',
    technologies: [
      { name: 'Gemini Multimodal SDK', role: 'Advanced multimodal reasoning & analysis' },
      { name: 'pgvector & Pinecone', role: 'High-dimensional semantic vector indexing' },
      { name: 'Zod & Pydantic', role: 'Strict schema enforcement & grammar validation' },
      { name: 'Retrieval Augmented Gen (RAG)', role: 'Grounded enterprise context pipelines' }
    ],
    accentColor: '#a855f7'
  },
  {
    category: 'Data & State',
    technologies: [
      { name: 'PostgreSQL', role: 'ACID-compliant relational persistence' },
      { name: 'Redis', role: 'Sub-millisecond in-memory caching & pub/sub' },
      { name: 'CRDTs & Local-First', role: 'Conflict-free offline synchronization' },
      { name: 'IndexedDB', role: 'Client-side durable local storage' }
    ],
    accentColor: '#10b981'
  },
  {
    category: 'Infrastructure & DevOps',
    technologies: [
      { name: 'Google Cloud Platform', role: 'Serverless container runtimes & global edge' },
      { name: 'Docker', role: 'Consistent, immutable deployment containers' },
      { name: 'Terraform', role: 'Reproducible Infrastructure as Code' },
      { name: 'OpenTelemetry', role: 'Unified distributed tracing & metrics' }
    ],
    accentColor: '#f59e0b'
  }
];
