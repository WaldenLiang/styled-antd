export const isCssImportant = (value: string) => /!(important)?$/.test(value);

export const cssWithoutImportant = (value: string | number) =>
  typeof value === 'string'
    ? value.replace(/!(important)?$/, '').trim()
    : value;
