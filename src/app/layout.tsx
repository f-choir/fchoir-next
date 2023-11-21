import type { Metadata } from 'next';
import './globals.css';
import NavBar from '../ui/molecules/NavBar';
import { Jost } from 'next/font/google';
import Footer from '@/ui/molecules/Footer';
import classNames from 'classnames';

export const metadata: Metadata = {
  title: 'F*Choir',
  description: 'Queer-led, femme-centred choir from London.',
};

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={classNames(jost.className, 'text-black bg-pink flex flex-col last:justify-end')}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
