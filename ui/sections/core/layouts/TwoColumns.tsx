import cx from 'clsx';
import { cloneElement, isValidElement } from 'react';

import { IStyledBox } from '@interface/index';
import { StyledBox } from '@ui/styledBox/StyledBox';

import styles from './TwoColumns.module.css';

interface TwoColumnsProps extends IStyledBox {
  left: React.ReactNode;
  right: React.ReactNode;
  columns?: number[];
  className?: string;
  style?: React.CSSProperties;
  dataAttributes?: Record<string, unknown>;
  slotBefore?: React.ReactNode;
  slotAfter?: React.ReactNode;
}

// TwoColumns is a layout component that takes two React nodes and renders them side by side.
export const TwoColumns = ({
  left,
  right,
  columns = [6, 6],
  className,
  style,
  dataAttributes,
  slotBefore,
  slotAfter,
  ...rest
}: TwoColumnsProps) => (
  <StyledBox className={cx(styles.root, className)} style={style} {...dataAttributes} {...rest}>
    {slotBefore}
    {left &&
      isValidElement(left) &&
      // Clone the leftColumn element and add a className to it for styling
      cloneElement(left, {
        className: cx(styles.leftColumn, styles[`col_${columns[0]}`], left.props?.className),
      })}
    {right &&
      isValidElement(right) &&
      // Clone the rightColumn element and add a className to it for styling
      cloneElement(right, {
        className: cx(styles.rightColumn, styles[`col_${columns[1]}`], right.props?.className),
      })}
    {slotAfter}
  </StyledBox>
);
