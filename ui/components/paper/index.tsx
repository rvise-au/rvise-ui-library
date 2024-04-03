import { forwardRef } from 'react';

import { cn } from '@/src/utils/classname';
import { omit } from '@/src/utils/omit';
import { Background } from '@/ui/components/media/Background';
import { StyledBoxInterface } from '@/ui/types';
import {
  borderVariants,
  flexAlignmentVariants,
  getPaddingVariants,
  radiusVariants,
  shadowVariants,
} from '@/utils/get-classes';

interface PaperProps extends StyledBoxInterface {}

export const Paper = forwardRef(
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
    }: PaperProps,
    ref,
  ) => {
    const isColor = background?.type === 'color';

    return (
      <div
        ref={ref}
        className={cn(
          `styleBox ${minHeight?.base ? 'min-h-[var(--min-height-base)]' : ''}`,
          'relative flex flex-col',
          align || justify ? flexAlignmentVariants({ align, justify }) : '',
          shadow && shadowVariants({ shadow }),
          radius && radiusVariants({ radius }),
          border && borderVariants({ border }),
          padding && getPaddingVariants(padding, paddingDirection),
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

Paper.displayName = 'Paper';
