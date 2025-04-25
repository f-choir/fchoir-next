import type { Metadata } from 'next';
import './globals.css';
import NavBar from '../ui/molecules/NavBar';
import Footer from '@/ui/molecules/Footer';
import classNames from 'classnames';
import { jost } from '@/ui/fonts';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'F*Choir',
  description: 'Queer-led, femme-centred choir from London.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={classNames(jost.className, 'text-black bg-pink flex flex-col last:justify-end')}
      >
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
