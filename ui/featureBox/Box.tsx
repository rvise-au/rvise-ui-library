import {
  Button,
  ButtonVariant,
  Card,
  MantineRadius,
  MantineShadow,
  rem,
  Text,
  ThemeIcon,
} from '@mantine/core';
import cx from 'clsx';
import Link, { LinkProps as NextLinkProps } from 'next/link';
import { TbArrowRight } from 'react-icons/tb';

import { TextObject } from '@/types';

import styles from './Box.module.css';

type IconType = React.ComponentType<{
  style: React.CSSProperties;
  strokeWidth: number;
  color?: string;
}>;

type FeatureBoxProps = {
  icon?: IconType;
  linkProps?: NextLinkProps;
  heading?: TextObject;
  text?: TextObject;
  className?: string;
  layout?: 'inline' | 'stacked' | 'beforeTitle';
  variant?: 'filled' | 'bordered' | 'transparent';
  boxRadius?: MantineRadius;
  boxShadow?: MantineShadow;
  backgroundColor?: string;
  iconVariant?: ButtonVariant;
  iconSize?: number;
  iconColor?: string;
  iconBackgroundColor?: string;
  iconStrokeWidth?: number;
  iconRadius?: MantineRadius;
  alignment?: 'flex-start' | 'center' | 'flex-end';
};
export const FeatureBox = ({
  icon: Icon,
  linkProps,
  heading,
  text,
  className,
  alignment = 'flex-start',
  layout = 'inline',
  boxRadius = 0,
  boxShadow,
  variant = 'transparent',
  iconVariant = 'transparent',
  iconSize = 20,
  backgroundColor,
  iconColor,
  iconBackgroundColor,
  iconStrokeWidth = 1.5,

  iconRadius = 0,
}: FeatureBoxProps) => (
  <Card
    withBorder={variant === 'bordered'}
    radius={variant !== 'transparent' ? boxRadius : 0}
    shadow={variant !== 'transparent' ? boxShadow : 'none'}
    className={cx(styles.root, styles[`layout_${layout}`], styles[`variant_${variant}`], className)}
    style={{
      '--box-icon-size': `${iconSize}px`,
      '--box-icon-background-color': iconBackgroundColor,
      '--box-background-color': backgroundColor,
      '--box-radius': `${boxRadius}px}`,
      '--box-alignment': alignment,
      '--text-alignment':
        alignment === 'flex-end' ? 'right' : alignment === 'flex-start' ? 'left' : 'center',
    }}
  >
    <dt>
      {Icon && (
        <ThemeIcon
          radius={iconRadius}
          size={iconSize}
          variant={iconVariant}
          color={iconBackgroundColor}
          className={styles.iconHolder}
        >
          <Icon
            style={{
              width: rem(iconBackgroundColor ? iconSize / 1.8 : iconSize),
              height: rem(iconSize),
            }}
            strokeWidth={iconStrokeWidth}
            color={iconColor}
          />
        </ThemeIcon>
      )}
      {heading?.text && (
        <Text
          component="span"
          size={heading.size}
          c={heading.color}
          style={{
            fontWeight: heading.weight,
          }}
        >
          {heading.text}
        </Text>
      )}
    </dt>
    <dd>
      {text?.text && (
        <Text size={text.size} c={text.color} className={styles.text} component="span">
          {text.text}
        </Text>
      )}
      {linkProps?.href && (
        <Button
          //@ts-ignore
          component={linkProps?.href ? Link : 'button'}
          className={styles.link}
          p={linkProps?.href && 0}
          {...linkProps}
          rightSection={<TbArrowRight strokeWidth="3px" />}
        >
          <span className={styles.link}>Learn more</span>
        </Button>
      )}
    </dd>
  </Card>
);
