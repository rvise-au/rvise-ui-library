import { cloneElement, isValidElement, RefObject } from 'react';
import theme from 'tailwindcss/defaultTheme';

import { cn } from '@/src/utils/classname';
import { BackgroundProps, Paddings } from '@/types/index';
import { Background } from '@/ui/components/media/Background';

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
  containerRef?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
  containerProps?: {
    padding?: Paddings;
    radius?: string;
    shadow?: string;
    hasDecoration?: boolean;
  };
  containerSlotBefore?: React.ReactNode;
  containerSlotAfter?: React.ReactNode;
};

export const SectionWrapper = ({
  id,
  children,
  renderChildren,
  afterContent,
  beforeContent,
  isFirst,
  hasDecoration,
  containerRef,
  sectionProps: {
    background: sectionBackground,
    style: sectionStyle,
    className: sectionClass,
    ref: sectionRef,
    minHeight,
    hasSoftBorders,
    paddings: sectionPaddings = {
      base: 8,
    },
  } = {},
  containerProps: { background: containerBackground, className: containerClassName, size: containerSize = 'lg' } = {},
}: SectionProps) => {
  const containerSizeClass = (containerSize: string) => {
    switch (containerSize) {
      case 'sm':
        return 'container container-sm';
      case 'md':
        return 'container container-md';
      case 'lg':
      default:
        return 'container';
    }
  };

  const renderSoftBorders = (direction) => {
    if (hasSoftBorders === 'y' || hasSoftBorders === direction) {
      return (
        <div
          className={`absolute z-10 ${direction}-0 h-2 block w-full`}
          style={{
            backgroundColor: sectionBackground?.color || '#fff',
            boxShadow: `0 1px 25px 25px ${sectionBackground?.color || '#fff'}`,
          }}
        ></div>
      );
    }
  };

  const isValidChildren = isValidElement(children) && children?.type?.displayName === 'StyledBox';
  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'section relative not-prose bg-[var(--section-background-color)] py-[var(--section-padding-base)] flex flex-col scroll-mt-[72px]',
        getPaddingClasses(sectionPaddings, 'y'),
        sectionClass,
      )}
      data-decorated={hasDecoration || !!sectionBackground}
      style={{
        '--section-background-color': sectionBackground?.type === 'color' && sectionBackground?.color,
        ...sectionStyle,
      }}
      data-first={isFirst}
    >
      {renderSoftBorders('t')}
      {sectionBackground && sectionBackground !== 'color' && <Background {...sectionBackground} />}
      {beforeContent}
      {renderChildren ? (
        renderChildren()
      ) : (
        <div
          ref={containerRef}
          style={{
            '--container-min-height': minHeight
              ? `calc(${minHeight} - ${theme?.spacing[String(sectionPaddings?.base * 2)]})`
              : 'auto',
            '--sm-container-min-height': sectionPaddings?.sm
              ? `calc(${sectionPaddings.sm} - ${theme?.spacing[String(sectionPaddings?.sm * 2)]})`
              : 'auto',
            '--md-container-min-height': sectionPaddings?.md
              ? `calc(${sectionPaddings.md} - ${theme?.spacing[String(sectionPaddings?.md * 2)]})`
              : 'auto',
          }}
          data-size={containerSize}
          className={cn(
            `relative flex justify-center flex-col min-h-[var(--container-min-height)] ${sectionPaddings?.sm && 'min-h-[var(--sm-container-min-height)]'} ${containerSizeClass(containerSize)} `,
            containerClassName,
          )}
        >
          {isValidChildren ? cloneElement(children as React.ReactElement) : children}
          {containerBackground && <Background className="z-[-1]" {...containerBackground} />}
        </div>
      )}
      {afterContent}
      {renderSoftBorders('b')}
    </section>
  );
};

SectionWrapper.displayName = 'SectionWrapper';
