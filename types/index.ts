import { MantineColor, MantineSize, TitleOrder, TitleSize } from '@mantine/core';

export type BackgroundPosition =
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'center top'
  | 'center center'
  | 'center bottom';

export type TitleObject = {
  text: string;
  size?: TitleSize;
  order?: TitleOrder;
  color?: MantineColor;
};

export type TextObject = {
  text: string;
  size?: MantineSize;
  color?: MantineColor;
  weight?: 300 | 400 | 500 | 600 | 700;
};

export type Alignment =
  | 'left/top'
  | 'center/center'
  | 'right/bottom'
  | 'left/center'
  | 'right/center'
  | 'left/bottom'
  | 'center/bottom'
  | 'right/top'
  | 'center/top';

export interface ITextBlock {
  direction?: 'horizontal' | 'vertical';
  slotBefore?: React.ReactNode;
  slotAfter?: React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  label?: TextObject | React.ReactNode;
  heading: TitleObject | React.ReactNode;
  subheading?: TextObject | React.ReactNode;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
}

export interface IMediaBlock {
  className?: string;
  imageProps?: ImageProps;
  videoProps?: VideoProps;
  type?: 'image' | 'video';
}

export type VideoProps = {
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  videoUrl: string;
  thumbnail: string;
  youtubeSrc?: string;
  sourceType: 'youtube' | 'vimeo' | 'mp4';
};

export type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  aspectRatio?: string;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  fill?: boolean;
  blurDataURL?: string;
  svg?: string;
};

export type BackgroundProps = {
  type?: 'image' | 'video' | 'color';
  videoProps?: VideoProps;
  imageProps?: ImageProps;
  overlay?: 'dark' | 'light' | 'lighter' | 'darker' | 'none';
  position?: BackgroundPosition;
  hasPriority?: boolean;
  style?: React.CSSProperties;
  className?: string;
};
