import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import { features } from '@/content/site';

const iconMap = Icons as unknown as Record<string, LucideIcon>;

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Возможности</p>
          <h2 id="features-title" className="mt-3 max-w-2xl text-3xl font-medium leading-tight sm:text-5xl">
            Всё, что нужно для общения с клиентами
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.05}>
                <article className="card-hover glass h-full rounded-2xl p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                    {Icon && <Icon aria-hidden="true" className="h-5 w-5 text-neutral-200" />}
                  </div>
                  <h3 className="mt-5 text-base font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{f.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
