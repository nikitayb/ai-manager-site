import ChatPanel from './ChatPanel';
import { siteConfig } from '@/content/site';

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

        <div className="mx-auto mt-14 max-w-xl">
          <ChatPanel />
          <p className="mt-3 text-xs text-neutral-500">Демонстрационный пример: ответы заранее подготовлены</p>
        </div>
      </div>
    </section>
  );
}
