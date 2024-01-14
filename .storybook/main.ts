import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
  stories: [
    '../components/**/*.(stories|story).@(js|jsx|ts|tsx)',
    '../ui/**/*.(stories|story).@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ui': path.resolve(__dirname, '../ui'),
      '@components': path.resolve(__dirname, '../components'),
      '@utils': path.resolve(__dirname, '../utils'),
      '@hooks': path.resolve(__dirname, '../hooks'),
      '@type': path.resolve(__dirname, '../types'),
    };

    return config;
  },
};

export default config;
