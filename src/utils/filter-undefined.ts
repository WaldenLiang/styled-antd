import { objectFilter } from './object-filter';

export const filterUndefined = (object: Record<string, any>) =>
  objectFilter(object, (val) => val !== null && val !== undefined);
