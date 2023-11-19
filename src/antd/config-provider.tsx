import { useMemo, type FC, type PropsWithChildren } from 'react';
import { ConfigProvider as AntdConfigProvider, theme } from 'antd';
import { type ConfigProviderProps as AntdConfigProviderProps } from 'antd/es/config-provider';
import { ThemeProvider } from '../styled-factory';
import { type SystemStyleObject } from '../css-fn';

export interface ConfigProviderProps extends AntdConfigProviderProps {
  styles?: Record<string, SystemStyleObject>;
}

const { useToken } = theme;

const InternalThemeProvider: FC<
  PropsWithChildren & {
    direction?: 'rtl' | 'ltr';
    styles?: Record<string, SystemStyleObject>;
  }
> = ({ children, styles, direction = 'ltr' }) => {
  const { token } = useToken();

  const systemToken = useMemo(
    () => ({
      ...token,
      styles,
      direction,
    }),
    [token, direction, styles],
  );

  return <ThemeProvider theme={systemToken}>{children}</ThemeProvider>;
};

export const ConfigProvider: FC<ConfigProviderProps> = ({
  children,
  direction,
  styles,
  ...props
}) => {
  return (
    <AntdConfigProvider direction={direction} {...props}>
      <InternalThemeProvider direction={direction} styles={styles}>
        {children}
      </InternalThemeProvider>
    </AntdConfigProvider>
  );
};
