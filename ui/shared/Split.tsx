import { cva } from 'class-variance-authority';
import { cloneElement, isValidElement } from 'react';

import { cn } from '@/src/utils/classname';
import { IStyledBox } from '@/types/index';
import { StyledBox } from '@/ui/shared/styledBox';

const colVariant = cva('relative col-span-12', {
  variants: {
    col: {
      1: 'md:col-span-1',
      2: 'md:col-span-2',
      3: 'md:col-span-3',
      4: 'md:col-span-4',
      5: 'md:col-span-5',
      6: 'md:col-span-6',
      7: 'md:col-span-7',
      8: 'md:col-span-8',
      9: 'md:col-span-9',
      10: 'md:col-span-10',
      11: 'md:col-span-11',
      12: 'md:col-span-12',
    },
  },
  defaultVariants: {
    col: 12,
  },
});

interface TwoColumnsProps extends IStyledBox {
  left: React.ReactNode;
  right: React.ReactNode;
  columns?: number[];
  className?: string;
  style?: React.CSSProperties;
  dataAttributes?: Record<string, unknown>;
  slotBefore?: React.ReactNode;
  slotAfter?: React.ReactNode;
  isLeadColumn?: boolean;
}

// TwoColumns is a layout component that takes two React nodes and renders them side by side.
export const Split = ({ left, right, columns = [6, 6], className, style, ...rest }: TwoColumnsProps) => {
  const renderColumn = (child: React.ReactNode, column: number) => {
    return (
      isValidElement(child) &&
      cloneElement(child, {
        className: cn(
          colVariant({
            col: column,
          }),
          'self-stretch',
          child.props?.className,
        ),
        style: {
          '--md-col-left': column,
        },
      })
    );
  };
  return (
    <StyledBox style={style} {...rest} className={cn('grid grid-cols-12 splitGap', className)}>
      {renderColumn(left, columns[0])}
      {renderColumn(right, columns[1])}
    </StyledBox>
  );
};
