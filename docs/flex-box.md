# Flex & Box

日常开发中，我们很经常使用到 div 以及 flex 布局，所以 styled-antd 提供了两个基础的组件，分别是 `Flex` 和 `Box`。

## Box

`Box` 组件与 `antd.div` 是一致的，只不过使用起来会方便美观，一般情况下，推荐使用 `Box`，而不是 `antd.div` 。`Box` 组件非常有用，因为它可以帮助我们解决三种常见的使用情况：

- 轻松创建一个具有响应式布局支持的组件；
- 提供一种通过 props 传递样式的简写方法（比如：`bg`，`mt`，`pb` 等）；
- 允许使用 `as` 属性进行组件渲染更改；

> 以上三点，使用 Antd Jsx Elements 同样支持。

以下是一个使用 `Box` 组件的例子。

```tsx
<div>
  <Box bgColor="red-5" color="white" _hover={{ bg: 'red-4' }}>
    Welcome to Box
  </Box>
  <Box
    pos="relative"
    bg="red-4"
    _before={{
      height: 0,
      content: `""`,
      display: 'block',
      paddingBottom: ['40px', '100px'],
    }}
  />
</div>
```

强烈推荐只当你需要使用样式时才使用 `Box` 组件，否则请使用原生的 html 标签，如 `div` 等。

## Flex

`Flex` 组件实际上是一个默认 `display: flex` 的 `Box` 组件。

相较与 `Box`，`Flex` 组件还额外提供了一些好用的属性缩写：

- direction -> flexDirection
- wrap -> flexWrap
- basis -> flexBasis
- grow -> flexGrow
- shrink -> flexShrink
- align -> alignItems
- justify -> justifyContent

你可以自由选择使用全拼或者缩写，但缩写的写法可能相对方便一点。

```tsx
<Flex color="white">
  <Box w="100px" bg="colorPrimary">
    <antd.span>Box 1</antd.span>
  </Box>
  <Box bg="colorSuccess" boxSize="150px">
    <antd.span>Box 2</antd.span>
  </Box>
  <Box flex="1" bg="colorWarning">
    <antd.span>Box 3</antd.span>
  </Box>
</Flex>
```

## `as` prop

你可以使用 `as` 属性来更改元素渲染，就像样式组件一样。

```tsx
import { Link } from 'antd';

<Box as="button" borderRadius="borderRadius" bg="colorPrimary" color="white" px={4} h={8}>
  Button
</Box>;

<Box as={Link} color="colorSuccess" fontSize="24px" href="#">
  Button
</Box>;
```
