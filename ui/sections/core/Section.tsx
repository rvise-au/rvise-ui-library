import { Box } from '@mantine/core';
import cx from 'clsx';
import { cloneElement, RefObject } from 'react';

import { BackgroundProps, Paddings } from '@interface/index';

import { Background } from '../../media/Background';
import styles from './styles/section.module.css';

type SectionProps = {
  id?: string;
  className?: string;
  sectionStyle?: React.CSSProperties;
  children?: React.ReactNode;
  renderChildren?: () => React.ReactNode;
  afterContent?: React.ReactNode;
  beforeContent?: React.ReactNode;
  isFirst?: boolean;
  containerClassName?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  containerStyle?: React.CSSProperties;
  background?: BackgroundProps;
  marginBottom?: 'sm' | 'md' | 'lg' | 'xl';
  hasDecoration?: boolean;
  sectionRef?: ((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null | undefined;
  containerRef?:
    | ((instance: HTMLDivElement | null) => void)
    | RefObject<HTMLDivElement>
    | null
    | undefined;
  containerProps?: {
    padding?: Paddings;
    radius?: string;
    shadow?: string;
    hasDecoration?: boolean;
  };
  containerSlotBefore?: React.ReactNode;
  containerSlotAfter?: React.ReactNode;
};

export const Section = ({
  id,
  className,
  children,
  renderChildren,
  afterContent,
  beforeContent,
  isFirst,
  sectionStyle = {},
  containerClassName,
  containerSize = 'md',
  containerStyle = {},
  containerProps = {},
  background,
  marginBottom,
  hasDecoration,
  sectionRef,
  containerRef,
  containerSlotBefore,
  containerSlotAfter,
}: SectionProps) => {
  const isOnSection = background?.placement === 'section';
  const isColor = background?.type === 'color';
  const containerHasStyles =
    Object.keys(containerProps).length > 0 ||
    Object.keys(containerStyle).length > 0 ||
    (!isOnSection && background && isColor && background?.color);
  return (
    <Box
      component="section"
      id={id}
      ref={sectionRef}
      className={cx('section', styles.root, className)}
      data-decorated={hasDecoration || (!!background && isOnSection)}
      style={{
        ...sectionStyle,
        backgroundColor: isOnSection && background && isColor && background?.color,
        '--s-mb-base': marginBottom ? `var(--mantine-section-margin-${marginBottom})` : undefined,
      }}
      data-first={isFirst}
    >
      {isOnSection && background && !isColor && <Background {...background} />}
      {beforeContent}
      {renderChildren ? (
        renderChildren()
      ) : (
        <Box
          component="div"
          ref={containerRef}
          className={cx(styles.container, containerClassName)}
          data-size={containerSize}
        >
          {containerHasStyles
            ? cloneElement(children as React.ReactElement, {
                slotBefore: containerSlotBefore,
                slotAfter: containerSlotAfter,
                background: !isOnSection && background,
                padding: containerProps?.padding,
                radius: containerProps?.radius,
                shadow: containerProps?.shadow,
                hasDecoration: containerProps?.hasDecoration,
                style: containerStyle,
                'data-overflow': false,
              })
            : children}
        </Box>
      )}
      {afterContent}
    </Box>
  );
};
