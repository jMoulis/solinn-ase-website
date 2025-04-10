import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from './components/Footer';
import Header from './components/Header';
config.autoAddCss = false;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Solinn ASE',
  description:
    "La technologie au service des acteurs sociaux de l'Aide Sociale à l'Enfance"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='min-h-screen font-[family-name:var(--font-geist-sans)]'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
