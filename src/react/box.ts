import { antd, type HtmlAntdProps } from '../styled-factory';

export interface BoxProps extends HtmlAntdProps<'div'> {}

/**
 * Box is the most abstract component on top of which other antd
 * components are built. It renders a `div` element by default.
 */
export const Box = antd('div');

Box.displayName = 'Box';
