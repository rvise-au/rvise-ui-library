import { Text, Title, TitleOrder } from '@mantine/core';
import cx from 'clsx';
import { isValidElement } from 'react';

import { ITextBlock } from '@/types';

import styles from './styles/SectionTitle.module.css';

// SectionTitle is a layout component that takes a title, a label, and a subheading and renders them in a section.
export const SectionTitle = ({
  direction,
  slotBefore,
  slotAfter,
  alignment,
  label,
  heading,
  subheading,
  children,
  width = 'md',
}: ITextBlock) => {
  const _labelElement = isValidElement(label) ? (
    label
  ) : (
    <Text className={styles.label} size={label?.size || 'sm'}>
      {label?.text}
    </Text>
  );

  const _headingElement = isValidElement(heading) ? (
    heading
  ) : (
    <Title
      className={styles.title}
      order={heading?.order || (1 as TitleOrder)}
      size={heading?.size || 'h1'}
      c={heading?.color}
    >
      {heading?.text}
    </Title>
  );

  const _textElement = isValidElement(subheading) ? (
    subheading
  ) : (
    <Text className={styles.text} size={subheading?.size || 'sm'} color={subheading?.color}>
      {subheading?.text}
    </Text>
  );

  return (
    <div className={cx('title', styles.root)} data-direction={direction} data-alignment={alignment}>
      {slotBefore ? <div className={styles.slotBefore}>{slotBefore}</div> : null}
      <div className={cx(styles.inner, styles[`width_${width}`])} data-alignment={alignment}>
        {_labelElement}
        {_headingElement}
        {_textElement}
        {children}
      </div>
      {slotAfter ? <div className={styles.slotAfter}>{slotAfter}</div> : null}
    </div>
  );
};
