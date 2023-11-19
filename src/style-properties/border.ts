import * as Css from 'csstype';
import { type GenericToken, type ThemeToken } from './types';
import { gradient, px } from '../transform-functions';
import {
  composeStyleProperties,
  composeTransforms,
  defineStyleProperty,
  preserveImportant,
  tokenize,
} from './utils';
import { type Length } from '../utility-types';

export const borderStyleProperties = composeStyleProperties(
  // border
  defineStyleProperty({
    name: 'border',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderTop',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderRight',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderBottom',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderLeft',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderInline',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderInlineStart',
    alias: ['borderStart'],
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderInlineEnd',
    alias: ['borderEnd'],
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderBlock',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderBlockStart',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderBlockEnd',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderX',
    property: ['borderLeft', 'borderRight'],
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderY',
    property: ['borderTop', 'borderBottom'],
    transform: preserveImportant(tokenize),
  }),
  // radii
  defineStyleProperty({
    name: 'borderRadius',
    alias: ['rounded'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderTopLeftRadius',
    alias: ['roundedTopLeft'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderTopRightRadius',
    alias: ['roundedTopRight'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderBottomLeftRadius',
    alias: ['roundedBottomLeft'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderBottomRightRadius',
    alias: ['roundedBottomRight'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderTopRadius',
    alias: ['roundedTop'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
    property: ['borderTopLeftRadius', 'borderTopRightRadius'],
  }),
  defineStyleProperty({
    name: 'borderBottomRadius',
    alias: ['roundedBottom'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
    property: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  }),
  defineStyleProperty({
    name: 'borderLeftRadius',
    alias: ['roundedLeft'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
    property: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
  }),
  defineStyleProperty({
    name: 'borderRightRadius',
    alias: ['roundedRight'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
    property: ['borderTopRightRadius', 'borderBottomRightRadius'],
  }),
  defineStyleProperty({
    name: 'borderStartStartRadius',
    alias: ['roundedStartStart', 'borderTopStartRadius'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderStartEndRadius',
    alias: ['roundedStartEnd', 'borderTopEndRadius'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderEndStartRadius',
    alias: ['roundedEndStart', 'borderBottomStartRadius'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderEndEndRadius',
    alias: ['roundedEndEnd', 'borderBottomEndRadius'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderInlineStartRadius',
    alias: ['roundedStart', 'borderStartRadius'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
    property: ['borderStartStartRadius', 'borderEndStartRadius'],
  }),
  defineStyleProperty({
    name: 'borderInlineEndRadius',
    alias: ['roundedEnd', 'borderEndRadius'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
    property: ['borderStartEndRadius', 'borderEndEndRadius'],
  }),
  // borderColor
  defineStyleProperty({
    name: 'borderColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderTopColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderRightColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderBottomColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderLeftColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderInlineColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderInlineStartColor',
    alias: ['borderStartColor'],
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderInlineEndColor',
    alias: ['borderEndColor'],
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderBlockColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderBlockStartColor',
    transform: preserveImportant(tokenize),
  }),
  defineStyleProperty({
    name: 'borderBlockEndColor',
    transform: preserveImportant(tokenize),
  }),
  // borderWidth
  defineStyleProperty({
    name: 'borderWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderTopWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderRightWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderBottomWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderLeftWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderInlineWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderInlineStartWidth',
    alias: ['borderStartWidth'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderInlineEndWidth',
    alias: ['borderEndWidth'],
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderBlockWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderBlockStartWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'borderBlockEndWidth',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  // borderStyle
  defineStyleProperty({
    name: 'borderStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderTopStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderRightStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderBottomStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderLeftStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderInlineStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderInlineStartStyle',
    alias: ['borderStartStyle'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderInlineEndStyle',
    alias: ['borderEndStyle'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderBlockStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderBlockStartStyle',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderBlockEndStyle',
    transform: preserveImportant(),
  }),
  // table border
  defineStyleProperty({
    name: 'borderCollapse',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderSpacing',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderImage',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderImageSource',
    transform: preserveImportant(gradient),
  }),
  defineStyleProperty({
    name: 'borderImageOutset',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderImageWidth',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderImageSlice',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'borderImageRepeat',
    transform: preserveImportant(),
  }),
);

export type BorderProps = {
  /**
   * The CSS `border` property. Tokenization is supported.
   * @type native
   */
  border?: ThemeToken<Css.Property.Border>;
  /**
   * The CSS `border-top` property. Tokenization is supported.
   * @type native
   */
  borderTop?: ThemeToken<Css.Property.BorderTop>;
  /**
   * The CSS `border-right` property. Tokenization is supported.
   * @type native
   */
  borderRight?: ThemeToken<Css.Property.BorderRight>;
  /**
   * The CSS `border-bottom` property. Tokenization is supported.
   * @type native
   */
  borderBottom?: ThemeToken<Css.Property.BorderBottom>;
  /**
   * The CSS `border-left` property. Tokenization is supported.
   * @type native
   */
  borderLeft?: ThemeToken<Css.Property.BorderLeft>;
  /**
   * The CSS `border-inline` property. Tokenization is supported.
   * @type native
   */
  borderInline?: ThemeToken<Css.Property.BorderInline>;
  /**
   * The CSS `border-inline-start` property. Tokenization is supported.
   * @type native
   */
  borderInlineStart?: ThemeToken<Css.Property.BorderInlineStart>;
  /**
   * The CSS `border-inline-start` property. Tokenization is supported.
   * @type custom
   */
  borderStart?: ThemeToken<Css.Property.BorderInlineStart>;
  /**
   * The CSS `border-inline-end` property. Tokenization is supported.
   * @type native
   */
  borderInlineEnd?: ThemeToken<Css.Property.BorderInlineEnd>;
  /**
   * The CSS `border-inline-end` property. Tokenization is supported.
   * @type custom
   */
  borderEnd?: ThemeToken<Css.Property.BorderInlineEnd>;
  /**
   * The CSS `border-block` property. Tokenization is supported.
   * @type native
   */
  borderBlock?: ThemeToken<Css.Property.BorderBlock>;
  /**
   * The CSS `border-block-start` property. Tokenization is supported.
   * @type native
   */
  borderBlockStart?: ThemeToken<Css.Property.BorderBlockStart>;
  /**
   * The CSS `border-block-end` property. Tokenization is supported.
   * @type native
   */
  borderBlockEnd?: ThemeToken<Css.Property.BorderBlockEnd>;
  /**
   * The CSS `border-right` and `border-left` property. Tokenization is supported.
   * @type custom
   */
  borderX?: ThemeToken<Css.Property.Border>;
  /**
   * The CSS `border-top` and `border-bottom` property. Tokenization is supported.
   * @type custom
   */
  borderY?: ThemeToken<Css.Property.Border>;
  /**
   * The CSS `border-radius` property. Tokenization is supported.
   * @type native
   */
  borderRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-radius` property. Tokenization is supported.
   * @type custom
   */
  rounded?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-top-left-radius` property. Tokenization is supported.
   * @type native
   */
  borderTopLeftRadius?: ThemeToken<Css.Property.BorderTopLeftRadius<Length>>;
  /**
   * The CSS `border-top-left-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedTopLeft?: ThemeToken<Css.Property.BorderTopLeftRadius<Length>>;
  /**
   * The CSS `border-top-right-radius` property. Tokenization is supported.
   * @type native
   */
  borderTopRightRadius?: ThemeToken<Css.Property.BorderTopRightRadius<Length>>;
  /**
   * The CSS `border-top-right-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedTopRight?: ThemeToken<Css.Property.BorderTopRightRadius<Length>>;
  /**
   * The CSS `border-bottom-left-radius` property. Tokenization is supported.
   * @type native
   */
  borderBottomLeftRadius?: ThemeToken<
    Css.Property.BorderBottomLeftRadius<Length>
  >;
  /**
   * The CSS `border-bottom-left-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedBottomLeft?: ThemeToken<Css.Property.BorderBottomLeftRadius<Length>>;
  /**
   * The CSS `border-bottom-right-radius` property. Tokenization is supported.
   * @type native
   */
  borderBottomRightRadius?: ThemeToken<
    Css.Property.BorderBottomRightRadius<Length>
  >;
  /**
   * The CSS `border-bottom-right-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedBottomRight?: ThemeToken<Css.Property.BorderBottomRightRadius<Length>>;
  /**
   * The CSS `border-top-right-radius` and `border-top-left-radius` property. Tokenization is supported.
   * @type custom
   */
  borderTopRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-top-right-radius` and `border-top-left-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedTop?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-bottom-right-radius` and `border-bottom-left-radius` property. Tokenization is supported.
   * @type custom
   */
  borderBottomRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-bottom-right-radius` and `border-bottom-left-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedBottom?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-top-left-radius` and `border-bottom-left-radius` property. Tokenization is supported.
   * @type custom
   */
  borderLeftRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-top-left-radius` and `border-bottom-left-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedLeft?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-top-right-radius` and `border-bottom-right-radius` property. Tokenization is supported.
   * @type custom
   */
  borderRightRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-top-right-radius` and `border-bottom-right-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedRight?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-start-start-radius` property. Tokenization is supported.
   * @type native
   */
  borderStartStartRadius?: ThemeToken<
    Css.Property.BorderStartStartRadius<Length>
  >;
  /**
   * The CSS `border-start-start-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedStartStart?: ThemeToken<Css.Property.BorderStartStartRadius<Length>>;
  /**
   * The CSS `border-start-start-radius` property. Tokenization is supported.
   * @type custom
   */
  borderTopStartRadius?: ThemeToken<
    Css.Property.BorderStartStartRadius<Length>
  >;
  /**
   * The CSS `border-start-end-radius` property. Tokenization is supported.
   * @type native
   */
  borderStartEndRadius?: ThemeToken<Css.Property.BorderStartEndRadius<Length>>;
  /**
   * The CSS `border-start-end-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedStartEnd?: ThemeToken<Css.Property.BorderStartEndRadius<Length>>;
  /**
   * The CSS `border-start-end-radius` property. Tokenization is supported.
   * @type custom
   */
  borderTopEndRadius?: ThemeToken<Css.Property.BorderStartEndRadius<Length>>;
  /**
   * The CSS `border-end-start-radius` property. Tokenization is supported.
   * @type native
   */
  borderEndStartRadius?: ThemeToken<Css.Property.BorderEndStartRadius<Length>>;
  /**
   * The CSS `border-end-start-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedEndStart?: ThemeToken<Css.Property.BorderEndStartRadius<Length>>;
  /**
   * The CSS `border-end-start-radius` property. Tokenization is supported.
   * @type custom
   */
  borderBottomStartRadius?: ThemeToken<
    Css.Property.BorderEndStartRadius<Length>
  >;
  /**
   * The CSS `border-end-end-radius` property. Tokenization is supported.
   * @type native
   */
  borderEndEndRadius?: ThemeToken<Css.Property.BorderEndEndRadius<Length>>;
  /**
   * The CSS `border-end-end-radius` property. Tokenization is supported.
   * @type native
   */
  roundedEndEnd?: ThemeToken<Css.Property.BorderEndEndRadius<Length>>;
  /**
   * The CSS `border-end-end-radius` property. Tokenization is supported.
   * @type native
   */
  borderBottomEndRadius?: ThemeToken<Css.Property.BorderEndEndRadius<Length>>;
  /**
   * The CSS `border-start-start-radius` and `border-end-start-radius` property. Tokenization is supported.
   * @type custom
   */
  borderInlineStartRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-start-start-radius` and `border-end-start-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedStart?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-start-start-radius` and `border-end-start-radius` property. Tokenization is supported.
   * @type custom
   */
  borderStartRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-start-end-radius` and `border-end-end-radius` property. Tokenization is supported.
   * @type custom
   */
  borderInlineEndRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-start-end-radius` and `border-end-end-radius` property. Tokenization is supported.
   * @type custom
   */
  roundedEnd?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-start-end-radius` and `border-end-end-radius` property. Tokenization is supported.
   * @type custom
   */
  borderEndRadius?: ThemeToken<Css.Property.BorderRadius<Length>>;
  /**
   * The CSS `border-color` property. Tokenization is supported.
   * @type native
   */
  borderColor?: ThemeToken<Css.Property.BorderColor>;
  /**
   * The CSS `border-top-color` property. Tokenization is supported.
   * @type native
   */
  borderTopColor?: ThemeToken<Css.Property.BorderTopColor>;
  /**
   * The CSS `border-right-color` property. Tokenization is supported.
   * @type native
   */
  borderRightColor?: ThemeToken<Css.Property.BorderRightColor>;
  /**
   * The CSS `border-bottom-color` property. Tokenization is supported.
   * @type native
   */
  borderBottomColor?: ThemeToken<Css.Property.BorderBottomColor>;
  /**
   * The CSS `border-left-color` property. Tokenization is supported.
   * @type native
   */
  borderLeftColor?: ThemeToken<Css.Property.BorderLeftColor>;
  /**
   * The CSS `border-inline-color` property. Tokenization is supported.
   * @type native
   */
  borderInlineColor?: ThemeToken<Css.Property.BorderInlineColor>;
  /**
   * The CSS `border-inline-start-color` property. Tokenization is supported.
   * @type native
   */
  borderInlineStartColor?: ThemeToken<Css.Property.BorderInlineStartColor>;
  /**
   * The CSS `border-inline-start-color` property. Tokenization is supported.
   * @type custom
   */
  borderStartColor?: ThemeToken<Css.Property.BorderInlineStartColor>;
  /**
   * The CSS `border-inline-end-color` property. Tokenization is supported.
   * @type native
   */
  borderInlineEndColor?: ThemeToken<Css.Property.BorderInlineEndColor>;
  /**
   * The CSS `border-inline-end-color` property. Tokenization is supported.
   * @type custom
   */
  borderEndColor?: ThemeToken<Css.Property.BorderInlineEndColor>;
  /**
   * The CSS `border-block-color` property. Tokenization is supported.
   * @type native
   */
  borderBlockColor?: ThemeToken<Css.Property.BorderBlockColor>;
  /**
   * The CSS `border-block-start-color` property. Tokenization is supported.
   * @type native
   */
  borderBlockStartColor?: ThemeToken<Css.Property.BorderBlockStartColor>;
  /**
   * The CSS `border-block-end-color` property. Tokenization is supported.
   * @type native
   */
  borderBlockEndColor?: ThemeToken<Css.Property.BorderBlockEndColor>;
  /**
   * The CSS `border-width` property. Tokenization is supported.
   * @type native
   */
  borderWidth?: ThemeToken<Css.Property.BorderWidth<Length>>;
  /**
   * The CSS `border-top-width` property. Tokenization is supported.
   * @type native
   */
  borderTopWidth?: ThemeToken<Css.Property.BorderTopWidth<Length>>;
  /**
   * The CSS `border-right-width` property. Tokenization is supported.
   * @type native
   */
  borderRightWidth?: ThemeToken<Css.Property.BorderRightWidth<Length>>;
  /**
   * The CSS `border-bottom-width` property. Tokenization is supported.
   * @type native
   */
  borderBottomWidth?: ThemeToken<Css.Property.BorderBottomWidth<Length>>;
  /**
   * The CSS `border-left-width` property. Tokenization is supported.
   * @type native
   */
  borderLeftWidth?: ThemeToken<Css.Property.BorderLeftWidth<Length>>;
  /**
   * The CSS `border-inline-width` property. Tokenization is supported.
   * @type native
   */
  borderInlineWidth?: ThemeToken<Css.Property.BorderInlineWidth<Length>>;
  /**
   * The CSS `border-inline-start-width` property. Tokenization is supported.
   * @type native
   */
  borderInlineStartWidth?: ThemeToken<
    Css.Property.BorderInlineStartWidth<Length>
  >;
  /**
   * The CSS `border-inline-start-width` property. Tokenization is supported.
   * @type custom
   */
  borderStartWidth?: ThemeToken<Css.Property.BorderInlineStartWidth<Length>>;
  /**
   * The CSS `border-inline-end-width` property. Tokenization is supported.
   * @type native
   */
  borderInlineEndWidth?: ThemeToken<Css.Property.BorderInlineEndWidth<Length>>;
  /**
   * The CSS `border-inline-end-width` property. Tokenization is supported.
   * @type custom
   */
  borderEndWidth?: ThemeToken<Css.Property.BorderInlineEndWidth<Length>>;
  /**
   * The CSS `border-block-width` property. Tokenization is supported.
   * @type native
   */
  borderBlockWidth?: ThemeToken<Css.Property.BorderBlockWidth<Length>>;
  /**
   * The CSS `border-block-start-width` property. Tokenization is supported.
   * @type native
   */
  borderBlockStartWidth?: ThemeToken<
    Css.Property.BorderBlockStartWidth<Length>
  >;
  /**
   * The CSS `border-block-end-width` property. Tokenization is supported.
   * @type native
   */
  borderBlockEndWidth?: ThemeToken<Css.Property.BorderBlockEndWidth<Length>>;
  /**
   * The CSS `border-style` property. Tokenization is not supported.
   * @type native
   */
  borderStyle?: GenericToken<Css.Property.BorderStyle>;
  /**
   * The CSS `border-top-style` property. Tokenization is not supported.
   * @type native
   */
  borderTopStyle?: GenericToken<Css.Property.BorderTopStyle>;
  /**
   * The CSS `border-right-style` property. Tokenization is not supported.
   * @type native
   */
  borderRightStyle?: GenericToken<Css.Property.BorderRightStyle>;
  /**
   * The CSS `border-bottom-style` property. Tokenization is not supported.
   * @type native
   */
  borderBottomStyle?: GenericToken<Css.Property.BorderBottomStyle>;
  /**
   * The CSS `border-left-style` property. Tokenization is not supported.
   * @type native
   */
  borderLeftStyle?: GenericToken<Css.Property.BorderLeftStyle>;
  /**
   * The CSS `border-inline-style` property. Tokenization is not supported.
   * @type native
   */
  borderInlineStyle?: GenericToken<Css.Property.BorderInlineStyle>;
  /**
   * The CSS `border-inline-start-style` property. Tokenization is not supported.
   * @type native
   */
  borderInlineStartStyle?: GenericToken<Css.Property.BorderInlineStartStyle>;
  /**
   * The CSS `border-inline-start-style` property. Tokenization is not supported.
   * @type custom
   */
  borderStartStyle?: GenericToken<Css.Property.BorderInlineStartStyle>;
  /**
   * The CSS `border-inline-end-style` property. Tokenization is not supported.
   * @type native
   */
  borderInlineEndStyle?: GenericToken<Css.Property.BorderInlineEndStyle>;
  /**
   * The CSS `border-inline-end-style` property. Tokenization is not supported.
   * @type native
   */
  borderEndStyle?: GenericToken<Css.Property.BorderInlineEndStyle>;
  /**
   * The CSS `border-block-style` property. Tokenization is not supported.
   * @type native
   */
  borderBlockStyle?: GenericToken<Css.Property.BorderBlockStyle>;
  /**
   * The CSS `border-block-start-style` property. Tokenization is not supported.
   * @type native
   */
  borderBlockStartStyle?: GenericToken<Css.Property.BorderBlockStartStyle>;
  /**
   * The CSS `border-block-end-style` property. Tokenization is not supported.
   * @type native
   */
  borderBlockEndStyle?: GenericToken<Css.Property.BorderBlockEndStyle>;
  /**
   * The CSS `border-collapse` property. Tokenization is not supported.
   * @type native
   */
  borderCollapse?: GenericToken<Css.Property.BorderCollapse>;
  /**
   * The CSS `border-spacing` property. Tokenization is not supported.
   * @type native
   */
  borderSpacing?: GenericToken<Css.Property.BorderSpacing>;
  /**
   * The CSS `border-image` property. Tokenization is not supported.
   * @type native
   */
  borderImage?: GenericToken<Css.Property.BorderImage>;
  /**
   * The CSS `border-image-source` property. Tokenization is not supported.
   * @type native
   */
  borderImageSource?: GenericToken<Css.Property.BorderImageSource>;
  /**
   * The CSS `border-image-outset` property. Tokenization is not supported.
   * @type native
   */
  borderImageOutset?: GenericToken<Css.Property.BorderImageOutset>;
  /**
   * The CSS `border-image-width` property. Tokenization is not supported.
   * @type native
   */
  borderImageWidth?: GenericToken<Css.Property.BorderImageWidth>;
  /**
   * The CSS `border-image-slice` property. Tokenization is not supported.
   * @type native
   */
  borderImageSlice?: GenericToken<Css.Property.BorderImageSlice>;
  /**
   * The CSS `border-image-repeat` property. Tokenization is not supported.
   * @type native
   */
  borderImageRepeat?: GenericToken<Css.Property.BorderImageRepeat>;
};
