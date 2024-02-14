import { Stack } from '@mantine/core';

import { Alignment, IStyledBox, ITextBlock, MinHeight } from '@interface/index';
import { StyledBox } from '@ui/styledBox/StyledBox';
import { SectionTitle } from '@ui/title/SectionTitle';
import { getFlexPosition } from '@utils/get-flex-position';
import { getMinHeight } from '@utils/get-min-height';

interface SimpleTextProps extends IStyledBox {
  textBlock: ITextBlock;
  minHeight?: MinHeight;
  alignment?: Alignment;
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  hasDecoration?: boolean;
  slotBefore?: React.ReactNode;
  slotAfter?: React.ReactNode;
}

export const SimpleText = ({
  textBlock,
  alignment = 'center/center',
  children,
  styles,
  minHeight,
  slotBefore,
  slotAfter,
  ...rest
}: SimpleTextProps) => (
  <StyledBox
    component={Stack}
    direction="column"
    justify={getFlexPosition(alignment)[1]}
    align={getFlexPosition(alignment)[0]}
    style={{
      ...styles,
      ...(!!minHeight && getMinHeight(minHeight)),
    }}
    {...rest}
  >
    {slotBefore}
    <SectionTitle
      {...textBlock}
      alignment={alignment?.split('/')?.[0] as ITextBlock['alignment']}
    />
    {children}
    {slotAfter}
  </StyledBox>
);
