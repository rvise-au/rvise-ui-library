import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/src/utils/classname';
import { getPaddingClasses } from '@/src/utils/get-padding-classes';
///import { getPaddingClasses } from '@/utils/get-classes';
import { omit } from '@/src/utils/omit';
import { Background } from '@/ui/shared/media/Background';
import { StyledBoxInterface } from '@/ui/types';

interface StyledBoxProps extends StyledBoxInterface {}

const boxVariants = cva('relative flex flex-col', {
  variants: {
    align: {
      default: 'items-start',
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    justify: {
      default: 'justify-start',
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    shadow: {
      default: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
      inner: 'shadow-inner',
      none: 'shadow-none',
    },
    border: {
      default: 'border-0',
      sm: 'border',
      md: 'border-2',
      lg: 'border-4',
    },
    radius: {
      default: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    align: 'default',
    justify: 'default',
    shadow: 'default',
    border: 'default',
    radius: 'default',
  },
});

export const StyledBox = forwardRef(
  (
    {
      children,
      radius,
      shadow,
      background,
      style,
      padding,
      hasDecoration = false,
      className,
      align,
      justify,
      minHeight,
      border,
      paddingDirection,
      ...others
    }: StyledBoxProps,
    ref,
  ) => {
    const isColor = background?.type === 'color';

    return (
      <div
        ref={ref}
        className={cn(
          `styleBox ${minHeight?.base ? 'min-h-[var(--min-height-base)]' : ''}`,
          boxVariants({
            align,
            justify,
            shadow,
            radius,
            border,
          }),
          padding && getPaddingClasses(padding, paddingDirection),
          [padding, paddingDirection],
          className,
        )}
        style={{
          background: isColor && background?.color,
          '--min-height-base': minHeight?.base,
          ...style,
        }}
        {...omit(others, ['textBlock', 'newWindow'])}
      >
        {children}
        {background && !isColor && <Background {...background} color={background?.color || '#fff'} />}
      </div>
    );
  },
);

StyledBox.displayName = 'StyledBox';
