import { css } from '../src';
import { theme } from './theme';

test('should be resolve peer style', () => {
  expect(
    css({
      bg: 'redish',
      _peerChecked: {
        bg: 'pinkish',
      },
    })(theme),
  ).toMatchInlineSnapshot(`
  {
    "[data-peer]:checked ~ &, [data-peer][data-checked] ~ &, .peer:checked ~ &, .peer[data-checked] ~ &": {
      "background": "pinkish",
    },
    "background": "redish",
  }
  `);
});
