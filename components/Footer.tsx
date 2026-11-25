import { navItems, siteConfig } from '@/content/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <a href="#top" className="focus-ring flex items-center gap-2 font-display text-sm font-medium tracking-tight">
            <Logo size={24} className="text-white" />
            {siteConfig.name}
          </a>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            AI-менеджер для бизнеса: общение с клиентами, консультации и запись 24/7.
          </p>
        </div>

        <nav aria-label="Навигация в подвале">
          <h3 className="text-xs uppercase tracking-[0.14em] text-neutral-500">Навигация</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="focus-ring hover:text-white">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs uppercase tracking-[0.14em] text-neutral-500">Контакты</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-300">
            <li><a href={`mailto:${siteConfig.email}`} className="focus-ring hover:text-white">{siteConfig.email}</a></li>
            <li><a href={siteConfig.telegram} className="focus-ring hover:text-white">Telegram</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.14em] text-neutral-500">Документы</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-300">
            <li><a href="/privacy" className="focus-ring hover:text-white">Политика конфиденциальности</a></li>
            <li><a href="/terms" className="focus-ring hover:text-white">Пользовательское соглашение</a></li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-xs text-neutral-600">
        © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
      </p>
    </footer>
  );
}
