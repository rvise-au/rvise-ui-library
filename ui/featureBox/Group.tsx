import { MantineSpacing, rem, SimpleGrid } from '@mantine/core';
import cx from 'clsx';

import styles from './Group.module.css';

type Cols = {
  base?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};

type FeatureBoxGroupProps = {
  children: React.ReactNode;
  className?: string;
  spacing?: MantineSpacing;
  cols?: Cols;
  verticalSpacing?: MantineSpacing;
  style?: React.CSSProperties;
  margins?: {
    lg?: MantineSpacing;
    md?: MantineSpacing;
    sm?: MantineSpacing;
  };
};
export const FeaturedBoxGroup = ({
  children,
  className,
  spacing,
  cols,
  verticalSpacing,
  style,
  margins,
}: FeatureBoxGroupProps) => (
  <SimpleGrid
    className={cx(styles.root, className)}
    cols={cols || { base: 1, xs: 2 }}
    spacing={spacing || 24}
    verticalSpacing={verticalSpacing || 24}
    style={{
      ...style,
      '--features-group-margin-lg': rem(margins?.lg) || '24px 0',
      '--features-group-margin-md': rem(margins?.md) || '24px 0',
      '--features-group-margin-sm': rem(margins?.sm) || '24px 0',
    }}
  >
    {children}
  </SimpleGrid>
);
