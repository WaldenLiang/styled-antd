import { isCssVar, runIfFn, splitByComma } from '../utils';

export const isCssVariableTokenValue = (
  key: string,
  value: any
): value is string =>
  key.startsWith('--') && typeof value === 'string' && !isCssVar(value);

export const resolveTokenValue = (
  theme: Record<string, any>,
  value: string
) => {
  if (value == null) return value;

  const getVar = (val: string) => theme['__tokenMap']?.[val];
  const getValue = (val: string) => getVar(val) ?? val;

  const [tokenValue, fallbackValue] = splitByComma(value);
  value = getVar(tokenValue) ?? getValue(fallbackValue) ?? getValue(value);

  return value;
};

/**
 * Expands an array or object syntax responsive style.
 *
 * @example
 * expandResponsive({ mx: [1, 2] })
 * // or
 * expandResponsive({ mx: { base: 1, sm: 2 } })
 *
 * // => { mx: 1, "@media(min-width:<sm>)": { mx: 2 } }
 */
export const expandResponsive =
  (styles: Record<string, any>) => (theme: Record<string, any>) => {
    /**
     * Before any style can be processed, the user needs to call `createTheme`
     * which analyzes the theme's breakpoint and appends a `__breakpoints` property
     * to the theme with more details of the breakpoints.
     *
     * To learn more, go here: packages/utils/src/responsive.ts #analyzeBreakpoints
     */
    if (!theme['__breakpoints']) return styles;

    const { media: medias } = theme['__breakpoints'];

    const computedStyles: Record<string, any> = {};

    for (const key in styles) {
      const value = runIfFn(styles[key], theme);

      if (value == null) continue;

      if (!Array.isArray(value)) {
        computedStyles[key] = value;
        continue;
      }

      const queries = value.slice(0, medias.length).length;

      for (let index = 0; index < queries; index += 1) {
        const media = medias?.[index];

        if (!media) {
          computedStyles[key] = value[index];
          continue;
        }

        computedStyles[media] = computedStyles[media] || {};

        if (value[index] == null) {
          continue;
        }

        computedStyles[media][key] = value[index];
      }
    }

    return computedStyles;
  };
