import Reveal from './Reveal';
import Decor from './Decor';
import { integrations } from '@/content/site';

export default function Integrations() {
  return (
    <section aria-labelledby="integrations-title" className="relative overflow-hidden px-6 py-20">
      <Decor left="rings" right="icons" />
      <Reveal className="mx-auto max-w-5xl text-center">
        <h2 id="integrations-title" className="text-2xl font-medium sm:text-3xl">
          Работает там, где общаются ваши клиенты
        </h2>

        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {integrations.map((item) => (
            <li
              key={item.name}
              className="card-hover glass flex h-20 min-w-[180px] items-center justify-center rounded-2xl px-6 text-sm text-neutral-200"
            >
              {/* TODO: заменить текст на официальный логотип из public/logos (см. README) */}
              {item.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
