'use client';

import { useState } from 'react';
import { scenarios } from '@/content/site';

const quickScenarios = scenarios.slice(0, 3);

export default function ChatPanel() {
  const [activeId, setActiveId] = useState(quickScenarios[0].id);
  const active = quickScenarios.find((scenario) => scenario.id === activeId) ?? quickScenarios[0];

  return (
    <div className="glass rounded-2xl p-4 text-left shadow-[0_0_60px_rgba(255,255,255,0.08)]">
      <div className="flex min-h-32 flex-col gap-3 text-sm" aria-live="polite">
        {active.messages.slice(0, 2).map((message) => (
          <p
            key={message.from}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
              message.from === 'client' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'
            }`}
          >
            {message.text}
          </p>
        ))}
      </div>

      <div role="group" aria-label="Примеры вопросов" className="mt-4 flex flex-wrap gap-2">
        {quickScenarios.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            aria-pressed={scenario.id === activeId}
            onClick={() => setActiveId(scenario.id)}
            className="focus-ring rounded-full border border-white/15 px-3 py-1.5 text-xs text-neutral-300 transition hover:border-white/40 hover:text-white aria-pressed:border-white/35 aria-pressed:bg-white/10"
          >
            {scenario.title}
          </button>
        ))}
      </div>
    </div>
  );
}
