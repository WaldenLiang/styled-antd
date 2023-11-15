type FilterFn<T> = (value: any, key: string, object: T) => boolean;

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
export function objectFilter<T extends Record<string, any>>(
  object: T,
  fn: FilterFn<T>
) {
  const result: Record<string, any> = {};

  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });

  return result;
}
