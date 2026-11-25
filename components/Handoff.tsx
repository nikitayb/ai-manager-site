import Reveal from './Reveal';
import { handoffDialog } from '@/content/site';

// Передача диалога сотруднику: AI передаёт вопрос, сотрудник продолжает ту же переписку
export default function Handoff() {
  return (
    <section aria-labelledby="handoff-title" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Передача сотруднику</p>
          <h2 id="handoff-title" className="mt-3 text-3xl font-medium leading-tight sm:text-5xl">
            Сложный вопрос уходит человеку, а история остаётся
          </h2>
          <p className="mt-5 max-w-md text-neutral-400">
            Сотрудник видит всю переписку и продолжает с того места, где AI остановился. Клиент не повторяет вопрос.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="window rounded-2xl p-6">
            <div className="flex flex-col gap-3 text-sm">
              {handoffDialog.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                    m.from === 'client' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.04] px-4 py-3 text-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              Диалог передан администратору
            </div>
            <div className="mt-3 self-end rounded-2xl bg-white px-4 py-2.5 text-sm leading-relaxed text-black">
              Здравствуйте, я администратор. Сейчас проверю оплату и вернусь к вам в этом чате.
            </div>
            <p className="mt-4 text-xs text-neutral-600">Демонстрационный пример</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
