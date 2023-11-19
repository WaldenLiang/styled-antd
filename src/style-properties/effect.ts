import * as Css from 'csstype';
import { type GenericToken, type ThemeToken } from './types';
import {
  composeStyleProperties,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';

export const effectStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'boxShadow',
    alias: ['shadow'],
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'mixBlendMode',
    alias: ['blendMode'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'backgroundBlendMode',
    alias: ['bgBlendMode'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'opacity',
    transform: preserveImportant(tokenize),
  }),
);

export type EffectProps = {
  boxShadow?: ThemeToken<Css.Property.BoxShadow>;
  shadow?: ThemeToken<Css.Property.BoxShadow>;
  mixBlendMode?: GenericToken<Css.Property.MixBlendMode>;
  blendMode?: GenericToken<Css.Property.MixBlendMode>;
  backgroundBlendMode?: GenericToken<Css.Property.BackgroundBlendMode>;
  bgBlendMode?: GenericToken<Css.Property.BackgroundBlendMode>;
  opacity?: ThemeToken<Css.Property.Opacity>;
};
