import { ProviderAdapter, RenderJob, RenderStatus } from '../core/models';

function parseKlingStatus(payload: any): RenderStatus {
  if (payload?.state === 'queued') return { state: 'queued' };
  if (payload?.state === 'active') return { state: 'rendering', progress: payload?.progress ?? 0 };
  if (payload?.state === 'succeeded') return { state: 'complete', downloadUrl: payload?.asset_url ?? '' };
  return { state: 'failed', reason: payload?.error ?? 'Unknown Kling state' };
}

export const klingAdapter: ProviderAdapter = {
  name: 'kling',
  toRequest(job: RenderJob) {
    return {
      payload: {
        id: job.id,
        prompt: job.promptOverride ?? job.prompt,
        style: job.preset ?? 'research-beta',
      },
      headers: { 'x-provider': 'kling' },
    };
  },
  parseStatus: parseKlingStatus,
};
