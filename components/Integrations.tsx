import SectionArtwork from "./SectionArtwork";
import Reveal from './Reveal';
import { integrations } from '@/content/site';

export default function Integrations() {
  return (
    <section aria-labelledby="integrations-title" className="section-theme px-6 py-20">
      <SectionArtwork kind="integrations" />
      <Reveal className="mx-auto max-w-5xl text-center">
        <h2 id="integrations-title" className="text-2xl font-medium sm:text-3xl">
          Работает там, где общаются ваши клиенты
        </h2>

        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {integrations.map((item) => (
            <li
              key={item.name}
              className="card-hover glass flex h-20 w-full max-w-[190px] flex-[1_1_140px] flex-col items-center justify-center rounded-2xl px-6 text-sm text-neutral-200"
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
