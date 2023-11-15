import * as Css from 'csstype';
import { type CSSProperties } from 'react';
import { type Pseudos } from '../pseudos';
import { type StyleProps } from '../style-properties';

// fix bug: 解决chakra的选择器或者css var的情况下，无响应式的特性的提示
type CssDefinition<D> =
  | D
  | string
  | number
  | RecursiveCssSelector<D | string | number>;
type RecursiveCssSelector<D> = {
  [selector: string]:
    | (CssDefinition<D> & D)
    | Array<string | number>
    | ((theme: any) => string | number | Array<string | number>);
};

// merge Css native pseudos and self-system pseudos definitions
type PseudoKeys = keyof Css.Pseudos | Pseudos;
type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>;
type RecursivePseudo<D> = {
  [K in PseudoKeys]?: PseudoSelectorDefinition<D> & D;
};
type RecursiveCssObject<D> = D &
  (D | RecursivePseudo<D> | RecursiveCssSelector<D>);

type StylePropNames = keyof StyleProps;
type ResponsiveValue<T> = T | Array<T | null>;
type ReactCssPropertyValue = (string & {}) | (number & {}) | (boolean & {});
type ThemeThunk<T> = T | ((theme: Record<string, any>) => T);

// 未收录的css properties
type RestNativeCssProperties = Omit<Css.Properties, StylePropNames>;

type ResponsiveRestNativeCssProperties = {
  [K in keyof RestNativeCssProperties]?: ThemeThunk<
    ResponsiveValue<RestNativeCssProperties[K] | ReactCssPropertyValue>
  >;
};

export type ResponsiveSystemCssProperties = {
  [K in keyof StyleProps]?: ThemeThunk<
    ResponsiveValue<
      K extends keyof CSSProperties
        ? StyleProps[K] | ReactCssPropertyValue
        : StyleProps[K]
    >
  >;
};

// merge css native properties and self-system style properties definitions
interface SystemCssProperties
  extends ResponsiveSystemCssProperties,
    ResponsiveRestNativeCssProperties {}

// TODO: 优化ts的类型提示的响应时间
export type SystemStyleObject = RecursiveCssObject<SystemCssProperties>;
