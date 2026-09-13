export interface BuildCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  technologies: string[];
  capabilities: string[];
  accentColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Engineering' | 'Intelligence' | 'Platforms' | 'Strategy';
  whatWeDo: string;
  whyItMatters: string;
  deliverables: string[];
  technologies: string[];
}

export type ProductLifecycleStage = 'Idea' | 'Experiment' | 'Alpha Product';

export interface ProductItem {
  id: string;
  name: string;
  codeName: string;
  stage: ProductLifecycleStage;
  category: string;
  tagline: string;
  description: string;
  problemSolved: string;
  architectureNotes: string;
  technologies: string[];
  readiness: number; // 0 to 100%
  statusBadge: string;
  keyFeatures: string[];
}

export interface ArchitectureLayer {
  id: string;
  level: number;
  name: string;
  subtitle: string;
  description: string;
  components: string[];
  guarantees: string[];
  latencySpec: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  actionItems: string[];
  outcome: string;
  deliverable: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  organization?: string;
  projectType: string;
  problemStatement: string;
  timeline: string;
}
