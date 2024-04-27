import { cva } from 'class-variance-authority';

export const titleVariants = cva('text-lg font-semibold', {
  variants: {
    style: {
      default: 'text-gray-800',
      highlighted: 'text-primary-500 dark:text-gray-200',
    },
  },
  defaultVariants: {
    style: 'default',
  },
});
