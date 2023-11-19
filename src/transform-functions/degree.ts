import { isCssVar } from '../utils';
import { type TransformFn } from './types';

export const degree: TransformFn = (value) => {
  if (isCssVar(value) || value == null) return value;
  if (typeof value === 'number') return `${value}deg`;

  const hasUnit = typeof value === 'string' && value.endsWith('deg');

  return hasUnit ? value : `${value}deg`;
};
