import cx from 'clsx';

import { TwoColumns } from '@/ui/sections/core/layouts/TwoColumns';
import { IMediaBlock, ITextBlock } from '@type/index';
import { Media } from '@ui/media/Media';
import { SectionTitle } from '@ui/title/SectionTitle';
import { getColumnWidth } from '@utils/get-column-width';

import styles from './styles/SplitWithImage.module.css';

type SplitWithImageProps = {
  isOffset?: boolean;
  isFull?: boolean;
  isAngled?: boolean;
  isReverse?: boolean;
  textBlock: ITextBlock;
  mediaBlock: IMediaBlock;
  columns: number[];
};

export const SplitWithImage = ({
  isOffset,
  isFull,
  isAngled,
  isReverse = false,
  textBlock,
  mediaBlock,
  columns,
}: SplitWithImageProps) => {
  const _textElement = <SectionTitle {...textBlock} />;
  const _mediaElement = <Media {...mediaBlock} />;
  return (
    <TwoColumns
      columns={columns}
      className={cx(isFull && styles.full, isOffset && styles.offset, isAngled && styles.angled)}
      style={{
        minHeight: '820px',
        '--media-col': isReverse
          ? `${getColumnWidth(columns?.[0])}vw`
          : `${getColumnWidth(columns?.[1])}vw`,
      }}
      left={
        <div
          className={cx(styles.left, isReverse ? styles.media : styles.text)}
          data-reverse={isReverse}
        >
          {isReverse ? _mediaElement : _textElement}
        </div>
      }
      right={
        <div
          className={cx(styles.right, !isReverse ? styles.media : styles.text)}
          data-reverse={isReverse}
        >
          {isReverse ? _textElement : _mediaElement}
        </div>
      }
    />
  );
};
