import { type Leaves } from '../utility-types';
import { defaultComponentTheme } from './components';

export const defaultTheme = {
  ...defaultComponentTheme,
};

type SystemThemeObject = typeof defaultTheme;

export type SystemThemeToken = Leaves<SystemThemeObject>;
