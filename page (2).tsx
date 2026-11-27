import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Пользовательское соглашение',
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <p className="mb-3 text-sm text-neutral-400">{siteConfig.name}</p>
      <h1 className="text-3xl font-medium sm:text-4xl">Пользовательское соглашение</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="mb-2 text-lg font-medium text-white">Назначение сайта</h2>
          <p>
            На сайте {siteConfig.name} можно узнать о возможностях помощника для бизнеса,
            посмотреть примеры диалогов и ознакомиться с порядком подключения.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-white">Примеры диалогов</h2>
          <p>
            Диалоги знакомят с типовыми сценариями работы помощника. Выбор сценария
            не создаёт, не переносит и не отменяет запись.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-white">Подключение и оплата</h2>
          <p>
            Стоимость, объём услуг и условия оплаты согласуются при подключении.
            Для обсуждения подключения используйте контакты, опубликованные на сайте.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-white">Правила использования</h2>
          <p>
            При обращении указывайте только сведения, которые можете передать команде.
            Порядок работы сайта с данными описан в политике конфиденциальности.
          </p>
        </section>
      </div>

      <nav aria-label="Ссылки на документы" className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
        <a href="/" className="focus-ring underline decoration-neutral-500 underline-offset-4 hover:text-white">← На главную</a>
        <a href="/privacy" className="focus-ring underline decoration-neutral-500 underline-offset-4 hover:text-white">Политика конфиденциальности</a>
      </nav>
    </main>
  );
}
