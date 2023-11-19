export const isCssFunction = (value: unknown) => {
  return (
    typeof value === 'string' && value.includes('(') && value.includes(')')
  );
};
