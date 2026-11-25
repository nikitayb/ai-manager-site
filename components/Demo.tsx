import SectionArtwork from "./SectionArtwork";
import Reveal from './Reveal';
import ScenarioDemo from './ScenarioDemo';

export default function Demo() {
  return (
    <section id="demo" aria-labelledby="demo-title" className="section-theme px-6 py-24">
      <SectionArtwork kind="demo" />
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
          <ScenarioDemo />
        </Reveal>
      </div>
    </section>
  );
}
