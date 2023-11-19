import * as Css from 'csstype';
import { type ThemeToken } from './types';
import { px } from '../transform-functions';
import { type Length } from '../utility-types';
import {
  composeStyleProperties,
  composeTransforms,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';

export const spaceStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'margin',
    alias: ['m'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginTop',
    alias: ['mt'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginRight',
    alias: ['mr'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginBottom',
    alias: ['mb'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginLeft',
    alias: ['ml'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginBlock',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginBlockStart',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginBlockEnd',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginInline',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginInlineStart',
    alias: ['ms', 'marginStart'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginInlineEnd',
    alias: ['me', 'marginEnd'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginX',
    alias: ['mx'],
    property: ['marginLeft', 'marginRight'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'marginY',
    alias: ['my'],
    property: ['marginTop', 'marginBottom'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'padding',
    alias: ['p'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingTop',
    alias: ['pt'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingRight',
    alias: ['pr'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingBottom',
    alias: ['pb'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingLeft',
    alias: ['pl'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingBlock',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingBlockStart',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingBlockEnd',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingInline',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingInlineStart',
    alias: ['ps', 'paddingStart'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingInlineEnd',
    alias: ['pe', 'paddingEnd'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingX',
    alias: ['px'],
    property: ['paddingLeft', 'paddingRight'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'paddingY',
    alias: ['py'],
    property: ['paddingTop', 'paddingBottom'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
);

export type SpaceProps = {
  margin?: ThemeToken<Css.Property.Margin<Length>>;
  m?: ThemeToken<Css.Property.Margin<Length>>;
  marginTop?: ThemeToken<Css.Property.MarginTop<Length>>;
  mt?: ThemeToken<Css.Property.MarginTop<Length>>;
  marginRight?: ThemeToken<Css.Property.MarginRight<Length>>;
  mr?: ThemeToken<Css.Property.MarginRight<Length>>;
  marginBottom?: ThemeToken<Css.Property.MarginBottom<Length>>;
  mb?: ThemeToken<Css.Property.MarginBottom<Length>>;
  marginLeft?: ThemeToken<Css.Property.MarginLeft<Length>>;
  ml?: ThemeToken<Css.Property.MarginLeft<Length>>;
  marginBlock?: ThemeToken<Css.Property.MarginBlock<Length>>;
  marginBlockStart?: ThemeToken<Css.Property.MarginBlockStart<Length>>;
  marginBlockEnd?: ThemeToken<Css.Property.MarginBlockEnd<Length>>;
  marginInline?: ThemeToken<Css.Property.MarginInline<Length>>;
  marginInlineStart?: ThemeToken<Css.Property.MarginInlineStart<Length>>;
  ms?: ThemeToken<Css.Property.MarginInlineStart<Length>>;
  marginStart?: ThemeToken<Css.Property.MarginInlineStart<Length>>;
  marginInlineEnd?: ThemeToken<Css.Property.MarginInlineEnd<Length>>;
  me?: ThemeToken<Css.Property.MarginInlineEnd<Length>>;
  marginEnd?: ThemeToken<Css.Property.MarginInlineEnd<Length>>;
  marginX?: ThemeToken<Css.Property.Margin<Length>>;
  mx?: ThemeToken<Css.Property.Margin<Length>>;
  marginY?: ThemeToken<Css.Property.Margin<Length>>;
  my?: ThemeToken<Css.Property.Margin<Length>>;
  padding?: ThemeToken<Css.Property.Padding<Length>>;
  p?: ThemeToken<Css.Property.Padding<Length>>;
  paddingTop?: ThemeToken<Css.Property.PaddingTop<Length>>;
  pt?: ThemeToken<Css.Property.PaddingTop<Length>>;
  paddingRight?: ThemeToken<Css.Property.PaddingRight<Length>>;
  pr?: ThemeToken<Css.Property.PaddingRight<Length>>;
  paddingBottom?: ThemeToken<Css.Property.PaddingBottom<Length>>;
  pb?: ThemeToken<Css.Property.PaddingBottom<Length>>;
  paddingLeft?: ThemeToken<Css.Property.PaddingLeft<Length>>;
  pl?: ThemeToken<Css.Property.PaddingLeft<Length>>;
  paddingBlock?: ThemeToken<Css.Property.PaddingBlock<Length>>;
  paddingBlockStart?: ThemeToken<Css.Property.PaddingBlockStart<Length>>;
  paddingBlockEnd?: ThemeToken<Css.Property.PaddingBlockEnd<Length>>;
  paddingInline?: ThemeToken<Css.Property.PaddingInline<Length>>;
  paddingInlineStart?: ThemeToken<Css.Property.PaddingInlineStart<Length>>;
  ps?: ThemeToken<Css.Property.PaddingInlineStart<Length>>;
  paddingStart?: ThemeToken<Css.Property.PaddingInlineStart<Length>>;
  paddingInlineEnd?: ThemeToken<Css.Property.PaddingInlineEnd<Length>>;
  pe?: ThemeToken<Css.Property.PaddingInlineEnd<Length>>;
  paddingEnd?: ThemeToken<Css.Property.PaddingInlineEnd<Length>>;
  paddingX?: ThemeToken<Css.Property.Padding<Length>>;
  px?: ThemeToken<Css.Property.Padding<Length>>;
  paddingY?: ThemeToken<Css.Property.Padding<Length>>;
  py?: ThemeToken<Css.Property.Padding<Length>>;
};
