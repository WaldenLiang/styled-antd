# Style Props

Styled Antd 支持大多数的 Css 属性以及伪类选择器，并且提供了属性缩写。其中一些属性支持使用 Antd 的主题 Token，而有一些不支持，你可以通过下面的表格中的`Theme`列来得知是否支持，Y 表示支持，N 表示不支持。

## Margin and padding

| Prop                                 | CSS Property                 | Theming |
| ------------------------------------ | ---------------------------- | ------- |
| m, margin                            | margin                       | Y       |
| mt, marginTop                        | margin-top                   | Y       |
| mr, marginRight                      | margin-right                 | Y       |
| me, marginEnd, marginInlineEnd       | margin-inline-end            | Y       |
| mb, marginBottom                     | margin-bottom                | Y       |
| ml, marginLeft                       | margin-left                  | Y       |
| ms, marginStart, marginInlineStart   | margin-inline-start          | Y       |
| mx, marginX                          | margin-left + margin-right   | Y       |
| my, marginY                          | margin-top + margin-bottom   | Y       |
| marginInline                         | margin-inline                | Y       |
| marginBlock                          | margin-block                 | Y       |
| marginBlockStart                     | margin-block-start           | Y       |
| marginBlockEnd                       | margin-block-end             | Y       |
| p, padding                           | padding                      | Y       |
| pt, paddingTop                       | padding-top                  | Y       |
| pr, paddingRight                     | padding-right                | Y       |
| pe, paddingEnd, paddingInlineEnd     | padding-inline-end           | Y       |
| pb, paddingBottom                    | padding-bottom               | Y       |
| pl, paddingLeft                      | padding-left                 | Y       |
| ps, paddingStart, paddingInlineStart | padding-inline-start         | Y       |
| px, paddingX                         | padding-left + padding-right | Y       |
| py, paddingY                         | padding-top + padding-bottom | Y       |
| paddingInline                        | padding-inline               | Y       |
| paddingBlock                         | padding-block                | Y       |
| paddingBlockStart                    | padding-block-start          | Y       |
| paddingBlockEnd                      | padding-block-end            | Y       |

## Color and background color

| Prop                     | CSS Property     | Theming |
| ------------------------ | ---------------- | ------- |
| color                    | color            | Y       |
| bg, background           | background       | Y       |
| bgColor, backgroundColor | background-color | Y       |
| opacity                  | opacity          | Y       |

## Gradient

| Prop                   | CSS Property     | Theming |
| ---------------------- | ---------------- | ------- |
| bgGradient             | background-image | N       |
| bgClip, backgroundClip | background-clip  | N       |

## Typography

| Prop                      | CSS Property              | Theming |
| ------------------------- | ------------------------- | ------- |
| fontFamily                | font-family               | Y       |
| fontSize                  | font-size                 | Y       |
| fontWeight                | font-weight               | Y       |
| fontStyle                 | font-style                | N       |
| lineHeight                | line-height               | Y       |
| whiteSpace                | white-space               | N       |
| wordBreak                 | word-break                | N       |
| overflowWrap              | overflow-wrap             | N       |
| letterSpacing             | letter-spacing            | Y       |
| textAlign                 | text-align                | N       |
| textOverflow              | text-overflow             | N       |
| textIndent                | text-indent               | N       |
| textTransform             | text-transform            | N       |
| textDecoration, textDecor | text-decoration           | N       |
| textDecorationColor       | text-decoration-color     | Y       |
| textDecorationLine        | text-decoration-line      | N       |
| textDecorationStyle       | text-decoration-style     | N       |
| textDecorationThickness   | text-decoration-thickness | N       |
| textUnderlineOffset       | text-underline-offset     | N       |
| textShadow                | text-shadow               | Y       |

## Layout, width and height

| Prop            | CSS Property    | Theming |
| --------------- | --------------- | ------- |
| w, width        | width           | Y       |
| h, height       | height          | Y       |
| minW, minWidth  | min-width       | Y       |
| maxW, maxWidth  | max-width       | Y       |
| minH, minHeight | min-height      | Y       |
| maxH, maxHeight | max-height      | Y       |
| boxSize         | width, height   | Y       |
| verticalAlign   | vertical-align  | N       |
| overflow        | overflow        | N       |
| overflowX       | overflow-x      | N       |
| overflowY       | overflow-y      | N       |
| inlineSize      | inline-size     | Y       |
| minInlineSize   | min-inline-size | Y       |
| maxInlineSize   | max-inline-size | Y       |
| blockSize       | block-size      | Y       |
| minBlockSize    | min-block-size  | Y       |
| maxBlockSize    | max-block-size  | Y       |

