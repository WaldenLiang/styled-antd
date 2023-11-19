import { type SystemStyleObject } from '../css-fn';
import { forwardRef, antd, type HtmlAntdProps } from '../styled-factory';

interface FlexOptions {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemProps["alignItems"]
   */
  align?: SystemStyleObject['alignItems'];

  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemProps["justifyContent"]
   */
  justify?: SystemStyleObject['justifyContent'];

  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemProps["flexWrap"]
   */
  wrap?: SystemStyleObject['flexWrap'];

  /**
   * Shorthand for `flexDirection` style prop
   * @type SystemProps["flexDirection"]
   * @default "row"
   */
  direction?: SystemStyleObject['flexDirection'];

  /**
   * Shorthand for `flexBasis` style prop
   * @type SystemProps["flexBasis"]
   */
  basis?: SystemStyleObject['flexBasis'];

  /**
   * Shorthand for `flexGrow` style prop
   * @type SystemProps["flexGrow"]
   */
  grow?: SystemStyleObject['flexGrow'];

  /**
   * Shorthand for `flexShrink` style prop
   * @type SystemProps["flexShrink"]
   */
  shrink?: SystemStyleObject['flexShrink'];
}

export interface FlexProps extends HtmlAntdProps<'div'>, FlexOptions {}

/**
 * React component used to create flexbox layouts.
 *
 * It renders a `div` with `display: flex` and
 * comes with helpful style shorthand.
 */
export const Flex = forwardRef<FlexProps, 'div'>((props, ref) => {
  const { direction, align, justify, wrap, basis, grow, shrink, ...rest } =
    props;

  const styles = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
  };

  return <antd.div ref={ref} {...styles} {...rest} />;
});

Flex.displayName = 'Flex';
