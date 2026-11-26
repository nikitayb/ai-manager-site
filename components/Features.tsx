import Reveal from './Reveal';
import { features } from '@/content/site';

// Возможности: разные по размеру карточки. Одна из них показывает пример записи.
export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="band px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Возможности</p>
          <h2 id="features-title" className="mt-3 max-w-2xl text-3xl font-medium leading-tight sm:text-5xl">
            Всё, что нужно для общения с клиентами
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const wide = i === 0;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.05} className={wide ? 'sm:col-span-2' : ''}>
                <article className="card-tone card-hover glow-hover h-full rounded-2xl p-6">
                  <span className="font-display text-xs text-neutral-500">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-6 text-base font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{f.text}</p>
                  {wide && (
                    <div className="mt-6 grid gap-2 rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-neutral-300 sm:grid-cols-3">
                      <span className="rounded-lg border border-white/10 px-3 py-2">Маникюр · 16:30</span>
                      <span className="rounded-lg border border-white/10 px-3 py-2">Стрижка · 18:00</span>
                      <span className="rounded-lg border border-white/10 px-3 py-2 text-neutral-500">Окно · 19:30</span>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
