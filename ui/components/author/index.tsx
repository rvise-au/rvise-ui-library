import { cn } from '@/utils/classname';
import { flexAlignmentVariants, flexDirectionVariants } from '@/utils/get-classes';

import { Avatar, AvatarFallback, AvatarImage } from '../avatar';

import type { AuthorProps } from '@/ui/types';

export const Author = ({
  variant,
  layout = 'row',
  align,
  image,
  name,
  position,
  size,
  company,
  socialHandle,
  className,
}: AuthorProps) => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div
      className={cn(
        'flex gap-4  justify-start',
        flexAlignmentVariants({
          alignment: align,
          align,
        }),
        flexDirectionVariants({ direction: layout }),
        className,
      )}
    >
      {variant !== 'textOnly' && (image || initials) && (
        <div className="pt-1">
          <Avatar className={'img'}>
            <AvatarImage src={image} alt="@shadcn" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </div>
      )}
      {variant !== 'imageOnly' && (
        <div className="details flex flex-col">
          {name && <span className="font-bold">{name}</span>}
          {position && (
            <span className="text-sm text-slate-600 inline-flex">
              {position} {company && <span className="text-slate-500 font-semibold">- {company}</span>}
            </span>
          )}
          {socialHandle && <span className="text-sm text-slate-600">@{socialHandle}</span>}
        </div>
      )}
    </div>
  );
};
