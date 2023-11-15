import { css } from '../src';
import { theme } from './theme';

test('returns system props styles', () => {
  const result = css({
    color: 'colorPrimary',
    fontSize: [2, 3, 4],
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "@media screen and (min-width: 480px)": {
      "fontSize": "3px",
    },
    "@media screen and (min-width: 576px)": {
      "fontSize": "4px",
    },
    "color": "#1677ff",
    "fontSize": "2px",
  }
`);
});

test('returns nested system props styles', () => {
  const result = css({
    color: 'colorPrimary',
    '&:hover': {
      color: 'colorSuccess',
    },
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "&:hover": {
      "color": "#52c41a",
    },
    "color": "#1677ff",
  }
`);
});

test('returns nested responsive styles', () => {
  const result = css({
    color: 'colorPrimary',
    h1: {
      py: [3, 4],
    },
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "color": "#1677ff",
    "h1": {
      "@media screen and (min-width: 480px)": {
        "paddingBottom": "4px",
        "paddingTop": "4px",
      },
      "paddingBottom": "3px",
      "paddingTop": "3px",
    },
  }
  `);
});

test('returns nested responsive styles (native css css properties)', () => {
  const result = css({
    backgroundPositionX: ['10px', '20px'],
    h1: {
      backgroundPositionY: ['3px', '4px'],
    },
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "@media screen and (min-width: 480px)": {
      "backgroundPositionX": "20px",
    },
    "backgroundPositionX": "10px",
    "h1": {
      "@media screen and (min-width: 480px)": {
        "backgroundPositionY": "4px",
      },
      "backgroundPositionY": "3px",
    },
  }
  `);
});

test('handles all core styled system props', () => {
  const result = css({
    m: 0,
    mb: 2,
    mx: 'auto',
    p: 3,
    py: 4,
    fontSize: 3,
    fontWeight: 'bold',
    color: 'colorPrimary',
    bg: 'colorSuccess',
    fontFamily: 'fontFamilyCode',
    lineHeight: 'lineHeightLG',
    textTransform: 'uppercase',
  })(theme);
  expect(result).toMatchInlineSnapshot(`
  {
    "background": "#52c41a",
    "color": "#1677ff",
    "fontFamily": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    "fontSize": "3px",
    "fontWeight": "bold",
    "lineHeight": 1.5,
    "margin": "0px",
    "marginBottom": "2px",
    "marginLeft": "auto",
    "marginRight": "auto",
    "padding": "3px",
    "paddingBottom": "4px",
    "paddingTop": "4px",
    "textTransform": "uppercase",
  }
  `);
});

test('access components tokens', () => {
  const result = css({
    bgColor: 'Button.defaultBg',
    color: 'Button.colorError',
    rounded: 'Button.borderRadius',
  })(theme);
  expect(result).toMatchInlineSnapshot(`
  {
    "backgroundColor": "#ffffff",
    "borderRadius": "6px",
    "color": "#ff4d4f",
  }
  `);
});

test('works with the css prop', () => {
  const result = css({
    color: 'colorPrimary',
    m: 0,
    fontSize: 2,
  })(theme);
  expect(result).toMatchInlineSnapshot(`
  {
    "color": "#1677ff",
    "fontSize": "2px",
    "margin": "0px",
  }
  `);
});

test('works with functional arguments', () => {
  const result = css((t: any) => ({
    color: t.colorPrimary,
    bgColor: t.Button.defaultBg,
  }))(theme);
  expect(result).toEqual({
    backgroundColor: '#ffffff',
    color: '#1677ff',
  });
});

test('supports functional values', () => {
  const result = css({
    color: (t: any) => t.colorPrimary,
  })(theme);
  expect(result).toEqual({
    color: '#1677ff',
  });
});

test('handles negative margins from scale', () => {
  const result = css({
    mt: -3,
    mx: -4,
  })(theme);
  expect(result).toMatchInlineSnapshot(`
  {
    "marginLeft": "-4px",
    "marginRight": "-4px",
    "marginTop": "-3px",
  }
  `);
});

