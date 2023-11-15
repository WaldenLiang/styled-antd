import * as Css from 'csstype';
import { type GenericToken, type ThemeToken } from './types';
import {
  composeStyleProperties,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';

export const transitionStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'transition',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'transitionDelay',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'animation',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'willChange',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'transitionDuration',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'transitionProperty',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'transitionTimingFunction',
    transform: preserveImportant(tokenize),
  })
);

export type TransitionProps = {
  transition?: GenericToken<Css.Property.Transition>;
  transitionDelay?: ThemeToken<Css.Property.TransitionDelay>;
  animation?: GenericToken<Css.Property.Animation>;
  willChange?: GenericToken<Css.Property.WillChange>;
  transitionDuration?: ThemeToken<Css.Property.TransitionDuration>;
  transitionProperty?: ThemeToken<Css.Property.TransitionProperty>;
  transitionTimingFunction?: ThemeToken<Css.Property.TransitionTimingFunction>;
};
