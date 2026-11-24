'use client';

import { useState } from 'react';
import { scenarios } from '@/content/site';

export default function ScenarioDemo() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const scenario = scenarios.find((s) => s.id === activeId) ?? scenarios[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div role="group" aria-label="Выберите сценарий" className="flex flex-col gap-2">
        {scenarios.map((s) => {
          const selected = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              aria-pressed={selected}
              className={`focus-ring rounded-xl border px-4 py-3 text-left text-sm transition ${
                selected
                  ? 'border-white/40 bg-white/10 text-white'
                  : 'border-white/10 text-neutral-400 hover:border-white/25 hover:text-neutral-200'
              }`}
            >
              {s.title}
            </button>
          );
        })}
      </div>

      <div className="glass rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-sm">
          <span>AI Manager</span>
          <span className="text-xs text-neutral-500">Демонстрационный пример</span>
        </div>

        <div key={scenario.id} className="flex min-h-[260px] flex-col gap-3">
          {scenario.messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.from === 'client' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
