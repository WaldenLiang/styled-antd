# Responsive Styles

Styled Antd 是直接支持响应式样式功能的。你只需要提供一个数组值，即可实现响应式样式。

Styled Antd 的响应式样式中的 Breakpoints 是继承了 Antd 的主题设置。它们分别是：

- `screenXS`：480px
- `screenSM`：576px
- `screenMD`：768px
- `screenLG`：992px
- `screenXL`：1200px
- `screenXXL`：1600px

如果你有特别需求，你可以通过 `ConfigProvider` 来修改每个 breakpoints 的值，详情你可以查看[此文档](./theming.md)。

## 使用语法

Styled Antd 中全部[样式属性](./style-props.md)都是可以传入一个数组值来实现响应式的。

假设你有这么一个携带样式的 `Box`。

```tsx
<Box bg="colorPrimary" w="400px">
  This is a box
</Box>
```

然后你要将 `w` 变成响应式的，你需要这么做：

```tsx
<Box bg="colorPrimary" w={[300, 400, 500, 600, 700, 800, 900]}>
  This is a box
</Box>
```

为了解释数组响应值，Styled Antd 会根据主题配置并按升序对它们进行排序。

结合 Antd 默认的主题配置，我们可以得到这样的排列顺序`["0", "480px", "576px", "768px", "992px", "1200px", "1600px"]`，然后以上的 `w` 的值中的每一个位置的值都会与之对应。

所以我们可以得到`w={[300, 400, 500, 600, 700, 800, 900]}`样式效果：

- 300px：0px 以上；
- 400px：480px 以上；
- 500px：576px 以上；
- 600px：768px 以上；
- 700px：992px 以上；
- 800px：1200px 以上；
- 900px：1600px 以上；

如果你需要跳过某些 breakpoint，你可以传入`null`或者`undefined`，比如：

```tsx
<Box bg="colorPrimary" w={[300, , 500, 600]}>
  This is a box
</Box>
```

## 栅格布局

Antd 的栅格布局是类似于 Bootstrap 的设计思想的，可以很便捷地进行排版。但某些场景下会显得不适用，比如一行 5 等分的情况下，Antd 的就不好实现，除非修改默认的配置，但无论如何修改配置，总会有无法覆盖的情况。

而 Styled Antd 就可以灵活满足各种场景的栅格布局。比如：

```tsx
<Flex wrap="wrap">
  <Box bgColor="colorPrimary" h="24px" w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]} />
  <Box bgColor="colorPrimary" h="24px" w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]} />
  <Box bgColor="colorPrimary" h="24px" w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]} />
  <Box bgColor="colorPrimary" h="24px" w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]} />
  <Box bgColor="colorPrimary" h="24px" w={[1, , 1 / 2, 1 / 3, 1 / 4, 1 / 5]} />
</Flex>
```
