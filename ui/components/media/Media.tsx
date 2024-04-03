'use client';

import cx from 'clsx';

import { IMediaBlock } from '@/ui/types';

import { StyledBox } from '../../shared/styledBox';
import { Image } from './Image';
import { Video } from './Video';

export const Media = ({
  className,
  mediaStyles,
  imageProps,
  videoProps,
  type,
  radius,
  shadow,
  border,
  fade,
}: IMediaBlock) => {
  return (
    <StyledBox
      className={cx('mediaBox w-full overflow-hidden', className)}
      radius={radius}
      shadow={shadow}
      border={border}
    >
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
    </StyledBox>
  );
};

Media.displayName = 'rvise_Media';
