import { cva, VariantProps } from 'class-variance-authority';
import cx from 'clsx';
import { isValidElement, ReactElement, ReactNode } from 'react';

import { cn } from '@/src/utils/classname';
import { ITextBlock } from '@/types';

import { Paper } from '@/ui/components/paper';

const labelClasses =
  'group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 px-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600';

interface ElementProps {
  text?: string;
  size?: string;
  color?: string;
  weight?: string;
  order?: number;
  [key: string]: any;
}

export const createElement = (
  element: ElementProps | ReactElement | any,
  defaultSize: string,
  classNames?: string,
): ReactNode => {
  if (!element) return null;

  if (isValidElement(element)) return element;

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'h1':
        return 'text-h1 leading-none';
      case 'h2':
        return 'text-h2 leading-none';
      case 'h3':
        return 'text-h3 leading-none';
      case 'h4':
        return 'text-h4 leading-tight';
      case 'h5':
        return 'text-h5 leading-tight';
      case 'h6':
        return 'text-h6 leading-tight';
      case 'md':
        return 'text-base';
      case 'lg':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  const getTextWeight = (weight: string) => {
    switch (weight) {
      case 'bold':
        return 'font-bold';
      case 'semibold':
        return 'font-semibold';
      case 'medium':
        return 'font-medium';
      case 'light':
        return 'font-light';
      default:
        return 'font-normal';
    }
  };

  const { text, size = defaultSize, tag = 'span', color, weight, order, ...rest } = element;

  if (!text) return null;
  const Component = tag;

  return (
    <Component
      className={cx(
        `${color ? 'text-[var(--color)]' : ''}`,
        cn(`${getSizeClass(size)} ${getTextWeight(weight)}`, classNames),
      )}
      style={{
        '--color': color,
      }}
    >
      {text}
    </Component>
  );
};

const headingVariants = cva('relative flex gap-5', {
  variants: {
    direction: {
      default: 'flex-col',
      inline: 'flex-row',
    },
    align: {
      start: 'items-start',
      center: 'items-center text-center',
      end: 'items-end',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    },
    alignment: {
      default: 'items-start justify-start',
      leftCenter: 'items-start justify-center',
      leftBottom: 'items-start justify-end',
      centerTop: 'items-center justify-start',
      centerCenter: 'items-center justify-center',
      centerBottom: 'items-center justify-end',
      rightTop: 'items-end justify-start',
      rightCenter: 'items-end justify-center',
      rightBottom: 'items-end justify-end',
      justifyCenter: 'items-start justify-between',
    },
  },
  defaultVariants: {
    direction: 'default',
    justify: 'start',
    align: 'start',
  },
});

export interface HeadingProps extends ITextBlock, VariantProps<typeof headingVariants> {}

// SectionTitle is a layout component that takes a title, a label, and a subheading and renders them in a section.
export const Headline = ({
  label,
  heading,
  subheading,
  children,
  classNames,
  direction,
  align,
  justify,
  alignment,
  slotBefore,
  slotAfter,
  animationProps,
  ...rest
}: HeadingProps) => {
  const _labelElement = createElement(label, 'sm', (classNames = label?.text ? labelClasses : ''));
  const _headingElement = createElement(heading, 'h1', classNames?.heading);
  const _textElement = createElement(subheading, 'sm', classNames?.subheading);
  if (!Boolean(slotBefore) && !Boolean(heading?.text) && !Boolean(subheading?.props?.value) && !Boolean(slotAfter)) {
    return;
  }

  return (
    <Paper
      {...animationProps?.props}
      align={align}
      justify={justify}
      className={cn(
        'title',
        headingVariants({
          direction,
        }),
        classNames?.root,
      )}
      {...rest}
    >
      {slotBefore && <div className={cx('slotBefore', classNames?.slotBefore)}>{slotBefore}</div>}
      <div
        className={cn(
          'relative flex gap-5 flex-col',
          direction !== 'inline'
            ? headingVariants({
                direction,
                align,
                justify,
              })
            : 'items-start',
        )}
      >
        {_labelElement}
        {_headingElement}
        {_textElement}
        {children}
      </div>
      {slotAfter && <div className={cx('slotAfter', classNames?.slotAfter)}>{slotAfter}</div>}
    </Paper>
  );
};

Headline.displayName = 'SectionHeadline';
