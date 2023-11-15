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

export const typographyStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'fontFamily',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'fontSize',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'fontWeight',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'lineHeight',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'letterSpacing',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'textAlign',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'fontStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'textIndent',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'wordBreak',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'overflowWrap',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'textOverflow',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'textTransform',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'whiteSpace',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'isTruncated',
    transform(value: boolean) {
      if (value === true) {
        return {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        };
      }

      return undefined;
    },
  }),
  defineStyleProperty({
    name: 'noOfLines',
    staticCss: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 'var(--antd-line-clamp)',
    },
    property: '--antd-line-clamp',
  })
);

export type TypographyProps = {
  fontFamily?: ThemeToken<Css.Property.FontFamily>;
  fontSize?: ThemeToken<Css.Property.FontSize<Length>>;
  fontWeight?: ThemeToken<Css.Property.FontWeight | number>;
  lineHeight?: ThemeToken<Css.Property.LineHeight<Length>>;
  letterSpacing?: ThemeToken<Css.Property.LetterSpacing<Length>>;
  textAlign?: GenericToken<Css.Property.TextAlign>;
  fontStyle?: GenericToken<Css.Property.FontStyle>;
  textIndent?: GenericToken<Css.Property.TextIndent>;
  wordBreak?: GenericToken<Css.Property.WordBreak>;
  overflowWrap?: GenericToken<Css.Property.OverflowWrap>;
  textOverflow?: GenericToken<Css.Property.TextOverflow>;
  textTransform?: GenericToken<Css.Property.TextTransform>;
  whiteSpace?: GenericToken<Css.Property.WhiteSpace>;
  isTruncated?: GenericToken<boolean>;
  noOfLines?: GenericToken<number>;
};
