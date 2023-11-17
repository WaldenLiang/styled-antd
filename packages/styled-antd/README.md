# Styled Antd

Styled Antd 是一个基于 chakra-ui 的核心库 core 二次开发的专门为 antd 组件库设计的 css-in-js 样式解决方案。

## Features

- 93.34kB 的总体积，gzip 下体积为 15.46kB；
- 支持以属性的形式编写样式；
- 提供基础的样式化标签，比如`<antd.div w="100px" height="100px" bgColor="primaryColor" />`，灵活的解决日常样式需求；
- 提供两个基础的可样式化组件 `Box` 和 `Flex`；
- 可以把任何组件转化成样式化组件，比如`antd(Button)`；
- 支持 antd 的主题系统，包括所有 token 和默认的样式算法等；
- 支持响应式样式；
- 支持自定义样式集合，使用 `apply` 属性应用样式；
- 提供 `ClassNames` 组件，可灵活的赋予 antd 复杂组件样式，如 `Modal` 等；
- 支持各种样式伪类选择器；
- 提供一些便捷好用的样式功能，比如 `noOfLines`、`sx`等；
- ...

## Getting Started

```shell
npm install -S styled-antd antd @emotion/styled @emotion/react react react-dom
```

> 注意，仅支持 antd 5.0 以上的版本。

```tsx
// App.tsx
import React from 'react';
import { ConfigProvider, Box, antd } from 'styled-antd';
import { Button } from 'antd';

const App: React.FC = () => (
  <ConfigProvider theme={{ colorError: 'red' }}>
    <Box w="500px" h="50px" p="24px" bgColor="colorError" rounded="12px" textAlign="center">
      <antd.a href="#" color="#fff">
        This is a link.
      </antd.a>
      <Button type="primary">Antd Button</Button>
    </Box>
  </ConfigProvider>
);

export default App;
```

## Usage

- [Antd JSX elements](https://github.com/WaldenLiang/styled-antd/blob/main/docs/antd-jsx-elements.md)
- [Antd factory function](https://github.com/WaldenLiang/styled-antd/blob/main/docs/antd-factory-function.md)
- [Flex & Box](https://github.com/WaldenLiang/styled-antd/blob/main/docs/flex-box.md)
- [Theming](https://github.com/WaldenLiang/styled-antd/blob/main/docs/theming.md)
- [ClassNames](https://github.com/WaldenLiang/styled-antd/blob/main/docs/class-names.md)
- [Style Props](https://github.com/WaldenLiang/styled-antd/blob/main/docs/style-props.md)
- [The `apply` prop](https://github.com/WaldenLiang/styled-antd/blob/main/docs/the-apply-prop.md)
- [The `sx` prop](https://github.com/WaldenLiang/styled-antd/blob/main/docs/the-sx-prop.md)
- [The `as` prop](https://github.com/WaldenLiang/styled-antd/blob/main/docs/the-as-prop.md)
- [The `css` prop](https://github.com/WaldenLiang/styled-antd/blob/main/docs/the-css-prop.md)
- [The `onOfLines` prop](https://github.com/WaldenLiang/styled-antd/blob/main/docs/the-onOfLines-prop.md)
- [Gradient](https://github.com/WaldenLiang/styled-antd/blob/main/docs/gradient.md)
- [Responsive Styles](https://github.com/WaldenLiang/styled-antd/blob/main/docs/responsive-styles.md)