## Flexbox

| Prop                   | CSS Property    | Theming |
| ---------------------- | --------------- | ------- |
| display                | display         | N       |
| aspectRatio            | aspect-ratio    | N       |
| gap                    | gap             | Y       |
| rowGap                 | row-gap         | Y       |
| columnGap              | column-gap      | Y       |
| alignItems             | align-items     | N       |
| alignContent           | align-content   | N       |
| justifyItems           | justify-items   | N       |
| justifyContent         | justify-content | N       |
| flexWrap               | flex-wrap       | N       |
| flexDirection, flexDir | flex-direction  | N       |
| flexFlow               | flex-flow       | N       |
| flex                   | flex            | N       |
| flexGrow               | flex-grow       | N       |
| flexShrink             | flex-shrink     | N       |
| flexBasis              | flex-basis      | Y       |
| justifySelf            | justify-self    | N       |
| alignSelf              | align-self      | N       |
| order                  | order           | N       |
| placeItems             | place-items     | N       |
| placeContent           | place-content   | N       |
| placeSelf              | place-self      | N       |

## Grid Layout

| Prop                | CSS Property          | Theming |
| ------------------- | --------------------- | ------- |
| gridGap             | grid-gap              | Y       |
| gridRowGap          | grid-row-gap          | Y       |
| gridColumnGap       | grid-column-gap       | Y       |
| gridColumn          | grid-column           | N       |
| gridRow             | grid-row              | N       |
| gridArea            | grid-area             | N       |
| gridAutoFlow        | grid-auto-flow        | N       |
| gridAutoRows        | grid-auto-rows        | N       |
| gridTemplate        | grid-template         | N       |
| gridAutoColumns     | grid-auto-columns     | N       |
| gridColumnStart     | grid-column-start     | N       |
| gridColumnEnd       | grid-column-end       | N       |
| gridRowStart        | grid-row-end          | N       |
| gridRowEnd          | grid-row-end          | N       |
| gridTemplateRows    | grid-template-rows    | N       |
| gridTemplateColumns | grid-template-columns | N       |
| gridTemplateAreas   | grid-template-areas   | N       |

## Background

| Prop                                  | CSS Property          | Theming |
| ------------------------------------- | --------------------- | ------- |
| bg, background                        | background            | Y       |
| bgImage, backgroundImage, bgImg       | background-image      | N       |
| bgSize, backgroundSize                | background-size       | N       |
| bgPosition, backgroundPosition, bgPos | background-position   | N       |
| bgRepeat, backgroundRepeat            | background-repeat     | N       |
| bgAttachment, backgroundAttachment    | background-attachment | N       |
| backgroundBlendMode, bgBlendMode      | background-blend-mode | N       |

## Borders

