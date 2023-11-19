import { theme } from 'antd';
import { createTheme } from '../src';

const { getDesignToken } = theme;

const antdToken = {
  ...getDesignToken({
    token: {
      colorPrimary: '#333333',
    },
  }),
  Button: {
    colorPrimary: '#333333',
    defaultBg: '#000000',
  },
};

describe('create theme', () => {
  test('base', () => {
    const result = createTheme(antdToken);

    expect(result['colorPrimary']).toBe('#333333');
    expect(result['Button'].colorError).toBe('#ff4d4f');
    expect(result['Button'].colorPrimary).toBe('#333333');
    expect(result['Button'].defaultBg).toBe('#000000');
    expect(result['Anchor'].linkPaddingBlock).toBe(4);
  });
});
