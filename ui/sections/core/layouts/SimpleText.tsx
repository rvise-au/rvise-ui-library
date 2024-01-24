import { Flex } from '@mantine/core';
import cx from 'clsx';

import { Alignment, IStyledBox, ITextBlock, MinHeight } from '@interface/index';
import { StyledBox } from '@ui/styledBox';
import { SectionTitle } from '@ui/title/SectionTitle';
import { getFlexPosition } from '@utils/get-flex-position';
import { getMinHeight } from '@utils/get-min-height';

import classes from './SimpleText.module.css';

interface SimpleTextProps extends IStyledBox {
  textBlock: ITextBlock;
  minHeight?: MinHeight;
  alignment?: Alignment;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  hasDecoration?: boolean;
}

export const SimpleText = ({
  textBlock,
  alignment = 'center/center',
  children,
  styles,
  minHeight,
  ...rest
}: SimpleTextProps) => (
  <StyledBox
    component={Flex}
    direction="column"
    className={cx('SimpleText', classes.root)}
    justify={getFlexPosition(alignment)[1]}
    align={getFlexPosition(alignment)[0]}
    style={{
      ...styles,
      ...(!!minHeight && getMinHeight(minHeight)),
    }}
    {...rest}
  >
    <SectionTitle
      {...textBlock}
      alignment={getFlexPosition(alignment)[0] as ITextBlock['alignment']}
    />
    {children}
  </StyledBox>
);
