import * as Css from 'csstype';
import { type ThemeToken } from './types';
import { float, fraction, px } from '../transform-functions';
import {
  composeStyleProperties,
  composeTransforms,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';
import { type Length } from '../utility-types';

export const layoutStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'width',
    alias: ['w'],
    transform: preserveImportant(composeTransforms(tokenize, fraction)),
  }),
  defineStyleProperty({
    name: 'inlineSize',
    transform: preserveImportant(composeTransforms(tokenize, fraction)),
  }),
  defineStyleProperty({
    name: 'height',
    alias: ['h'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'blockSize',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'boxSize',
    property: ['width', 'height'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'minWidth',
    alias: ['minW'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'minInlineSize',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'minHeight',
    alias: ['minH'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'minBlockSize',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'maxWidth',
    alias: ['maxW'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'maxInlineSize',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'maxHeight',
    alias: ['maxH'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'maxBlockSize',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'overflow',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'overflowX',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'overflowY',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'overscrollBehavior',
    alias: ['overscroll'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'overscrollBehaviorX',
    alias: ['overscrollX'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'overscrollBehaviorY',
    alias: ['overscrollY'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'display',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'aspectRatio',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'verticalAlign',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'boxSizing',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'boxDecorationBreak',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'float',
    transform: preserveImportant(float),
  }),
  defineStyleProperty({
    name: 'objectFit',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'objectPosition',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'visibility',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'isolation',
    transform: preserveImportant(),
  })
);

export type LayoutProps = {
  width?: ThemeToken<Css.Property.Width<Length>>;
  w?: ThemeToken<Css.Property.Width<Length>>;
  inlineSize?: ThemeToken<Css.Property.InlineSize<Length>>;
  height?: ThemeToken<Css.Property.Height<Length>>;
  h?: ThemeToken<Css.Property.Height<Length>>;
  blockSize?: ThemeToken<Css.Property.BlockSize<Length>>;
  boxSize?: ThemeToken<Css.Property.Width<Length>>;
  minWidth?: ThemeToken<Css.Property.MinWidth<Length>>;
  minW?: ThemeToken<Css.Property.MinWidth<Length>>;
  minInlineSize?: ThemeToken<Css.Property.MinInlineSize<Length>>;
  minHeight?: ThemeToken<Css.Property.MinHeight<Length>>;
  minH?: ThemeToken<Css.Property.MinHeight<Length>>;
  minBlockSize?: ThemeToken<Css.Property.MinBlockSize<Length>>;
  maxWidth?: ThemeToken<Css.Property.MaxWidth<Length>>;
  maxW?: ThemeToken<Css.Property.MaxWidth<Length>>;
  maxInlineSize?: ThemeToken<Css.Property.MaxInlineSize<Length>>;
  maxHeight?: ThemeToken<Css.Property.MaxHeight<Length>>;
  maxH?: ThemeToken<Css.Property.MaxHeight<Length>>;
  maxBlockSize?: ThemeToken<Css.Property.MaxBlockSize<Length>>;
  overflow?: ThemeToken<Css.Property.Overflow>;
  overflowX?: ThemeToken<Css.Property.OverflowX>;
  overflowY?: ThemeToken<Css.Property.OverflowY>;
  overscrollBehavior?: ThemeToken<Css.Property.OverscrollBehavior>;
  overscroll?: ThemeToken<Css.Property.OverscrollBehavior>;
  overscrollBehaviorX?: ThemeToken<Css.Property.OverscrollBehaviorX>;
  overscrollX?: ThemeToken<Css.Property.OverscrollBehaviorX>;
  overscrollBehaviorY?: ThemeToken<Css.Property.OverscrollBehaviorY>;
  overscrollY?: ThemeToken<Css.Property.OverscrollBehaviorY>;
  display?: ThemeToken<Css.Property.Display>;
  aspectRatio?: ThemeToken<Css.Property.AspectRatio>;
  verticalAlign?: ThemeToken<Css.Property.VerticalAlign<Length>>;
  boxSizing?: ThemeToken<Css.Property.BoxSizing>;
  boxDecorationBreak?: ThemeToken<Css.Property.BoxDecorationBreak>;
  float?: ThemeToken<Css.Property.Float>;
  objectFit?: ThemeToken<Css.Property.ObjectFit>;
  objectPosition?: ThemeToken<Css.Property.ObjectPosition<Length>>;
  visibility?: ThemeToken<Css.Property.Visibility>;
  isolation?: ThemeToken<Css.Property.Isolation>;
};
