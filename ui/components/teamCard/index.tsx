import type { StyledBoxInterface } from '@/ui/types';
import type { ReactNode } from 'react';
import { isValidElement } from 'react';

import { Card, CardContent } from '@/ui/components/card';
import { cn } from '@/utils/classname';
import { flexAlignmentVariants } from '@/utils/get-classes';

import { Avatar, AvatarImage } from '../avatar';
import { teamDescriptionVariants, teamImageVariants, teamMetaVariants, teamNameVariants } from './variants';

type TeamCardProps = StyledBoxInterface & {
  name: string;
  position?: string;
  company?: string;
  image?: string;
  socialHandle?: string;
  socialLinks?: [];
  shape?: 'rounded' | 'square' | 'default';
  layout?: 'inline' | 'stacked';
  align?: 'start' | 'center';
  variant?: 'default' | 'overlay';
  description?: string | ReactNode;
  className?: string;
  size?: 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export const TeamCard = ({
  align = 'start',
  justify = 'start',
  layout = 'stacked',
  shadow,
  radius,
  padding,
  border,
  background,
  borderColor,
  name,
  description,
  position,
  image,
  company,
  variant,
  size = 'default',
  shape = 'default',
  socialLinks,
}: TeamCardProps) => {
  if (!name) return null;

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
      className={cn(variant === 'overlay' ? 'px-4 pb-4 pt-[46%]' : 'px-2')}
      style={{
        '--border-color': borderColor,
      }}
    >
      <div className="pt-1">
        <Avatar
          className={cn(
            'w-full h-full',
            teamImageVariants({
              size,
              shape,
            }),
          )}
        >
          <AvatarImage src={image} alt={name} />
        </Avatar>
      </div>
      <CardContent className={cn(flexAlignmentVariants({ align, justify }), 'z-10')}>
        <span className={cn('font-bold', teamNameVariants({ size }))}>{name}</span>
        {position && (
          <span className={cn('mb-2 text-xs text-gray-800 inline-flex', teamMetaVariants({ size }))}>
            {position} {company && <span className="text-slate-500 font-semibold">- {company}</span>}
          </span>
        )}
        {description ? (
          isValidElement(description) ? (
            description
          ) : (
            <span className={cn('text-gray-800', teamDescriptionVariants({ size }))}>{description}</span>
          )
        ) : null}
      </CardContent>
    </Card>
  );
};

TeamCard.displayName = 'TeamCard';
