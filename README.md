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

- [Antd JSX elements](./docs/antd-jsx-elements.md)
- [Antd factory function](./docs/antd-factory-function.md)
- [Flex & Box](./docs/flex-box.md)
- [Theming](./docs/theming.md)
- [ClassNames](./docs/class-names.md)
- [Style Props](./docs/style-props.md)
- [The `apply` prop](./docs/the-apply-prop.md)
- [The `sx` prop](./docs/the-sx-prop.md)
- [The `as` prop](./docs/the-as-prop.md)
- [The `css` prop](./docs/the-css-prop.md)
- [The `onOfLines` prop](./docs/the-onOfLines-prop.md)
- [Gradient](./docs/gradient.md)
- [Responsive Styles](./docs/responsive-styles.md)

### 使用 antd 的主题 token

### 样式属性

styled-antd 允许我们在 jsx 标签和组件上编写样式属性的方式来定义元素样式，这种样式属性与原生的 Css 样式非常相似，除此之外还新增了一些属性缩写与功能性的属性。

#### 一般的样式属性

一般样式属性指的是 css 的样式属性和一些自定义的简称别名组成，比如 color，backgroundColor（bgColor），width（w）等。详情可阅读改[文档](./docs/style-props.md)。

#### The `apply` prop

`apply`属性配合`ConfigProvider`的`styles`属性可以实现快捷样式组装。

```tsx
<ConfigProvider
  styles={{
    h1: {
      fontSize: '48px',
      fontWeight: 'fontWeightStrong',
      lineHeight: '110%',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '36px',
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
```

需要注意的是，`apply` 的值是一个以空格分隔的字符串组，其中的每一个 name，就是 ConfigProvider 中 styles 中定义的样式集合的名称。而且越靠后的 name 会覆盖前面的同属性值。以及，apply 的组成样式集合的优先级会相对低。

比如：

```tsx
<ConfigProvider
  styles={{
    h1: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
    'text-primary': {
      color: 'colorPrimary',
      fontSize: '16px',
    },
  }}
>
  {/* h1中的fontSize会被text-primary中的fontSize覆盖，而h1中的fontWeight会被标签上的fontWeight覆盖 */}
  <antd.h1 apply="h1 text-primary" fontWeight="400">
    Welcome
  </antd.h1>
</ConfigProvider>
```

#### The `sx` prop

`sx`属性可以极大程度了满足我们复杂样式场景。对于那些不在一般样式属性的白名单内的 css 样式属性，比如`backgroundPositionX`，我们可以使用`sx`来接收。

```tsx
<Box borderWidth={2} borderColor="purple" p={5} className="my-box">
  <antd.h1 size="lg">
    Hover the box...
    <Box
      as="span"
      color="red"
      sx={{
        backgroundPositionX: 'unset',
        '.my-box:hover &': {
          color: 'green',
        },
      }}
    >
      And I will turn green!
    </Box>
  </antd.h1>
</Box>
```

若想了解更多关于 sx 的使用方法，可阅读 chakra-ui 的[官方文档](https://chakra-ui.com/docs/styled-system/the-sx-prop)。

#### The `css` prop

与的`sx`属性使用相似，不可以共享主题 token，也不能使用属性缩写，但是效率性能方面会比使用`sx`要好。`css`属性会直接传递给 emotion，并不会参与 styled-antd 内部的样式计算，所以效率会相对高一些。

```tsx
<Box
  css={{
    // 不可以使用缩写
    // bg: "white",
    backgroundPositionX: 'unset',
    '.my-box:hover &': {
      color: 'green',
    },
  }}
>
  And I will turn green!
</Box>
```

#### The `noOfLines` prop

在日常开发中，我们很经常遇到文本省略的需求。而 noOfLines 就可以帮我们实现这一个需求。

```tsx
// 单行省略
<antd.p noOfLines={1}>Deserunt cillum pariatur officia esse irure incididunt. Nulla ex deserunt Lorem sunt enim eiusmod. Cillum consectetur quis ad esse proident ea sunt esse minim Lorem pariatur amet ut. Veniam mollit nisi voluptate excepteur occaecat quis eiusmod. Consectetur cillum mollit et velit consectetur proident mollit nostrud duis ullamco commodo id. Exercitation sunt adipisicing veniam eu fugiat Lorem adipisicing magna cillum veniam qui.</antd.p>

// 三行省略
<antd.p noOfLines={3}>Mollit laborum est ullamco ipsum ea dolore laborum cupidatat occaecat ea. Eiusmod incididunt adipisicing cillum dolore ut eu esse id adipisicing veniam irure aliquip exercitation. Officia qui culpa occaecat aute culpa.</antd.p>
```

#### The `as` prop

The as prop is a feature in all of our components that allows you to pass an HTML tag or component to be rendered.

For example, say you are using a Box component, and you need to make it a link instead. You can compose link and Box like this:

```tsx
import { Link } from 'antd';
import { Box } from 'styled-antd';

<Box as={Link} target="_blank" href="#">
  Hello
</Box>;
```

This allows you to use all of the Box props and all of the Link props without having to wrap the Box in an a component.
