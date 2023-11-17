# Antd factory function

你可以通过 styled-antd 的`antd`的方法，包装一个**非 Styled Antd 组件**或者**jsx elements**，使其成为一个 Styled Antd 组件， 具有样式化的能力，可以传递样式属性给它们。

例如，你可以把 antd 的原生`Button`组件包装成为 Styled Antd 组件，使它能够直接接收 css 样式属性。

```tsx
import { Button } from 'antd';
import { antd } from 'styled-antd';

const StyledButton = antd(Button);

<StyledButton type="primary" block rounded="borderRadiusLG" fontSize="24px" h="48px">
  Styled Button
</StyledButton>;
```

> **注意**，styled-antd 是基于 emotion 库开发的，若要样式生效，请确保被包装的组件能够接受 className 属性，否则样式无法挂载则样式不生效。

## 附加样式

除此之外，你还可以在包装非 Styled Antd 组件的时候，直接添加附加样式。

```tsx
import { Typography } from 'antd';
import { antd } from 'styled-antd';

const { Link } = Typography;

const StyledLink = antd(Link, {
  baseStyle: {
    color: 'colorSuccess',
    _hover: {
      color: 'colorSuccessHover',
    },
  },
});

<StyledLink>Styled Link</StyledLink>;
```

## 控制属性传递

如果使用 `antd` 方法包装组件，需要注意组件属性与 styled-antd 样式属性同名的问题。默认情况下，`antd`包装后的组件会自动过滤掉样式属性，把剩余的属性（**除`theme`之外**）传给自定义组件。

下面是一个简单的例子，只允许`otherProp`传递到 `CustomBox` 组件中，而`color`默认被过滤了。

```tsx
const CustomBox: React.FC<{ color: string; otherProp: string }> = ({ color, otherProp }) => {
  // ...
};

const StyledCustomBox = antd(CustomBox);

// 此处的color属性并不会传给CustomBox组件，因为已经被过滤掉了
<StyledCustomBox color="white" otherProp="otherProp" />;
```

你可以通过`shouldForwardProp`属性来指定什么属性能够传递给组件。下面的例子，是仅允许 `color` 和 `otherProp` 传递给 `CustomBox` 组件。

```tsx
const StyledCustomBox = antd(CustomBox, {
  shouldForwardProp: (prop) => ['color', 'otherProp'].includes(prop),
});
```

或者你可以组合 styled-antd 提供的过滤方法和自己的逻辑来进行判断。下面的例子是过滤掉除`color`之外的样式属性，以及把剩余的属性全部传递给 CustomBox 组件。

```tsx
import { antd, shouldForwardProp } from 'styled-antd';

const StyledCustomBox = antd(CustomBox, {
  shouldForwardProp: (prop) => {
    if (prop === 'color') return true;

    return shouldForwardProp(prop);
  },
});
```

> 因为 styled-antd 是基于 chakra-ui 的核心库开发的，所以也可以通过阅读此[文档](https://chakra-ui.com/docs/styled-system/chakra-factory#allowing-custom-props-to-be-forwarded)来进一步了解。

## 已知问题

使用`antd`方法包装后的组件，会丢失泛型能力，比如 antd 的 `Form`，`Table` 等组件。

```tsx
const StyledForm = antd(Form);

// 以下的方式是错误的，因为StyledForm并不能接受泛型
// <StyledForm<FormData> onFinish={(value) => {...}}>...</StyledForm>

// 所以暂时只能这么做
<StyledForm onFinish={(value: FormData) => {}}>...</StyledForm>;
```

如果遇到需要保留原组件的泛型能力，你可以使用`ClassNames`组件来挂载样式。你可以阅读[此文档](./class-names.md)以深入了解有关 `ClassNames` 组件的使用方法。
