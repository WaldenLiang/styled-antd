export type TransformFn<ValueType = any> = (
  value: ValueType,
  theme: Record<string, any>,
  styles?: Record<string, any>
) => any;
