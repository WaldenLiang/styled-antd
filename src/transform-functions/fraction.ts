export const fraction = (value: any) => {
  if (typeof value !== 'number') return value;

  return value > 1 ? value : `${value * 100}%`;
};
