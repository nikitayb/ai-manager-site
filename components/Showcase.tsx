'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { showcaseDialog } from '@/content/site';

// Переписка печатается сама, по шагам. Тексты заранее подготовлены.
export default function Showcase() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (shown >= showcaseDialog.length) {
      // Пауза и новый цикл
      const reset = window.setTimeout(() => setShown(0), 3500);
      return () => window.clearTimeout(reset);
    }
    const next = showcaseDialog[shown];
    setTyping(next.from === 'ai');
    const t = window.setTimeout(() => {
      setTyping(false);
      setShown((s) => s + 1);
    }, next.from === 'ai' ? 1100 : 800);
    return () => window.clearTimeout(t);
  }, [shown]);

  return (
    <section aria-labelledby="showcase-title" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">AI в действии</p>
          <h2 id="showcase-title" className="mt-3 text-3xl font-medium leading-tight sm:text-5xl">
            Диалог, который ведётся сам
          </h2>
          <p className="mt-5 max-w-md text-neutral-400">
            Клиент пишет в любое время, AI отвечает по вашим услугам, сверяет свободные окна и сразу оформляет запись.
          </p>
          <p className="mt-6 text-xs text-neutral-600">Демонстрационный пример: ответы заранее подготовлены</p>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="window rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-sm">
              <span className="font-display font-medium">Nimbus Pulse</span>
              <span className="text-xs text-neutral-500">Telegram</span>
            </div>

            <div className="mt-5 flex min-h-[280px] flex-col gap-3" aria-live="polite">
              {showcaseDialog.slice(0, shown).map((m, i) => (
                <div
                  key={`${i}-${shown}`}
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.from === 'client' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {typing && (
                <div className="flex items-center gap-1 self-start rounded-2xl bg-white/10 px-4 py-3" aria-label="AI печатает">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300" />
                </div>
              )}
            </div>
          </div>

          {/* Плавающие уведомления поверх окна */}
          <div className="float glass absolute -left-4 top-8 hidden max-w-[220px] rounded-xl px-4 py-3 text-xs text-neutral-200 sm:block">
            Новая запись: маникюр, завтра 16:30
          </div>
          <div className="float glass absolute -right-4 bottom-10 hidden max-w-[220px] rounded-xl px-4 py-3 text-xs text-neutral-200 sm:block" style={{ animationDelay: '-3s' }}>
            Напоминание придёт за час до визита
          </div>
        </Reveal>
      </div>
    </section>
  );
}
