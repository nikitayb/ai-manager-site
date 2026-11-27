import SectionArtwork from "./SectionArtwork";
import Reveal from './Reveal';
import { faq } from '@/content/site';

// Раскрывающиеся вопросы на <details>, работают без JavaScript
export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="section-theme px-6 py-24">
      <SectionArtwork kind="faq" />
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">FAQ</p>
          <h2 id="faq-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Частые вопросы
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
            {faq.map((item) => (
              <details key={item.q} className="group px-6 py-5">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium">
                  {item.q}
                  <span aria-hidden="true" className="text-lg text-neutral-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
