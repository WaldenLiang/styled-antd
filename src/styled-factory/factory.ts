import { type StyledOptions, styled as createStyled } from './styled';
import { type As, type StyledAntdComponent } from './types';

type DomElements = keyof JSX.IntrinsicElements;

type InternalHtmlComponents = {
  [Tag in DomElements]: StyledAntdComponent<Tag, {}>;
};

type StyledFactory = {
  <T extends As, P extends object = {}>(
    component: T,
    options?: StyledOptions,
  ): StyledAntdComponent<T, P>;
};

function styledFactory() {
  const cache = new Map<DomElements, StyledAntdComponent<DomElements>>();

  return new Proxy(createStyled, {
    /**
     * @example
     * const Div = styled("div")
     * const WithStyled = styled(AnotherComponent)
     */
    apply(_target, _thisArg, argArray: [DomElements, StyledOptions]) {
      return createStyled(...argArray);
    },
    /**
     * @example
     * <styled.div />
     */
    get(_, element: DomElements) {
      if (!cache.has(element)) {
        cache.set(element, createStyled(element));
      }
      return cache.get(element);
    },
  }) as StyledFactory & InternalHtmlComponents;
}

/**
 * The styled factory serves as an object of styled enabled JSX elements,
 * and also a function that can be used to enable custom component receive antd's style props.
 */
export const antd = styledFactory();
