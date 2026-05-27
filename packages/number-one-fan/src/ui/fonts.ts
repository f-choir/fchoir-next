import { Work_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const seaSummer =  localFont({
  src: '../public/fonts/seasummervthree-trial-stormy.woff',
  display: 'swap',
  weight: '400',
});

export const workSans = Work_Sans({
  subsets: ['latin'],
  weight: '400',
});