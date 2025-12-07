export type ProviderName = 'pika' | 'runway' | 'luma' | 'kling';

export interface ProviderCredentials {
  pikaApiKey?: string;
  runwayApiKey?: string;
  lumaApiKey?: string;
  klingApiKey?: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  shots: Shot[];
}

export interface Shot {
  id: string;
  projectId: string;
  title: string;
  prompt: string;
  durationSeconds: number;
  providerHint?: ProviderName;
}

export interface RenderJob {
  id: string;
  shotId: string;
  provider: ProviderName;
  prompt: string;
  durationSeconds: number;
  preset?: string;
  promptOverride?: string;
  status: RenderStatus;
  providerJobId?: string;
  assetUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type RenderStatus =
  | { state: 'queued'; etaSeconds?: number }
  | { state: 'rendering'; progress: number }
  | { state: 'complete'; downloadUrl: string }
  | { state: 'failed'; reason: string };

export interface ProviderAdapter {
  name: ProviderName;
  toRequest: (job: RenderJob) => ProviderRequest;
  parseStatus: (payload: unknown) => RenderStatus;
}

export interface ProviderRequest {
  payload: Record<string, unknown>;
  headers?: Record<string, string>;
}
