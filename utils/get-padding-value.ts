export const getPaddingValue = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value;

export const defaultPadding = {
  base: { x: 64, y: 64 },
  md: { x: 64, y: 64 },
  lg: { x: 64, y: 72 },
};
export const getPaddingStyles = (padding: any, hasDecor?: boolean) => {
  const paddingStyles: { [key: string]: string } = {};
  const _pad = hasDecor && !padding ? defaultPadding : padding;

  ['base', 'md', 'lg'].forEach((size) => {
    if (_pad?.[size]?.x) {
      paddingStyles[`--c-px-${size}`] = getPaddingValue(_pad[size].x);
    }
    if (_pad?.[size]?.y) {
      paddingStyles[`--c-py-${size}`] = getPaddingValue(_pad[size].y);
    }
  });

  return paddingStyles;
};
