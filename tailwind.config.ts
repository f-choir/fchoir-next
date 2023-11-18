import type { Config } from 'tailwindcss'

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
    },
    screens: {
      'm': '640px',
      'l': '1024px',
    },
  },
  plugins: [],
}
export default config;
