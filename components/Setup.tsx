import Reveal from './Reveal';
import { setupFields } from '@/content/site';

// Настройка под компанию: панель с полями и базой знаний (демонстрационный пример)
export default function Setup() {
  return (
    <section aria-labelledby="setup-title" className="band px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Настройка</p>
          <h2 id="setup-title" className="mt-3 text-3xl font-medium leading-tight sm:text-5xl">
            AI, который говорит как ваша компания
          </h2>
          <p className="mt-5 max-w-md text-neutral-400">
            Название, тон общения, услуги и база знаний. Чем точнее настройка, тем точнее ответы клиентам.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="window rounded-2xl p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Настройки менеджера</p>
            <dl className="mt-5 divide-y divide-white/10">
              {setupFields.map((f) => (
                <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-[140px_1fr] sm:gap-4">
                  <dt className="text-xs text-neutral-500">{f.label}</dt>
                  <dd className="text-sm text-neutral-200">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm">
              <span className="text-neutral-300">Передавать сложные вопросы сотруднику</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">включено</span>
            </div>
            <p className="mt-4 text-xs text-neutral-600">Демонстрационный пример</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
