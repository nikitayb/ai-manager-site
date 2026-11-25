'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { industries } from '@/content/site';

// Пример диалога для каждой отрасли. Порядок совпадает с industries в content/site.ts.
const examples = [
  {
    chat: [
      { from: 'client', text: 'Есть окно на маникюр в субботу?' },
      { from: 'ai', text: 'Есть в 11:00 и в 16:30. Какое время удобно?' },
    ],
    outcome: 'Запись и напоминание за день до визита',
  },
  {
    chat: [
      { from: 'client', text: 'Хочу к терапевту на этой неделе' },
      { from: 'ai', text: 'Есть вторник в 9:40 и четверг в 15:10. Что выберете?' },
    ],
    outcome: 'Запись и подтверждение без звонка',
  },
  {
    chat: [
      { from: 'client', text: 'Нужно ТО для Kia, сколько стоит?' },
      { from: 'ai', text: 'Цена зависит от модели и года. Уточню и подберу время?' },
    ],
    outcome: 'Уточнение условий и приём заявки',
  },
  {
    chat: [
      { from: 'client', text: 'Можно пробную тренировку в выходные?' },
      { from: 'ai', text: 'Да, группа в субботу утром. Записать вас?' },
    ],
    outcome: 'Запись на пробное занятие',
  },
  {
    chat: [
      { from: 'client', text: 'Столик на четверых сегодня вечером' },
      { from: 'ai', text: 'Есть столик в 19:30 у окна. Подтвердить бронь?' },
    ],
    outcome: 'Бронирование и ответы о меню',
  },
  {
    chat: [
      { from: 'client', text: 'Есть эта модель в синем?' },
      { from: 'ai', text: 'В наличии в синем, размер M. Оставить для вас?' },
    ],
    outcome: 'Наличие товара и консультация',
  },
  {
    chat: [
      { from: 'client', text: 'Есть вечерний курс английского?' },
      { from: 'ai', text: 'Есть группа по будням в 19:00. Записать на пробный урок?' },
    ],
    outcome: 'Запись на пробное занятие',
  },
  {
    chat: [
      { from: 'client', text: 'Могу поговорить с человеком?' },
      { from: 'ai', text: 'Передаю диалог сотруднику вместе с историей. Он ответит здесь же.' },
    ],
    outcome: 'Передача диалога сотруднику',
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const item = industries[active];
  const example = examples[active];

  return (
    <section id="industries" aria-labelledby="industries-title" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Решения</p>
          <h2 id="industries-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Для разных видов бизнеса
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Список отраслей: выбор переключает пример справа */}
          <div role="tablist" aria-label="Отрасли" className="flex flex-col gap-1">
            {industries.map((ind, i) => {
              const selected = i === active;
              return (
                <button
                  key={ind.title}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className={`focus-ring flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                    selected ? 'bg-white text-black' : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {ind.title}
                  <span className={`text-xs ${selected ? 'text-neutral-600' : 'text-neutral-600'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Панель примера: диалог и результат для выбранной отрасли */}
          <div role="tabpanel" aria-live="polite" className="window flex min-h-[340px] flex-col rounded-2xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.text}</p>

            <div className="mt-8 flex flex-1 flex-col gap-3">
              {example.chat.map((m, i) => (
                <div
                  key={`${active}-${i}`}
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.from === 'client' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
              <p className="text-sm text-neutral-300">{example.outcome}</p>
            </div>
            <p className="mt-4 text-[11px] text-neutral-600">Демонстрационный пример</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
