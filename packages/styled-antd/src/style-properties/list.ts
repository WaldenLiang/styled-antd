import * as Css from 'csstype';
import { type GenericToken } from './types';
import {
  composeStyleProperties,
  defineStyleProperty,
  preserveImportant,
} from './utils';

export const listStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'listStyleType',
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'listStylePosition',
    alias: ['listStylePos'],
    transform: preserveImportant(),
  }),
  defineStyleProperty({
    name: 'listStyleImage',
    alias: ['listStyleImg'],
    transform: preserveImportant(),
  })
);

export type ListProps = {
  listStyleType?: GenericToken<Css.Property.ListStyleType>;
  listStylePosition?: GenericToken<Css.Property.ListStylePosition>;
  listStylePos?: GenericToken<Css.Property.ListStylePosition>;
  listStyleImage?: GenericToken<Css.Property.ListStyleImage>;
  listStyleImg?: GenericToken<Css.Property.ListStyleImage>;
};
