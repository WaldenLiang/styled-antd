# The `as` prop

在 Antd JSX Elements 和 Flex/Box 组件中，提供一个`as`属性，它接收一个 html 标签或者组件。通过这种形式，可以改变实际渲染的内容。

例如，假设你正在使用`Box`组件，并且你需要将其渲染为一个 html 的链接，你可以这样使用：

```tsx
import { Box } from 'styled-antd';

<Box as="a" target="_blank" color="colorPrimary" href="#">
  Incididunt do id velit et labore dolore non aute nisi occaecat velit culpa minim consectetur.
</Box>;
```

如上例子中，本来`Box`会渲染成一个`div`标签，但是通过指定 `as` 的值为 `a` 可以把实际渲染内容改变成`a`标签。并且你可以同时使用 `Box` 的原生的属性（例如`color`）以及 `a` 的属性（例如`target` 和 `href`）。

以上的例子中仅仅把 `as` 指定为一个简单的 html 标签，这并没有太大的意义，因为你可以直接使用 `antd.a` 来实现。

然而，当需要改变一个自定义组件的渲染内容时，这会变得非常有用。比如，假设你封装了一个功能丰富且漂亮的 `Button` 组件，在某种场景下你想让 `Button` 组件渲染为一个链接。`as` 属性可以帮助你达到目的。

```tsx
import React, { type FC } from 'react';
import { antd, type HtmlAntdProps } from '../styled-factory';

interface ButtonProps extends HtmlAntdProps<'button'> {}

const Button: FC<ButtonProps> = (props) => {
  return (
    <antd.button
      py="4px"
      px="16px"
      fontSize="14px"
      color="white"
      bgColor="colorPrimary"
      rounded="4px"
      _hover={{
        bgColor: 'colorPrimaryHover',
      }}
      _active={{
        bgColor: 'colorPrimaryActive',
      }}
      {...props}
    />
  );
};

<Button as="a" href="#">
  This is a link
</Button>;
```

你除了可以为 `as` 赋值为一个 html 的标签之外，还可以为其赋值为一个组件。例如，假设你正在使用 `Box` 组件，并且需要将其渲染为 Antd 的 `Typography.Text`。

```tsx
import { Typography } from 'antd';
import { Box } from 'styled-antd';

const { Text } = Typography;

<Box as={Text} copyable editable color="colorText">
  Incididunt do id velit et labore dolore non aute nisi occaecat velit culpa minim consectetur.
</Box>;
```

通过以上例子，你会发现无论使用 `as` 属性，还是 `antd()` 包装函数，都可以把一个非 Styled Antd 组件转化成一个支持 Styled Antd 特性的组件。

但相对于使用 `antd(Text)` 包装组件的这种形式，使用 `as` 会显得更加即时性和方便。`antd()` 函数的使用场景偏向于可复用的情况，而 `as` 则是一次性的。但如果存在属性重名的情况，`as`属性的形式就会无能为力，若如此可以考虑使用 `antd()`包装器，并且通过自定义 `shouldForwardProp` 的逻辑来解决属性重名的问题，详情可以参考[此文档](./antd-factory-function.md) 。
