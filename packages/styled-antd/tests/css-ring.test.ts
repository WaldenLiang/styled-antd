import { css } from '../src';
import { theme } from './theme';

describe('css ring', () => {
  test('typings', () => {
    expect(
      css({
        ring: 1,
        ringColor: 'colorSuccess',
        ringInset: 'inset',
        ringOffset: 1,
        ringOffsetColor: 'colorPrimary',
      })(theme)
    ).toBeDefined();
  });

  test('ring', () => {
    expect(
      css({
        ring: 4,
      })(theme)['--antd-ring-width']
    ).toBe('4px');

    expect(
      css({
        ring: '4!',
      })(theme)['boxShadow']
    ).toContain('!important');

    expect(
      css({
        ringOffset: 4,
      })(theme)
    ).toEqual({
      '--antd-ring-offset-width': '4px',
    });
  });
});
