import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { ClassNames, ConfigProvider, antd } from '../src';

export default {
  title: 'react',
};

export const WithClassNames = () => (
  <ConfigProvider>
    <ClassNames bgColor="colorPrimary" p="40px">
      {({ className }) => (
        <Form<{ username: string }>
          className={className}
          onFinish={(value) => console.log(value)}
          labelCol={{ flex: '120px' }}
        >
          <ClassNames sx={{ label: { color: 'white!' } }}>
            {({ className }) => (
              <>
                <Form.Item
                  className={className}
                  name="username"
                  label="Username"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  className={className}
                  name="password"
                  label="Password"
                >
                  <Input.Password />
                </Form.Item>
              </>
            )}
          </ClassNames>
        </Form>
      )}
    </ClassNames>
  </ConfigProvider>
);

export const NestedClassNames = () => {
  return (
    <ConfigProvider>
      <ClassNames bgColor="yellow-3">
        {({ className: outerClassName }) => (
          <ClassNames color="black">
            {({ className: innerClassName }) => (
              <Button className={`${outerClassName} ${innerClassName}`}>
                Button
              </Button>
            )}
          </ClassNames>
        )}
      </ClassNames>
    </ConfigProvider>
  );
};

export const WithMultiClassName = () => {
  return (
    <ConfigProvider>
      <ClassNames
        sx={{ '.ant-modal-content': { bgColor: 'cyan-1!' } }}
        classNames={{
          rootClassName: {
            sx: {
              '.ant-modal-mask': {
                bgColor: 'volcano-1',
              },
            },
          },
        }}
      >
        {({ className, rootClassName }) => (
          <Modal
            className={className}
            rootClassName={rootClassName}
            open
            title="Custom Style Modal"
            centered
          >
            Incididunt ullamco irure velit exercitation sunt deserunt labore
            voluptate fugiat in mollit ad est. Aliqua amet quis velit proident
            veniam duis ea enim dolore mollit duis. Culpa id duis eu adipisicing
            labore nisi laboris. Veniam dolore enim dolore cillum officia anim
            consectetur est exercitation.
          </Modal>
        )}
      </ClassNames>
    </ConfigProvider>
  );
};

export const WithEmotionCssProp = () => {
  return (
    <ConfigProvider>
      <ClassNames
        bgColor="yellow-3"
        css={{
          color: 'red',
        }}
      >
        {({ className }) => <Button className={className}>Button</Button>}
      </ClassNames>
    </ConfigProvider>
  );
};

export const ComplexClassNames = () => {
  return (
    <ConfigProvider>
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
        {({ className, classNames }) => (
          <Button
            type="primary"
            block
            className={className}
            classNames={classNames}
            icon={<UserAddOutlined />}
          >
            Button
          </Button>
        )}
      </ClassNames>
    </ConfigProvider>
  );
};

export const WithResponsive = () => {
  return (
    <ConfigProvider>
      <antd.h1 fontFamily="fontFamily" fontSize="fontSizeXL">
        改变窗口宽度改变按钮颜色
      </antd.h1>
      <ClassNames
        bgColor={[
          'colorPrimary',
          'colorError',
          'colorSuccess',
          'colorWarning',
          'yellow8',
          'volcano7',
        ]}
      >
        {({ className }) => (
          <Button type="primary" block className={className}>
            Button
          </Button>
        )}
      </ClassNames>
    </ConfigProvider>
  );
};
