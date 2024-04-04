import { cva } from 'class-variance-authority';

export const flexDirectionVariants = cva('', {
  variants: {
    direction: {
      col: 'flex-col',
      row: 'flex-row',
    },
  },
  defaultVariants: {
    direction: 'col',
  },
});

export const shadowVariants = cva('', {
  variants: {
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
  },
  defaultVariants: {
    shadow: 'default',
  },
});

export const flexAlignmentVariants = cva('', {
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
  },
  defaultVariants: {
    align: 'default',
    justify: 'default',
  },
});

export const radiusVariants = cva('', {
  variants: {
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
    radius: 'default',
  },
});

export const borderVariants = cva('', {
  variants: {
    border: {
      default: 'border-0',
      sm: 'border',
      md: 'border-2',
      lg: 'border-4',
    },
  },
  defaultVariants: {
    border: 'default',
  },
});

export const getPaddingVariants = (padding, direction) => {
  const { base, sm, md, lg } = padding;

  const getClasses = (size, prefix) => (size ? `${prefix}-${size}` : '');

  const classes = [];
  const defaultSize = base || sm;
  const sizes = { defaultSize, sm, md, lg };
  if (!direction) direction = 'xy';

  const prefixes =
    direction === 'xy'
      ? ['p', 'sm:p', 'md:p', 'lg:p']
      : [`p${direction}`, `sm:p${direction}`, `md:p${direction}`, `lg:p${direction}`];

  Object.keys(sizes).forEach((key, i) => {
    const size = sizes[key];
    if (size) {
      classes.push(getClasses(size, prefixes[i]));
    }
  });
  return classes.join(' ');
};
