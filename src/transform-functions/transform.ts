import { cssWithoutImportant, isCssImportant } from '../utils';
import { type TransformFn } from './types';

const transformTemplate = [
  'rotate(var(--antd-rotate, 0))',
  'scaleX(var(--antd-scale-x, 1))',
  'scaleY(var(--antd-scale-y, 1))',
  'skewX(var(--antd-skew-x, 0))',
  'skewY(var(--antd-skew-y, 0))',
];

function getTransformTemplate(important: boolean) {
  const props = [
    'translateX(var(--antd-translate-x, 0))',
    'translateY(var(--antd-translate-y, 0))',
    ...transformTemplate,
  ];

  if (important) {
    props.push('!important');
  }

  return props.join(' ');
}

function getTransformGpuTemplate(important: boolean) {
  const props = [
    'translate3d(var(--antd-translate-x, 0), var(--antd-translate-y, 0), 0)',
    ...transformTemplate,
  ];

  if (important) {
    props.push('!important');
  }

  return props.join(' ');
}

export const transform: TransformFn = (value) => {
  const important = isCssImportant(value);
  const withoutImportant = cssWithoutImportant(value);

  if (withoutImportant === 'auto') return getTransformTemplate(important);
  if (withoutImportant === 'auto-gpu')
    return getTransformGpuTemplate(important);

  return important ? `${withoutImportant} !important` : value;
};
