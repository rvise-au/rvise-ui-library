export const getFlexPosition = (position: string) => {
  // position is a string like 'left/top'
  const [horizontal, vertical] = position.split('/');
  const styles = [];
  switch (horizontal) {
    case 'left':
      styles.push('flex-start');
      break;
    case 'center':
      styles.push('center');
      break;
    case 'right':
      styles.push('flex-end');
      break;
    default:
      break;
  }

  switch (vertical) {
    case 'top':
      styles.push('flex-start');
      break;
    case 'center':
      styles.push('center');
      break;
    case 'bottom':
      styles.push('flex-end');
      break;
    default:
      break;
  }

  return styles;
};
