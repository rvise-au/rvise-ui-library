import { Flex } from '@mantine/core';
import cx from 'clsx';

import { Alignment, IMediaBlock, ITextBlock } from '../../../../types';
import { getFlexPosition } from '../../../../utils/get-flex-position';
import { Media } from '../../../media/Media';
import { SectionTitle } from '../../../title/SectionTitle';
import styles from './StackedWithMedia.module.css';

type SimpleTextProps = {
  textBlock: ITextBlock;
  minHeight: string;
  alignment: Alignment;
  mediaBlock: IMediaBlock;
};

export const StackedWithMedia = ({
  textBlock,
  mediaBlock,
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
    <Media {...mediaBlock} />
  </Flex>
);
