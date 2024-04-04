import * as React from 'react';

import { cn } from '@/src/utils/classname';
import { Background } from '@/ui/components/media/Background';
import { StyledBoxInterface } from '@/ui/types';
import {
  borderVariants,
  getPaddingVariants,
  radiusVariants,
  shadowVariants,
  flexDirectionVariants,
} from '@/utils/get-classes';

interface CardProps extends StyledBoxInterface {}

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, background, border, shadow, radius, padding, layout = 'col', ...rest }: CardProps, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative text-card-foreground flex gap-5',
        flexDirectionVariants({ direction: layout }),
        shadow && shadowVariants({ shadow }),
        radius && radiusVariants({ radius }),
        border && borderVariants({ border }),
        padding && getPaddingVariants(padding, 'xy'),
        className,
      )}
      {...rest}
    >
      {children}
      {background && <Background {...background} color={background?.color || ''} />}
    </div>
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5', padding && getPaddingVariants(padding, 'xy'), className)}
      {...props}
    />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  ),
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col', padding ? getPaddingVariants(padding, 'xy') : '', className)}
      {...props}
    />
  ),
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
