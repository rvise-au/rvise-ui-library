export const getColumnWidth = (col: number) => {
  switch (col) {
    case 5:
      return 46;
    case 6:
      return 50;
    case 7:
      return 57;
    case 8:
      return 66;
    default:
      return 50;
  }
};
