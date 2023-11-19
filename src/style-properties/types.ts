import * as Css from 'csstype';
import { type GlobalToken } from 'antd';
import { type MaybeArray, type StringUnion } from '../utility-types';
import { type TransformFn } from '../transform-functions';
import { type SystemThemeToken } from '../theme';

type MaybeThemeFunction<T> = T | ((theme: Record<string, any>) => T);

type CssProp = StringUnion<keyof Css.Properties>;

export type StylePropertyObject = {
  name: string;
  alias?: string[];
  transform?: TransformFn;
  property?: MaybeThemeFunction<MaybeArray<CssProp>> | false;
  staticCss?: Record<string, any>;
  processResult?: boolean;
};

export type StylePropertyConfig = {
  /**
   * This is useful for props that need to leverage CSS variables
   * Static styles to append to the computed styles.
   *
   * It does not get replicated if value is responsive or styles are nested.
   */
  staticCss?: Record<string, any>;
  /**
   * Css property or Css variable the prop maps to
   */
  property?: MaybeThemeFunction<MaybeArray<StringUnion<CssProp>>>;
  /**
   * Function to transform the value passed
   */
  transform?: TransformFn;
  /**
   * Useful for `apply` where their
   * transform function returns theme aware styles
   */
  processResult?: boolean;
};

export type StylePropertyConfigs = Record<string, StylePropertyConfig>;

type AntdComponents =
  | 'Affix'
  | 'Alert'
  | 'Anchor'
  | 'Avatar'
  | 'BackTop'
  | 'Badge'
  | 'Button'
  | 'Breadcrumb'
  | 'Card'
  | 'Carousel'
  | 'Cascader'
  | 'Checkbox'
  | 'ColorPicker'
  | 'Collapse'
  | 'DatePicker'
  | 'Descriptions'
  | 'Divider'
  | 'Drawer'
  | 'Dropdown'
  | 'Empty'
  | 'Flex'
  | 'FloatButton'
  | 'Form'
  | 'Grid'
  | 'Image'
  | 'Input'
  | 'InputNumber'
  | 'Layout'
  | 'List'
  | 'Mentions'
  | 'Notification'
  | 'Pagination'
  | 'Popover'
  | 'Popconfirm'
  | 'Rate'
  | 'Radio'
  | 'Result'
  | 'Segmented'
  | 'Select'
  | 'Skeleton'
  | 'Slider'
  | 'Spin'
  | 'Statistic'
  | 'Switch'
  | 'Tag'
  | 'Tree'
  | 'TreeSelect'
  | 'Typography'
  | 'Timeline'
  | 'Transfer'
  | 'Tabs'
  | 'Calendar'
  | 'Steps'
  | 'Menu'
  | 'Modal'
  | 'Message'
  | 'Upload'
  | 'Tooltip'
  | 'Table'
  | 'Space'
  | 'Progress'
  | 'Tour'
  | 'QRCode'
  | 'App'
  | 'Wave';

type AntdAliasToken = keyof Omit<GlobalToken, AntdComponents>;

export type AllThemeToken = 'direction' | AntdAliasToken | SystemThemeToken;

export type ThemeToken<CssType> = CssType | AllThemeToken;
export type GenericToken<CssType> = CssType;
