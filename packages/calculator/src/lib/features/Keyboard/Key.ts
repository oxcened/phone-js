export const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export const operations = ['addition', 'subtraction', 'division', 'multiplication'] as const;
export const other = ['equals', 'percentage', 'negative', 'delete', 'comma'];
export const keys = [...numbers, ...operations, ...other] as const;

export type Key = typeof keys[number];
export type OperationKey = typeof operations[number];
export type NumberKey = typeof numbers[number];
export type OtherKey = typeof other[number];

export const isNumberKey = (key: Key): key is NumberKey => {
  return !!numbers.find(num => num === key);
};

export const isOperationKey = (key: Key): key is OperationKey => {
  return !!operations.find(num => num === key);
};
