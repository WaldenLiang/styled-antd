import React from 'react';
import { antd, type StyledAntdComponent } from '../src';

/**
 * These tests should fail while type checking
 * if the typings for `StyledAntdComponent` change
 * and create a type regression
 */
describe('`as` prop typings', () => {
  const Comp = (props: {}) => null;

  type CompWithRequiredProps = { thisIsARequiredProp: boolean };
  const CompWithRequired = (props: CompWithRequiredProps) => null;

  it('should have correct types for the styled factory', () => {
    const div = <antd.div />;
    const divWithAsTag = <antd.div as="img" src="/this-is-the-way.webp" />;
    const divWithAsComp = <antd.div as={Comp} />;
    const divWithAsCompRequired = (
      <antd.div as={CompWithRequired} thisIsARequiredProp />
    );

    // make jest happy
    expect(true).toBe(true);
  });

  it('should have correct types for the StyledAntdComponent', () => {
    const Div: StyledAntdComponent<'div'> = (props) => <antd.div {...props} />;
    const CustomComp: StyledAntdComponent<typeof Comp> = (props) => (
      <antd.div as={Comp} {...props} />
    );
    const CustomCompWithRequired = antd(CompWithRequired);

    const renderedCustomCompWithRequired = (
      <CustomCompWithRequired thisIsARequiredProp />
    );

    // make jest happy
    expect(true).toBe(true);
  });

  it('should have correct types for the ChakraComponent with additional props', () => {
    const AdditionalPropComp: StyledAntdComponent<
      'div',
      { additionalProp: boolean }
    > = ({ additionalProp, ...restProps }) => <antd.div {...restProps} />;

    const renderedAdditionPropComp = <AdditionalPropComp additionalProp />;

    // make jest happy
    expect(true).toBe(true);
  });

  it('should have correct types for the StyledAntdComponent with optional additional props', () => {
    const OptionalAdditionalPropComp: StyledAntdComponent<
      'div',
      { additionalProp?: boolean }
    > = ({ additionalProp, ...restProps }) => <antd.div {...restProps} />;

    const renderedAdditionPropComp = <OptionalAdditionalPropComp />;

    // make jest happy
    expect(true).toBe(true);
  });
});
