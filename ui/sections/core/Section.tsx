import cx from 'clsx';

import { BackgroundProps } from '@/types';

import { Background } from '../../media/Background';
import styles from './styles/section.module.css';

type SectionProps = {
  id?: string;
  className?: string;
  sectionStyle?: React.CSSProperties;
  children: React.ReactNode;
  renderChildren?: () => React.ReactNode;
  afterContent?: React.ReactNode;
  beforeContent?: React.ReactNode;
  isFirst?: boolean;
  containerClassName?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  containerStyle?: React.CSSProperties;
  background?: BackgroundProps;
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
  containerSize,
  containerStyle = {},
  background,
}: SectionProps) => (
  <section
    id={id}
    className={cx('section', styles.root, className)}
    style={{
      ...sectionStyle,
      backgroundColor: background?.placement === 'section' && background?.color,
    }}
    data-first={isFirst}
  >
    {background?.placement === 'section' && <Background {...background} />}
    {beforeContent}
    {renderChildren ? (
      renderChildren()
    ) : (
      <div
        className={cx(styles.container, containerClassName)}
        data-size={containerSize}
        style={{
          ...containerStyle,
          backgroundColor: background?.placement === 'container' && background?.color,
        }}
      >
        {background?.placement === 'container' && <Background {...background} />}
        {children}
      </div>
    )}
    {afterContent}
  </section>
);
