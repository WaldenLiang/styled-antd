# The `apply` prop

`apply` 属性配合 `ConfigProvider` 的 `styles` 属性可以实现快捷样式组装。

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

需要注意的是，`apply` 的值是一个以空格分隔的字符串，其中的每一段就是 ConfigProvider 中 `styles` 中定义的样式集合的 Key。而且越靠后会覆盖前面的同属性值。以及，apply 的组成样式集合的优先级会相对低。

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
