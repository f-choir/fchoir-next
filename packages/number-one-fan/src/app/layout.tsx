import type { Metadata } from 'next';
import './globals.css';
import NavBar from '../ui/molecules/NavBar';
import Footer from '@/ui/molecules/Footer';
import classNames from 'classnames';
import { workSans } from '@/ui/fonts';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'F*Choir',
  description: 'Queer-led, femme-centred choir from London.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={classNames(workSans.className, 'text-black bg-white flex flex-col last:justify-end')}
      >
        <NavBar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
