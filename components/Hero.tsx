import ChatPanel from './ChatPanel';
import { siteConfig, channelBadges } from '@/content/site';

// Позиции каналов на орбите вокруг чата (только для широких экранов)
const orbitPositions = [
  'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2',
  'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
  'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2',
  'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-36">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="beam" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="eyebrow">AI ДЛЯ СОВРЕМЕННОГО БИЗНЕСА</span>

        <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
          <span className="font-display">{siteConfig.name}</span> — ваш интеллектуальный AI-менеджер для бизнеса
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          Автоматизируйте общение с клиентами, консультации и онлайн-запись. Ваш AI-менеджер работает 24/7, чтобы
          ваш бизнес не терял клиентов.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#demo" className="btn-primary focus-ring">Попробовать AI</a>
          <a href="#features" className="btn-ghost focus-ring">Узнать возможности</a>
        </div>

        {/* Орбита каналов вокруг чата: на широком экране */}
        <div className="relative mx-auto mt-16 hidden max-w-2xl sm:block">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[112%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />

          <div className="relative mx-auto max-w-xl">
            <ChatPanel />
          </div>

          {channelBadges.map((c, i) => (
            <span
              key={c.name}
              className={`absolute ${orbitPositions[i]} rounded-full border border-white/20 bg-ink px-4 py-2 text-xs text-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.08)]`}
            >
              {c.name}
            </span>
          ))}
        </div>

        {/* Мобильная версия: каналы строкой под чатом */}
        <div className="mx-auto mt-12 max-w-xl sm:hidden">
          <ChatPanel />
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {channelBadges.map((c) => (
              <li key={c.name} className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-neutral-200">
                {c.name}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-xs text-neutral-500">Демонстрационный пример: ответы заранее подготовлены</p>
      </div>
    </section>
  );
}
