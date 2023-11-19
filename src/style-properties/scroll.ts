import * as Css from 'csstype';
import { type GenericToken, type ThemeToken } from './types';
import { px } from '../transform-functions';
import {
  composeStyleProperties,
  composeTransforms,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';
import { type Length } from '../utility-types';

export const scrollStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'scrollBehavior',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'scrollSnapAlign',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'scrollSnapStop',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'scrollSnapType',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'scrollMargin',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollMarginTop',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollMarginRight',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollMarginBottom',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollMarginLeft',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollMarginX',
    property: ['scrollMarginLeft', 'scrollMarginRight'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollMarginY',
    property: ['scrollMarginTop', 'scrollMarginBottom'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollPadding',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollPaddingTop',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollPaddingRight',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollPaddingBottom',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollPaddingLeft',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollPaddingX',
    property: ['scrollPaddingLeft', 'scrollPaddingRight'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'scrollPaddingY',
    property: ['scrollPaddingTop', 'scrollPaddingBottom'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
);

export type ScrollProps = {
  scrollBehavior?: GenericToken<Css.Property.ScrollBehavior>;
  scrollSnapAlign?: GenericToken<Css.Property.ScrollSnapAlign>;
  scrollSnapStop?: GenericToken<Css.Property.ScrollSnapStop>;
  scrollSnapType?: GenericToken<Css.Property.ScrollSnapType>;
  scrollMargin?: ThemeToken<Css.Property.ScrollMargin<Length>>;
  scrollMarginTop?: ThemeToken<Css.Property.ScrollMarginTop<Length>>;
  scrollMarginRight?: ThemeToken<Css.Property.ScrollMarginRight<Length>>;
  scrollMarginBottom?: ThemeToken<Css.Property.ScrollMarginBottom<Length>>;
  scrollMarginLeft?: ThemeToken<Css.Property.ScrollMarginLeft<Length>>;
  scrollMarginX?: ThemeToken<Css.Property.ScrollMargin<Length>>;
  scrollMarginY?: ThemeToken<Css.Property.ScrollMargin<Length>>;
  scrollPadding?: ThemeToken<Css.Property.ScrollPadding<Length>>;
  scrollPaddingTop?: ThemeToken<Css.Property.ScrollPaddingTop<Length>>;
  scrollPaddingRight?: ThemeToken<Css.Property.ScrollPaddingRight<Length>>;
  scrollPaddingBottom?: ThemeToken<Css.Property.ScrollPaddingBottom<Length>>;
  scrollPaddingLeft?: ThemeToken<Css.Property.ScrollPaddingLeft<Length>>;
  scrollPaddingX?: ThemeToken<Css.Property.ScrollPadding<Length>>;
  scrollPaddingY?: ThemeToken<Css.Property.ScrollPadding<Length>>;
};
