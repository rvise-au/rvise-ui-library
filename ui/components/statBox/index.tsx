import { cva } from 'class-variance-authority';
import { isValidElement, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/src/utils/classname';
import { StyledBox } from '@/ui/shared/styledBox';
import { LinkType, StyledBoxInterface } from '@/ui/types';

interface StatBoxProps
  extends Omit<
    StyledBoxInterface,
    'component' | 'isLead' | 'minHeight' | 'hasDecoration' | 'paddingDirection' | 'justify'
  > {
  iconProps: {
    icon: ReactNode;
    color: string;
    bgColor: string;
    shadow: string;
    shape: 'circle' | 'square' | 'rounded';
    size: 'sm' | 'md' | 'lg' | 'xl';
  };
  borderColor?: string;
  layout: 'stacked' | 'inline';
  title: string;
  description: string | ReactNode;
  link?: LinkType;
  number: {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    color?: string;
    text: string | number;
    unit?: string;
  };
}

const boxVariants = cva('max-w-md sm:mx-auto gap-6 border-[var(--border-color)]', {
  variants: {
    layout: {
      stacked: 'flex flex-col',
      inline: 'grid grid-flow-col',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary:
        'border border-primary-500 bg-background text-primary-500 hover:bg-primary-500 hover:border-primary-500 hover:text-white',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    textAlign: {
      start: 'text-left [&_.info]:items-start',
      center: 'text-center [&_.info]:items-center',
      default: 'text-left',
    },
  },
  defaultVariants: {
    layout: 'stacked',
    //@ts-ignore
    align: 'start',
    textAlign: 'default',
  },
});

const iconVariants = cva('flex items-center justify-center', {
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
  },
  compoundVariants: [
    {
      hasBg: true,
      size: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      class: '[&>svg]:w-7/12 [&>svg]:h-7/12',
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
  },
});

export const StatBox = ({
  //@ts-ignore
  iconProps: { icon, shape, size, shadow, bgColor, color } = {},
  layout = 'stacked',
  align = 'center',
  shadow: boxShadow,
  radius,
  padding,
  border,
  background,
  borderColor,
  //@ts-ignore
  number: { text, unit } = {},
  title,
  description,
  link,
}: StatBoxProps) => {
  // FeatureBox is a component that is used to display a feature in a card-like format.

  const renderElementOrText = (element: string | ReactNode) => {
    return isValidElement(element) ? element : <span className="mb-3 text-sm text-gray-900">{element}</span>;
  };

  return (
    <StyledBox
      className={cn(
        boxVariants({
          layout: layout,
          //@ts-ignore
          textAlign: layout === 'stacked' ? align : 'start',
        }),
      )}
      shadow={boxShadow}
      padding={padding}
      paddingDirection={padding ? 'xy' : undefined}
      radius={radius}
      border={borderColor ? border : undefined}
      align={align}
      background={background}
      style={{
        //@ts-ignore
        '--border-color': borderColor,
      }}
    >
      {icon && (
        <span
          className={cn(
            'flex items-center justify-center ',
            iconVariants({
              shape: shape,
              size: size,
              //@ts-ignore
              shadow: shadow,
              hasBg: Boolean(bgColor),
            }),
          )}
          style={{
            //@ts-ignore
            '--bg-color': bgColor,
            color: color,
          }}
        >
          {icon}
        </span>
      )}
      <div className="info flex flex-col">
        {text && (
          <span className="text-4xl font-bold">
            {text}
            {unit}
          </span>
        )}
        {renderElementOrText(title)}
        {renderElementOrText(description)}
        {link?.href && (
          <Link {...link} className="text-link">
            {link?.title}
          </Link>
        )}
      </div>
    </StyledBox>
  );
};

StatBox.displayName = 'StatBox';
