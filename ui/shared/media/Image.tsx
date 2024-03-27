import NextImage from 'next/image';

import { cn } from '@/src/utils/classname';

import { Source } from './Source';

export const Image = ({
  alt,
  src,
  mobileSrc,
  desktopSrc,
  fill = true,
  aspectRatio = {
    base: '1/1',
  },
  size = '100vw',
  width = 3500,
  height = 2000,
  quality = 100,
  ...rest
}) => {
  const defaultSource = src || mobileSrc || desktopSrc;
  if (!defaultSource) return null;

  const baseAspect = aspectRatio?.base || aspectRatio?.sm;
  return (
    <picture
      className={cn(
        'image',
        `w-full overflow-hidden relative aspect-[var(--base-aspect)]`,
        aspectRatio?.sm ? `sm:aspect-[var(--sm-aspect)]` : ``,
        aspectRatio?.md ? `md:aspect-[var(--md-aspect)]` : ``,
        aspectRatio?.lg ? `lg:aspect-[var(--lg-aspect)]` : '',
      )}
      style={{
        '--base-aspect': baseAspect,
        '--sm-aspect': aspectRatio?.sm,
        '--md-aspect': aspectRatio?.md,
        '--lg-aspect': aspectRatio?.lg,
      }}
    >
      {mobileSrc && <Source media="(max-width: 766px)" src={mobileSrc} />}
      {desktopSrc && <Source media="(min-width: 767px)" src={desktopSrc} />}
      <NextImage
        src={defaultSource}
        className={`absolute h-full w-full ${fill ? 'object-cover' : 'object-contain'}`}
        fill
        sizes={size}
        alt={alt}
        quality={quality}
      />
    </picture>
  );
};
