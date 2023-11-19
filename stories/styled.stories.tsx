import * as React from 'react';
import { motion } from 'framer-motion';
import { theme, type GlobalToken, Button, Form, Input } from 'antd';
import { ConfigProvider, antd } from '../src';

export default {
  title: 'styled factory',
};

const MotionBox = motion(antd.div);

export const WithFramerMotion = () => (
  <ConfigProvider>
    <MotionBox
      mt="40px"
      w="40px"
      h="40px"
      bg="colorError"
      ml="60px"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
    />
  </ConfigProvider>
);

export const ApplyProp = () => (
  <ConfigProvider>
    <antd.p>
      This is a paragraph, but apply styles from{' '}
      <antd.code fontFamily="fontFamilyCode">styles.h1</antd.code>
    </antd.p>
  </ConfigProvider>
);

export const withHeading = () => (
  <ConfigProvider>
    <div>
      <antd.h1
        fontSize={['50px', '80px', '100px']}
        color="pink-10"
        sx={{ color: 'geekblue-6' }}
      >
        Welcome
      </antd.h1>
    </div>
  </ConfigProvider>
);

export const withApply = () => {
  return (
    <ConfigProvider
      styles={{
        h1: {
          fontSize: ['48px', '72px'],
          fontWeight: 'fontWeightStrong',
          lineHeight: '110%',
          letterSpacing: '-0.01em',
        },
        h2: {
          fontSize: ['36px', '48px'],
          fontWeight: 500,
          lineHeight: '110%',
          letterSpacing: '-0.01em',
        },
        'text-primary': {
          color: 'colorPrimary',
          _hover: {
            color: 'colorPrimaryHover',
          },
        },
        'text-success': {
          color: 'colorSuccess',
          _hover: {
            color: 'colorSuccessHover',
          },
        },
      }}
    >
      <antd.h1 apply="h2 text-primary" cursor="pointer">
        Welcome
      </antd.h1>
      <antd.p apply="h1 text-success" cursor="pointer">
        Welcome text
      </antd.p>
    </ConfigProvider>
  );
};

export const WithGradient = () => (
  <ConfigProvider>
    <antd.div bgGradient="linear(to-r, pink-5, blue-5)" w="500px" h="64px" />
    <antd.span
      bgGradient="linear(to-r, red-5, geekblue-6)"
      bgClip="text"
      fontSize="fontSizeHeading2"
      fontWeight="fontWeightStrong"
    >
      Welcome to Styled Antd
    </antd.span>
  </ConfigProvider>
);

export const WithRgbGradient = () => (
  <ConfigProvider>
    <antd.div
      bgGradient="linear(to-r, rgb(0,0,0), rgb(230,230,230))"
      w="500px"
      h="64px"
    />
  </ConfigProvider>
);

export const WithComponentTheme = () => (
  <ConfigProvider
    theme={{
      components: {
        Button: {
          primaryColor: '#105674',
        },
      },
    }}
  >
    <antd.button
      bgColor="Button.primaryColor"
      color="white"
      w="100px"
      h="56px"
      outline="none"
      border="none"
      rounded="borderRadiusSM"
      fontSize="fontSizeLG"
      cursor="pointer"
      _hover={{ bgColor: 'Button.colorError' }}
    >
      Welcome
    </antd.button>
  </ConfigProvider>
);

export const WithCSSVarToken = () => {
  return (
    <ConfigProvider>
      <antd.div
        sx={{
          '--banner-height': (theme: GlobalToken) => `${theme.sizeXXL}px`,
          '.banner': {
            height: 'var(--banner-height)',
            bg: 'red-5',
          },
        }}
      >
        <div className="banner">banner</div>
      </antd.div>
    </ConfigProvider>
  );
};

const { darkAlgorithm } = theme;

export const WithColorMode = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm,
      }}
    >
      <antd.div bgColor="colorBgContainer" color="colorText">
        <antd.h1>Not forced</antd.h1>
        <antd.div padding="40px">
          <antd.p>
            Forced color mode{' '}
            <antd.span color="colorPrimary">highlight</antd.span>.
          </antd.p>
        </antd.div>
      </antd.div>
    </ConfigProvider>
  );
};

const StyledButton = antd(Button);

export const WithStyledAntdComponent = () => {
  return (
    <ConfigProvider>
      <StyledButton type="primary" h="56px" w="500px" bgColor="colorError!">
        Styled Antd Button
      </StyledButton>
    </ConfigProvider>
  );
};

const StyledForm = antd(Form);

// FIXME: 丢失了泛型能力
export const PreserveGenericType = () => {
  return (
    <ConfigProvider>
      <StyledForm onFinish={(value) => console.log(value)}>
        <Form.Item name="username">
          <Input />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password />
        </Form.Item>
      </StyledForm>
    </ConfigProvider>
  );
};

export const WidthAsProp = () => {
  return (
    <ConfigProvider>
      <antd.button
        as={Button}
        h="50px"
        type="primary"
        block
        fontSize="Button.fontSizeLG"
        fontWeight={(theme) => theme.fontWeightStrong}
      >
        As Antd Button
      </antd.button>
    </ConfigProvider>
  );
};

export const Responsive = () => {
  return (
    <ConfigProvider>
      <antd.button
        as={Button}
        type="primary"
        block
        bgColor={[
          'colorPrimary',
          'colorError',
          'colorSuccess',
          'colorWarning',
          'geekblue-7',
          'gold6',
        ]}
      >
        As Antd Button
      </antd.button>
    </ConfigProvider>
  );
};
