import { pseudoSelectors } from '../pseudos';
import { styleProperties } from '../style-properties';

const styleProps = { ...styleProperties, ...pseudoSelectors };

export const isStyleProp = (prop: string) => prop in styleProps;
