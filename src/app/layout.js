import { Outfit, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const body = Source_Sans_3({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'ZazConnect | Compare Ultra-Fast Internet & Premium TV Plans',
  description:
    'ZazConnect (operated by Maverick Well INC) helps you compare internet, TV, and home security plans from licensed providers — independent comparison and referral.',
  keywords: 'ZazConnect, compare internet plans, fiber internet, cable TV, Houston',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
