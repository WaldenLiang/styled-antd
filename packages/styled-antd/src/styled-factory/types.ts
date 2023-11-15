import type { Interpolation } from '@emotion/react';
import {
  type ResponsiveSystemCssProperties,
  type SystemStyleObject,
} from '../css-fn';
import { type Pseudos } from '../pseudos';
import { type Assign } from '../utility-types';

export type As = React.ElementType;

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, 'as' | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = (
  | RightJoinProps<ComponentProps, AdditionalProps>
  | RightJoinProps<AsProps, AdditionalProps>
) & {
  as?: AsComponent;
};

export type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;

  displayName?: string;
  propTypes?: React.WeakValidationMap<any>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

type PseudoProps = {
  [K in Pseudos]?: SystemStyleObject;
};

interface SystemProps extends ResponsiveSystemCssProperties, PseudoProps {}

interface StyledProps extends SystemProps {
  /**
   * Used to pass theme-aware style props.
   * NB: This is the public API for user-land
   */
  sx?: SystemStyleObject;
  /**
   * The emotion's css style object
   */
  css?: Interpolation<{}>;
}

export interface StyledAntdComponent<T extends As, P extends object = {}>
  extends ComponentWithAs<T, Assign<StyledProps, P>> {}

export type HtmlAntdProps<T extends As> = Omit<
  PropsOf<T>,
  'ref' | keyof ResponsiveSystemCssProperties
> &
  StyledProps & { as?: As };
