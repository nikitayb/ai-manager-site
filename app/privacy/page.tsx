import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <p className="mb-3 text-sm text-neutral-400">{siteConfig.name}</p>
      <h1 className="text-3xl font-medium sm:text-4xl">Политика конфиденциальности</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-300">
        <section>
          <h2 className="mb-2 text-lg font-medium text-white">О чём этот документ</h2>
          <p>
            Эта политика описывает, как сайт {siteConfig.name} работает с данными посетителей.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-white">Примеры переписки</h2>
          <p>
            При выборе сценария сайт показывает готовые реплики. Выбор происходит в браузере
            и не отправляется внешнему сервису искусственного интеллекта.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-white">Обращения к Nimbus Pulse</h2>
          <p>
            Ссылки для связи открывают вашу почтовую программу или мессенджер. Если вы
            отправите сообщение, команда получит ваш контакт и информацию, которую
            вы укажете в обращении. Эти сведения используются для ответа на ваш запрос.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-white">Данные в обращениях</h2>
          <p>
            Указывайте только сведения, необходимые для ответа. Не отправляйте пароли,
            ключи доступа и персональные данные третьих лиц без законного основания.
          </p>
        </section>

        {siteConfig.email && (
          <section>
            <h2 className="mb-2 text-lg font-medium text-white">Вопросы о данных</h2>
            <p>
              Напишите на{' '}
              <a href={`mailto:${siteConfig.email}`} className="focus-ring underline underline-offset-4 hover:text-white">
                {siteConfig.email}
              </a>.
            </p>
          </section>
        )}
      </div>

      <nav aria-label="Ссылки на документы" className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
        <a href="/" className="focus-ring underline decoration-neutral-500 underline-offset-4 hover:text-white">← На главную</a>
        <a href="/terms" className="focus-ring underline decoration-neutral-500 underline-offset-4 hover:text-white">Пользовательское соглашение</a>
      </nav>
    </main>
  );
}
