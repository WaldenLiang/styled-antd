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

export const positionStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'position',
    alias: ['pos'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'zIndex',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'inset',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'insetX',
    property: ['left', 'right'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'insetY',
    property: ['top', 'bottom'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'insetInline',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'insetBlock',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'top',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'right',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'bottom',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'left',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'insetBlockStart',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'insetBlockEnd',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'insetInlineStart',
    alias: ['insetStart'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'insetInlineEnd',
    alias: ['insetEnd'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
);

export type PositionProps = {
  position?: GenericToken<Css.Property.Position>;
  pos?: GenericToken<Css.Property.Position>;
  zIndex?: ThemeToken<Css.Property.ZIndex>;
  inset?: ThemeToken<Css.Property.Inset<Length>>;
  insetX?: ThemeToken<Css.Property.Inset<Length>>;
  insetY?: ThemeToken<Css.Property.Inset<Length>>;
  insetInline?: ThemeToken<Css.Property.InsetInline<Length>>;
  insetBlock?: ThemeToken<Css.Property.InsetBlock<Length>>;
  top?: ThemeToken<Css.Property.Top<Length>>;
  right?: ThemeToken<Css.Property.Right<Length>>;
  bottom?: ThemeToken<Css.Property.Bottom<Length>>;
  left?: ThemeToken<Css.Property.Left<Length>>;
  insetBlockStart?: ThemeToken<Css.Property.InsetBlockStart<Length>>;
  insetBlockEnd?: ThemeToken<Css.Property.InsetBlockEnd<Length>>;
  insetInlineStart?: ThemeToken<Css.Property.InsetInlineStart<Length>>;
  insetStart?: ThemeToken<Css.Property.InsetInlineStart<Length>>;
  insetInlineEnd?: ThemeToken<Css.Property.InsetInlineEnd<Length>>;
  insetEnd?: ThemeToken<Css.Property.InsetInlineEnd<Length>>;
};
