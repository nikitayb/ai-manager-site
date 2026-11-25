import {
  Building2,
  Car,
  Dumbbell,
  GraduationCap,
  ShoppingBag,
  Scissors,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';
import Reveal from './Reveal';
import Decor from './Decor';
import { industries } from '@/content/site';

// Иконки в том же порядке, что и отрасли в content/site.ts
const icons: LucideIcon[] = [Scissors, Stethoscope, Car, Dumbbell, UtensilsCrossed, ShoppingBag, GraduationCap, Building2];

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="relative overflow-hidden px-6 py-24">
      <Decor left="icons" right="cube" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Решения</p>
          <h2 id="industries-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Для разных видов бизнеса
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.04}>
                <article className="card-tone card-hover h-full rounded-2xl p-5">
                  <div className="tile flex h-10 w-10 items-center justify-center rounded-lg">
                    {Icon && <Icon aria-hidden="true" className="h-4 w-4 text-white" />}
                  </div>
                  <h3 className="mt-5 text-base font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
