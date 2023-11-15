import { css } from '../src';
import { theme, createTheme } from './theme';

describe('css layout', () => {
  test('typings', () => {
    expect(
      css({
        width: 1,
        w: '1px',
        objectPosition: 1,
        float: 'left',
      })(theme)
    ).toBeDefined();
  });

  test('width', () => {
    expect(
      css({
        width: 1,
      })(theme)
    ).toEqual({
      width: '100%',
    });

    expect(
      css({
        width: 0.5,
      })(theme)
    ).toEqual({
      width: '50%',
    });
  });

  test('float', () => {
    expect(
      css({
        float: 'left',
      })(theme)
    ).toEqual({
      float: 'left',
    });

    expect(
      css({
        float: 'left',
      })(createTheme('rtl'))
    ).toEqual({
      float: 'right',
    });
  });
});
