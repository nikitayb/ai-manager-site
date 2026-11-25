'use client';

import { useState, type FormEvent } from 'react';
import { heroChatChips, heroChatReply } from '@/content/site';

type Message = { from: 'user' | 'ai'; text: string };

// Стеклянная панель демо-чата на первом экране. Ответы заранее подготовлены.
export default function ChatPanel() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { from: 'ai', text: 'Здравствуйте! Чем могу помочь?' },
  ]);

  function send(text: string) {
    const value = text.trim();
    if (!value) {
      setError('Введите вопрос');
      return;
    }
    setError('');
    setMessages((prev) => [...prev, { from: 'user', text: value }, { from: 'ai', text: heroChatReply }]);
    setInput('');
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="glass rounded-2xl p-4 text-left shadow-[0_0_60px_rgba(255,255,255,0.08)]">
      <div className="flex max-h-56 flex-col gap-3 overflow-y-auto pr-1 text-sm" aria-live="polite">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
              m.from === 'user' ? 'self-end bg-white text-black' : 'self-start bg-white/10 text-neutral-100'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {heroChatChips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => send(chip)}
            className="focus-ring rounded-full border border-white/15 px-3 py-1.5 text-xs text-neutral-300 transition hover:border-white/40 hover:text-white"
          >
            {chip}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-4">
        <label htmlFor="hero-chat-input" className="sr-only">
          Ваш вопрос AI-менеджеру
        </label>
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 py-2 pl-4 pr-2">
          <input
            id="hero-chat-input"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (error) setError('');
            }}
            placeholder="Задайте вопрос AI-менеджеру..."
            className="focus-ring flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none"
          />
          <button
            type="submit"
            aria-label="Отправить"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
          >
            ↗
          </button>
        </div>
        {error && <p className="mt-2 text-xs text-neutral-400">{error}</p>}
      </form>
    </div>
  );
}
