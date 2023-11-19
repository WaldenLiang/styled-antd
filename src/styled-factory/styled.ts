import { forwardRef, createElement } from 'react';
import createStyled, {
  type FunctionInterpolation,
  type CSSObject,
} from '@emotion/styled';
import { css, type SystemStyleObject } from '../css-fn';
import { objectFilter, runIfFn, assignAfter, filterUndefined } from '../utils';
import { isStyleProp } from './utils';
import { type As, type StyledAntdComponent } from './types';
import { shouldForwardProp } from './should-forward-prop';

type StyleResolverProps = SystemStyleObject & {
  theme: Record<string, any>;
  sx?: SystemStyleObject;
  css?: CSSObject;
};

interface GetStyleObject {
  (options: {
    baseStyle?:
      | SystemStyleObject
      | ((props: StyleResolverProps) => SystemStyleObject);
  }): FunctionInterpolation<StyleResolverProps>;
}

/**
 * Style resolver function that manages how style props are merged
 * in combination with other possible ways of defining styles.
 *
 * For example, take a component defined this way:
 * ```jsx
 * <Box fontSize="24px" sx={{ fontSize: "40px" }}></Box>
 * ```
 *
 * We want to manage the priority of the styles properly to prevent unwanted
 * behaviors. Right now, the `sx` prop has the highest priority so the resolved
 * fontSize will be `40px`
 */
const toCssObject: GetStyleObject =
  ({ baseStyle }) =>
  (props) => {
    const { theme, css: cssProp, sx, ...rest } = props;
    // !rest中如果含有未收录的样式，则会被丢弃
    // !对于那些未收录的样式，可以在sx中补充
    // 如果有需求可以考虑后续收录更多的样式属性
    const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop));
    const finalBaseStyle = runIfFn(baseStyle, props);
    const finalStyles = assignAfter(
      {},
      finalBaseStyle,
      filterUndefined(styleProps),
      sx,
    );

    const computedCss = css(finalStyles)(theme);

    return cssProp ? [computedCss, cssProp] : computedCss;
  };

export interface StyledOptions {
  shouldForwardProp?(prop: string): boolean;
  baseStyle?:
    | SystemStyleObject
    | ((props: StyleResolverProps) => SystemStyleObject);
}

export function styled<T extends As, P extends object = {}>(
  component: T,
  options?: StyledOptions,
) {
  const { baseStyle, ...styledOptions } = options ?? {};

  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }

  const styleObject = toCssObject({ baseStyle });

  const Component = createStyled(
    component as React.ComponentType<any>,
    styledOptions,
  )(styleObject);

  const comp = forwardRef((props, ref) => {
    return createElement(Component, {
      ref,
      ...props,
    });
  });

  return comp as StyledAntdComponent<T, P>;
}
