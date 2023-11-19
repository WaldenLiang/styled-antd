import * as Css from 'csstype';
import mergeWith from 'lodash.mergewith';
import { isObject, runIfFn } from '../utils';
import { type StylePropertyConfigs } from '../style-properties';
import {
  expandResponsive,
  isCssVariableTokenValue,
  resolveTokenValue,
} from './utils';
import { type SystemStyleObject } from './types';

type GetCssOptions = {
  theme: Record<string, any>;
  configs?: StylePropertyConfigs;
  pseudos?: Record<string, Css.Pseudos | (string & {})>;
};

export type StyleObjectOrFn =
  | SystemStyleObject
  | ((theme: Record<string, any>) => SystemStyleObject);

export const getCss = (options: GetCssOptions) => {
  const { configs = {}, pseudos = {}, theme } = options;

  const css = (stylesOrFn: StyleObjectOrFn, nested = false) => {
    const _styles = runIfFn(stylesOrFn, theme);
    const styles = expandResponsive(_styles)(theme);

    let computedStyles: Record<string, any> = {};

    for (let key in styles) {
      const valueOrFn = styles[key];

      /**
       * allows the user to pass functional values
       * boxShadow: theme => `0 2px 2px ${theme.red}`
       */
      let value = runIfFn(valueOrFn, theme);

      /**
       * converts pseudo shorthands to valid selector
       * "_hover" => "&:hover"
       */
      if (key in pseudos) {
        key = pseudos[key];
      }

      /**
       * allows the user to use theme tokens in css vars
       * { --banner-height: "sizeMd" } => { --banner-height: "20px" }
       *
       * You can also provide fallback values
       * { --banner-height: "noExist, 40px" } => { --banner-height: "40px" }
       */
      if (isCssVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme, value);
      }

      if (isObject(value)) {
        computedStyles[key] = computedStyles[key] ?? {};
        computedStyles[key] = mergeWith(
          {},
          computedStyles[key],
          css(value, true),
        );

        continue;
      }

      const config = configs[key];

      let rawValue = config?.transform?.(value, theme, _styles) ?? value;

      /**
       * Used for `apply`. After getting the
       * styles in the theme, we need to process them since they might
       * contain theme tokens.
       *
       * `processResult` is the config property we pass to  `apply`
       */
      rawValue = config?.processResult ? css(rawValue, true) : rawValue;

      /**
       * allows us to define css properties for RTL and LTR.
       *
       * const marginStart = {
       *   property: theme => theme.direction === "rtl" ? "marginRight": "marginLeft",
       * }
       */
      const configProperty = runIfFn(config?.property, theme);

      if (!nested && config?.staticCss) {
        const staticStyles = runIfFn(config.staticCss, theme);
        computedStyles = mergeWith({}, computedStyles, staticStyles);
      }

      if (configProperty && Array.isArray(configProperty)) {
        for (const property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }

      if (configProperty) {
        if (configProperty === '&' && isObject(rawValue)) {
          computedStyles = mergeWith({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty as string] = rawValue;
        }

        continue;
      }

      if (isObject(rawValue)) {
        computedStyles = mergeWith({}, computedStyles, rawValue);
        continue;
      }

      computedStyles[key] = rawValue;
    }

    return computedStyles;
  };

  return css;
};
