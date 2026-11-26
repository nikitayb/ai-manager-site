import Reveal from './Reveal';
import { pricing } from '@/content/site';

// Один тариф. Цену и список функций меняйте в content/site.ts.
export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Тарифы</p>
          <h2 id="pricing-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Простой тариф для вашего бизнеса
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="card-tone relative overflow-hidden rounded-3xl">
            <div className="grid md:grid-cols-[1fr_1.2fr]">
              {/* Левая часть: цена */}
              <div className="flex flex-col justify-between border-b border-white/10 p-8 sm:p-10 md:border-b-0 md:border-r">
                <div>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-neutral-300">
                    Демонстрационная цена
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium">{pricing.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">{pricing.demoNote}</p>
                </div>
                <p className="mt-10 text-5xl font-medium tracking-tight">
                  {pricing.price.toLocaleString('ru-RU')} {pricing.currency}
                  <span className="mt-2 block text-sm font-normal text-neutral-400">{pricing.period}</span>
                </p>
              </div>

              {/* Правая часть: что входит */}
              <div className="p-8 sm:p-10">
                <ul className="grid gap-3">
                  {pricing.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-neutral-200">
                      <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-white/60" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#contact" className="btn-primary focus-ring flex-1">Подключить</a>
                  <a href="#contact" className="btn-ghost focus-ring flex-1">Связаться с нами</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
