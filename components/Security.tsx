import Reveal from './Reveal';
import { security } from '@/content/site';

export default function Security() {
  return (
    <section aria-labelledby="security-title" className="band px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Безопасность</p>
          <h2 id="security-title" className="mt-3 max-w-2xl text-3xl font-medium sm:text-5xl">
            Данные компаний защищены
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {security.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.05}>
              <article className="card-tone card-hover h-full rounded-2xl p-6">
                <span className="font-display text-xs text-neutral-500">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
