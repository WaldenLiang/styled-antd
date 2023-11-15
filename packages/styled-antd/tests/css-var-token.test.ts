import { theme } from './theme';
import { css } from '../src';

test('should expand css var token', () => {
  expect(
    css({
      '--banner-height': '3px',
      '--checkbox-disabled-color': 'colorSuccess',
      '&:disabled': {
        color: 'var(--checkbox-disabled-color)',
      },
    })(theme)
  ).toMatchInlineSnapshot(
    `
    {
      "&:disabled": {
        "color": "var(--checkbox-disabled-color)",
      },
      "--banner-height": "3px",
      "--checkbox-disabled-color": "#52c41a",
    }
  `
  );
});

test('support number and string css var token', () => {
  expect(
    css({
      '--banner-height': '3px',
      '--banner-line-height': 1.5,
    })(theme)
  ).toMatchInlineSnapshot(
    `
    {
      "--banner-height": "3px",
      "--banner-line-height": 1.5,
    }
  `
  );
});

test('css var token function', () => {
  expect(
    css({
      '--banner-height': () => '3px',
      '--banner-line-height': () => 1.5,
    })(theme)
  ).toMatchInlineSnapshot(
    `
    {
      "--banner-height": "3px",
      "--banner-line-height": 1.5,
    }
  `
  );
});

test('css var token responsive', () => {
  expect(
    css({
      '--banner-height': ['3px', '4px'],
      '--banner-line-height': [1.5, '30px'],
    })(theme)
  ).toMatchInlineSnapshot(
    `
    {
      "--banner-height": "3px",
      "--banner-line-height": 1.5,
      "@media screen and (min-width: 480px)": {
        "--banner-height": "4px",
        "--banner-line-height": "30px",
      },
    }
  `
  );
});

test('css var token responsive function', () => {
  expect(
    css({
      '--banner-height': () => ['3px', '4px'],
      '--banner-line-height': () => [1.5, '30px'],
    })(theme)
  ).toMatchInlineSnapshot(
    `
    {
      "--banner-height": "3px",
      "--banner-line-height": 1.5,
      "@media screen and (min-width: 480px)": {
        "--banner-height": "4px",
        "--banner-line-height": "30px",
      },
    }
  `
  );
});

test('should expand responsive css var token', () => {
  expect(
    css({
      '--checkbox-disabled-color': ['colorSuccess', 'colorPrimary'],
      '&:disabled': {
        color: 'var(--checkbox-disabled-color)',
      },
    })(theme)
  ).toMatchInlineSnapshot(
    `
    {
      "&:disabled": {
        "color": "var(--checkbox-disabled-color)",
      },
      "--checkbox-disabled-color": "#52c41a",
      "@media screen and (min-width: 480px)": {
        "--checkbox-disabled-color": "#1677ff",
      },
    }
  `
  );
});
