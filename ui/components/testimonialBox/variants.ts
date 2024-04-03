import { cva } from 'class-variance-authority';

export const boxVariants = cva('max-w-xl sm:mx-auto gap-6 border-[var(--border-color)] relative', {
  variants: {
    variant: {
      lead: '',
      default: '',
      accent: '',
    },
    textAlign: {
      start: 'text-left',
      center: 'text-center',
      default: 'text-left',
    },
    hasOffset: {
      true: 'pt-4 mt-6',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: ['lead', 'accent', 'default'],
      class: 'flex flex-col',
    },
  ],
  defaultVariants: {
    variant: 'default',
    textAlign: 'default',
    hasOffset: false,
  },
});

export const textVariants = cva('text-[var(--text-color)]', {
  variants: {
    variant: {
      accent: 'text-lg',
      lead: 'text-xl font-bold',
      default: 'text-md',
    },
    hasOffset: {
      true: 'p-6',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    hasOffset: false,
  },
});

export const iconVariants = cva('flex items-center justify-center', {
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
    variant: {
      default: '',
      lead: 'text-lg text-bold',
      offset: 'absolute top-0 start-0 -translate-y-2/4 ml-6',
    },
  },
  compoundVariants: [
    {
      hasBg: true,
      size: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      class: '[&>svg]:w-1/2 [&>svg]:h-1/2',
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
    variant: 'default',
  },
});
