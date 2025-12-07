import { ProviderAdapter, RenderJob, RenderStatus } from '../core/models';

function parseLumaStatus(payload: any): RenderStatus {
  switch (payload?.state) {
    case 'pending':
      return { state: 'queued' };
    case 'running':
      return { state: 'rendering', progress: payload?.progress ?? 0 };
    case 'completed':
      return { state: 'complete', downloadUrl: payload?.asset ?? '' };
    default:
      return { state: 'failed', reason: payload?.error ?? 'Unknown Luma state' };
  }
}

export const lumaAdapter: ProviderAdapter = {
  name: 'luma',
  toRequest(job: RenderJob) {
    return {
      payload: {
        request_id: job.id,
        guidance: job.promptOverride ?? job.prompt,
        quality: job.preset ?? 'standard',
      },
      headers: { 'x-provider': 'luma' },
    };
  },
  parseStatus: parseLumaStatus,
};
