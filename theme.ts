'use client';

import { createTheme, CSSVariablesResolver, Title } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    primary: [
      '#e3fff9',
      '#d3f9f1',
      '#a9f1e2',
      '#7cead2',
      '#58e2c4',
      '#41debb',
      '#31ddb7',
      '#1fc4a0',
      '#0aaf8e',
      '#00967a',
    ],
    dark: [
      '#f5f5f5',
      '#e7e7e7',
      '#cdcdcd',
      '#b2b2b2',
      '#848484',
      '#717171',
      '#656565',
      '#575757',
      '#1c1c1c',
      '#000000',
    ],
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: {
        fontSize: '60px',
        fontWeight: '700',
        lineHeight: '100%',
      },
      h2: {
        fontSize: '48px',
      },
    },
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '64px',
    9: '96px',
    10: '128px',
  },
  fontFamily: 'Inter, sans-serif',
  components: {
    Title: Title.extend({
      defaultProps: {
        style: {
          letterSpacing: '-1.8px',
        },
      },
    }),
  },
  other: {
    sectionMargin: {
      sm: '76px',
      md: '82px',
      lg: '94px',
      xl: '120px',
    },
    padding: {
      base: {
        x: '64px',
        y: '64px',
      },
      md: {
        x: '64px',
        y: '64px',
      },
      lg: {
        x: '64px',
        y: '72px',
      },
    },
  },
});

// @ts-ignore
export const varResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-section-margin-sm': theme.other.sectionMargin.sm,
    '--mantine-section-margin-md': theme.other.sectionMargin.md,
    '--mantine-section-margin-lg': theme.other.sectionMargin.lg,
    '--mantine-section-margin-xl': theme.other.sectionMargin.xl,
    '--mantine-container-size': '1480px',
  },
});
