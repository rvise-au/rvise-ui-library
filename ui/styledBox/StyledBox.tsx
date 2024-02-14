import { Box, FlexProps } from '@mantine/core';
import cx from 'clsx';
import { forwardRef } from 'react';

import { IStyledBox } from '@interface/index';
import { Background } from '@ui/media/Background';
import { generateUniqueId } from '@utils/generate-unique-id';
import { getInlineStyles } from '@utils/get-inline-styles';

import classes from './StyledBox.module.css';

interface StyledBoxProps extends IStyledBox, FlexProps {}

export const StyledBox = forwardRef((props: StyledBoxProps, ref) => {
  const {
    component,
    children,
    radius,
    shadow,
    background,
    style,
    padding,
    hasDecoration = false,
    className,
    align,
    justify,
    ...others
  } = props;
  const uniqueClass = generateUniqueId();
  const isColor = background?.type === 'color';

  return (
    <>
      <style>
        {`
        .styleBox_${uniqueClass} {
          ${radius ? `border-radius: var(--mantine-radius-${radius});` : ''}
          ${shadow ? `box-shadow: var(--mantine-shadow-${shadow});` : ''}
          ${getInlineStyles({
            padding,
            hasDecor: hasDecoration,
            ...(align && { align: align || 'center' }),
            ...(justify && { justify: justify || 'flex-start' }),
          })}
        }
      `}
      </style>
      <Box
        ref={ref}
        className={cx('styleBox', classes.styled, `styleBox_${uniqueClass}`, className)}
        component={component}
        style={{
          // @ts-ignore
          background: isColor && background?.color,
          ...style,
        }}
        {...others}
      >
        {children}
        {background && !isColor && <Background {...background} />}
      </Box>
    </>
  );
});

StyledBox.displayName = 'StyledBox';
