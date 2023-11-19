import { cssWithoutImportant, isCssImportant } from '../utils';
import { type TransformFn } from './types';

const getFilterTemplate = (important: boolean) => ({
  '--antd-blur': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-brightness': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-contrast': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-grayscale': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-hue-rotate': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-invert': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-saturate': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-sepia': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-drop-shadow': 'var(--antd-empty,/*!*/ /*!*/)',
  filter: `${[
    'var(--antd-blur)',
    'var(--antd-brightness)',
    'var(--antd-contrast)',
    'var(--antd-grayscale)',
    'var(--antd-hue-rotate)',
    'var(--antd-invert)',
    'var(--antd-saturate)',
    'var(--antd-sepia)',
    'var(--antd-drop-shadow)',
  ].join(' ')}${important ? ' !important' : ''}`,
});

export const filter: TransformFn = (value) => {
  const important = isCssImportant(value);
  const withoutImportant = cssWithoutImportant(value);

  return withoutImportant === 'auto'
    ? getFilterTemplate(important)
    : important
      ? `${withoutImportant} !important`
      : value;
};
