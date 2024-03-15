import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charset="utf-8" />
    <style>
      html, body {
        background: #e594d9;
        font-family: 'Jost', sans-serif;
      }
    </style>
 `,
  webpackFinal: async (config) => {
    const { resolve } = config;
    const alias = { ...resolve?.alias, '@' : path.resolve(__dirname, '../src') }
    return { ...config, resolve: { ...config.resolve, alias } };
  }
};
export default config;
