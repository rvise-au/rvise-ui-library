import { cva } from 'class-variance-authority';
import { format } from 'date-fns';
import { isValidElement, ReactNode } from 'react';
import { cn } from '@/utils/classname';
import { Badge } from '@/ui/components/badge';
import { Card, CardContent } from '@/ui/components/card';
import { createElement } from '@/ui/components/headline';
import { Media } from '@/ui/components/media/Media';
import { IMediaBlock, LinkType, StyledBoxInterface } from '@/ui/types';
import { flexDirectionVariants, flexAlignmentVariants } from '@/utils/get-classes';
interface BlogCardProps
  extends Omit<StyledBoxInterface, 'component' | 'isLead' | 'minHeight' | 'hasDecoration' | 'paddingDirection'> {
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
  align = 'start',
  justify = 'start',
  layout,
  media,
  hideMedia,
  overlayMedia,
  date,
  tags,
  metaLayout = 'row',
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
  contentClassName,
}: BlogCardProps) => {
  // FeatureBox is a component that is used to display a feature in a card-like format.
  const hasMeta = date || tags?.length;
  return (
    <Card
      shadow={shadow}
      padding={padding || { base: 0 }}
      paddingDirection={padding ? 'xy' : undefined}
      radius={radius}
      border={borderColor ? border : undefined}
      align={align}
      justify={justify}
      layout={layout}
      background={background}
      className={cn(overlayMedia ? 'px-4 pb-4 pt-[46%]' : '')}
      style={{
        '--border-color': borderColor,
      }}
    >
      {overlayMedia && <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-[6]"></div>}
      {slotBefore}
      {!hideMedia && (
        <Media {...media} className={cn('w-2/5', media?.className, overlayMedia ? 'absolute inset-0' : '')} />
      )}
      <CardContent className={cn(contentClassName, flexAlignmentVariants({ align, justify }), 'z-10')}>
        {hasMeta && (
          <div className={cn('meta flex items-center gap-4', flexDirectionVariants({ direction: metaLayout }))}>
            {date && (
              <span className="date text-sm text-slate-600 dark:text-slate-400">{format(date, 'MMM dd yyyy')}</span>
            )}
            {tags?.length && (
              <div className={'tags flex  gap-2'}>
                {tags.map((tag) => (
                  <Badge size="md" key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}
        {title && <>{createElement(title, 'h3', 'mt-4')}</>}
        {excerpt ? (isValidElement(excerpt) ? excerpt : createElement(excerpt, 'p', 'mt-3 dark:text-slate-400')) : null}
      </CardContent>
      {slotAfter}
    </Card>
  );
};

BlogCard.displayName = 'BlogCard';
