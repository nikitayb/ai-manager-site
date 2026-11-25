import Reveal from './Reveal';
import ScenarioDemo from './ScenarioDemo';

export default function Demo() {
  return (
    <section id="demo" aria-labelledby="demo-title" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Демонстрация</p>
          <h2 id="demo-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Посмотрите, как AI-менеджер общается с клиентами
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Выберите сценарий. Это демонстрационный пример на заранее подготовленных ответах, а не работающий AI.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          {/* Окно мессенджера: шапка с точками и заголовком, тело со сценариями */}
          <div className="window overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="ml-3 text-xs text-neutral-500">Nimbus Pulse — демо-диалог</span>
            </div>
            <div className="p-4 sm:p-6">
              <ScenarioDemo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
