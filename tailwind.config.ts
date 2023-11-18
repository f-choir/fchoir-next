import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      pink: '#e594d9',
      red: '#ff0000',
      purple: '#5137AC',
      lilac: '#b6bcec',
      white: '#ffffff',
      black: '#112233'
    },
    screens: {
      'm': '640px',
      'l': '1024px',
    },
    extend: {
      fontFamily: {
        jost: ['"Jost"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}
export default config;
