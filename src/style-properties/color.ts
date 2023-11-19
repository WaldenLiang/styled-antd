import * as Css from 'csstype';
import { type ThemeToken } from './types';
import {
  composeStyleProperties,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';

export const colorStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'color',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'fill',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'stroke',
    transform: preserveImportant(tokenize),
  }),
);

export type ColorProps = {
  color?: ThemeToken<Css.Property.Color>;
  fill?: ThemeToken<Css.Property.Fill>;
  stroke?: ThemeToken<Css.Property.Stroke>;
};
