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

## 🧱 Core Concepts

- **Project**  
  A logical collection of Shots.  
  Example: `TikkunOlam-Visuals`, `ExitTheMatrix-Trailers`, `HacKingDJ-Visuals`.

- **Shot**  
  A single clip (e.g. 3–10 seconds) with a prompt, style, and provider.  
  Example: `WF-02 Unity Charge`, `DH-01 First Signal`.

- **Provider**  
  The AI model that actually generates the video  
  (Pika, Runway, Luma, Kling, etc.).

- **RenderJob**  
  One concrete rendering attempt for a Shot (V1, V2, UltraFX, Minimal, etc.).

---

## 🗂️ Repository Layout (v0.0.1 Seed)

This initial version focuses on structure and clear separation of concerns.

```text
MotionCraft/
├─ README.md
├─ docs/
│  ├─ OVERVIEW.md
│  ├─ PROVIDERS.md
│  └─ PROMPT_TEMPLATES.md
├─ server/
│  ├─ src/
│  │  ├─ core/
│  │  │  ├─ models.ts
│  │  │  └─ engine.ts
│  │  ├─ providers/
│  │  │  ├─ pika.ts
│  │  │  ├─ runway.ts
│  │  │  ├─ luma.ts
│  │  │  └─ kling.ts
│  │  └─ api/
│  │     └─ routes.ts
│  └─ package.json
├─ web/
│  ├─ src/
│  │  ├─ pages/
│  │  ├─ components/
│  │  └─ styles/
│  └─ package.json
└─ .env.example
