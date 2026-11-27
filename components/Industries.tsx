import SectionArtwork from "./SectionArtwork";
import Reveal from './Reveal';
import { industries } from '@/content/site';

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="section-theme px-6 py-24">
      <SectionArtwork kind="industries" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Решения</p>
          <h2 id="industries-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Для разных видов бизнеса
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.04}>
              <article className="card-hover glass h-full rounded-2xl p-5">
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
