import { Card, Text, TextProps } from '@mantine/core';
import cx from 'clsx';

import classes from './StatItem.module.css';

export type StatProps = {
  id?: string;
  align?: 'left' | 'center' | 'right';
  hasDivider?: boolean;
  size: 'sm' | 'md' | 'lg';
  title: string;
  titleProps?: TextProps;
  text: string;
  textProps?: TextProps;
  bgColor?: string;
  contrastColor?: string;
  classNames?: Record<string, any>;
};

export const StatItem = ({
  align = 'left',
  hasDivider = false,
  size,
  title,
  titleProps,
  text,
  textProps,
  bgColor,
  classNames,
  contrastColor,
  ...rest
}: StatProps) => (
  <Card
    className={cx(
      classes.root,
      classes[align],
      classes[size],
      hasDivider && classes.withDivider,
      classNames?.root
    )}
    data-size={size}
    {...rest}
  >
    {title ? (
      <Text className={cx(classes.title, classNames?.title)} component="dd" {...titleProps}>
        {title}
      </Text>
    ) : null}
    {text ? (
      <Text component="dt" className={cx(classes.text, classNames?.text)} {...textProps}>
        {text}
      </Text>
    ) : null}
  </Card>
);

StatItem.defaultProps = {
  titleProps: {
    fw: 700,
  },
  textProps: {
    size: 'md',
  },
};