| Prop                                     | CSS Property              | Theming |
| ---------------------------------------- | ------------------------- | ------- |
| border                                   | border                    | Y       |
| borderWidth                              | border-width              | Y       |
| borderStyle                              | border-style              | N       |
| borderColor                              | border-color              | Y       |
| borderTop                                | border-top                | Y       |
| borderTopWidth                           | border-top-width          | Y       |
| borderTopStyle                           | border-top-style          | N       |
| borderTopColor                           | border-top-color          | Y       |
| borderRight                              | border-right              | Y       |
| borderRightWidth                         | border-right-width        | Y       |
| borderRightStyle                         | border-right-style        | N       |
| borderRightColor                         | border-right-color        | Y       |
| borderBottom                             | border-bottom             | Y       |
| borderBottomWidth                        | border-bottom-width       | Y       |
| borderBottomStyle                        | border-bottom-style       | N       |
| borderBottomColor                        | border-bottom-color       | Y       |
| borderLeft                               | border-left               | Y       |
| borderLeftWidth                          | border-left-width         | Y       |
| borderLeftStyle                          | border-left-style         | N       |
| borderLeftColor                          | border-left-color         | Y       |
| borderInline                             | border-inline             | Y       |
| borderInlineWidth                        | border-inline-width       | Y       |
| borderInlineStyle                        | border-inline-style       | N       |
| borderInlineColor                        | border-inline-color       | Y       |
| borderStart, borderInlineStart           | border-inline-start       | Y       |
| borderStartWidth, borderInlineStartWidth | border-inline-start-width | Y       |
| borderStartStyle, borderInlineStartStyle | border-inline-start-style | N       |
| borderStartColor, borderInlineStartColor | border-inline-start-color | Y       |
| borderEnd, borderInlineEnd               | border-inline-end         | Y       |
| borderEndWidth, borderInlineEndWidth     | border-inline-end-width   | Y       |
| borderEndStyle, borderInlineEndStyle     | border-inline-end-style   | N       |
| borderEndColor, borderInlineEndColor     | border-inline-end-color   | Y       |
| borderBlock                              | border-block              | Y       |
| borderBlockWidth                         | border-block-width        | Y       |
| borderBlockStyle                         | border-block-style        | N       |
| borderBlockColor                         | border-block-color        | Y       |
| borderBlockStart                         | border-block-start        | Y       |
| borderBlockStartWidth                    | border-block-start-width  | Y       |
| borderBlockStartStyle                    | border-block-start-style  | N       |
| borderBlockStartColor                    | border-block-start-color  | Y       |
| borderBlockEnd                           | border-block-end          | Y       |
| borderBlockEndWidth                      | border-block-end-width    | Y       |
| borderBlockEndStyle                      | border-block-end-style    | N       |
| borderBlockEndColor                      | border-block-end-color    | Y       |
| borderX                                  | border-left, border-right | Y       |
| borderY                                  | border-top, border-bottom | Y       |
| borderCollapse                           | border-collapse           | N       |
| borderSpacing                            | border-spacing            | N       |
| borderImage                              | border-image              | N       |
| borderImageSource                        | border-image-source       | N       |
| borderImageOutset                        | border-image-outset       | N       |
| borderImageWidth                         | border-image-width        | N       |
| borderImageSlice                         | border-image-slice        | N       |
| borderImageRepeat                        | border-image-repeat       | N       |

## Border Radius

| Prop                                                            | CSS Property                                           | Theming |
| --------------------------------------------------------------- | ------------------------------------------------------ | ------- |
| borderRadius, rounded                                           | border-radius                                          | Y       |
| borderTopRadius, roundedTop                                     | border-top-left-radius + border-top-right-radius       | Y       |
| borderRightRadius, roundedRight                                 | border-top-right-radius + border-bottom-right-radius   | Y       |
| borderBottomRadius, roundedBottom                               | border-bottom-left-radius + border-bottom-right-radius | Y       |
| borderLeftRadius, roundedLeft                                   | border-top-left-radius + border-bottom-left-radius     | Y       |
| borderTopStartRadius, borderStartStartRadius, roundedStartStart | border-start-start-radius                              | Y       |
| borderTopEndRadius, borderStartEndRadius, roundedStartEnd       | border-start-end-radius                                | Y       |
| borderTopLeftRadius, roundedTopLeft                             | border-top-left-radius                                 | Y       |
| borderTopRightRadius, roundedTopRight                           | border-top-right-radius                                | Y       |
| borderBottomStartRadius, borderEndStartRadius, roundedEndStart  | border-end-start-radius                                | Y       |
| borderBottomEndRadius, borderEndEndRadius, roundedEndEnd        | border-end-end-radius                                  | Y       |
| borderBottomLeftRadius, roundedBottomLeft                       | border-bottom-left-radius                              | Y       |
| borderBottomRightRadius, roundedBottomRight                     | border-bottom-right-radius                             | Y       |
| borderStartRadius, borderInlineStartRadius, roundedStart        | border-start-start-radius + border-end-start-radius    | Y       |
| borderEndRadius, borderInlineEndRadius, roundedEnd              | border-start-end-radius + border-end-end-radius        | Y       |

## Position

