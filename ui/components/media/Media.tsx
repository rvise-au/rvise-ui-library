'use client';

import cx from 'clsx';

import { Paper } from '@/ui/components/paper';
import { IMediaBlock } from '@/ui/types';

import { Image } from './Image';
import { Video } from './Video';

export const Media = ({ className, imageProps, videoProps, type, fade, ...rest }: IMediaBlock) => {
  return (
    <Paper className={cx('mediaBox w-full overflow-hidden', className)} {...rest}>
      {type === 'image' && <Image {...imageProps} />}
      {type === 'video' && <Video {...videoProps} />}
      {fade && (
        <div
          className="absolute z-10 bottom-0 h-2 block w-full"
          style={{
            backgroundColor: '#fff',
            boxShadow: `0 1px 25px 25px #fff`,
          }}
        ></div>
      )}
    </Paper>
  );
};

Media.displayName = 'rvise_Media';
