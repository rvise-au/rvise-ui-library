import { defaultPadding, getPaddingValue } from './get-padding-value';

export const getInlineStyles = ({
  padding,
  align,
  justify,
  hasDecor,
}: {
  padding: any;
  align?: string;
  justify?: string;
  hasDecor?: boolean;
}) => {
  const _pad = hasDecor && !padding ? defaultPadding : padding;

  let css = '';

  if (_pad?.base?.x || _pad?.base?.y) {
    css += `
      padding: ${getPaddingValue(_pad.base.y)} ${getPaddingValue(_pad.base.x)} ;
      align-items: ${align || 'center'};
      justify-content: ${justify || 'center'};
    `;
  }

  if (_pad?.md?.x || _pad?.md?.y) {
    css += `
      @media (min-width: var(--mantine-breakpoint-sm)) {
         padding: ${getPaddingValue(_pad.md.y)} ${getPaddingValue(_pad.md.x)} ;
      }
    `;
  }

  if (_pad?.lg?.x || _pad?.lg?.y) {
    css += `
      @media (min-width: 1220px) {
         padding: ${getPaddingValue(_pad.lg.y)} ${getPaddingValue(_pad.lg.x)} ;
      }
    `;
  }

  return css;
};
