import React from 'react';
import { render } from '@testing-library/react';
import { antd } from '../src';

const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {
  // nothing
});

test('should allow custom should forward props', () => {
  const Div = antd<'div', { sample: string; isBig: string }>('div', {
    shouldForwardProp: (prop) => !['sample'].includes(prop),
  });
  const { getByTestId } = render(
    <Div sample="testing" color="white" isBig="ddf" data-testid="div" />
  );

  expect(getByTestId('div')).not.toHaveAttribute('sample');
  expect(getByTestId('div')).toHaveAttribute('isBig');
  expect(getByTestId('div')).toHaveAttribute('color');
  /**
   * React-DOM should show an error about `isBig` getting to the DOM
   */
  expect(consoleSpy).toHaveBeenCalled();
});
