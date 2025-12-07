import { MotionCraftEngine } from '../core/engine';
import { ProviderName, Shot } from '../core/models';

export interface CreateShotPayload {
  projectId: string;
  title: string;
  prompt: string;
  durationSeconds: number;
  providerHint?: ProviderName;
}

export interface RenderRequestPayload {
  shotId: string;
  provider: ProviderName;
  promptOverride?: string;
}

export function createShot(engine: MotionCraftEngine, payload: CreateShotPayload): Shot {
  const shot: Shot = {
    id: `${payload.projectId}-${Date.now()}`,
    projectId: payload.projectId,
    title: payload.title,
    prompt: payload.prompt,
    durationSeconds: payload.durationSeconds,
    providerHint: payload.providerHint,
  };

  const project = engine.listProjects().find((p) => p.id === payload.projectId);
  if (!project) {
    throw new Error(`Project not found: ${payload.projectId}`);
  }

  project.shots.push(shot);
  engine.upsertProject(project);
  return shot;
}

export function requestRender(engine: MotionCraftEngine, payload: RenderRequestPayload) {
  const project = engine.listProjects().find((p) => p.shots.some((s) => s.id === payload.shotId));
  if (!project) {
    throw new Error(`Shot not found: ${payload.shotId}`);
  }

  const shot = project.shots.find((s) => s.id === payload.shotId);
  if (!shot) {
    throw new Error(`Shot not found: ${payload.shotId}`);
  }

  return engine.createRenderJob(shot, payload.provider, payload.promptOverride);
}
