import { cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/src/utils/classname';
import { StyledBox } from '@/ui/shared/styledBox';
import { Link, StyledBoxInterface } from '@/ui/types';

interface FeatureBoxProps
  extends Omit<
    StyledBoxInterface,
    'component' | 'isLead' | 'minHeight' | 'hasDecoration' | 'paddingDirection' | 'justify'
  > {
  iconProps: {
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    shadow: string;
    shape: 'circle' | 'square' | 'rounded';
    size: 'sm' | 'md' | 'lg' | 'xl';
  };
  borderColor?: string;
  layout: 'stacked' | 'inline';
  title: string;
  description: string | React.ReactNode;
  link?: Link;
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
      xs: 'w-12 h-12',
      sm: 'w-12 h-12 sm:w-16 sm:h-16',
      md: 'w-16 h-16 sm:w-16 sm:h-18',
      lg: 'w-20 h-20 sm:w-24 sm:h-24',
      xl: 'w-28 h-28 sm:w-32 sm:h-32',
    },
    shadow: {
      default: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
  },
  defaultVariants: {
    shape: 'circle',
    size: 'md',
    shadow: 'default',
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
}: FeatureBoxProps) => {
  // FeatureBox is a component that is used to display a feature in a card-like format.

  return (
    <StyledBox
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
            }),
          )}
          style={{
            backgroundColor: iconProps.bgColor,
            color: iconProps.color,
          }}
        >
          {iconProps?.icon}
        </span>
      )}
      <div>
        <h6 className="mb-3 text-xl font-bold leading-5">The deep ocean</h6>
        <p className="mb-3 text-sm text-gray-900">
          A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn even know we
          were calling him Big Bear. We never had the chance to.
        </p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a>
      </div>
    </StyledBox>
  );
};
