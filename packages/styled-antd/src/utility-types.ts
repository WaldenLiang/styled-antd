export type MaybeArray<T> = T | T[];
export type StringUnion<T> = T | (string & {});
export type AnyFunction<T = any> = (...args: T[]) => any;
export type Length = StringUnion<0 | (number | {})>;
export type Assign<T, U> = Omit<T, keyof U> & U;

export type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never
        ? ''
        : `.${Leaves<T[K]>}`}`;
    }[keyof T]
  : never;
