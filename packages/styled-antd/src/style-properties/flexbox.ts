import * as Css from 'csstype';
import { px } from '../transform-functions';
import {
  composeStyleProperties,
  composeTransforms,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';
import { type GenericToken, type ThemeToken } from './types';
import { type Length } from '../utility-types';

export const flexboxStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'flex',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'alignItems',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'alignContent',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'justifyItems',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'justifyContent',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'flexWrap',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'flexDirection',
    alias: ['flexDir'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'flexFlow',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'flexGrow',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'flexShrink',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'flexBasis',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'justifySelf',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'alignSelf',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'order',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'placeItems',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'placeContent',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'placeSelf',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gap',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'rowGap',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'columnGap',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  })
);

export type FlexboxProps = {
  flex?: GenericToken<Css.Property.Flex<Length>>;
  alignItems?: GenericToken<Css.Property.AlignItems>;
  alignContent?: GenericToken<Css.Property.AlignContent>;
  justifyItems?: GenericToken<Css.Property.JustifyItems>;
  justifyContent?: GenericToken<Css.Property.JustifyContent>;
  flexWrap?: GenericToken<Css.Property.FlexWrap>;
  flexDirection?: GenericToken<Css.Property.FlexDirection>;
  flexDir?: GenericToken<Css.Property.FlexDirection>;
  flexFlow?: GenericToken<Css.Property.FlexFlow>;
  flexGrow?: GenericToken<Css.Property.FlexGrow>;
  flexShrink?: GenericToken<Css.Property.FlexShrink>;
  flexBasis?: ThemeToken<Css.Property.FlexBasis<Length>>;
  justifySelf?: GenericToken<Css.Property.JustifySelf>;
  alignSelf?: GenericToken<Css.Property.AlignSelf>;
  order?: GenericToken<Css.Property.Order>;
  placeItems?: GenericToken<Css.Property.PlaceItems>;
  placeContent?: GenericToken<Css.Property.PlaceContent>;
  placeSelf?: GenericToken<Css.Property.PlaceSelf>;
  gap?: ThemeToken<Css.Property.Gap<Length>>;
  rowGap?: ThemeToken<Css.Property.RowGap<Length>>;
  columnGap?: ThemeToken<Css.Property.ColumnGap<Length>>;
};
