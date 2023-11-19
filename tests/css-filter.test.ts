import { css } from '../src';
import { theme } from './theme';

describe('css filter', () => {
  test('typings', () => {
    expect(
      css({
        filter: 'auto',
        blur: 5,
        brightness: 1,
        contrast: 1,
        grayscale: 1,
        hueRotate: 90,
        invert: 1,
        saturate: 1,
        sepia: 1,
        dropShadow: 'none',
        backdropFilter: 'auto',
        backdropBlur: 5,
        backdropBrightness: 1,
        backdropContrast: 1,
        backdropGrayscale: 1,
        backdropHueRotate: 1,
        backdropOpacity: 1,
        backdropInvert: 1,
        backdropSaturate: 1,
        backdropSepia: 1,
      })(theme),
    ).toBeDefined();
  });

  test('filter', () => {
    expect(
      css({
        filter: 'blur(4px)',
      })(theme),
    ).toEqual({ filter: 'blur(4px)' });

    expect(
      css({
        filter: 'blur(4px)!',
      })(theme),
    ).toEqual({ filter: 'blur(4px) !important' });

    expect(
      css({
        filter: 'auto',
        blur: 5,
      })(theme),
    ).toEqual({
      '--antd-blur': 'blur(5px)',
      '--antd-brightness': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-contrast': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-grayscale': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-hue-rotate': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-invert': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-saturate': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-sepia': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-drop-shadow': 'var(--antd-empty,/*!*/ /*!*/)',
      filter:
        'var(--antd-blur) var(--antd-brightness) var(--antd-contrast) var(--antd-grayscale) var(--antd-hue-rotate) var(--antd-invert) var(--antd-saturate) var(--antd-sepia) var(--antd-drop-shadow)',
    });

    expect(
      css({
        filter: 'auto!',
      })(theme)['filter'],
    ).toContain('!important');
  });

  test('backdrop filter', () => {
    expect(
      css({
        backdropFilter: 'blur(4px)!',
      })(theme),
    ).toEqual({ backdropFilter: 'blur(4px) !important' });

    expect(
      css({
        backdropFilter: 'auto',
        backdropBlur: 5,
      })(theme),
    ).toEqual({
      backdropFilter:
        'var(--antd-backdrop-blur) var(--antd-backdrop-brightness) var(--antd-backdrop-contrast) var(--antd-backdrop-grayscale) var(--antd-backdrop-hue-rotate) var(--antd-backdrop-invert) var(--antd-backdrop-opacity) var(--antd-backdrop-saturate) var(--antd-backdrop-sepia)',
      '--antd-backdrop-blur': 'blur(5px)',
      '--antd-backdrop-brightness': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-backdrop-contrast': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-backdrop-grayscale': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-backdrop-hue-rotate': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-backdrop-invert': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-backdrop-opacity': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-backdrop-saturate': 'var(--antd-empty,/*!*/ /*!*/)',
      '--antd-backdrop-sepia': 'var(--antd-empty,/*!*/ /*!*/)',
    });
  });
});
