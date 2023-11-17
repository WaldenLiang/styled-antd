# The `noOfLines` prop

在日常开发中，我们很经常遇到文本省略的需求。而 `noOfLines` 可以快速实现这一个需求。

```tsx
// 单行省略
<antd.p noOfLines={1}>Deserunt cillum pariatur officia esse irure incididunt. Nulla ex deserunt Lorem sunt enim eiusmod. Cillum consectetur quis ad esse proident ea sunt esse minim Lorem pariatur amet ut. Veniam mollit nisi voluptate excepteur occaecat quis eiusmod. Consectetur cillum mollit et velit consectetur proident mollit nostrud duis ullamco commodo id. Exercitation sunt adipisicing veniam eu fugiat Lorem adipisicing magna cillum veniam qui.</antd.p>

// 三行省略
<antd.p noOfLines={3}>Mollit laborum est ullamco ipsum ea dolore laborum cupidatat occaecat ea. Eiusmod incididunt adipisicing cillum dolore ut eu esse id adipisicing veniam irure aliquip exercitation. Officia qui culpa occaecat aute culpa.</antd.p>
```

## `isTruncated`

除了 `noOfLines` 能够实现文本省略之外，`isTruncated`也可以实现单行文本省略，相对于`noOfLines`，它只能实现单行省略。

```tsx
<antd.p isTruncated>Veniam sunt aliquip ut aute ut aliqua excepteur cupidatat id ipsum incididunt irure. Ullamco nostrud dolor deserunt qui eu veniam ex. Velit mollit elit in veniam magna ut magna consequat. Do amet ex est elit nulla elit do reprehenderit officia ut.</antd.p>
```
