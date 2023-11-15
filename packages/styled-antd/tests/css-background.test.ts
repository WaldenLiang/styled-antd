import { css } from '../src';
import { theme } from './theme';

describe('css background', () => {
  test('typings', () => {
    const result = css({
      background: 'colorPrimary',
      bg: 'colorSuccess',
      bgColor: 'colorError',
      backgroundColor: () => 'colorPrimary',
      backgroundAttachment: 'fixed',
      bgAttachment: 'inherit',
      backgroundClip: 'text',
      bgClip: 'padding-box',
      backgroundImage: 'url("")',
      bgImg: 'inherit',
      bgImage: 'none',
      bgGradient: 'linear(to-t, red, green)',
      backgroundPosition: 'center',
      bgPos: 'bottom',
      bgPosition: 'center',
      backgroundRepeat: 'revert',
      bgRepeat: 'repeat',
      backgroundSize: 'contain',
      bgSize: '100px 100px',
    })(theme);

    expect(result).toBeDefined();
  });

  test('theming', () => {
    const result = css({
      background: 'colorPrimary',
      bgColor: 'colorSuccess',
    })(theme);

    expect(result).toEqual({
      background: '#1677ff',
      backgroundColor: '#52c41a',
    });
  });

  test('preserve important', () => {
    expect(
      css({
        background: 'colorPrimary!',
        bgPosition: 'center !important',
        backgroundRepeat: 'repeat',
        bgGradient: 'linear(to-t, red, green)!',
        bgSize: '100px 100px!',
        bgClip: 'initial!',
      })(theme)
    ).toEqual({
      background: '#1677ff !important',
      backgroundPosition: 'center !important',
      backgroundRepeat: 'repeat',
      backgroundImage: 'linear-gradient(to top, #F5222D, #52C41A) !important',
      backgroundSize: '100px 100px !important',
      backgroundClip: 'initial !important',
    });
  });

  test('bgClip', () => {
    expect(
      css({
        bgClip: 'padding-box!',
      })(theme)
    ).toEqual({
      backgroundClip: 'padding-box !important',
    });

    expect(
      css({
        bgClip: 'padding-box',
      })(theme)
    ).toEqual({
      backgroundClip: 'padding-box',
    });

    expect(
      css({
        bgClip: 'text!',
      })(theme)
    ).toEqual({
      color: 'transparent !important',
      backgroundClip: 'text !important',
    });

    expect(
      css({
        bgClip: 'text',
      })(theme)
    ).toEqual({
      color: 'transparent',
      backgroundClip: 'text',
    });
  });

  test('bgImage', () => {
    expect(
      css({
        bgGradient: 'linear(to-t, colorPrimary, colorSuccess)',
      })(theme)
    ).toEqual({
      backgroundImage: 'linear-gradient(to top, #1677ff, #52c41a)',
    });

    expect(
      css({
        bgImage: 'url("https://excample.com/pic.jpg")',
      })(theme)
    ).toEqual({
      backgroundImage: 'url("https://excample.com/pic.jpg")',
    });

    expect(
      css({
        bgImage: 'url("https://excample.com/pic.jpg")!',
      })(theme)
    ).toEqual({
      backgroundImage: 'url("https://excample.com/pic.jpg") !important',
    });

    expect(
      css({
        bgImage: 'https://excample.com/pic.jpg',
      })(theme)
    ).toEqual({
      backgroundImage: "url('https://excample.com/pic.jpg')",
    });

    expect(
      css({
        bgImage: 'https://excample.com/pic.jpg!',
      })(theme)
    ).toEqual({
      backgroundImage: "url('https://excample.com/pic.jpg') !important",
    });
  });

  test('native background properties', () => {
    expect(
      css({
        backgroundPositionX: 'center',
        backgroundPositionY: 'bottom',
        WebkitBackgroundClip: 'content-box',
      })(theme)
    ).toEqual({
      backgroundPositionX: 'center',
      backgroundPositionY: 'bottom',
      WebkitBackgroundClip: 'content-box',
    });
  });
});
