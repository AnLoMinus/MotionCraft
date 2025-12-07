import { ProviderAdapter, ProviderName, Project, RenderJob, Shot } from './models';

export class MotionCraftEngine {
  private projects: Map<string, Project> = new Map();
  private adapters: Map<ProviderName, ProviderAdapter> = new Map();

  registerAdapter(adapter: ProviderAdapter) {
    this.adapters.set(adapter.name, adapter);
  }

  upsertProject(project: Project) {
    this.projects.set(project.id, project);
  }

  listProjects(): Project[] {
    return Array.from(this.projects.values());
  }

  createRenderJob(shot: Shot, provider: ProviderName, promptOverride?: string): RenderJob {
    const now = new Date();
    const job: RenderJob = {
      id: `${shot.id}-${provider}-${now.getTime()}`,
      shotId: shot.id,
      provider,
      prompt: shot.prompt,
      durationSeconds: shot.durationSeconds,
      status: { state: 'queued' },
      promptOverride,
      createdAt: now,
      updatedAt: now,
    };

    const adapter = this.adapters.get(provider);
    if (!adapter) {
      throw new Error(`Provider adapter not registered: ${provider}`);
    }

    const request = adapter.toRequest(job);
    return { ...job, providerJobId: (request.payload['jobId'] as string) ?? undefined };
  }

  updateStatus(job: RenderJob, statusPayload: unknown): RenderJob {
    const adapter = this.adapters.get(job.provider);
    if (!adapter) {
      throw new Error(`Provider adapter not registered: ${job.provider}`);
    }

    const status = adapter.parseStatus(statusPayload);
    return { ...job, status, updatedAt: new Date() };
  }
}
