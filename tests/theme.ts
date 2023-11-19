import { theme as antdTheme } from 'antd';
import { createTheme as internalCreateTheme } from '../src';

const { getDesignToken } = antdTheme;

const antdToken = getDesignToken();

export const createTheme = (direction: 'rtl' | 'ltr') =>
  internalCreateTheme({
    direction,
    ...antdToken,
    styles: {
      h1: {
        fontSize: 'fontSizeHeading1',
      },
      primary: {
        color: 'colorPrimary',
      },
      success: {
        color: 'colorSuccess',
      },
      lg: {
        h: [20, 30],
      },
    },
  });

export const theme = createTheme('ltr');
