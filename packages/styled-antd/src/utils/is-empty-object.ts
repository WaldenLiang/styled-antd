/**
 * @param obj
 * @returns
 */
export const isEmptyObject = (obj: Record<string, any> | null | undefined) => {
  if (obj == null) return true;

  return Object.keys(obj).length === 0;
};
