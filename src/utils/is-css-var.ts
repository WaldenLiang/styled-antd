export const isCssVar = (value: string): boolean => {
  return /^var\(--.+\)$/.test(value);
};
