# 🎬 MotionCraft – Unified AI Video Engine (v0.0.1)

> MotionCraft (MC) – Motion + Craft
> Unified orchestration layer for AI video generation: Projects, Shots and multi-provider rendering (Pika, Runway, Luma, Kling & more).

---

## 📅 Meta

- Generated: **Sunday, December 7, 2025**
- Hebrew Date: **י״ז בכסלו תשפ״ו (17 Kislev 5786)**
- Time (IL): **~05:39 Asia/Jerusalem**

---

## 🎯 Vision

MotionCraft is a central hub that manages the full pipeline of AI-generated video:

- Define **Projects** (albums, decks, campaigns)
- Create **Shots** (short clips with prompts & settings)
- Choose **Providers** (Kling / Pika / Runway / Luma / future models)
- Launch **RenderJobs**, track status, store results & versions

Instead of jumping between different platforms, MotionCraft talks to them all through one unified engine.

---

## 🧱 Repository Layout (v0.0.1 Seed)

```
MotionCraft/
├─ README.md
├─ docs/
│  ├─ index.md            # GitHub Pages landing page
│  ├─ OVERVIEW.md         # Architecture and roadmap
│  ├─ PROVIDERS.md        # Adapter matrix and how-to
│  └─ PROMPT_TEMPLATES.md # Ready-to-use prompt scaffolds
├─ server/
│  ├─ package.json
│  └─ src/
│     ├─ core/
│     │  ├─ models.ts     # Domain contracts for projects, shots, and render jobs
│     │  └─ engine.ts     # In-memory orchestration engine
│     ├─ providers/       # Provider adapters (Pika, Runway, Luma, Kling)
│     └─ api/routes.ts    # Payload shapes for future HTTP routes
├─ web/
│  ├─ package.json
│  └─ src/
│     ├─ components/      # UI building blocks
│     ├─ pages/           # Landing page UI shell
│     └─ styles/          # Base styling
└─ .env.example           # Provider credentials template
```

---

## 🚀 Quickstart

1. Duplicate `.env.example` to `.env` and paste provider API keys.
2. Explore `server/src/core` to see the engine and domain models.
3. Review provider adapters in `server/src/providers` to map payloads for Pika, Runway, Luma, and Kling.
4. Customize the UI shell in `web/src/pages/index.tsx` to match your workflow.
5. Enable GitHub Pages with the repository root as the site source so `index.html` loads at `https://<username>.github.io/MotionCraft/`.

---

## 🌐 GitHub Pages

The repository root now includes `index.html`, a ready-made landing page for GitHub Pages. Point your repository settings to serve from the **root** so the site loads under `https://<username>.github.io/MotionCraft/`.

---

## 📖 Additional Guides

- [Overview](docs/OVERVIEW.md)
- [Provider Matrix](docs/PROVIDERS.md)
- [Prompt Templates](docs/PROMPT_TEMPLATES.md)

---

## 🤝 Contributing

This is a seed repository. Feel free to expand adapters with real SDK calls, add persistence to the engine, and flesh out the UI with live data.
