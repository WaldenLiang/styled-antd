import * as Css from 'csstype';
import { type GenericToken, type ThemeToken } from './types';
import {
  composeStyleProperties,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';
import { type Length } from '../utility-types';

export const interactivityStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'appearance',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'cursor',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'resize',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'userSelect',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'pointerEvents',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'outline',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'outlineOffset',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'outlineColor',
    transform: preserveImportant(tokenize),
  })
);

export type InteractivityProps = {
  appearance?: GenericToken<Css.Property.Appearance>;
  cursor?: GenericToken<Css.Property.Cursor>;
  resize?: GenericToken<Css.Property.Resize>;
  userSelect?: GenericToken<Css.Property.UserSelect>;
  pointerEvents?: GenericToken<Css.Property.PointerEvents>;
  outline?: GenericToken<Css.Property.Outline<Length>>;
  outlineOffset?: GenericToken<Css.Property.OutlineOffset<Length>>;
  outlineColor?: ThemeToken<Css.Property.OutlineColor>;
};
