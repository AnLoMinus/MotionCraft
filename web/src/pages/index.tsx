import React from 'react';
import { StatusCard } from '../components/StatusCard';
import '../styles/base.css';

const cards = [
  {
    title: 'Provider Matrix',
    description: 'Compare Pika, Runway, Luma, and Kling capabilities at a glance.',
    badge: 'Docs',
  },
  {
    title: 'Prompt Templates',
    description: 'Standardize cinematic trailers, product spots, and music visualizers.',
    badge: 'Guides',
  },
  {
    title: 'Orchestration Engine',
    description: 'In-memory coordinator for projects, shots, and render jobs.',
    badge: 'Core',
  },
];

export default function Home() {
  return (
    <div className="app">
      <header>
        <p>Motion + Craft</p>
        <h1>MotionCraft Control Deck</h1>
        <p>
          Manage multi-provider AI video workflows from a single place. Swap providers, retry renders, and keep prompts
          in sync.
        </p>
      </header>

      <section>
        <h2>Highlights</h2>
        <div className="grid">
          {cards.map((card) => (
            <StatusCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          <li>Connect provider SDKs and wire adapters to live APIs.</li>
          <li>Add authentication and rate limiting to the server API.</li>
          <li>Deploy GitHub Pages using the `docs/` directory as the static site source.</li>
        </ul>
      </section>
    </div>
  );
}
