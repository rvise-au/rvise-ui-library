import cx from 'clsx';

import { IMediaBlock, IStyledBox, ITextBlock, MinHeight } from '@interface/index';
import { Media } from '@ui/media/Media';
import { TwoColumns } from '@ui/sections/core/layouts/TwoColumns';
import { StyledBox } from '@ui/styledBox/StyledBox';
import { SectionTitle } from '@ui/title/SectionTitle';
import { getColumnWidth } from '@utils/get-column-width';
import { getMinHeight } from '@utils/get-min-height';

import styles from './SplitMedia.module.css';

interface SplitMediaProps extends IStyledBox {
  isOffset?: boolean;
  isFull?: boolean;
  isAngled?: boolean;
  isReverse?: boolean;
  textBlock: ITextBlock;
  mediaBlock: IMediaBlock;
  columns: number[];
  styles?: React.CSSProperties;
  minHeight?: MinHeight;
  textBlockProps?: IStyledBox;
  mediaBlockProps?: IStyledBox;
  slotBefore?: React.ReactNode;
  slotAfter?: React.ReactNode;
}

export const SplitMedia = ({
  isOffset,
  isFull,
  isAngled,
  isReverse = false,
  textBlock,
  mediaBlock,
  textBlockProps,
  mediaBlockProps,
  columns,
  minHeight,
  slotBefore,
  slotAfter,
  ...rest
}: SplitMediaProps) => {
  const _textElement = <SectionTitle {...textBlock} />;
  const _mediaElement = <Media {...mediaBlock} />;
  const leftProps = isReverse ? mediaBlockProps : textBlockProps;
  const rightProps = isReverse ? textBlockProps : mediaBlockProps;
  return (
    <TwoColumns
      columns={columns}
      slotAfter={slotAfter}
      slotBefore={slotBefore}
      className={cx(
        styles.root,
        isFull && styles.full,
        isOffset && styles.offset,
        isAngled && styles.angled
      )}
      style={{
        ...styles,
        ...(!!minHeight && getMinHeight(minHeight)),
        '--media-col': isReverse
          ? `${getColumnWidth(columns?.[0])}vw`
          : `${getColumnWidth(columns?.[1])}vw`,
      }}
      left={
        <StyledBox
          className={cx(styles.left, isReverse ? styles.media : styles.text)}
          data-reverse={isReverse}
          {...leftProps}
        >
          {isReverse ? _mediaElement : _textElement}
        </StyledBox>
      }
      right={
        <StyledBox
          className={cx(styles.right, !isReverse ? styles.media : styles.text)}
          data-reverse={isReverse}
          {...rightProps}
        >
          {isReverse ? _textElement : _mediaElement}
        </StyledBox>
      }
      {...rest}
    />
  );
};
