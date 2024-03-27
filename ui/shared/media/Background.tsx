'use client';
import cx from 'clsx';
import Image from 'next/image';

import { BackgroundProps } from '@/types';

export const Background = ({
  type,
  videoProps,
  imageProps,
  color,
  overlay,
  position,
  hasPriority,
  style,
  className,
}: BackgroundProps) => {
  const { src, blurDataURL, objectFit } = imageProps || {};

  return (
    <div className={cx('absolute inset-0', className)} style={style}>
      {type === 'video' && <span>video</span>}
      {type === 'image' && (
        <Image
          alt="Background Image"
          src={src}
          fill
          objectFit={objectFit || 'cover'}
          quality={80}
          placeholder={blurDataURL ? 'blur' : 'empty'}
          priority={hasPriority}
          blurDataURL={blurDataURL || undefined}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      {!!overlay && overlay !== 'none' && (
        <div
          color={overlay === 'dark' || overlay === 'darker' ? '#111111' : '#fdfdfd'}
          opacity={overlay === 'dark' || overlay === 'light' ? 0.2 : 0.5}
        />
      )}
    </div>
  );
};
