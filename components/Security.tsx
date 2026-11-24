import * as Icons from 'lucide-react';
import Reveal from './Reveal';
import { security } from '@/content/site';

export default function Security() {
  const Shield = Icons.ShieldCheck;
  return (
    <section aria-labelledby="security-title" className="px-6 py-24">
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
              <article className="card-hover glass h-full rounded-2xl p-6">
                <Shield aria-hidden="true" className="h-5 w-5 text-neutral-200" />
                <h3 className="mt-4 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
