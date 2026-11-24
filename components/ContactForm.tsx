'use client';

import { useState, type FormEvent } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(2, 'Укажите имя (минимум 2 символа)'),
  contact: z.string().trim().min(5, 'Укажите email или телефон'),
  message: z.string().trim().max(1000, 'Не более 1000 символов').optional(),
});

type Field = 'name' | 'contact' | 'message';
type Errors = Partial<Record<Field, string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: fd.get('name') ?? '',
      contact: fd.get('contact') ?? '',
      message: fd.get('message') || undefined,
    });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setDone(false);
      return;
    }

    setErrors({});
    setDone(true);
    // TODO: отправка на бэкенд, пока заявка только проверяется на клиенте
  }

  const inputClass =
    'focus-ring w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none';

  return (
    <form onSubmit={onSubmit} noValidate className="glass mx-auto mt-10 max-w-xl rounded-2xl p-6 text-left">
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs text-neutral-400">Имя</label>
          <input id="name" name="name" autoComplete="name" placeholder="Как к вам обращаться" aria-invalid={!!errors.name}
            className={`${inputClass} ${errors.name ? 'border-red-400/60' : 'border-white/10'}`} />
          {errors.name && <p className="mt-1.5 text-xs text-red-300">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact" className="mb-1.5 block text-xs text-neutral-400">Email или телефон</label>
          <input id="contact" name="contact" autoComplete="email" placeholder="name@company.com" aria-invalid={!!errors.contact}
            className={`${inputClass} ${errors.contact ? 'border-red-400/60' : 'border-white/10'}`} />
          {errors.contact && <p className="mt-1.5 text-xs text-red-300">{errors.contact}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-xs text-neutral-400">Сообщение (необязательно)</label>
          <textarea id="message" name="message" rows={3} placeholder="Расскажите о вашем бизнесе" aria-invalid={!!errors.message}
            className={`${inputClass} resize-none ${errors.message ? 'border-red-400/60' : 'border-white/10'}`} />
          {errors.message && <p className="mt-1.5 text-xs text-red-300">{errors.message}</p>}
        </div>

        <button type="submit" className="btn-primary focus-ring w-full">Связаться с нами</button>

        {done && (
          <p role="status" className="text-center text-sm text-neutral-300">
            Заявка принята (демо). Отправка на сервер будет подключена позже.
          </p>
        )}
      </div>
    </form>
  );
}
