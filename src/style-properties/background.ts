import * as Css from 'csstype';
import { bgClip, gradient } from '../transform-functions';
import {
  composeStyleProperties,
  defineStyleProperty,
  tokenize,
  preserveImportant,
} from './utils';
import { type GenericToken, type ThemeToken } from './types';

export const backgroundStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'background',
    alias: ['bg'],
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'backgroundColor',
    alias: ['bgColor'],
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'backgroundImage',
    alias: ['bgGradient', 'bgImage', 'bgImg'],
    transform: preserveImportant(gradient),
  }),
  defineStyleProperty({
    name: 'backgroundSize',
    alias: ['bgSize'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'backgroundPosition',
    alias: ['bgPosition', 'bgPos'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'backgroundRepeat',
    alias: ['bgRepeat'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'backgroundAttachment',
    alias: ['bgAttachment'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'backgroundClip',
    alias: ['bgClip'],
    property: false,
    transform: bgClip,
  }),
);

export type BackgroundProps = {
  /**
   * The CSS `background` property. Tokenization is supported.
   * @type native
   */
  background?: ThemeToken<Css.Property.Background>;
  /**
   * The CSS `background` property. Tokenization is supported.
   * @type custom
   */
  bg?: ThemeToken<Css.Property.Background>;
  /**
   * The CSS `background-color` property. Tokenization is supported.
   * @type native
   */
  backgroundColor?: ThemeToken<Css.Property.BackgroundColor>;
  /**
   * The CSS `background-color` property. Tokenization is supported.
   * @type custom
   */
  bgColor?: ThemeToken<Css.Property.BackgroundColor>;
  /**
   * The CSS `background-image` property. Tokenization is not supported.
   * @type native
   */
  backgroundImage?: GenericToken<Css.Property.BackgroundImage>;
  /**
   * The CSS `background-image` property. Tokenization is not supported.
   * @type custom
   */
  bgGradient?: GenericToken<Css.Property.BackgroundImage>;
  /**
   * The CSS `background-image` property. Tokenization is not supported.
   * @type custom
   */
  bgImage?: GenericToken<Css.Property.BackgroundImage>;
  /**
   * The CSS `background-image` property. Tokenization is not supported.
   * @type custom
   */
  bgImg?: GenericToken<Css.Property.BackgroundImage>;
  /**
   * The CSS `background-size` property. Tokenization is not supported.
   * @type native
   */
  backgroundSize?: GenericToken<Css.Property.BackgroundSize>;
  /**
   * The CSS `background-size` property. Tokenization is not supported.
   * @type custom
   */
  bgSize?: GenericToken<Css.Property.BackgroundSize>;
  /**
   * The CSS `background-position` property. Tokenization is not supported.
   * @type native
   */
  backgroundPosition?: GenericToken<Css.Property.BackgroundPosition>;
  /**
   * The CSS `background-position` property. Tokenization is not supported.
   * @type custom
   */
  bgPosition?: GenericToken<Css.Property.BackgroundPosition>;
  /**
   * The CSS `background-position` property. Tokenization is not supported.
   * @type custom
   */
  bgPos?: GenericToken<Css.Property.BackgroundPosition>;
  /**
   * The CSS `background-repeat` property. Tokenization is not supported.
   * @type native
   */
  backgroundRepeat?: GenericToken<Css.Property.BackgroundRepeat>;
  /**
   * The CSS `background-repeat` property. Tokenization is not supported.
   * @type custom
   */
  bgRepeat?: GenericToken<Css.Property.BackgroundRepeat>;
  /**
   * The CSS `background-attachment` property. Tokenization is not supported.
   * @type native
   */
  backgroundAttachment?: GenericToken<Css.Property.BackgroundAttachment>;
  /**
   * The CSS `background-attachment` property. Tokenization is not supported.
   * @type custom
   */
  bgAttachment?: GenericToken<Css.Property.BackgroundAttachment>;
  /**
   * The CSS `background-clip` property. Tokenization is not supported.
   * @type native
   */
  backgroundClip?: GenericToken<Css.Property.BackgroundClip | 'text'>;
  /**
   * The CSS `background-clip` property. Tokenization is not supported.
   * @type native
   */
  bgClip?: GenericToken<Css.Property.BackgroundClip | 'text'>;
};
