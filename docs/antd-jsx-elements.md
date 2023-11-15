# Antd JSX elements

你可以通过`antd.<element>`的语法来创建一个基础的 html 标签，并且它能够直接接受样式属性。例如，如果你想要一个普通的 HTML button 标签，你可以通过`<antd.button/>`如此来获取。

```tsx
import { antd } from 'styled-antd';

<antd.button px="3" py="2" bg="colorPrimary" rounded="borderRadiusLG" _hover={{ bg: 'colorPrimaryHover' }}>
  Click me
</antd.button>;
```

初次之外，你可以获取常见的 html 标签。

```tsx
import { antd } from 'styled-antd';

<antd.div bg="#fff" display="inline-block" />;
<antd.h1 fontSize="48px" />;
<antd.p textAlign="center" />;
<antd.ul />;
<antd.a href="#" />;
```

这减少了创建自定义组件并命名它们的需要。此语法适用于常见的 html 元素，你可阅读此[文档](./antd-tag.md)以获取支持的元素的完整列表。
