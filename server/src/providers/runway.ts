import { ProviderAdapter, RenderJob, RenderStatus } from '../core/models';

function parseRunwayStatus(payload: any): RenderStatus {
  const phase = payload?.phase;
  if (phase === 'queued') return { state: 'queued', etaSeconds: payload?.eta }; 
  if (phase === 'rendering') return { state: 'rendering', progress: payload?.progress ?? 0 };
  if (phase === 'done') return { state: 'complete', downloadUrl: payload?.url ?? '' };
  return { state: 'failed', reason: payload?.message ?? 'Unknown Runway phase' };
}

export const runwayAdapter: ProviderAdapter = {
  name: 'runway',
  toRequest(job: RenderJob) {
    return {
      payload: {
        jobId: job.id,
        prompt: job.promptOverride ?? job.prompt,
        aspectRatio: '16:9',
      },
      headers: { 'x-provider': 'runway' },
    };
  },
  parseStatus: parseRunwayStatus,
};