test('handles negative top, left, bottom, and right from scale', () => {
  const result = css({
    top: -1,
    right: -4,
    bottom: -3,
    left: -2,
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "bottom": "-3px",
    "left": "-2px",
    "right": "-4px",
    "top": "-1px",
  }
  `);
});

test('skip breakpoints', () => {
  const result = css({
    width: ['100%', null, '50%'],
  })(theme);
  expect(result).toEqual({
    width: '100%',
    '@media screen and (min-width: 480px)': {},
    '@media screen and (min-width: 576px)': {
      width: '50%',
    },
  });
});

test('padding shorthand does not collide with nested p selector', () => {
  const result = css({
    p: {
      fontSize: 32,
      color: 'tomato',
      p: 2,
    },
    padding: 32,
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "p": {
      "color": "tomato",
      "fontSize": "32px",
      "padding": "2px",
    },
    "padding": "32px",
  }
  `);
});

test('functional values can return responsive arrays', () => {
  const result = css({
    color: (t: any) => [t.colorPrimary, t.colorSuccess],
  })(theme);
  expect(result).toEqual({
    '@media screen and (min-width: 480px)': {
      color: '#52c41a',
    },
    color: '#1677ff',
  });
});

test('resolves color correctly', () => {
  const result = css({
    color: 'red',
  })(theme);

  expect(result).toEqual({
    color: '#F5222D',
  });
});

test('returns individual border styles', () => {
  const result = css({
    borderTopWidth: 'lineWidth',
    borderTopColor: 'colorPrimary',
    borderTopStyle: 'dashed',
    borderTopLeftRadius: 'borderRadiusSM',
    borderTopRightRadius: 'borderRadiusSM',
    borderBottomWidth: 'lineWidth',
    borderBottomColor: 'colorPrimary',
    borderBottomStyle: 'dashed',
    borderBottomLeftRadius: 'borderRadiusSM',
    borderBottomRightRadius: 'borderRadiusSM',
    borderRightWidth: 'lineWidth',
    borderRightColor: 'colorPrimary',
    borderRightStyle: 'dashed',
    borderLeftWidth: 'lineWidth',
    borderLeftColor: 'colorPrimary',
    borderLeftStyle: 'dashed',
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "borderBottomColor": "#1677ff",
    "borderBottomLeftRadius": "4px",
    "borderBottomRightRadius": "4px",
    "borderBottomStyle": "dashed",
    "borderBottomWidth": "1px",
    "borderLeftColor": "#1677ff",
    "borderLeftStyle": "dashed",
    "borderLeftWidth": "1px",
    "borderRightColor": "#1677ff",
    "borderRightStyle": "dashed",
    "borderRightWidth": "1px",
    "borderTopColor": "#1677ff",
    "borderTopLeftRadius": "4px",
    "borderTopRightRadius": "4px",
    "borderTopStyle": "dashed",
    "borderTopWidth": "1px",
  }
  `);
});

test('flexBasis uses theme.sizes', () => {
  const style = css({
    flexBasis: 'sizeLG',
  })(theme);
  expect(style).toEqual({
    flexBasis: '24px',
  });
});

test('fill and stroke use theme.colors', () => {
  expect(
    css({
      fill: 'colorPrimary',
      stroke: 'colorSuccess',
    })(theme)
  ).toEqual({
    fill: '#1677ff',
    stroke: '#52c41a',
  });
});

test('multiples are transformed', () => {
  const style = css({
    marginX: 2,
    marginY: 2,
    paddingX: 2,
    paddingY: 2,
  })(theme);

  expect(style).toEqual({
    marginBottom: '2px',
    marginRight: '2px',
    marginLeft: '2px',
    marginTop: '2px',
    paddingBottom: '2px',
    paddingRight: '2px',
    paddingLeft: '2px',
    paddingTop: '2px',
  });
});

test('returns outline color from theme', () => {
  const result = css({
    outlineColor: 'colorPrimary',
  })(theme);

  expect(result).toEqual({
    outlineColor: '#1677ff',
  });
});

test('returns correct media query order', () => {
  const result = css({
    width: ['100%', null, '50%'],
    color: ['red', 'green', 'blue'],
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "@media screen and (min-width: 480px)": {
      "color": "#52C41A",
    },
    "@media screen and (min-width: 576px)": {
      "color": "#1677ff",
      "width": "50%",
    },
    "color": "#F5222D",
    "width": "100%",
  }
  `);
});

