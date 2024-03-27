export const getPaddingClasses = (padding, direction) => {
  const { base, sm, md, lg } = padding;

  const getClasses = (size, prefix) => (size ? `${prefix}-${size}` : '');

  const classes = [];
  const defaultSize = base || sm;
  const sizes = { defaultSize, sm, md, lg };
  if (!direction) direction = 'xy';

  const prefixes =
    direction === 'xy'
      ? ['p', 'sm:p', 'md:p', 'lg:p']
      : [`p${direction}`, `sm:p${direction}`, `md:p${direction}`, `lg:p${direction}`];

  Object.keys(sizes).forEach((key, i) => {
    const size = sizes[key];
    if (size) {
      classes.push(getClasses(size, prefixes[i]));
    }
  });
  return classes.join(' ');
};
