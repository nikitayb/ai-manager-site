import Reveal from './Reveal';
import ContactForm from './ContactForm';

export default function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="relative overflow-hidden px-6 py-28">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 id="cta-title" className="text-3xl font-medium leading-tight sm:text-5xl">
          Пусть Nimbus Pulse работает с клиентами, пока вы развиваете бизнес
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#pricing" className="btn-primary focus-ring">Начать работу</a>
          <a href="#contact" className="btn-ghost focus-ring">Связаться с нами</a>
        </div>
        <ContactForm />
      </Reveal>
    </section>
  );
}
