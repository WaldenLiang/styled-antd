import { type TransformFn } from '../transform-functions';
import {
  assignAfter,
  cssWithoutImportant,
  isCssImportant,
  isObject,
} from '../utils';
import {
  type StylePropertyConfigs,
  type StylePropertyConfig,
  type StylePropertyObject,
} from './types';

export const defineStyleProperty = ({
  name,
  alias = [],
  staticCss,
  property,
  processResult,
  transform,
}: StylePropertyObject): StylePropertyConfigs => {
  const propNames = [name, ...alias];

  return propNames.reduce<StylePropertyConfigs>((prev, propName) => {
    const config: StylePropertyConfig = {
      staticCss,
      transform,
      processResult,
    };

    if (property !== false) {
      config.property = property ?? name;
    }

    prev[propName] = config;

    return prev;
  }, {});
};

export const composeStyleProperties = (...properties: StylePropertyConfigs[]) =>
  assignAfter({}, ...properties) as StylePropertyConfigs;

export const preserveImportant = (transform?: TransformFn) => {
  const fn: TransformFn = (value, theme, styles) => {
    if (typeof value !== 'string')
      return transform?.(value, theme, styles) ?? value;

    const important = isCssImportant(value);

    if (!important) return transform?.(value, theme, styles) ?? value;

    const valueWithoutImportant = cssWithoutImportant(value);

    if (!transform) return `${valueWithoutImportant} !important`;

    const transformed = cssWithoutImportant(
      transform(valueWithoutImportant, theme, styles),
    );

    if (
      typeof transformed === 'boolean' ||
      typeof transformed === 'number' ||
      typeof transformed === 'string'
    )
      return `${transformed} !important`;

    return transformed;
  };

  return fn;
};

export const tokenize: TransformFn = (value, theme) =>
  theme['__tokenMap']?.[value] ?? value;

export const composeTransforms =
  (...handlers: TransformFn[]): TransformFn =>
  (value, theme, styles) => {
    return handlers.reduce((prev, handler) => {
      return handler(prev, theme, styles);
    }, value);
  };

function get(theme: Record<string, any>, name: string) {
  const styles = theme.styles;

  if (!styles) return {};

  const names = name.split(' ');

  return names.reduce<Record<string, any>>((prev, item) => {
    const value = styles[item];

    if (isObject(value)) {
      return {
        ...prev,
        ...value,
      };
    }

    return prev;
  }, {});
}

type Get = (theme: Record<string, any>, name: string) => Record<string, any>;

const memoize = (fn: Get) => {
  const cache = new WeakMap();

  const memoizedFn: Get = (theme, name) => {
    if (!cache.has(theme)) {
      cache.set(theme, new Map());
    }

    const map = cache.get(theme);

    if (map.has(name)) {
      return map.get(name);
    }

    const value = fn(theme, name);

    map.set(name, value);

    return value;
  };

  return memoizedFn;
};

export const memoizedGet = memoize(get);
