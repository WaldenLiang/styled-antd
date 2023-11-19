import { type ReactNode, type ReactElement } from 'react';
import {
  type CSSObject,
  ClassNames as EmotionClassNames,
} from '@emotion/react';
import { type SystemStyleObject, css as systemCss } from '../css-fn';
import { isEmptyObject } from '../utils';

type StyleObject = SystemStyleObject & {
  sx?: SystemStyleObject;
  css?: CSSObject;
};

type ClassNameType = StyleObject | string | undefined | null;

export type ClassNamesObject = Record<
  string,
  | ClassNameType
  | ClassNameType[]
  | ((
      toClassName: (
        styleObject: ClassNameType | ClassNameType[],
      ) => string | undefined,
    ) => string | undefined | Record<string, string | undefined>)
>;

export type ClassNamesProps<T extends ClassNamesObject = ClassNamesObject> = {
  children: (
    context: Record<keyof T, any> & { className?: string },
  ) => ReactElement;
  classNames?: T;
} & StyleObject;

export const ClassNames = function <
  T extends ClassNamesObject = ClassNamesObject,
>({ sx, css, classNames, children, ...styles }: ClassNamesProps<T>): ReactNode {
  if (
    isEmptyObject(sx) &&
    isEmptyObject(css) &&
    isEmptyObject(classNames) &&
    isEmptyObject(styles)
  )
    return children({} as any);

  return (
    <EmotionClassNames>
      {({ theme, css: emotionCss, cx }) => {
        const toClassName = (styleObject: ClassNameType | ClassNameType[]) => {
          const fn = (i: ClassNameType) => {
            if (i == null) return undefined;

            if (typeof i === 'string') {
              return i;
            }

            const { sx, css, ...restStyles } = i;

            const className = cx(
              emotionCss(
                systemCss({
                  ...restStyles,
                  ...sx,
                })(theme),
              ),
              emotionCss(css),
            );

            return className;
          };

          if (Array.isArray(styleObject)) {
            return cx(styleObject.map(fn).filter(Boolean));
          }

          return fn(styleObject);
        };

        const _classNames = (classNames ?? {}) as T;

        const serializedClassNames = Object.keys(_classNames).reduce<
          Record<string, any>
        >((prev, key) => {
          const obj = _classNames[key];
          const str =
            typeof obj === 'function' ? obj(toClassName) : toClassName(obj);

          if (str) {
            prev[key] = str;
          }

          return prev;
        }, {});

        const className = toClassName({
          sx,
          css,
          ...styles,
        });

        return children({ className, ...serializedClassNames } as Record<
          keyof T,
          any
        > & {
          className?: string;
        });
      }}
    </EmotionClassNames>
  );
};

ClassNames.displayName = 'ClassNames';
