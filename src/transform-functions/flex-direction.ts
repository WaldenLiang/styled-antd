// import { type TransformFn } from './_types';

// const flexDirectionTemplate = {
//   'row-reverse': {
//     space: '--lumos-space-x-reverse',
//     divide: '--lumos-divide-x-reverse',
//   },
//   'column-reverse': {
//     space: '--lumos-space-y-reverse',
//     divide: '--lumos-divide-y-reverse',
//   },
// };

// export const flexDirection: TransformFn = (value) => {
//   const { space, divide } = (flexDirectionTemplate as any)[value] ?? {};

//   const result: Record<string, any> = { flexDirection: value };

//   if (space) result[space] = 1;
//   if (divide) result[divide] = 1;

//   return result;
// };
