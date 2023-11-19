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

export const gridStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'gridGap',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'gridColumnGap',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'gridRowGap',
    transform: preserveImportant(composeTransforms(tokenize, px)),
  }),
  defineStyleProperty({
    name: 'gridColumn',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridRow',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridAutoFlow',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridAutoColumns',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridColumnStart',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridColumnEnd',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridRowStart',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridRowEnd',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridAutoRows',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridTemplate',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridTemplateColumns',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridTemplateRows',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridTemplateAreas',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'gridArea',
    transform: preserveImportant(),
  }),
);

export type GridProps = {
  gridGap?: ThemeToken<Css.Property.GridGap<Length>>;
  gridColumnGap?: ThemeToken<Css.Property.GridColumnGap<Length>>;
  gridRowGap?: ThemeToken<Css.Property.GridRowGap<Length>>;
  gridColumn?: GenericToken<Css.Property.GridColumn>;
  gridRow?: GenericToken<Css.Property.GridRow>;
  gridAutoFlow?: GenericToken<Css.Property.GridAutoFlow>;
  gridAutoColumns?: GenericToken<Css.Property.GridAutoColumns>;
  gridColumnStart?: GenericToken<Css.Property.GridColumnStart>;
  gridColumnEnd?: GenericToken<Css.Property.GridColumnEnd>;
  gridRowStart?: GenericToken<Css.Property.GridRowStart>;
  gridRowEnd?: GenericToken<Css.Property.GridRowEnd>;
  gridAutoRows?: GenericToken<Css.Property.GridAutoRows>;
  gridTemplate?: GenericToken<Css.Property.GridTemplate>;
  gridTemplateColumns?: GenericToken<Css.Property.GridTemplateColumns>;
  gridTemplateRows?: GenericToken<Css.Property.GridTemplateRows>;
  gridTemplateAreas?: GenericToken<Css.Property.GridTemplateAreas>;
  gridArea?: GenericToken<Css.Property.GridArea>;
};
