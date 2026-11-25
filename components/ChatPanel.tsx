'use client';

import { useState, type FormEvent } from 'react';
import { heroChatChips, heroChatReply } from '@/content/site';

type Message = { from: 'user' | 'ai'; text: string; time: string };

// Демо-чат в стиле мессенджера. Ответы заранее подготовлены, это не работающий AI.
export default function ChatPanel() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'ai', text: 'Здравствуйте! Чем могу помочь?', time: '10:14' },
  ]);

  function send(text: string) {
    const value = text.trim();
    if (!value) {
      setError('Введите вопрос');
      return;
    }
    setError('');
    setInput('');
    setMessages((prev) => [...prev, { from: 'user', text: value, time: 'сейчас' }]);
    setTyping(true);
    // Небольшая задержка имитирует набор ответа
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: 'ai', text: heroChatReply, time: 'сейчас' }]);
    }, 900);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="glass overflow-hidden rounded-2xl text-left shadow-[0_0_60px_rgba(255,255,255,0.08)]">
      {/* Шапка мессенджера */}
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <div className="flex-1">
          <p className="font-display text-sm font-medium text-white">Nimbus Pulse</p>
          <p className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            на связи
          </p>
        </div>
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-neutral-400">демо</span>
      </div>

      <div className="flex max-h-64 flex-col gap-3 overflow-y-auto p-4 text-sm" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.from === 'user' ? 'items-end' : 'items-start'}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                m.from === 'user' ? 'bg-white text-black' : 'bg-white/10 text-neutral-100'
              }`}
            >
              {m.text}
            </div>
            <span className="mt-1 text-[10px] text-neutral-500">{m.time}</span>
          </div>
        ))}
        {typing && (
          <div className="flex items-center gap-1 self-start rounded-2xl bg-white/10 px-4 py-3" aria-label="AI печатает">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:-0.2s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300 [animation-delay:-0.1s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-300" />
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 px-4 pb-3">
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

      <form onSubmit={onSubmit} className="border-t border-white/10 p-3">
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
