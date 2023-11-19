import { backgroundStyleProperties, type BackgroundProps } from './background';
import { borderStyleProperties, type BorderProps } from './border';
import { colorStyleProperties, type ColorProps } from './color';
import { effectStyleProperties, type EffectProps } from './effect';
import { filterStyleProperties, type FilterProps } from './filter';
import { flexboxStyleProperties, type FlexboxProps } from './flexbox';
import { gridStyleProperties, type GridProps } from './grid';
import {
  interactivityStyleProperties,
  type InteractivityProps,
} from './interactivity';
import { layoutStyleProperties, type LayoutProps } from './layout';
import { listStyleProperties, type ListProps } from './list';
import { positionStyleProperties, type PositionProps } from './position';
import { ringStyleProperties, type RingProps } from './ring';
import { scrollStyleProperties, type ScrollProps } from './scroll';
import { spaceStyleProperties, type SpaceProps } from './space';
import {
  textDecorationStyleProperties,
  type TextDecorationProps,
} from './text-decoration';
import { transformStyleProperties, type TransformProps } from './transform';
import { transitionStyleProperties, type TransitionProps } from './transition';
import { typographyStyleProperties, type TypographyProps } from './typography';
import { othersStyleProperties, type OthersProps } from './others';
import { type StylePropertyConfigs } from './types';

export type { StylePropertyConfigs };

export const styleProperties: StylePropertyConfigs = {
  ...backgroundStyleProperties,
  ...borderStyleProperties,
  ...colorStyleProperties,
  ...effectStyleProperties,
  ...filterStyleProperties,
  ...flexboxStyleProperties,
  ...gridStyleProperties,
  ...interactivityStyleProperties,
  ...layoutStyleProperties,
  ...listStyleProperties,
  ...positionStyleProperties,
  ...ringStyleProperties,
  ...spaceStyleProperties,
  ...textDecorationStyleProperties,
  ...transformStyleProperties,
  ...transitionStyleProperties,
  ...typographyStyleProperties,
  ...scrollStyleProperties,
  ...othersStyleProperties,
};

export interface StyleProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    EffectProps,
    FilterProps,
    FlexboxProps,
    GridProps,
    InteractivityProps,
    LayoutProps,
    ListProps,
    PositionProps,
    RingProps,
    ScrollProps,
    SpaceProps,
    TextDecorationProps,
    TransformProps,
    TransitionProps,
    TypographyProps,
    OthersProps {}
