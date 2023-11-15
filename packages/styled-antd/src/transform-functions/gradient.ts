import { isCssFunction } from '../utils';
import { genericCssPropertyValueSet } from './constraints';
import { type TransformFn } from './types';

const directionMap = {
  'to-t': 'to top',
  'to-tr': 'to top right',
  'to-r': 'to right',
  'to-br': 'to bottom right',
  'to-b': 'to bottom',
  'to-bl': 'to bottom left',
  'to-l': 'to left',
  'to-tl': 'to top left',
};

const directionValueSet = new Set(Object.values(directionMap));

const trimSpace = (str: string) => str.trim();

export function parseGradient(
  value: string | null | undefined,
  theme: Record<string, any>
) {
  if (value == null || genericCssPropertyValueSet.has(value)) return value;

  const prevent = isCssFunction(value) || genericCssPropertyValueSet.has(value);
  if (!prevent) return `url('${value}')`;

  const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
  const results = regex.exec(value);
  const type = results?.[1];
  const values = results?.[2];

  if (!type || !values) return value;

  const _type = type.includes('-gradient') ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values
    .split(',')
    .map(trimSpace)
    .filter(Boolean);

  if (stops?.length === 0) return value;

  const direction =
    maybeDirection in directionMap
      ? (directionMap as any)[maybeDirection]
      : maybeDirection;

  stops.unshift(direction);

  const _values = stops.map((stop) => {
    // if stop is valid shorthand direction, return it
    if (directionValueSet.has(stop)) return stop;

    const firstStop = stop.indexOf(' ');

    // color stop could be `red.200 20%` based on css gradient spec
    const [_color, _stop] =
      firstStop !== -1
        ? [stop.substring(0, firstStop), stop.substring(firstStop + 1)]
        : [stop];

    const _stopOrFunc = isCssFunction(_stop)
      ? _stop
      : _stop && _stop.split(' ');

    // else, get and transform the color token or css value
    const color = theme['__tokenMap']?.[_color] ?? _color;

    return _stopOrFunc
      ? [
          color,
          ...(Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]),
        ].join(' ')
      : color;
  });

  return `${_type}(${_values.join(', ')})`;
}

export const gradient: TransformFn = (value, theme) =>
  parseGradient(value, theme);