| Prop                         | CSS Property       | Theming |
| ---------------------------- | ------------------ | ------- |
| pos, position                | position           | N       |
| zIndex                       | z-index            | Y       |
| top                          | top                | Y       |
| right                        | right              | Y       |
| bottom                       | bottom             | Y       |
| left                         | left               | Y       |
| float                        | float              | N       |
| inset                        | inset              | N       |
| insetX                       | left + right       | Y       |
| insetY                       | top + bottom       | Y       |
| insetInline                  | inset-inline       | Y       |
| insetInlineStart, insetStart | inset-inline-start | Y       |
| insetInlineEnd, insetEnd     | inset-inline-end   | Y       |
| insetBlock                   | inset-block        | Y       |
| insetBlock                   | inset-block        | Y       |
| insetBlockStart              | inset-block-start  | Y       |
| insetBlockEnd                | inset-block-end    | Y       |

## Shadow

| Prop              | CSS Property | Theming |
| ----------------- | ------------ | ------- |
| shadow, boxShadow | box-shadow   | Y       |
| ring              | box-shadow   | N       |
| ringColor         | box-shadow   | Y       |
| ringOffset        | box-shadow   | Y       |
| ringOffsetColor   | box-shadow   | Y       |
| ringInset         | box-shadow   | N       |

## Filter

| Prop               | CSS Property    | Theming |
| ------------------ | --------------- | ------- |
| filter             | filter          | N       |
| blur               | filter          | N       |
| brightness         | filter          | N       |
| contrast           | filter          | N       |
| grayscale          | filter          | N       |
| hueRotate          | filter          | N       |
| invert             | filter          | N       |
| saturate           | filter          | N       |
| sepia              | filter          | N       |
| dropShadow         | filter          | N       |
| backdropFilter     | backdrop-filter | N       |
| backdropBlur       | backdrop-filter | N       |
| backdropBrightness | backdrop-filter | N       |
| backdropContrast   | backdrop-filter | N       |
| backdropGrayscale  | backdrop-filter | N       |
| backdropHueRotate  | backdrop-filter | N       |
| backdropInvert     | backdrop-filter | N       |
| backdropOpacity    | backdrop-filter | N       |
| backdropSaturate   | backdrop-filter | N       |
| backdropSepia      | backdrop-filter | N       |

## Scroll

| Prop                | CSS Property                               | Theming |
| ------------------- | ------------------------------------------ | ------- |
| scrollBehavior      | scroll-behavior                            | N       |
| scrollSnapAlign     | scroll-snap-align                          | N       |
| scrollSnapStop      | scroll-snap-stop                           | N       |
| scrollSnapType      | scroll-snap-type                           | N       |
| scrollMargin        | scroll-margin                              | Y       |
| scrollMarginTop     | scroll-margin-top                          | Y       |
| scrollMarginRight   | scroll-margin-right                        | Y       |
| scrollMarginBottom  | scroll-margin-bottom                       | Y       |
| scrollMarginLeft    | scroll-margin-left                         | Y       |
| scrollMarginX       | scroll-margin-left + scroll-margin-right   | Y       |
| scrollMarginY       | scroll-margin-top + scroll-margin-bottom   | Y       |
| scrollPadding       | scroll-padding                             | Y       |
| scrollPaddingTop    | scroll-padding-top                         | Y       |
| scrollPaddingRight  | scroll-padding-right                       | Y       |
| scrollPaddingBottom | scroll-padding-bottom                      | Y       |
| scrollPaddingLeft   | scroll-padding-left                        | Y       |
| scrollPaddingX      | scroll-padding-left + scroll-padding-right | Y       |
| scrollPaddingY      | scroll-padding-top + scroll-padding-bottom | Y       |

## Transform

| Prop            | CSS Property     | Theming |
| --------------- | ---------------- | ------- |
| transform       | transform        | N       |
| transformOrigin | transform-origin | N       |
| translateX      | transform        | N       |
| translateY      | transform        | N       |
| skewX           | transform        | N       |
| skewY           | transform        | N       |
| scaleX          | transform        | N       |
| scaleY          | transform        | N       |
| scale           | transform        | N       |
| rotate          | transform        | N       |

## Transition

| Prop                     | CSS Property               | Theming |
| ------------------------ | -------------------------- | ------- |
| transition               | transition                 | N       |
| transitionDelay          | transition-delay           | Y       |
| transitionDuration       | transition-duration        | Y       |
| transitionProperty       | transition-property        | Y       |
| transitionTimingFunction | transition-timing-function | Y       |

## Other Props

