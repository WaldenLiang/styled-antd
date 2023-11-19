import { useMemo } from 'react';
import {
  ThemeProvider as EmotionThemeProvider,
  type ThemeProviderProps as EmotionThemeProviderProps,
} from '@emotion/react';
import { createTheme } from '../css-fn';

export interface ThemeProviderProps extends EmotionThemeProviderProps {}

export function ThemeProvider({
  theme,
  children,
}: ThemeProviderProps): JSX.Element {
  const computedTheme = useMemo(() => createTheme(theme), [theme]);

  return (
    <EmotionThemeProvider theme={computedTheme}>
      {children}
    </EmotionThemeProvider>
  );
}
