import SectionArtwork from "./SectionArtwork";
import * as Icons from 'lucide-react';
import Reveal from './Reveal';
import { pricing } from '@/content/site';

export default function Pricing() {
  const Check = Icons.Check;
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section-theme px-6 py-24">
      <SectionArtwork kind="pricing" />
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Тарифы</p>
          <h2 id="pricing-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Что входит в подключение
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="glass rounded-3xl p-8 sm:p-10">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-medium">{pricing.name}</h3>
              </div>
              <p className="text-lg font-medium text-neutral-200">Стоимость по запросу</p>
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
              <a href="#contact" className="btn-primary focus-ring flex-1">Обсудить подключение</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
