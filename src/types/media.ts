export type MediaType = 'image' | 'video' | 'sequence' | '3d';

export type ScreenshotPresentationStyle = 'floating' | 'device' | 'fullscreen' | 'layered';

export type HeroMediaMode = '3d' | 'video' | 'static';

export interface MediaAsset {
  id: string;
  type: MediaType;
  src: string;
  poster?: string;
  alt?: string;
  caption?: string;
  isConceptual?: boolean;
  badgeText?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9' | '1/1' | '9/16';
  width?: number;
  height?: number;
}

export interface ImageSequenceFrame {
  id: string;
  frameIndex: number;
  title: string;
  phaseLabel: string;
  description: string;
  techSpec: string;
  colorAccent: string;
}

export interface ServiceVisualSpec {
  id: string;
  title: string;
  accentColor: string;
  glowColor: string;
  badgeLabel: string;
  visualType: 'geometry' | 'neural' | 'flow' | 'layers' | 'distributed';
  description: string;
}
