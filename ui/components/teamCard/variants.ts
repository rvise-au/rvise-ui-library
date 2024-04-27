import { cva } from 'class-variance-authority';

export const teamImageVariants = cva('', {
  variants: {
    size: {
      default: 'max-w-16 max-h-16',
      sm: 'max-w-24 max-h-24',
      md: 'max-w-32 max-h-32',
      lg: 'max-w-48 max-h-48',
      xl: 'max-w-64 max-h-64',
      full: 'w-full h-full',
    },
    shape: {
      default: '',
      square: 'rounded-none',
      rounded: 'rounded-md',
    },
  },
  defaultVariants: {
    size: 'default',
    shape: 'default',
  },
});

export const teamNameVariants = cva('', {
  variants: {
    size: {
      default: 'text-sm',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export const teamMetaVariants = cva('', {
  variants: {
    size: {
      default: 'text-xs',
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm',
      xl: 'text-md',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export const teamDescriptionVariants = cva('', {
  variants: {
    size: {
      default: 'text-sm',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-md',
      xl: 'text-md',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