| Prop                             | CSS Property          | Theming |
| -------------------------------- | --------------------- | ------- |
| animation                        | animation             | N       |
| appearance                       | appearance            | N       |
| clipPath                         | clip-path             | N       |
| visibility                       | visibility            | N       |
| isolation                        | isolation             | N       |
| userSelect                       | user-select           | N       |
| pointerEvents                    | pointer-events        | N       |
| boxSizing                        | box-sizing            | N       |
| boxDecorationBreak               | box-decoration-break  | N       |
| cursor                           | cursor                | N       |
| resize                           | resize                | N       |
| willChange                       | will-change           | N       |
| objectFit                        | object-fit            | N       |
| objectPosition                   | object-position       | N       |
| fill                             | fill                  | Y       |
| stroke                           | stroke                | Y       |
| outline                          | outline               | N       |
| outlineOffset                    | outline-offset        | N       |
| outlineColor                     | outline-color         | Y       |
| listStyleType                    | list-style-type       | N       |
| listStylePosition, listStylePos  | list-style-position   | N       |
| listStyleImage, listStyleImg     | list-style-Image      | N       |
| overscrollBehavior, overscroll   | overscroll-behavior   | N       |
| overscrollBehaviorX, overscrollX | overscroll-behavior-x | N       |
| overscrollBehaviorY, overscrollY | overscroll-behavior-y | N       |
| mixBlendMode, blendMode          | mix-blend-mode        | N       |

## Pseudo（伪类选择器）

