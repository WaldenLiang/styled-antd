import { pseudoSelectors } from '../pseudos';
import { styleProperties } from '../style-properties';

const propNames = [
  ...Object.keys(styleProperties),
  ...Object.keys(pseudoSelectors),
];

/**
 * List of props for emotion to omit from DOM.
 * It mostly consists of system styled props
 */
const allPropNames = new Set([...propNames, 'as', 'css', 'sx']);

export const shouldForwardProp = (prop: string) => !allPropNames.has(prop);
