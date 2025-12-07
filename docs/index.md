# MotionCraft

Welcome to the MotionCraft hub. This page is ready for GitHub Pages, giving a simple landing page for the orchestration engine.

## What is MotionCraft?
MotionCraft coordinates AI video providers (Pika, Runway, Luma, Kling) from one control plane. Define projects, create shots, and send render jobs without being locked into a single model.

## Quick Start
1. Clone the repository and explore the server/domain types in `server/src/core`.
2. Copy `.env.example` to `.env` and add provider credentials.
3. Review adapter scaffolds in `server/src/providers` to see how provider-specific payloads are assembled.
4. Open the UI shell in `web/src/pages/index.tsx` to customize the dashboard experience.

## Documentation
- [Overview](./OVERVIEW.md)
- [Provider Matrix](./PROVIDERS.md)
- [Prompt Templates](./PROMPT_TEMPLATES.md)

## Next Steps
- Flesh out the API layer with HTTP endpoints and authentication.
- Wire provider adapters to real SDK calls.
- Deploy the docs site via GitHub Pages using this `docs/` folder as the source.
