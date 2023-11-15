import { type GenericToken } from './types';
import {
  composeStyleProperties,
  defineStyleProperty,
  memoizedGet as get,
} from './utils';

const getWithPriority = (
  theme: Record<string, any>,
  key: string,
  styles: Record<string, any> = {}
) => {
  const result: Record<string, any> = {};
  const obj = get(theme, key);

  for (const prop in obj) {
    const isInStyles = prop in styles && styles[prop] != null;
    if (!isInStyles) result[prop] = obj[prop];
  }

  return result;
};

export const othersStyleProperties = composeStyleProperties(
  defineStyleProperty({
    name: 'apply',
    processResult: true,
    property: false,
    transform: (value, theme, styles) => getWithPriority(theme, value, styles),
  })
);

export type OthersProps = {
  /**
   * Apply theme-aware style objects in `theme.styles`
   *
   * @example
   * ```jsx
   * <Box apply="h3">This is a div</Box>
   * <Box apply="h3 primary">This is a div</Box>
   * ```
   *
   * This will apply styles defined in `theme.styles.h3`
   */
  apply?: GenericToken<string>;
};
