import type { Metadata } from 'next';
import './globals.css';
import NavBar from '../ui/molecules/NavBar';
import { Jost } from 'next/font/google';

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
      <body className={`${jost.className} text-black bg-pink`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
