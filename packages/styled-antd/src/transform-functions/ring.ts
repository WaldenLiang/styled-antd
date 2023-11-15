import { cssWithoutImportant, isCssImportant } from '../utils';
import { type TransformFn } from './types';
import { px } from './px';

function getRingTemplate(value: any, important: boolean) {
  return {
    '--antd-ring-offset-shadow': `var(--antd-ring-inset,/*!*/ /*!*/) 0 0 0 var(--antd-ring-offset-width, 0px) var(--antd-ring-offset-color, #fff)`,
    '--antd-ring-shadow': `var(--antd-ring-inset,/*!*/ /*!*/) 0 0 0 calc(var(--antd-ring-width) + var(--antd-ring-offset-width, 0px)) var(--antd-ring-color, rgba(66, 153, 225, 0.6))`,
    '--antd-ring-width': value,
    boxShadow: `${[
      `var(--antd-ring-offset-shadow)`,
      `var(--antd-ring-shadow)`,
      `var(--antd-shadow, 0 0 #0000)`,
    ].join(', ')}${important ? ' !important' : ''}`,
  };
}

export const ring: TransformFn<string> = (value) => {
  const important = isCssImportant(value);
  const withoutImportant = cssWithoutImportant(value);

  return getRingTemplate(px(withoutImportant), important);
};
