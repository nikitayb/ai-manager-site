'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { steps } from '@/content/site';

// Каждый шаг открывает свой экран: регистрация, данные компании, настройка, каналы, запуск.
// Все поля демонстрационные: аккаунт никуда не создаётся.
const channels = [
  { name: 'Telegram', connected: true },
  { name: 'WhatsApp Business', connected: false },
  { name: 'VK', connected: false },
  { name: 'Чат на сайте', connected: true },
];

const field = 'rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-neutral-200';

function Panel({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="grid gap-4">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Создание аккаунта</p>
          <div className={field}>name@company.com</div>
          <div className={field}>Название компании</div>
          <div className={field}>Пароль</div>
          <span className="btn-primary focus-ring mt-2 w-full">Создать аккаунт</span>
        </div>
      );
    case 1:
      return (
        <div className="grid gap-4">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Данные о бизнесе</p>
          <div className={field}>Сфера: салон красоты</div>
          <div className={field}>График: пн–сб, 10:00–20:00</div>
          <div className="flex flex-wrap gap-2">
            {['Стрижка', 'Окрашивание', 'Маникюр'].map((s) => (
              <span key={s} className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-neutral-200">
                {s}
              </span>
            ))}
          </div>
          <div className={field}>Частые вопросы: 12 заполнено</div>
        </div>
      );
    case 2:
      return (
        <div className="grid gap-3">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Настройка менеджера</p>
          {[
            ['Тон общения', 'дружелюбный, на «вы»'],
            ['Записывать клиентов', 'включено'],
            ['Передавать сложные вопросы', 'включено'],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm">
              <span className="text-neutral-300">{k}</span>
              <span className="text-xs text-neutral-500">{v}</span>
            </div>
          ))}
        </div>
      );
    case 3:
      return (
        <div className="grid gap-3">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Каналы общения</p>
          {channels.map((c) => (
            <div key={c.name} className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm">
              <span className="text-neutral-200">{c.name}</span>
              {c.connected ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">подключено</span>
              ) : (
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-neutral-300">подключить</span>
              )}
            </div>
          ))}
        </div>
      );
    default:
      return (
        <div className="grid gap-3">
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Менеджер запущен</p>
          <div className="self-start rounded-2xl bg-white/10 px-4 py-2.5 text-sm text-neutral-100">
            Здравствуйте! Чем могу помочь?
          </div>
          <div className="self-end rounded-2xl bg-white px-4 py-2.5 text-sm text-black">Есть окно на завтра?</div>
          <div className="self-start rounded-2xl bg-white/10 px-4 py-2.5 text-sm text-neutral-100">
            Да, в 16:30. Записать вас?
          </div>
        </div>
      );
  }
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section id="how" aria-labelledby="how-title" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-neutral-500">Как это работает</p>
          <h2 id="how-title" className="mt-3 text-3xl font-medium sm:text-5xl">
            Пять шагов до первого диалога
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <ol role="tablist" aria-label="Шаги подключения" className="flex flex-col gap-2">
            {steps.map((step, i) => {
              const selected = i === active;
              return (
                <li key={step.title} className="list-none">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    className={`focus-ring flex w-full items-start gap-4 rounded-xl px-4 py-4 text-left transition ${
                      selected ? 'bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]' : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium ${
                        selected ? 'border-white bg-white text-black' : 'border-white/25 text-neutral-300'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{step.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-neutral-400">{step.text}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div role="tabpanel" aria-live="polite" className="window rounded-2xl p-6 sm:p-8">
            <Panel index={active} />
            <p className="mt-6 text-xs text-neutral-600">Демонстрационный пример: аккаунт не создаётся</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
