import * as Css from 'csstype';
import {
  composeStyleProperties,
  composeTransforms,
  defineStyleProperty,
} from './utils';
import {
  backdropFilter,
  blur,
  brightness,
  contrast,
  degree,
  dropShadow,
  filter,
  grayscale,
  invert,
  opacity,
  px,
  saturate,
  sepia,
} from '../transform-functions';
import { type GenericToken } from './types';
import { type Length } from '../utility-types';

export const filterStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'filter',
    property: false,
    transform: filter,
  }),
  defineStyleProperty({
    name: 'blur',
    property: '--antd-blur',
    transform: composeTransforms(px, blur),
  }),
  defineStyleProperty({
    name: 'brightness',
    property: '--antd-brightness',
    transform: brightness,
  }),
  defineStyleProperty({
    name: 'contrast',
    property: '--antd-contrast',
    transform: contrast,
  }),
  defineStyleProperty({
    name: 'grayscale',
    property: '--antd-grayscale',
    transform: grayscale,
  }),
  defineStyleProperty({
    name: 'hueRotate',
    property: '--antd-hue-rotate',
    transform: degree,
  }),
  defineStyleProperty({
    name: 'invert',
    property: '--antd-invert',
    transform: invert,
  }),
  defineStyleProperty({
    name: 'saturate',
    property: '--antd-saturate',
    transform: saturate,
  }),
  defineStyleProperty({
    name: 'sepia',
    property: '--antd-sepia',
    transform: sepia,
  }),
  defineStyleProperty({
    name: 'dropShadow',
    property: '--antd-drop-shadow',
    transform: dropShadow,
  }),
  defineStyleProperty({
    name: 'backdropFilter',
    property: false,
    transform: backdropFilter,
  }),
  defineStyleProperty({
    name: 'backdropBlur',
    property: '--antd-backdrop-blur',
    transform: composeTransforms(px, blur),
  }),
  defineStyleProperty({
    name: 'backdropBrightness',
    property: '--antd-backdrop-brightness',
    transform: brightness,
  }),
  defineStyleProperty({
    name: 'backdropContrast',
    property: '--antd-backdrop-contrast',
    transform: contrast,
  }),
  defineStyleProperty({
    name: 'backdropGrayscale',
    property: '--antd-backdrop-grayscale',
    transform: grayscale,
  }),
  defineStyleProperty({
    name: 'backdropHueRotate',
    property: '--antd-backdrop-hue-rotate',
    transform: degree,
  }),
  defineStyleProperty({
    name: 'backdropInvert',
    property: '--antd-backdrop-invert',
    transform: invert,
  }),
  defineStyleProperty({
    name: 'backdropOpacity',
    property: '--antd-backdrop-opacity',
    transform: opacity,
  }),
  defineStyleProperty({
    name: 'backdropSaturate',
    property: '--antd-backdrop-saturate',
    transform: saturate,
  }),
  defineStyleProperty({
    name: 'backdropSepia',
    property: '--antd-backdrop-sepia',
    transform: sepia,
  })
);

export type FilterProps = {
  filter?: GenericToken<Css.Property.Filter | 'auto'>;
  blur?: GenericToken<Length>;
  brightness?: GenericToken<Length>;
  contrast?: GenericToken<Length>;
  grayscale?: GenericToken<Length>;
  hueRotate?: GenericToken<Length>;
  invert?: GenericToken<Length>;
  saturate?: GenericToken<Length>;
  sepia?: GenericToken<Length>;
  dropShadow?: GenericToken<Css.Property.BoxShadow>;
  backdropFilter?: GenericToken<Css.Property.BackdropFilter | 'auto'>;
  backdropBlur?: GenericToken<Length>;
  backdropBrightness?: GenericToken<Length>;
  backdropContrast?: GenericToken<Length>;
  backdropGrayscale?: GenericToken<Length>;
  backdropHueRotate?: GenericToken<Length>;
  backdropInvert?: GenericToken<Length>;
  backdropOpacity?: GenericToken<Length>;
  backdropSaturate?: GenericToken<Length>;
  backdropSepia?: GenericToken<Length>;
};
