import cx from 'clsx';

import { IStyledBox, ITextBlock, MinHeight } from '@interface/index';
import { TwoColumns } from '@ui/sections/core/layouts/TwoColumns';
import { StyledBox } from '@ui/styledBox/StyledBox';
import { SectionTitle } from '@ui/title/SectionTitle';
import { getColumnWidth } from '@utils/get-column-width';
import { getMinHeight } from '@utils/get-min-height';

import styles from './SplitMedia.module.css';

interface SplitProps extends IStyledBox {
  isOffset?: boolean;
  isFull?: boolean;
  isAngled?: boolean;
  isReverse?: boolean;
  textBlock: ITextBlock;
  children: React.ReactNode;
  columns: number[];
  styles?: React.CSSProperties;
  minHeight?: MinHeight;
  textBlockProps?: IStyledBox;
  childrenBlockProps?: IStyledBox;
}

export const Split = ({
  isOffset,
  isFull,
  isAngled,
  isReverse = false,
  textBlock,
  textBlockProps,
  children,
  childrenBlockProps,
  columns,
  minHeight,
}: SplitProps) => {
  const _textElement = <SectionTitle {...textBlock} />;
  const _mediaElement = children;
  const leftProps = isReverse ? childrenBlockProps : textBlockProps;
  const rightProps = isReverse ? textBlockProps : childrenBlockProps;
  return (
    <TwoColumns
      columns={columns}
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
    />
  );
};

Split.displayName = 'Split';
