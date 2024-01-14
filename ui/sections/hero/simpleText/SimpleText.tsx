import { Flex } from '@mantine/core';
import cx from 'clsx';

import { Alignment, ITextBlock } from '../../../../types';
import { getFlexPosition } from '../../../../utils/get-flex-position';
import { SectionTitle } from '../../../title/SectionTitle';
import styles from './SimpleText.module.css';

type SimpleTextProps = {
  textBlock: ITextBlock;
  minHeight: string;
  alignment: Alignment;
};

export const SimpleText = ({
  textBlock,
  minHeight,
  alignment = 'center/center',
}: SimpleTextProps) => (
  <Flex
    direction="column"
    className={cx('SimpleText', styles.root)}
    justify={getFlexPosition(alignment)[1]}
    align={getFlexPosition(alignment)[0]}
    style={{
      '--min-height-lg': minHeight,
    }}
  >
    <SectionTitle {...textBlock} alignment={getFlexPosition(alignment)[0]} />
  </Flex>
);
