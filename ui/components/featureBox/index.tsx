import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { isValidElement, ReactNode } from 'react';

import { cn } from '@/src/utils/classname';
import { Paper } from '@/ui/components/paper';
import { LinkType, StyledBoxInterface } from '@/ui/types';

interface FeatureBoxProps
  extends Omit<
    StyledBoxInterface,
    'component' | 'isLead' | 'minHeight' | 'hasDecoration' | 'paddingDirection' | 'justify'
  > {
  iconProps: {
    icon: ReactNode;
    color: string;
    bgColor: string;
    shadow: string;
    shape: 'circle' | 'square' | 'rounded';
    size: 'sm' | 'md' | 'lg' | 'xl';
  };
  borderColor?: string;
  layout: 'stacked' | 'inline';
  title: string;
  description: string | ReactNode;
  link?: LinkType;
}

const boxVariants = cva('max-w-md sm:mx-auto gap-6 border-[var(--border-color)]', {
  variants: {
    layout: {
      stacked: 'flex flex-col',
      inline: 'grid grid-flow-col',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary:
        'border border-primary-500 bg-background text-primary-500 hover:bg-primary-500 hover:border-primary-500 hover:text-white',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    textAlign: {
      start: 'text-left',
      center: 'text-center',
      default: 'text-left',
    },
  },
  defaultVariants: {
    layout: 'stacked',
    align: 'start',
    textAlign: 'default',
  },
});

const iconVariants = cva('flex items-center justify-center', {
  variants: {
    shape: {
      circle: 'rounded-full',
      square: 'rounded-none',
      rounded: 'rounded-md',
    },
    size: {
      xs: 'w-6 h-6',
      sm: 'w-7 h-7 sm:w-8 sm:h-8',
      md: 'w-8 h-8 sm:w-9 sm:h-9',
      lg: 'w-9 h-9 sm:w-11 sm:h-11',
      xl: 'w-12 h-12 sm:w-16 sm:h-16',
      '2xl': 'w-16 h-16 sm:w-24 sm:h-24',
    },
    shadow: {
      default: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
    hasBg: {
      true: 'bg-[var(--bg-color)]',
      false: '',
    },
  },
  compoundVariants: [
    {
      hasBg: true,
      size: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      class: '[&>svg]:w-7/12 [&>svg]:h-7/12',
    },
    //false
    {
      hasBg: false,
      size: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      class: '[&>svg]:w-full [&>svg]:h-full',
    },
  ],
  defaultVariants: {
    shape: 'circle',
    size: 'md',
    shadow: 'default',
    hasBg: false,
  },
});

export const FeatureBox = ({
  iconProps,
  layout = 'stacked',
  align = 'center',
  shadow,
  radius,
  padding,
  border,
  background,
  borderColor,
  title,
  description,
  link,
}: FeatureBoxProps) => {
  // FeatureBox is a component that is used to display a feature in a card-like format.

  return (
    <Paper
      className={cn(
        boxVariants({
          layout: layout,
          textAlign: layout === 'stacked' ? align : 'start',
        }),
      )}
      shadow={shadow}
      padding={padding}
      paddingDirection={padding ? 'xy' : undefined}
      radius={radius}
      border={borderColor ? border : undefined}
      align={align}
      background={background}
      style={{
        '--border-color': borderColor,
      }}
    >
      {iconProps?.icon && (
        <span
          className={cn(
            'flex items-center justify-center ',
            iconVariants({
              shape: iconProps.shape,
              size: iconProps.size,
              shadow: iconProps.shadow,
              hasBg: Boolean(iconProps.bgColor),
            }),
          )}
          style={{
            '--bg-color': iconProps.bgColor,
            color: iconProps.color,
          }}
        >
          {iconProps?.icon}
        </span>
      )}
      <div className="flex flex-col">
        {isValidElement(title) ? (
          title
        ) : title ? (
          <span className="mb-2 text-xl font-bold leading-normal">{title}</span>
        ) : null}
        {isValidElement(description) ? (
          description
        ) : description ? (
          <span className="mb-3 text-sm text-gray-900">{description}</span>
        ) : null}
        {link?.href && (
          <Link {...link} className="text-link">
            {link?.title}
          </Link>
        )}
      </div>
    </Paper>
  );
};

FeatureBox.displayName = 'FeatureBox';
