import Reveal from './Reveal';
import SignalMap from './SignalMap';

export default function Integrations() {
  return (
    <section aria-labelledby="integrations-title" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Каналы</p>
          <h2 id="integrations-title" className="mt-3 text-2xl font-medium sm:text-3xl">
            Работает там, где общаются ваши клиенты
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-400">
            Все каналы ведут к одному AI-менеджеру. Клиент получает одинаковые ответы, где бы ни написал.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <SignalMap />
        </Reveal>
      </div>
    </section>
  );
}
