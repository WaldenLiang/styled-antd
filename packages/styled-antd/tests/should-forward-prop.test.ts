import { shouldForwardProp } from '../src';

describe('does not forward reserved internal props', () => {
  const internalPropNames = ['css', 'sx', 'as'];

  test.each(internalPropNames)('%s', (propName) => {
    expect(shouldForwardProp(propName)).toBe(false);
  });
});

test('forwards "children" prop', () => {
  expect(shouldForwardProp('children')).toBe(true);
});

describe('forwards other random props', () => {
  const randomPropNames = ['to', 'passHref', 'maxItems', 'strict'];

  test.each(randomPropNames)('%s', (propName) => {
    expect(shouldForwardProp(propName)).toBe(true);
  });
});
