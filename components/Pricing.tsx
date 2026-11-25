import SectionArtwork from "./SectionArtwork";
import * as Icons from 'lucide-react';
import Reveal from './Reveal';
import { pricing } from '@/content/site';

// Один тариф. Цену и список функций меняйте в content/site.ts.
export default function Pricing() {
  const Check = Icons.Check;
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section-theme px-6 py-24">
      <SectionArtwork kind="pricing" />
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Тарифы</p>
          <h2 id="pricing-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Простой тариф для вашего бизнеса
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="glass rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-medium">{pricing.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{pricing.demoNote}</p>
              </div>
              <p className="text-4xl font-medium">
                {pricing.price.toLocaleString('ru-RU')} {pricing.currency}
                <span className="ml-2 text-sm font-normal text-neutral-400">{pricing.period}</span>
              </p>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {pricing.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-neutral-200">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary focus-ring flex-1">Подключить</a>
              <a href="#contact" className="btn-ghost focus-ring flex-1">Связаться с нами</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
