export const toFormattedString = (date: Date) => {
  return date.toLocaleDateString('ch-DE', {
    dateStyle: 'medium',
  });
};
