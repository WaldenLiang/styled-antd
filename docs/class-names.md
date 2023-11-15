# ClassNames

`ClassNames`组件允许开发者在各种场景中为组件绑定样式。但需要注意，使用 `ClassNames` 前必须先配置 `ConfigProvider`。

下面的例子中，你可以为 antd 的`Form`组件挂载样式，同时能够保留 `Form` 组件接受的泛型能力。

```tsx
import { Form } from 'antd';
import { ClassNames } from 'styled-antd';

<ClassNames bgColor="colorPrimary" p="40px">
  {({ className }) => (
    <Form<{ username: string }> className={className} onFinish={(value) => {}} labelCol={{ flex: '120px' }}>
      <ClassNames sx={{ label: { color: 'white!' } }}>
        {({ className }) => (
          <>
            <Form.Item className={className} name="username" label="Username">
              <Input />
            </Form.Item>
            <Form.Item className={className} name="password" label="Password">
              <Input.Password />
            </Form.Item>
          </>
        )}
      </ClassNames>
    </Form>
  )}
</ClassNames>;
```

## 挂载多个 className

针对于类似 antd 的 `Modal` 可接受多个 className 等组件，你可以为 `ClassNames` 组件的 `classNames` 属性传入不同的 className。

```tsx
import { Modal } from 'antd';
import { ClassNames } from 'styled-antd';

<ClassNames
  fontSize="16px"
  color="#333"
  sx={{ '.ant-modal-content': { bgColor: 'cyan-1!' } }}
  classNames={{
    root: {
      // 样式属性...
    },
    wrap: {
      // 样式属性...
    },
  }}
>
  {({ className, root, wrap }) => (
    <Modal className={className} rootClassName={root} wrapClassName={wrap} open title="Custom Style Modal" centered>
      Incididunt ullamco irure velit exercitation sunt deserunt labore voluptate fugiat in mollit ad est. Aliqua amet quis velit proident veniam duis ea enim dolore mollit duis. Culpa id duis eu adipisicing labore nisi laboris. Veniam dolore enim dolore cillum officia anim consectetur est exercitation.
    </Modal>
  )}
</ClassNames>;
```

## css function

在一些 antd 原生组件中，可以接受一个 `classNames` 属性来修改组件不同组成部分的样式。比如 antd 的 `Modal` 组件，可以通过赋值 `classNames` 属性来修改其 header，body，footer 以及 mask 等组成部分的样式。

```tsx
<ClassNames
  classNames={{
    composeClassNames: (css) => ({
      header: css([
        {
          // 自定义样式...
        },
        'custom-header', // 支持直接使用className
      ]),
      footer: css({
        // 自定义样式...
      }),
      mask: css({
        // 自定义样式...
      }),
    }),
  }}
>
  {({ composeClassNames }) => (
    <Modal classNames={composeClassNames} open title="Custom Style Modal" centered>
      Incididunt ullamco irure velit exercitation sunt deserunt labore voluptate fugiat in mollit ad est. Aliqua amet quis velit proident veniam duis ea enim dolore mollit duis. Culpa id duis eu adipisicing labore nisi laboris. Veniam dolore enim dolore cillum officia anim consectetur est exercitation.
    </Modal>
  )}
</ClassNames>
```

## Nested ClassNames

`ClassNames` 支持嵌套使用。

```tsx
<ClassNames
  h="56px"
  fontSize="24"
  classNames={{
    classNames: (css) => ({
      icon: css({
        fontSize: 32,
      }),
    }),
  }}
>
  {({ className: outerClassName, classNames }) => (
    <ClassNames color="black">
      {({ className: innerClassName }) => (
        <Button type="primary" block className={`${outerClassName} ${innerClassName}`} classNames={classNames} icon={<UserAddOutlined />}>
          Button
        </Button>
      )}
    </ClassNames>
  )}
</ClassNames>
```
