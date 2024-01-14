'use client';

import { Overlay } from '@mantine/core';
import cx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

import { BackgroundProps } from '@/types';

import styles from './styles/Background.module.css';

export const Background = ({
  type,
  videoProps,
  imageProps,
  overlay,
  position,
  hasPriority,
  style,
  className,
}: BackgroundProps) => {
  const { autoplay, videoUrl, thumbnail, youtubeSrc, sourceType } = videoProps || {};
  const { src, blurDataURL } = imageProps || {};
  const [playing, setPlaying] = useState(autoplay || false);
  const [mounted, setMounted] = useState(false);

  const videoSource =
    sourceType === 'youtube' ? `https://www.youtube.com/watch?v=${youtubeSrc}` : videoUrl;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && autoplay) setPlaying(true);
  }, [mounted]);

  return (
    <div className={cx(styles.root, className)} style={style}>
      {type === 'video' && mounted && (
        <ReactPlayer
          light={
            !autoplay && thumbnail?.url ? (
              <Image
                {...thumbnail}
                alt={thumbnail?.altText || 'Video thumbnail'}
                className={styles.image}
                quality={85}
              />
            ) : (
              !autoplay
            )
          }
          loop
          playing={playing}
          muted
          width="100%"
          controls={false}
          height="100%"
          url={videoSource}
          className={styles.video}
        />
      )}
      {type === 'image' && (
        <Image
          alt="Background Image"
          src={src}
          fill
          objectFit="cover"
          quality={80}
          placeholder={blurDataURL ? 'blur' : 'empty'}
          priority={hasPriority}
          blurDataURL={blurDataURL || undefined}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      {!!overlay && overlay !== 'none' && (
        <Overlay
          color={overlay === 'dark' || overlay === 'darker' ? '#111111' : '#fdfdfd'}
          blur={0.5}
          opacity={overlay === 'dark' || overlay === 'light' ? 0.2 : 0.5}
        />
      )}
    </div>
  );
};