test('returns correct media query 2nd order', () => {
  const result = css({
    flexDirection: 'column',
    justifyContent: [null, 'flex-start', 'flex-end'],
    color: 'background',
    height: '100%',
    px: [2, 3, 4],
    py: 4,
  })(theme);

  const keys = Object.keys(result);

  expect(keys).toEqual([
    'flexDirection',
    'justifyContent',
    '@media screen and (min-width: 480px)',
    '@media screen and (min-width: 576px)',
    'color',
    'height',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
  ]);
});

test('pseudo selectors are transformed', () => {
  const result = css({
    _before: {
      paddingBottom: 2,
      paddingLeft: [2, 3, 4],
      paddingRight: [1, 2],
    },
  })(theme);

  expect(result).toMatchInlineSnapshot(`
  {
    "&::before": {
      "@media screen and (min-width: 480px)": {
        "paddingLeft": "3px",
        "paddingRight": "2px",
      },
      "@media screen and (min-width: 576px)": {
        "paddingLeft": "4px",
      },
      "paddingBottom": "2px",
      "paddingLeft": "2px",
      "paddingRight": "1px",
    },
  }
  `);
});

test('should resolve !important syntax', () => {
  expect(css({ background: 'colorPrimary!important' })(theme)).toEqual({
    background: '#1677ff !important',
  });
  expect(css({ background: 'colorPrimary!' })(theme)).toEqual({
    background: '#1677ff !important',
  });
  expect(css({ background: '#fff !important' })(theme)).toEqual({
    background: '#fff !important',
  });
  expect(css({ background: '#fff!' })(theme)).toEqual({
    background: '#fff !important',
  });
});

test('bgGradient, bgImage, bgImg, and backgroundImage uses theme.gradients', () => {
  ['bgGradient', 'bgImage', 'backgroundImage', 'bgImg'].forEach((prop) => {
    const style = css({
      [prop]: 'linear(to-r, colorPrimary, colorSuccess)',
    })(theme);

    expect(style).toEqual({
      backgroundImage: 'linear-gradient(to right, #1677ff, #52c41a)',
    });
  });
});

test('bgImage, bgImg, and backgroundImage maintain `url()` function rendering fallback', () => {
  ['bgImage', 'backgroundImage', 'bgImg'].forEach((prop) => {
    const style = css({
      [prop]: '../../media/examples/lizard.png',
    })(theme);

    expect(style).toEqual({
      backgroundImage: "url('../../media/examples/lizard.png')",
    });
  });
});

test('handles apply', () => {
  const result = css({
    apply: 'h1',
  })(theme);

  expect(result).toEqual({
    fontSize: '38px',
  });
});

test('handles apply name list', () => {
  const result = css({
    apply: 'h1 primary',
  })(theme);

  expect(result).toEqual({
    fontSize: '38px',
    color: '#1677ff',
  });
});

test('handles apply name list override', () => {
  const result = css({
    apply: 'h1 primary success',
  })(theme);

  expect(result).toEqual({
    fontSize: '38px',
    color: '#52c41a',
  });
});

test('should not add in styles if specific', () => {
  const result = css({
    color: 'black',
    apply: 'h1 primary',
  })(theme);

  expect(result).toEqual({
    fontSize: '38px',
    color: 'black',
  });
});

test('apply responsive', () => {
  const result = css({
    apply: ['h1 primary', 'h1 success'],
  })(theme);

  expect(result).toEqual({
    '@media screen and (min-width: 480px)': {
      fontSize: '38px',
      color: '#52c41a',
    },
    fontSize: '38px',
    color: '#1677ff',
  });
});

test('apply responsive token', () => {
  const result = css({
    apply: 'lg',
  })(theme);

  expect(result).toEqual({
    '@media screen and (min-width: 480px)': {
      height: '30px',
    },
    height: '20px',
  });
});

test('apply responsive token with generic', () => {
  const result = css({
    apply: 'h1 lg',
  })(theme);

  expect(result).toEqual({
    '@media screen and (min-width: 480px)': {
      height: '30px',
    },
    fontSize: '38px',
    height: '20px',
  });
});
