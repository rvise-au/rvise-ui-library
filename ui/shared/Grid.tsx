import { Fragment } from 'react';

import { cn } from '@/src/utils/classname';

const Grid = ({
  items,
  columns = {
    lg: 3,
    md: 2,
    sm: 1,
  },
  columnSpacing,
  styles,
  className,
  hasCarousel,
}: ContentSectionProps) => {
  if (!items) return null;

  const renderItems = () => (
    <div
      style={{
        ...styles,
        '--sm-cols:': columns?.sm,
        '--md-cols:': columns?.md,
        '--lg-cols:': columns?.lg,
      }}
      className={cn(
        'relative grid gap-10 sm:gap-6 lg:gap-8',
        `grid-cols-[var(--sm-cols)] md:grid-cols-[var(--md-cols)] lg:grid-cols-[var(--lg-cols)]`,
        className,
      )}
    >
      {items.map((item) => (
        <Fragment key={item?._id || item?._key}>{item}</Fragment>
      ))}
    </div>
  );
  return <>{hasCarousel ? <div>{items}</div> : renderItems()}</>;
};

Grid.displayName = 'Grid';

export { Grid };
