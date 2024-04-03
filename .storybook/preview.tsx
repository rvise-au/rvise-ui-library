import '~/assets/styles/base.css';

import { Inter as CustomFont } from 'next/font/google';
import { getImageProps, ImageProps } from 'next/image';

import { withThemeByClassName } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import type { Preview, ReactRenderer } from '@storybook/react';
type SourceProps = Omit<JSX.IntrinsicElements['source'], 'srcSet' | 'src'> &
  Pick<ImageProps, 'src' | 'loader' | 'unoptimized' | 'quality'>;

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

Object.defineProperty(getImageProps, 'default', {
  configurable: true,
  value: (props) => {
    console.log(props);
  },
});

const CUSTOM_VIEWPORTS = {
  SMALL: {
    name: 'Mobile View',
    styles: {
      width: '360px',
      height: '640px',
    },
    type: 'mobile',
  },
  MEDIUM: {
    name: 'Tablet View',
    styles: {
      width: '960px',
      height: '640px',
    },
    type: 'tablet',
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...CUSTOM_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300 ${customFont.variable} font-sans`}
      >
        <Story />
      </div>
    ),
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
