import SectionArtwork from "./SectionArtwork";
import ChatPanel from './ChatPanel';
import { siteConfig } from '@/content/site';

export default function Hero() {
  return (
    <section id="top" className="section-theme relative overflow-hidden px-6 pb-24 pt-36">
      <SectionArtwork kind="chat" />
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="beam" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="eyebrow">AI ДЛЯ СОВРЕМЕННОГО БИЗНЕСА</span>

        <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
          {siteConfig.name} — AI-менеджер для бизнеса
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          Автоматизируйте общение с клиентами, консультации и онлайн-запись. Ваш AI-менеджер работает 24/7, чтобы
          ваш бизнес не терял клиентов.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#demo" className="btn-primary focus-ring">Посмотреть сценарии</a>
          <a href="#features" className="btn-ghost focus-ring">Узнать возможности</a>
        </div>

        <div className="hero-dialogue">
          <figure className="hero-robot" aria-hidden="true">
            <div className="hero-robot-orbit" />
            <img src="/artwork/assistant-robot.webp" width={760} height={760} alt="" decoding="async" />
          </figure>
          <div className="hero-dialogue-chat">
            <ChatPanel />
            <p className="mt-3 text-xs text-neutral-400">Пример диалога с клиентом</p>
          </div>
        </div>
      </div>
    </section>
  );
}
