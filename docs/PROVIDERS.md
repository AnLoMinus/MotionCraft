# Provider Matrix

MotionCraft treats each rendering backend as a pluggable provider. Adapters expose common capabilities while letting each provider keep its own quirks.

## Current Providers

| Provider | Strengths | Notes |
| --- | --- | --- |
| Pika | Fast turnarounds, playful style presets | Great for social-friendly clips. |
| Runway | Production-ready diffusion, strong upscaling | Ideal for cinematic edits and composites. |
| Luma | Crisp motion and lighting consistency | Excels at realistic subjects and short scenes. |
| Kling | Experimental, cutting-edge research models | Perfect for prototyping or stylized looks. |

## Adapter Responsibilities

- Normalize prompts and durations into the provider's accepted ranges.
- Map MotionCraft's generic render settings into provider-specific payloads.
- Track provider identifiers (job IDs, asset URLs) for later retrieval.
- Surface a unified status model (`queued`, `rendering`, `complete`, `failed`).

## Adding a New Provider

1. Create a file in `server/src/providers/<provider>.ts` that exports a `ProviderAdapter` implementation.
2. Map credentials and payload fields in `toRequest`.
3. Translate provider webhooks or polling responses into MotionCraft `RenderStatus` objects.
4. Register the adapter inside `server/src/core/engine.ts` so the engine can route jobs to it.

Following this pattern keeps orchestration logic stable even as provider APIs evolve.
