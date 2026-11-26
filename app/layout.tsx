import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/content/site';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const deploymentUrl = process.env.CF_PAGES_URL || siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title: {
    default: `${siteConfig.name} — AI-менеджер для бизнеса`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['AI-менеджер', 'чат-бот для бизнеса', 'онлайн-запись', 'автоматизация общения с клиентами'],
  openGraph: {
    title: `${siteConfig.name} — AI-менеджер для бизнеса`,
    description: siteConfig.description,
    url: deploymentUrl,
    siteName: siteConfig.name,
    locale: 'ru_RU',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
