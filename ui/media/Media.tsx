'use client';

import { ActionIcon, Box } from '@mantine/core';
import cx from 'clsx';
import { useEffect, useState } from 'react';
import { TbPlayerPlay } from 'react-icons/tb';
import ReactPlayer from 'react-player/lazy';

import { IMediaBlock } from '@/types';

import { Image } from './Image';
import styles from './styles/Media.module.css';

export const Media = ({
  className,
  mediaStyles,
  imageProps,
  videoProps,
  type,
  radius,
  fade,
  aspectRatio,
}: IMediaBlock) => {
  const { autoplay, loop, muted, videoUrl, thumbnail, youtubeSrc, sourceType } = videoProps || {};
  const [playing, setPlaying] = useState(autoplay || false);
  const [mounted, setMounted] = useState(false);

  const videoSource =
    sourceType === 'youtube' ? `https://www.youtube.com/watch?v=${youtubeSrc}` : videoUrl;

  // Get aspect ratio based on image size
  const aspectBasedOnSize = imageProps && Number(imageProps.width) / Number(imageProps.height);
  const aspectDefault = aspectRatio?.base || aspectBasedOnSize;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && autoplay) setPlaying(true);
  }, [mounted]);

  return (
    <Box
      className={cx('mediaBox', styles.root, imageProps?.fill && styles.filled, className)}
      style={{
        '--mediaBox-radius': radius,
        ...(imageProps?.fill &&
          imageProps.width &&
          imageProps.height && {
            '--ar-base': aspectRatio?.base || aspectBasedOnSize,
            '--ar-sm': aspectRatio?.sm || aspectDefault,
            '--ar-md': aspectRatio?.md || aspectDefault,
            '--ar-lg': aspectRatio?.lg || aspectDefault,
          }),
        ...mediaStyles,
      }}
    >
      {type === 'image' && (
        <div className="wrapper">
          <Image {...imageProps} />
        </div>
      )}
      {type === 'video' && mounted && (
        <div className="wrapper">
          <ReactPlayer
            light={!autoplay && thumbnail?.url ? <Image {...thumbnail} /> : !autoplay}
            loop={loop}
            playing={playing}
            onPause={() => setPlaying(false)}
            playIcon={
              <ActionIcon
                variant="filled"
                color="white"
                radius="xl"
                name="Click here to play this video"
                onClick={() => setPlaying(!playing)}
                className={styles.playerButton}
              >
                <TbPlayerPlay size={16} />
              </ActionIcon>
            }
            width="100%"
            muted={autoplay || muted}
            controls={false}
            height="100%"
            url={videoSource}
            className={styles.video}
          />
        </div>
      )}
      {fade && (
        <div className={styles.fade} aria-hidden="true">
          <div className={styles.fadeInner} />
        </div>
      )}
    </Box>
  );
};

Media.displayName = 'rvise_Media';
