import { Box, FlexProps, polymorphicFactory, PolymorphicFactory, useProps } from '@mantine/core';
import cx from 'clsx';

import { IStyledBox } from '@interface/index';
import { Background } from '@ui/media/Background';
import { getPaddingStyles } from '@utils/get-padding-value';

import classes from './index.module.css';

interface StyledBoxProps extends IStyledBox, FlexProps {}

export type StyledBoxFactory = PolymorphicFactory<{
  props: StyledBoxProps;
  defaultComponent: 'div';
  defaultRef: HTMLParagraphElement;
  shadow: IStyledBox['shadow'];
  padding: IStyledBox['padding'];
  radius: IStyledBox['radius'];
  styles?: React.CSSProperties;
}>;

const defaultProps: Partial<IStyledBox> = {
  component: 'div',
};

export const StyledBox = polymorphicFactory<StyledBoxFactory>((_props, ref) => {
  const props = useProps('StyledBox', defaultProps, _props);

  const {
    component,
    children,
    radius,
    shadow,
    background,
    style,
    padding,
    hasDecoration,
    className,
    ...others
  } = props;
  const isColor = background?.type === 'color';
  return (
    <Box
      ref={ref}
      className={cx(className, classes.styled)}
      component={component}
      style={{
        background: isColor && background?.color,
        ...(radius && { borderRadius: `var(--mantine-radius-${radius})` }),
        ...(shadow && { boxShadow: `var(--mantine-shadow-${radius})` }),
        ...getPaddingStyles(padding, hasDecoration),
        ...style,
      }}
      {...others}
    >
      {children}
      {background && !isColor && <Background {...background} />}
    </Box>
  );
});

StyledBox.displayName = 'StyledBox';
