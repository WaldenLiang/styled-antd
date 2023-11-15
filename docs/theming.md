# Theming

styled-antd 是允许标签和组件上直接使用 antd 的样式 token，你只需要简单的写上 token 的名称就行了。

```tsx
<antd.div bgColor="colorPrimary" fontSize="fontSizeHeading1" />

<Box color="colorText" bgColor="#fff" />
```

如果想了解更多关于 antd 的主题 token，你可以前往 [antd 官方](https://ant-design.antgroup.com/docs/react/customize-theme-cn#seedtoken)进行深入了解。

在消费主题 token 前，你需要先设置 `ConfigProvider`。

```tsx
// App.tsx
import { ConfigProvider } from 'styled-antd';

const App: React.FC = () => <ConfigProvider theme={{ colorError: 'red' }}>...</ConfigProvider>;

export default App;
```

值得注意的是，此处的 `ConfigProvider` 是需要从 styled-antd 中导入，而非 antd。styled-antd 的 `ConfigProvider` 支持所有 antd 的 `ConfigProvider` 的所有用法，包括主题 token 设置，组件样式 token 以及预设的样式算法等。除此之外，styled-antd 为 `ConfigProvider` 新增了一个 `styles` 属性，它用于设置一些样式集合，然后可以通过 `apply` 属性进行快捷引用。你可以阅读[此文档](./the-apply-prop.md)深入了解有关 `apply` 属性的用法。

```tsx
import { theme } from 'antd';
import { ConfigProvider, antd } from 'styled-antd';

<ConfigProvider
  theme={{
    algorithm: theme.darkAlgorithm,
    token: {
      // Seed Token，影响范围大
      colorPrimary: '#00b96b',
      borderRadius: 2,

      // 派生变量，影响范围小
      colorBgContainer: '#f6ffed',
    },
    components: {
      Button: {
        colorPrimary: '#00b96b',
      },
      Input: {
        colorPrimary: '#eb2f96',
      },
    },
  }}
  styles={{
    h1: {
      fontSize: 'fontSizeHeading1',
      fontWeight: 'fontWeightStrong',
    },
    h2: {
      fontSize: 'fontSizeHeading2',
      fontWeight: 'fontWeightStrong',
    },
  }}
>
  <antd.h2 apply="h1" color="colorPrimary">Welcome</antd.2>
</ConfigProvider>;
```

## 组件 token

除了使用一般的公共 token 之外，你还可以使用组件私有的样式 token。

```tsx
import { ConfigProvider, Box } from 'styled-antd';

<ConfigProvider
  theme={{
    components: {
      Button: {
        colorPrimary: '#00b96b',
      },
    },
  }}
>
  <Box as="button" bgColor="Button.colorPrimary" color="white">
    Button
  </Box>
</ConfigProvider>;
```

这在二次封装 antd 原生组件时非常有用，这可以确保二次封装的组件的样式 token 来源与 antd 原生组件是一致的。

## 函数类型

除了以上获取主题 token 的方式之外，你还可以通过传入一个方法函数的形式获取到主题 token。

```tsx
<Box p="24px" border={(theme) => `${theme.lineWidth}px ${theme.lineType} ${theme.colorBorder}`}>
  This is a box.
</Box>
```

就如上面的例子所展示，函数的形式一般使用在组合多个 token，或者需要做转化处理的情况。
