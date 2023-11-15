import { analyzeCssValue } from '../utils';

export const px = (value: number | string) => {
  if (value == null) return value;
  if (typeof value === 'number') return `${value}px`;

  const { hasUnit } = analyzeCssValue(value);

  return hasUnit ? value : `${value}px`;
};
