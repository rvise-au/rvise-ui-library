'use client';

import { ActionIcon } from '@mantine/core';
import cx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TbPlayerPlay } from 'react-icons/tb';
import ReactPlayer from 'react-player/lazy';

import { IMediaBlock } from '@/types';

import styles from './styles/Media.module.css';

export const Media = ({ className, imageProps, videoProps, type }: IMediaBlock) => {
  const { autoplay, loop, muted, videoUrl, thumbnail, youtubeSrc, sourceType } = videoProps || {};
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
    <div className={cx('mediaBox', styles.root, className)}>
      {type === 'image' && <Image {...imageProps} />}
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
      )}
    </div>
  );
};

Media.displayName = 'rvise_Media';
