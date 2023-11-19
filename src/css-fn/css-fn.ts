import { pseudoSelectors } from '../pseudos';
import { styleProperties } from '../style-properties';
import { type StyleObjectOrFn, getCss } from './get-css';

/**
 * convert custom css properties to emotion css function
 */
export const css =
  (styles: StyleObjectOrFn) => (theme: Record<string, any>) => {
    const cssFn = getCss({
      theme,
      pseudos: pseudoSelectors,
      configs: styleProperties,
    });

    return cssFn(styles);
  };
