import { ProviderAdapter, RenderJob, RenderStatus } from '../core/models';

function parsePikaStatus(payload: any): RenderStatus {
  const state = payload?.status;
  if (state === 'queued') return { state: 'queued', etaSeconds: payload?.eta }; 
  if (state === 'processing') return { state: 'rendering', progress: payload?.progress ?? 0 };
  if (state === 'finished') return { state: 'complete', downloadUrl: payload?.assetUrl ?? '' };
  return { state: 'failed', reason: payload?.error ?? 'Unknown Pika status' };
}

export const pikaAdapter: ProviderAdapter = {
  name: 'pika',
  toRequest(job: RenderJob) {
    return {
      payload: {
        jobId: job.id,
        text: job.promptOverride ?? job.prompt,
        durationSeconds: job.durationSeconds,
      },
      headers: { 'x-provider': 'pika' },
    };
  },
  parseStatus: parsePikaStatus,
};
