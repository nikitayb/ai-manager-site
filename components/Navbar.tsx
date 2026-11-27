'use client';

import { useState } from 'react';
import { navItems } from '@/content/site';
import BrandLink from './BrandLink';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <BrandLink />

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-1.5 text-xs text-neutral-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden !px-4 !py-2 text-xs sm:inline-flex">Начать работу</a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="focus-ring rounded-full border border-white/15 px-3 py-2 text-xs lg:hidden"
          >
            {open ? 'Закрыть' : 'Меню'}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Мобильная навигация" className="border-t border-white/10 bg-ink px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="focus-ring block text-neutral-300 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
