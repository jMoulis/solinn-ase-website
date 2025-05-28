import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main/Main';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const dxRigraf = localFont({
  variable: '--font-dxRigraf',
  src: [
    {
      path: './fonts/DX-Rigraf/DXRigraf-SemiBold.otf',
      weight: '600',
      style: 'normal'
    }
  ]
});
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${dxRigraf.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
