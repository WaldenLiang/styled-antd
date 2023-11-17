# The `css` prop

`css` 属性与 `sx` 的使用方式非常相似，可以接受所有的 CSS 的原生属性和选择器，但不支持使用自定义的属性和选择器，以及不支持使用主题 Token。`css` 的效率性能方面会比 `sx` 要好，因为`css`属性会直接传递给 emotion，并不会参与 Styled Antd 内部的样式计算，所以效率会相对高一些。

```tsx
<Box className="my-box">
  <antd.h1>
    Hover the box...
    <Box
      color="red"
      css={{
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
