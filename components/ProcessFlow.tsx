import Reveal from './Reveal';
import { processSteps } from '@/content/site';

// Схема обработки обращения: четыре этапа, соединённые светящейся линией
export default function ProcessFlow() {
  return (
    <section aria-labelledby="flow-title" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Как AI обрабатывает обращения</p>
          <h2 id="flow-title" className="mt-3 max-w-2xl text-3xl font-medium sm:text-5xl">
            От первого сообщения до записи
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div aria-hidden="true" className="line-flow absolute left-0 right-0 top-5 hidden h-px md:block" />
          <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            {processSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <li className="list-none">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-ink font-display text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 text-base font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
