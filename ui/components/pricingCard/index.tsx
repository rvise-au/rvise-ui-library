import type { StyledBoxInterface } from '@/ui/types';
import type { ReactNode } from 'react';
import { isValidElement } from 'react';

import { Badge } from '@/ui/components/badge';
import { Button } from '@/ui/components/buttons/Button';
import { Card, CardContent, CardHeader } from '@/ui/components/card';
import { IconText } from '@/ui/components/iconText';
import { ImageProps, LinkType } from '@/ui/types';
import { cn } from '@/utils/classname';
import { useCurrencyHelper } from '@/utils/currencyHelper';
import { flexAlignmentVariants } from '@/utils/get-classes';

import { titleVariants } from './variants';

type PricingCardProps = StyledBoxInterface & {
  title?: string;
  description?: string | ReactNode;
  price: number | string;
  isPopular?: boolean;
  isHighlighted?: boolean;
  onSelect?: () => void;
  link?: LinkType;
  featureList?: ReactNode | string[];
  featuredListTitle?: string;
  featureListVariant?: 'default' | 'decorated';
  featureListIcon?: ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  version?: '';
  image?: ImageProps;
  hasInterval?: boolean;
  interval?: 'week' | 'month' | 'year';
  order?: string[];
  classNames?: {
    root?: string;
    header?: string;
    content?: string;
  };
};

export const PricingCard = ({
  shadow,
  radius,
  padding,
  border,
  background,
  borderColor,
  title,
  description,
  price,
  image,
  align,
  justify,
  isPopular,
  isHighlighted,
  hasInterval = true,
  interval = 'week',
  featureList,
  featuredListTitle,
  featureListIcon,
  classNames,
  order = ['title', 'description', 'price', 'button', 'featureList'],
}: PricingCardProps) => {
  const { root: rootClassName, header: headerClassName, content: contentClassName } = classNames || {};

  const { withoutTrailingZeros } = useCurrencyHelper({
    currency: 'AUD',
    amount: price,
  });

  const priceWithoutTrailingZeros = typeof price === 'number' ? withoutTrailingZeros() : price;

  if (!price) return null;

  const featuredListElement = featureList && (
    <div>
      {featuredListTitle && <span className="text-md font-bold mb-2 inline-block">{featuredListTitle}</span>}
      <ul className="space-y-2">
        {featureList?.map((item) => <IconText component="li" text={item} icon={featureListIcon} />)}
      </ul>
    </div>
  );

  const buttonElement = (
    <Button size="lg" className="w-full">
      Get this plan
    </Button>
  );

  return (
    <Card
      shadow={shadow}
      padding={padding || { base: 0 }}
      paddingDirection={padding ? 'xy' : undefined}
      radius={radius}
      border={borderColor ? border : undefined}
      align={align}
      justify={justify}
      layout="stacked"
      background={background}
      className={cn('p-10 gap-5', rootClassName)}
      style={{
        '--border-color': borderColor,
      }}
    >
      <CardHeader className={cn('gap-3', headerClassName)}>
        <div className="flex flex-row justify-between">
          {title && (
            <span
              className={cn(
                titleVariants({
                  style: isHighlighted ? 'highlighted' : 'default',
                }),
              )}
            >
              {title}
            </span>
          )}
          {isPopular && <Badge variant="secondary">Most Popular</Badge>}
        </div>
        {description ? (
          isValidElement(description) ? (
            description
          ) : (
            <span className={cn('text-slate-500 text-md')}>{description}</span>
          )
        ) : null}
      </CardHeader>
      <CardContent className={cn(flexAlignmentVariants({ align, justify }), 'z-10 gap-5', contentClassName)}>
        {price && (
          <span className="flex flex-row  items-end">
            <span className="text-4xl font-bold">{priceWithoutTrailingZeros}</span>
            {hasInterval && <span className="font-semibold text-sm text-slate-500 leading-6">/{interval}</span>}
          </span>
        )}
        {buttonElement}
        {featuredListElement}
      </CardContent>
    </Card>
  );
};

PricingCard.displayName = 'PricingCard';
