import * as Css from 'csstype';
import { type GenericToken } from './types';
import { degree, px, transform } from '../transform-functions';
import {
  composeStyleProperties,
  defineStyleProperty,
  preserveImportant,
} from './utils';
import { type Length } from '../utility-types';

export const transformStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'clipPath',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'transform',
    transform: transform,
  }),
  defineStyleProperty({
    name: 'transformOrigin',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'translateX',
    property: '--antd-translate-x',
    transform: px,
  }),
  defineStyleProperty({
    name: 'translateY',
    property: '--antd-translate-y',
    transform: px,
  }),
  defineStyleProperty({
    name: 'skewX',
    property: '--antd-skew-x',
    transform: degree,
  }),
  defineStyleProperty({
    name: 'skewY',
    property: '--antd-skew-y',
    transform: degree,
  }),
  defineStyleProperty({
    name: 'scaleX',
    property: '--antd-scale-x',
  }),
  defineStyleProperty({
    name: 'scaleY',
    property: '--antd-scale-y',
  }),
  defineStyleProperty({
    name: 'scale',
    property: ['--antd-scale-x', '--antd-scale-y'],
  }),
  defineStyleProperty({
    name: 'rotate',
    property: '--antd-rotate',
    transform: degree,
  })
);

export type TransformProps = {
  clipPath?: GenericToken<Css.Property.ClipPath>;
  transform?: GenericToken<Css.Property.Transform | 'auto' | 'auto-gpu'>;
  transformOrigin?: GenericToken<Css.Property.TransformOrigin<Length>>;
  translateX?: GenericToken<Length>;
  translateY?: GenericToken<Length>;
  skewX?: GenericToken<Length>;
  skewY?: GenericToken<Length>;
  scaleX?: GenericToken<Length>;
  scaleY?: GenericToken<Length>;
  scale?: GenericToken<Length>;
  rotate?: GenericToken<Length>;
};
