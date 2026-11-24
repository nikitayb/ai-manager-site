import Reveal from './Reveal';
import { steps } from '@/content/site';

export default function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Как это работает</p>
          <h2 id="how-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Пять шагов до первого диалога
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-4">
          {/* Соединительная линия между шагами (только на десктопе) */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent md:block" />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li className="relative list-none">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-ink text-sm font-medium shadow-[0_0_18px_rgba(255,255,255,0.12)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-sm font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
