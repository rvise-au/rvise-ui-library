import { cva } from 'class-variance-authority';
import { format } from 'date-fns';
import { isValidElement, ReactNode } from 'react';

import { Badge } from '@/ui/components/badge';
import { Card, CardContent } from '@/ui/components/card';
import { createElement } from '@/ui/components/headline';
import { Media } from '@/ui/components/media/Media';
import { IMediaBlock, LinkType, StyledBoxInterface } from '@/ui/types';

interface BlogCardProps
  extends Omit<
    StyledBoxInterface,
    'component' | 'isLead' | 'minHeight' | 'hasDecoration' | 'paddingDirection' | 'justify' | 'padding'
  > {
  borderColor?: string;
  layout: 'default' | 'inline';
  quote: string | ReactNode;
  link?: LinkType;
  author?: string;
  slotBefore?: ReactNode;
  slotAfter?: ReactNode;
  media?: IMediaBlock;
  hideMedia?: boolean;
  overlayMedia?: boolean;
}

export const boxVariants = cva('max-w-xl sm:mx-auto border-[var(--border-color)] relative', {
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

export const BlogCard = ({
  //@ts-ignore
  align = 'left',
  variant,
  media,
  date,
  tags,
  metaLayout,
  shadow,
  radius,
  padding,
  border,
  background,
  borderColor,
  author: { avatar, name } = {},
  link,
  slotBefore,
  slotAfter,
  title,
  excerpt,
}: BlogCardProps) => {
  // FeatureBox is a component that is used to display a feature in a card-like format.
  const hasMeta = date || tags?.length;
  return (
    <Card
      shadow={shadow}
      padding={padding || { base: 6 }}
      paddingDirection={padding ? 'xy' : undefined}
      radius={radius}
      border={borderColor ? border : undefined}
      align={align}
      background={background}
      style={{
        '--border-color': borderColor,
      }}
    >
      {slotBefore}
      <Media {...media} />
      <CardContent>
        {hasMeta && <div className="meta">{date && <span>{format(date, 'MMM dd yyyy')}</span>}</div>}
        {tags?.length && (
          <div className="tags flex flex-cols gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {title && <>{createElement(title, 'h3', 'mt-1')}</>}
        {excerpt ? (isValidElement(excerpt) ? excerpt : createElement(excerpt, 'p', 'mt-3')) : null}
      </CardContent>
      {slotAfter}
    </Card>
  );
};

BlogCard.displayName = 'BlogCard';
