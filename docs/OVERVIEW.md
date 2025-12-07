# MotionCraft Overview

MotionCraft is a unified orchestration layer for AI-driven video generation. It coordinates prompts, provider selection, job tracking, and asset management from a single control plane. The goal is to let teams move quickly between providers (Pika, Runway, Luma, Kling, and future models) without rewriting workflows.

## Architecture at a Glance

- **Core domain** (server/src/core): data models and an in-memory engine for stitching shots, render jobs, and provider capabilities.
- **Provider adapters** (server/src/providers): thin wrappers that translate MotionCraft provider-neutral requests into provider-specific payloads.
- **API surface** (server/src/api): request/response shapes that a future HTTP layer can expose.
- **Web experience** (web/src): a lightweight UI shell for managing projects and monitoring render jobs.
- **Docs & Pages** (docs/): GitHub Pages-ready content that introduces the project and links to deeper guides.

## Data Flow

1. **Projects** own one or more **Shots**. Each shot describes a visual idea, duration, and base prompt.
2. **Shots** produce **RenderJobs**. Each render job locks the provider, model preset, prompt overrides, and output settings.
3. **Provider adapters** prepare payloads for the selected engine (Pika, Runway, Luma, or Kling) and would call their APIs in a full implementation.
4. **Engine** records progress and aggregates metadata, making it easy to switch providers or retry renders without duplicating business logic.

## Environment & Configuration

Create a `.env` file (see `.env.example`) to supply provider API keys and optional storage configuration. The server code reads configuration through the `ProviderCredentials` type so secrets stay isolated from business logic.

## Roadmap

- Persist engine state in a database (Postgres/SQLite) instead of memory.
- Add background workers to poll provider status and ingest finished assets.
- Expand the UI into a full dashboard with timelines, prompts, and preview playback.
- Add test coverage for adapters and the orchestration engine.
- Ship a hosted demo via GitHub Pages that mirrors the docs homepage.
