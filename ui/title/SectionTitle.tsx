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
  classNames,
}: ITextBlock) => {
  const _labelElement =
    label &&
    (isValidElement(label) ? (
      label
    ) : (
      <Text
        component="span"
        className={cx(styles.label, classNames?.label)}
        size={label?.size || 'sm'}
        fw={label?.weight}
        c={label?.color}
      >
        {label?.text}
      </Text>
    ));

  const _headingElement =
    heading &&
    (isValidElement(heading) ? (
      heading
    ) : (
      <Title
        className={cx(styles.title, classNames?.heading)}
        order={heading?.order || (1 as TitleOrder)}
        size={heading?.size || 'h1'}
        c={heading?.color}
      >
        {heading?.text}
      </Title>
    ));

  const _textElement =
    subheading &&
    (isValidElement(subheading) ? (
      subheading
    ) : (
      <Text
        className={cx(styles.text, classNames?.subheading)}
        size={subheading?.size || 'sm'}
        c={subheading?.color}
      >
        {subheading?.text}
      </Text>
    ));

  return (
    <div
      className={cx('title', styles.root, classNames?.root)}
      data-direction={direction}
      data-alignment={alignment}
    >
      {slotBefore ? (
        <div className={cx(styles.slotBefore, classNames?.slotBefore)}>{slotBefore}</div>
      ) : null}
      <div className={cx(styles.inner, styles[`width_${width}`])} data-alignment={alignment}>
        {_labelElement}
        {_headingElement}
        {_textElement}
        {children}
      </div>
      {slotAfter ? (
        <div className={cx(styles.slotAfter, classNames?.slotAfter)}>{slotAfter}</div>
      ) : null}
    </div>
  );
};
