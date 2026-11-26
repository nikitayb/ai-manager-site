import SectionArtwork from "./SectionArtwork";
import Reveal from './Reveal';
import { siteConfig } from '@/content/site';

export default function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="section-theme relative overflow-hidden px-6 py-28">
      <SectionArtwork kind="contact" />
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 id="cta-title" className="text-3xl font-medium leading-tight sm:text-5xl">
          Пусть {siteConfig.name} работает с клиентами, пока вы развиваете бизнес
        </h2>
        {siteConfig.email || siteConfig.telegram ? (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`} className="btn-primary focus-ring">Написать на почту</a>
            )}
            {siteConfig.telegram && (
              <a href={siteConfig.telegram} className="btn-ghost focus-ring">Написать в Telegram</a>
            )}
          </div>
        ) : (
          <p className="mt-6 text-sm text-neutral-400">Контакты для подключения пока недоступны.</p>
        )}
      </Reveal>
    </section>
  );
}
