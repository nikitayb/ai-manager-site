import SectionArtwork from './SectionArtwork';
import Reveal from './Reveal';
import { steps } from '@/content/site';

export default function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="section-theme process-section px-6 py-24">
      <SectionArtwork kind="process" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="process-label">Как это работает</p>
          <h2 id="how-title" className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl">
            Шесть шагов до первого диалога
          </h2>
        </Reveal>

        <ol className="process-steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.08} className="process-step">
                <span className="process-number" aria-hidden="true">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
