import Reveal from './Reveal';
import { channelCards } from '@/content/site';

// Все каналы в одном месте: карточки с примером сообщения и светящаяся линия к центру
export default function Integrations() {
  return (
    <section aria-labelledby="integrations-title" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Каналы</p>
          <h2 id="integrations-title" className="mt-3 text-2xl font-medium sm:text-3xl">
            Работает там, где общаются ваши клиенты
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-400">
            Все каналы ведут к одному AI-менеджеру. Клиент получает одинаковые ответы, где бы ни написал.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Светящаяся линия, которая связывает карточки (только на широком экране) */}
          <div aria-hidden="true" className="line-flow absolute left-0 right-0 top-1/2 hidden h-px lg:block" />
          <ul className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channelCards.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <li className="card-tone glow-hover h-full list-none rounded-2xl p-5">
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">{c.note}</p>
                  <div className="mt-5 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-xs text-neutral-300">
                    {c.preview}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
