import { MinHeight } from '@interface/index';

export const getMinHeight = (minHeight: MinHeight) => {
  const styles: { [key: string]: string | number } = {};

  Object.keys(minHeight).forEach((key) => {
    if (minHeight[key as keyof MinHeight]) {
      const isNumber = typeof minHeight[key as keyof MinHeight] === 'number';
      // @ts-ignore
      styles[`--min-height-${key}`] = isNumber
        ? `${minHeight[key as keyof MinHeight]}px`
        : minHeight[key as keyof MinHeight];
    }
  });

  return styles;
};
