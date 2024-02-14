import NextImage from 'next/image';

import { Source } from './Source';

export const Image = ({
  alt,
  src,
  mobileSrc,
  desktopSrc,
  fill = true,
  aspectRatio,
  locader,
  placeholder,
  blurDataURL,
  quality = 100,
  ...rest
}) => {
  const defaultSource = src || mobileSrc || desktopSrc;
  if (!src && !mobileSrc && !desktopSrc) return null;

  return (
    <picture>
      {mobileSrc && <Source media="(max-width: 766px)" src={mobileSrc} />}
      {desktopSrc && <Source media="(min-width: 767px)" src={desktopSrc} />}
      <NextImage
        src={defaultSource}
        loader={locader}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        fill
        className="whatever"
        sizes="100vw"
        alt={alt}
        quality={quality}
      />
    </picture>
  );
};
