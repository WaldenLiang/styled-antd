# The `sx` prop

`sx` 的属性值类型是 CSS 的超集（除[自定义 CSS 属性/选择器](./style-props.md)外，还包含所有 CSS 属性/选择器），可直接映射 Antd 主题中的 Token。你可以使用`sx`属性为元素提供任何有效的 CSS 样式。

```tsx
<Box borderWidth={2} borderColor="purple" p={5} className="my-box">
  <antd.h1>
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
