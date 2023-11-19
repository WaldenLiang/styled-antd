import { isCssFunction } from '../utils';
import { genericCssPropertyValueSet } from './constraints';
import { type TransformFn } from './types';

export const bgImage: TransformFn = (value) => {
  if (value == null) return value;

  const prevent = isCssFunction(value) || genericCssPropertyValueSet.has(value);

  return !prevent ? `url(${value})` : value;
};
