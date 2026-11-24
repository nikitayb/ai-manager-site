import * as Icons from 'lucide-react';
import Reveal from './Reveal';
import { benefits } from '@/content/site';

export default function Benefits() {
  const Check = Icons.Check;
  return (
    <section aria-labelledby="benefits-title" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Преимущества</p>
          <h2 id="benefits-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Меньше пропущенных клиентов
          </h2>
          <p className="mt-4 max-w-md text-neutral-400">
            AI-менеджер отвечает сразу, помнит контекст диалога и аккуратно передаёт сложные вопросы людям.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="glass divide-y divide-white/10 rounded-2xl">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 px-6 py-4 text-sm text-neutral-200">
                <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-white" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
