import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: {
    default: `${siteConfig.name} — AI-менеджер для бизнеса`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['AI-менеджер', 'чат-бот для бизнеса', 'онлайн-запись', 'автоматизация общения с клиентами'],
  openGraph: {
    title: `${siteConfig.name} — AI-менеджер для бизнеса`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'ru_RU',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
