# Gradient

渐变是两种或多种颜色之间过渡的一种方式。您可以使用以下的样式属性添加渐变效果。

- `bgGradient`：一个自定义的属性，其实质是 `background-image` CSS 样式，专门用于渐变的场景，并且可以使用主题样式；
- `bgClip`：`background-clip`的缩写，当你需要使用文字渐变时，它将会帮助到你；
- `backgroundClip`：即`background-clip`样式，与`bgClip`的功能时一致的；

除了以上三个属性之外，还有三个属性与 `bgGradient` 的使用方法一致，它们分别是：

- `backgroundImage`
- `bgImage`
- `bgImg`

但是，如果是处理渐变的需求，更推荐语义更加准确的 `bgGradient`。

有关于渐变的使用方法，你可以访问 chakra-ui 的[官方文档](https://chakra-ui.com/docs/styled-system/gradient)进行深入了解（文档先欠着）。
