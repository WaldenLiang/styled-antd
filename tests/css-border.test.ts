import { css } from '../src';
import { theme } from './theme';

describe('css border', () => {
  test('typings', () => {
    expect(
      css({
        border: '1px solid',
        borderTop: 'sizeMS',
        borderRight: 'sizeMS',
        borderBottom: 'sizeMS',
        borderLeft: 'sizeMS',
        borderBlock: 'sizeMS',
        borderBlockColor: 'successColor',
        borderBlockEnd: 'successColor',
        borderBlockEndColor: 'successColor',
        borderBlockEndStyle: 'dashed',
        borderBlockEndWidth: 1,
        borderBlockStart: 'successColor',
        borderBlockStartColor: 'successColor',
        borderBlockStartStyle: 'groove',
        borderBlockStartWidth: 1,
        borderBlockStyle: 'none',
        borderBlockWidth: 2,
        borderBottomColor: 'successColor',
        borderBottomLeftRadius: 1,
        borderBottomRadius: 1,
        borderBottomRightRadius: 1,
        borderBottomStyle: 'groove',
        borderBottomWidth: 1,
        borderColor: 'successColor',
        borderEnd: 'successColor',
        borderEndColor: 'successColor',
        borderEndEndRadius: 1,
        borderBottomEndRadius: 1,
        rounded: 1,
        roundedBottom: 1,
        roundedBottomLeft: 1,
        roundedBottomRight: 1,
        roundedEnd: 1,
        roundedEndEnd: 1,
        roundedLeft: 1,
        roundedRight: 1,
        roundedStart: 1,
        roundedTop: 1,
        roundedTopLeft: 1,
        roundedTopRight: 1,
        borderEndRadius: 1,
        borderEndStartRadius: 1,
        borderBottomStartRadius: 1,
        borderTopEndRadius: 1,
        borderTopStartRadius: 1,
        roundedEndStart: 1,
        roundedStartEnd: 1,
        roundedStartStart: 1,
        borderEndStyle: 'dashed',
        borderEndWidth: 1,
        borderInline: 'successColor',
        borderInlineColor: 'successColor',
        borderInlineEnd: 'successColor',
        borderInlineEndColor: 'successColor',
        borderInlineEndRadius: 1,
        borderInlineEndStyle: 'dashed',
        borderInlineEndWidth: 1,
        borderInlineStart: 'successColor',
        borderInlineStartColor: 'successColor',
        borderInlineStartRadius: 1,
        borderInlineStartStyle: 'dashed',
        borderInlineStartWidth: 1,
        borderInlineStyle: 'solid',
        borderInlineWidth: 1,
        borderLeftColor: 'successColor',
        borderLeftRadius: 1,
        borderLeftStyle: 'dashed',
        borderLeftWidth: 1,
        borderRadius: 1,
        borderRightColor: 'successColor',
        borderRightRadius: 1,
        borderRightStyle: 'dashed',
        borderRightWidth: 1,
        borderStart: 'successColor',
        borderStartColor: 'successColor',
        borderStartEndRadius: 1,
        borderStartRadius: 1,
        borderStartStartRadius: 1,
        borderStartStyle: 'dashed',
        borderStyle: 'dashed',
        borderTopColor: 'successColor',
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        borderTopStyle: 'dashed',
        borderTopWidth: 1,
        borderWidth: 1,
        borderStartWidth: 1,
        borderTopRadius: 1,
        borderY: 'successColor',
        borderX: 'successColor',
        borderCollapse: 'collapse',
        borderSpacing: '1px',
        borderImage: '',
        borderImageOutset: 1,
        borderImageRepeat: '',
        borderImageSlice: 1,
        borderImageSource: '',
        borderImageWidth: 1,
      })(theme),
    ).toBeDefined();
  });

  test('px', () => {
    expect(
      css({
        borderWidth: 1,
        rounded: 4,
        borderTopWidth: '3em',
        borderImageSlice: 1,
      })(theme),
    ).toEqual({
      borderWidth: '1px',
      borderRadius: '4px',
      borderTopWidth: '3em',
      borderImageSlice: 1,
    });
  });

  test('preserve important', () => {
    expect(
      css({
        borderWidth: '1!',
        rounded: 'borderRadiusLG!',
      })(theme),
    ).toEqual({
      borderWidth: '1px !important',
      borderRadius: '8px !important',
    });
  });

  test('theming', () => {
    expect(
      css({
        border: '1px solid black',
        borderWidth: 'lineWidth',
        borderColor: 'colorPrimary',
        rounded: 'borderRadiusSM',
      })(theme),
    ).toEqual({
      border: '1px solid black',
      borderWidth: '1px',
      borderColor: '#1677ff',
      borderRadius: '4px',
    });
  });

  test('borderX & borderY', () => {
    expect(
      css({
        borderX: '1px solid black',
        borderY: '1px solid black',
      })(theme),
    ).toEqual({
      borderTop: '1px solid black',
      borderRight: '1px solid black',
      borderBottom: '1px solid black',
      borderLeft: '1px solid black',
    });
  });

  test('overridable', () => {
    expect(
      css({
        borderX: '1px solid black',
        borderLeft: '2px solid',
      })(theme),
    ).toEqual({
      borderRight: '1px solid black',
      borderLeft: '2px solid',
    });
  });

  test('borderImageSource', () => {
    expect(
      css({
        borderImageSource: 'https://excample.com/pic.jpg',
      })(theme),
    ).toEqual({
      borderImageSource: "url('https://excample.com/pic.jpg')",
    });

    expect(
      css({
        borderImageSource: 'linear(to-r, colorPrimary, colorSuccess)',
      })(theme),
    ).toEqual({
      borderImageSource: 'linear-gradient(to right, #1677ff, #52c41a)',
    });
  });
});
