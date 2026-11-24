import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  robots: { index: false, follow: false },
};

// TODO: заменить на юридически проверенный текст перед запуском
export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <h1 className="text-3xl font-medium">Политика конфиденциальности</h1>
      <p className="mt-6 text-sm leading-relaxed text-neutral-400">
        Черновик. Текст политики конфиденциальности будет добавлен перед запуском сайта.
      </p>
      <a href="/" className="focus-ring mt-10 inline-block text-sm text-neutral-300 hover:text-white">← На главную</a>
    </main>
  );
}