| Prop                   | CSS Property                                                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_hover                | &:hover<br>&[data-hover]                                                                                                                                             |
| \_active               | &:active<br>&[data-active]                                                                                                                                           |
| \_focus                | &:focus<br>&[data-focus]                                                                                                                                             |
| \_highlighted          | &[data-highlighted]                                                                                                                                                  |
| \_focusWithin          | &:focus-within                                                                                                                                                       |
| \_focusVisible         | &:focus-visible                                                                                                                                                      |
| \_disabled             | &[disabled]<br>&[aria-disabled=true]<br>&[data-disabled]                                                                                                             |
| \_readOnly             | &[aria-readonly=true]<br>&[readonly]<br>&[data-readonly]                                                                                                             |
| \_before               | &::before                                                                                                                                                            |
| \_after                | &::after                                                                                                                                                             |
| \_empty                | &:empty                                                                                                                                                              |
| \_expanded             | &[aria-expanded=true]<br>&[data-expanded]                                                                                                                            |
| \_checked              | &[aria-checked=true]<br>&[data-checked]                                                                                                                              |
| \_grabbed              | &[aria-grabbed=true]<br>&[data-grabbed]                                                                                                                              |
| \_pressed              | &[aria-pressed=true]<br>&[data-pressed]                                                                                                                              |
| \_invalid              | &[aria-invalid=true]<br>&[data-invalid]                                                                                                                              |
| \_valid                | &[data-valid]<br>&[data-state=valid]                                                                                                                                 |
| \_loading              | &[data-loading]<br>&[aria-busy=true]                                                                                                                                 |
| \_selected             | &[aria-selected=true]<br>&[data-selected]                                                                                                                            |
| \_hidden               | &[hidden]<br>&[data-hidden]                                                                                                                                          |
| \_autofill             | &:-webkit-autofill                                                                                                                                                   |
| \_even                 | &:nth-of-type(even)                                                                                                                                                  |
| \_odd                  | &:nth-of-type(odd)                                                                                                                                                   |
| \_first                | &:first-of-type                                                                                                                                                      |
| \_firstLetter          | &::first-letter                                                                                                                                                      |
| \_last                 | &:last-of-type                                                                                                                                                       |
| \_notFirst             | &:not(:first-of-type)                                                                                                                                                |
| \_notLast              | &:not(:last-of-type)                                                                                                                                                 |
| \_visited              | &:visited                                                                                                                                                            |
| \_activeLink           | &[aria-current=page]                                                                                                                                                 |
| \_activeStep           | &[aria-current=step]                                                                                                                                                 |
| \_indeterminate        | &:indeterminate<br>&[aria-checked=mixed]<br>&[data-indeterminate]                                                                                                    |
| \_groupHover           | [role=group]:hover &<br>[role=group][data-hover] &<br>[data-group]:hover &<br>[data-group][data-hover] &<br>.group:hover &<br>.group[data-hover] &                   |
| \_peerHover            | [data-peer]:hover ~ &<br>[data-peer][data-hover] ~ &<br>.peer:hover ~ &<br>.peer[data-hover] ~ &                                                                     |
| \_groupFocus           | [role=group]:focus &<br>[role=group][data-focus] &<br>[data-group]:focus &<br>[data-group][data-focus] &<br>.group:focus &<br>.group[data-focus] &                   |
| \_peerFocus            | [data-peer]:focus ~ &<br>[data-peer][data-focus] ~ &<br>.peer:focus ~ &<br>.peer[data-focus] ~ &                                                                     |
| \_groupFocusVisible    | [role=group]:focus-visible &<br>[data-group]:focus-visible &<br>.group:focus-visible &                                                                               |
| \_peerFocusVisible     | [data-peer]:focus-visible ~ &<br>.peer:focus-visible ~ &                                                                                                             |
| \_groupActive          | [role=group]:active &<br>[role=group][data-active] &<br>[data-group]:active &<br>[data-group][data-active] &<br>.group:active &<br>.group[data-active] &             |
| \_peerActive           | [data-peer]:active ~ &<br>[data-peer][data-active] ~ &<br>.peer:active ~ &<br>.peer[data-active] ~ &                                                                 |
| \_groupDisabled        | [role=group]:disabled &<br>[role=group][data-disabled] &<br>[data-group]:disabled &<br>[data-group][data-disabled] &<br>.group:disabled &<br>.group[data-disabled] & |
| \_peerDisabled         | [data-peer]:disabled ~ &<br>[data-peer][data-disabled] ~ &<br>.peer:disabled ~ &<br>.peer[data-disabled] ~ &                                                         |
| \_groupInvalid         | [role=group]:invalid &<br>[role=group][data-invalid] &<br>[data-group]:invalid &<br>[data-group][data-invalid] &<br>.group:invalid &<br>.group[data-invalid] &       |
| \_peerInvalid          | [data-peer]:invalid ~ &<br>[data-peer][data-invalid] ~ &<br>.peer:invalid ~ &<br>.peer[data-invalid] ~ &                                                             |
| \_groupChecked         | [role=group]:checked &<br>[role=group][data-checked] &<br>[data-group]:checked &<br>[data-group][data-checked] &<br>.group:checked &<br>.group[data-checked] &       |
| \_peerChecked          | [data-peer]:checked ~ &<br>[data-peer][data-checked] ~ &<br>.peer:checked ~ &<br>.peer[data-checked] ~ &                                                             |
| \_groupFocusWithin     | [role=group]:focus-within &<br>[data-group]:focus-within &<br>.group:focus-within &                                                                                  |
| \_peerFocusWithin      | [data-peer]:focus-within ~ &<br>.peer:focus-within ~ &                                                                                                               |
| \_peerPlaceholderShown | [data-peer]:placeholder-shown ~ &<br>.peer:placeholder-shown ~ &                                                                                                     |
| \_placeholder          | &::placeholder                                                                                                                                                       |
| \_placeholderShown     | &:placeholder-shown                                                                                                                                                  |
| \_fullScreen           | &:fullscreen                                                                                                                                                         |
| \_selection            | &::selection                                                                                                                                                         |
| \_rtl                  | [dir=rtl] &<br>&[dir=rtl]                                                                                                                                            |
| \_ltr                  | [dir=ltr] &<br>&[dir=ltr]                                                                                                                                            |
| \_mediaDark            | @media (prefers-color-scheme: dark)                                                                                                                                  |
| \_mediaReduceMotion    | @media (prefers-reduced-motion: reduce)                                                                                                                              |
| \_dark                 | .antd-dark &<br>[data-theme=dark] &<br>&[data-theme=dark]                                                                                                            |
| \_light                | .antd-light &<br>[data-theme=light] &<br>&[data-theme=light]                                                                                                         |
| \_horizontal           | &[data-orientation=horizontal]                                                                                                                                       |
| \_vertical             | &[data-orientation=vertical]                                                                                                                                         |

## 特殊的属性

除了以上的属性之外，Styled Antd 还提供了几个特殊的功能性属性，意在解决日常开发中经常遇到的样式需求。

- [as](./the-as-prop.md)
- [sx](./the-sx-prop.md)
- [css](./the-css-prop.md)
- [noOfLines & isTruncated](./the-noOfLines-prop.md)
- [apply](./the-apply-prop.md)
