import { ReactNode } from 'react';

import { cn } from '@/src/utils/classname';
import { Paper } from '@/ui/components/paper';
import { LinkType, StyledBoxInterface } from '@/ui/types';

import { IconInset, IconQuote } from './IconQuote';
import { boxVariants, iconVariants, textVariants } from './variants';

interface TestimonialBoxProps
  extends Omit<
    StyledBoxInterface,
    'component' | 'isLead' | 'minHeight' | 'hasDecoration' | 'paddingDirection' | 'justify' | 'padding'
  > {
  quoteIconProps?: {
    showIcon: boolean;
    icon: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square' | 'rounded';
    bgColor?: string;
    color?: string;
    shadow?: string;
    variant: 'default' | 'offset' | 'inset';
  };
  borderColor?: string;
  variant: 'default' | 'accent' | 'lead';
  quote: string | ReactNode;
  link?: LinkType;
  author?: string;
  slotBefore?: ReactNode;
  slotAfter?: ReactNode;
}

export const TestimonialBox = ({
  //@ts-ignore
  quoteIconProps: {
    showIcon = false,
    icon: quoteIcon = <IconQuote />,
    size: quoteSize,
    shape: quoteShape,
    shadow: quoteShadow,
    bgColor: quoteBgColor,
    color: quoteColor,
    variant: quoteVariant,
  } = {},
  variant,
  align = 'center',
  shadow,
  radius,
  padding,
  border,
  background,
  borderColor,
  author: { avatar, name, image: authorImage, position, socialHandle } = {},
  link,
  slotBefore,
  slotAfter,
  quote,
}: TestimonialBoxProps) => {
  // FeatureBox is a component that is used to display a feature in a card-like format.
  const iconElement = quoteVariant === 'inset' ? <IconInset /> : quoteIcon;

  const iconComponent = (
    <span
      className={cn(
        'flex items-center justify-center ',
        iconVariants({
          shape: quoteShape,
          size: quoteSize,
          shadow: quoteVariant !== 'inset' ? quoteShadow : 'none',
          hasBg: Boolean(quoteVariant !== 'inset' && quoteBgColor),
          variant: quoteVariant,
        }),
      )}
      style={{
        '--bg-color': quoteBgColor,
        color: quoteColor,
      }}
    >
      {iconElement}
    </span>
  );
  return (
    <Paper
      className={cn(
        boxVariants({
          variant: variant,
          hasOffset: quoteVariant === 'offset',
          textAlign: align,
        }),
      )}
      shadow={shadow}
      padding={
        quoteVariant !== 'offset'
          ? {
              base: 6,
            }
          : undefined
      }
      paddingDirection={padding ? 'xy' : undefined}
      radius={radius}
      border={borderColor ? border : undefined}
      align={align}
      background={background}
      style={{
        '--border-color': borderColor,
      }}
    >
      {showIcon && iconComponent}
      <blockquote
        className={cn('flex flex-col gap-4', textVariants({ variant: variant, hasOffset: quoteVariant === 'offset' }))}
      >
        {slotBefore}
        {quote}
        {slotAfter}
      </blockquote>
      {name || avatar ? <span>Author</span> : null}
    </Paper>
  );
};

TestimonialBox.displayName = 'TestimonialBox';
