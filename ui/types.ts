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

export type ResponsiveStringValues = {
  base: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
};

export type Alignment = 'start' | 'center' | 'end' | 'stretch' | 'between' | 'around' | 'evenly';

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
  type?: 'image' | 'video' | 'color' | 'animatedRadialSpots' | 'staticRadialSpots';
  videoProps?: VideoProps;
  imageProps?: ImageProps;
  color: string;
  gradientColors: string[];
  overlay?: 'dark' | 'light' | 'lighter' | 'darker' | 'none';
  position?: BackgroundPosition;
  hasPriority?: boolean;
  style?: React.CSSProperties;
  className?: string;
  placement?: 'section' | 'container';
};

export interface StyledBoxInterface {
  component?: any;
  children?: React.ReactNode;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'default';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'default';
  border?: 'none' | 'sm' | 'md' | 'lg' | 'default';
  style?: React.CSSProperties;
  background?: BackgroundProps;
  padding?: ResponsiveStringValues;
  paddingDirection?: 'xy' | 'x' | 'y' | 't' | 'r' | 'b' | 'l';
  hasDecoration?: boolean;
  align?: Alignment;
  justify?: Alignment;
  isLead?: boolean;
  className?: string | string[] | undefined;
  minHeight?: ResponsiveStringValues;
}

export type Link = {
  href: string;
  label: string;
  newTab?: boolean;
};
