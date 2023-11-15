import * as Css from 'csstype';
import { type GenericToken, type ThemeToken } from './types';
import { px, ring } from '../transform-functions';
import { type Length } from '../utility-types';
import {
  composeStyleProperties,
  composeTransforms,
  defineStyleProperty,
  tokenize,
} from './utils';

export const ringStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'ring',
    property: false,
    transform: ring,
  }),
  defineStyleProperty({
    name: 'ringColor',
    property: '--antd-ring-color',
    transform: tokenize,
  }),
  defineStyleProperty({
    name: 'ringOffset',
    property: '--antd-ring-offset-width',
    transform: composeTransforms(tokenize, px),
  }),
  defineStyleProperty({
    name: 'ringOffsetColor',
    property: '--antd-ring-offset-color',
    transform: tokenize,
  }),
  defineStyleProperty({
    name: 'ringInset',
    property: '--antd-ring-inset',
  })
);

export type RingProps = {
  ring?: GenericToken<Length>;
  ringColor?: ThemeToken<Css.Property.Color>;
  ringOffset?: ThemeToken<Length>;
  ringOffsetColor?: ThemeToken<Css.Property.Color>;
  ringInset?: GenericToken<'inset' | 'none'>;
};
