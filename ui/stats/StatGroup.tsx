import { Grid, GridColProps, GridProps } from '@mantine/core';

import classes from './StatGroup.module.css';
import { StatItem, StatProps } from './StatItem';

type StatGroupProps = {
  items: StatProps[];
  gridProps?: GridProps;
  colProps?: GridColProps;
  hasBorder?: boolean;
  ignoreFirst?: boolean;
  ignoreLast?: boolean;
};

export const StatGroup = ({
  items,
  gridProps,
  colProps,
  ignoreFirst,
  ignoreLast,
}: StatGroupProps) => (
  <Grid {...gridProps} className={classes.root}>
    {items.map((item, index) => (
      <Grid.Col
        key={item?.id || index}
        className={classes.item}
        {...colProps}
        data-ignore-line={
          (index === 0 && ignoreFirst) || (index === items.length - 1 && ignoreLast)
            ? 'true'
            : undefined
        }
      >
        <StatItem key={index} {...item} />
      </Grid.Col>
    ))}
  </Grid>
);
