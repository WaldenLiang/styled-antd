import { type TransformFn } from './types';

export const float: TransformFn = (value, theme) => {
  const map = { left: 'right', right: 'left' } as any;

  return theme?.['direction'] === 'rtl' ? map[value] : value;
};
