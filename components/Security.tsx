import { Database, EyeOff, KeyRound, Lock, UserCheck, type LucideIcon } from 'lucide-react';
import Reveal from './Reveal';
import Decor from './Decor';
import { security } from '@/content/site';

// Иконки в том же порядке, что и пункты безопасности в content/site.ts
const icons: LucideIcon[] = [Database, Lock, UserCheck, KeyRound, EyeOff];

export default function Security() {
  return (
    <section aria-labelledby="security-title" className="relative overflow-hidden band px-6 py-24">
      <Decor left="shield" right="rings" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Безопасность</p>
          <h2 id="security-title" className="mt-3 max-w-2xl text-3xl font-medium sm:text-5xl">
            Данные компаний защищены
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {security.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.05}>
                <article className="card-tone card-hover h-full rounded-2xl p-6">
                  <div className="tile flex h-10 w-10 items-center justify-center rounded-lg">
                    {Icon && <Icon aria-hidden="true" className="h-4 w-4 text-white" />}
                  </div>
                  <h3 className="mt-5 text-base font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
