import cx from 'clsx';

import { BackgroundProps } from '@/types';

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
  background,
  marginBottom,
}: SectionProps) => {
  const isOnSection = background?.placement === 'section';
  const isColor = background?.type === 'color';
  return (
    <section
      id={id}
      className={cx('section', styles.root, className)}
      data-decorated={!!background && isOnSection}
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
        <div
          className={cx(styles.container, containerClassName)}
          data-size={containerSize}
          style={{
            ...containerStyle,
            backgroundColor: !isOnSection && background && isColor && background?.color,
          }}
        >
          {children}
        </div>
      )}
      {afterContent}
    </section>
  );
};
