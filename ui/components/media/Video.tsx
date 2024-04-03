import { useEffect, useState } from 'react';
import { TbPlayerPlay } from 'react-icons/tb';
import ReactPlayer from 'react-player/lazy';

import { Button } from '@/ui/components/buttons/Button';

import { Image } from './Image';

export const Video = ({ autoplay, loop, muted, videoUrl, thumbnail, youtubeSrc, sourceType }) => {
  const [playing, setPlaying] = useState(autoplay || false);
  const [mounted, setMounted] = useState(false);

  const videoSource = sourceType === 'youtube' ? `https://www.youtube.com/watch?v=${youtubeSrc}` : videoUrl;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && autoplay) setPlaying(true);
  }, [mounted]);

  return (
    <ReactPlayer
      light={!autoplay && thumbnail?.url ? <Image {...thumbnail} /> : !autoplay}
      loop={loop}
      playing={playing}
      onPause={() => setPlaying(false)}
      playIcon={
        <Button
          variant="icon"
          color="white"
          radius="xl"
          name="Click here to play this video"
          onClick={() => setPlaying(!playing)}
        >
          <TbPlayerPlay size={16} />
        </Button>
      }
      width="100%"
      muted={autoplay || muted}
      controls={false}
      height="100%"
      url={videoSource}
    />
  );
};
