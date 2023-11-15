import { cssWithoutImportant, isCssImportant } from '../utils';
import { type TransformFn } from './types';

const getBackdropFilterTemplate = (important: boolean) => ({
  backdropFilter: `${[
    'var(--antd-backdrop-blur)',
    'var(--antd-backdrop-brightness)',
    'var(--antd-backdrop-contrast)',
    'var(--antd-backdrop-grayscale)',
    'var(--antd-backdrop-hue-rotate)',
    'var(--antd-backdrop-invert)',
    'var(--antd-backdrop-opacity)',
    'var(--antd-backdrop-saturate)',
    'var(--antd-backdrop-sepia)',
  ].join(' ')}${important ? ' !important' : ''}`,
  '--antd-backdrop-blur': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-backdrop-brightness': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-backdrop-contrast': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-backdrop-grayscale': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-backdrop-hue-rotate': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-backdrop-invert': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-backdrop-opacity': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-backdrop-saturate': 'var(--antd-empty,/*!*/ /*!*/)',
  '--antd-backdrop-sepia': 'var(--antd-empty,/*!*/ /*!*/)',
});

export const backdropFilter: TransformFn = (value) => {
  const important = isCssImportant(value);
  const withoutImportant = cssWithoutImportant(value);

  return withoutImportant === 'auto'
    ? getBackdropFilterTemplate(important)
    : important
    ? `${withoutImportant} !important`
    : value;
};
