import * as Css from 'csstype';
import { type ThemeToken, type GenericToken } from './types';
import {
  composeStyleProperties,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';

export const textDecorationStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'textDecorationColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'textDecoration',
    alias: ['textDecor'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'textDecorationLine',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'textDecorationStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'textDecorationThickness',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'textUnderlineOffset',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'textShadow',
    transform: preserveImportant(tokenize),
  }),
);

export type TextDecorationProps = {
  textDecorationColor?: ThemeToken<Css.Property.TextDecorationColor>;
  textDecoration?: GenericToken<Css.Property.TextDecoration>;
  textDecor?: GenericToken<Css.Property.TextDecoration>;
  textDecorationLine?: GenericToken<Css.Property.TextDecorationLine>;
  textDecorationStyle?: GenericToken<Css.Property.TextDecorationStyle>;
  textDecorationThickness?: GenericToken<Css.Property.TextDecorationThickness>;
  textUnderlineOffset?: GenericToken<Css.Property.TextUnderlineOffset>;
  textShadow?: ThemeToken<Css.Property.TextShadow>;
};
