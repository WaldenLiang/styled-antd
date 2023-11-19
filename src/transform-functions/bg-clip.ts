import { cssWithoutImportant, isCssImportant } from '../utils';
import { type TransformFn } from './types';

export const bgClip: TransformFn<string> = (value) => {
  const important = isCssImportant(value);
  const withoutImportant = cssWithoutImportant(value);

  return withoutImportant === 'text'
    ? important
      ? { color: 'transparent !important', backgroundClip: 'text !important' }
      : { color: 'transparent', backgroundClip: 'text' }
    : {
        backgroundClip: important ? `${withoutImportant} !important` : value,
      };
};
