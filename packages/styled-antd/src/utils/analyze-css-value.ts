export const analyzeCssValue = (value: number | string) => {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), '');

  return { hasUnit: !!unit, value: num, unit };
};
