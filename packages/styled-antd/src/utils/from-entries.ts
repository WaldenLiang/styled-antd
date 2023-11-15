/**
 * Object.entries polyfill for Node v10 compatibility
 */
export const fromEntries = <T>(entries: [string, any][]) =>
  entries.reduce((carry, [key, value]) => {
    carry[key] = value;
    return carry;
  }, {} as Record<string, any>) as T;
