import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#2a2a2a',
      blue: '#5e7ae3',
      green: '#99fc7c',
      orange: '#f09546',
      pink: '#e33193',
      white: '#fffef0',
    },
    screens: {
      m: '640px',
      l: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        workSans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        seaSummer: ["__seaSummer_5eac2b", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
