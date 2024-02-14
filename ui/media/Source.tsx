import { ImageProps, unstable_getImgProps as getImgProps } from 'next/image';
import { forwardRef } from 'react';

type SourceProps = Omit<JSX.IntrinsicElements['source'], 'srcSet' | 'src'> &
  Pick<ImageProps, 'src' | 'loader' | 'unoptimized' | 'quality'>;

export const Source = forwardRef<HTMLSourceElement, SourceProps>(
  ({ src, loader, unoptimized, quality, ...rest }, ref) => {
    const {
      props: { srcSet },
    } = getImgProps({ src, loader, unoptimized, quality, fill: true, alt: '' });

    return <source {...rest} srcSet={srcSet} ref={ref} />;
  }
);
