import Link from 'next/link';

import { cn } from '@/src/utils/classname';
import { Button } from '@/ui/shared/buttons/Button';

type ButtonGroupProps = {
  buttons: any[];
  settings: {
    alignment: 'left' | 'center' | 'right';
    layout: 'inline' | 'stacked';
  };
};

export const ButtonGroup = ({ buttons, settings, className }: ButtonGroupProps) => {
  const { alignment, layout } = settings || {};

  if (!buttons.length) return null;

  return (
    <div
      className={cn(
        `buttons grid grid-flow-row-dense ${layout === 'inline' ? `grid-flow-col auto-cols-max` : 'grid-cols-1'} gap-4`,
        className,
      )}
    >
      {buttons?.map((item: any) => {
        const { _key, link, size, variant, radius } = item;
        const buttonProps = {
          size: size || 'md',
          variant: variant || 'default',
          radius: radius || 'xl',
          ...(link?.href ? { asChild: true } : {}),
        };
        return (
          <Button key={_key} {...buttonProps}>
            {link?.href ? <Link {...link}>{link?.title}</Link> : link?.title}
          </Button>
        );
      })}
    </div>
  );
};
