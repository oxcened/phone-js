import { OperationKey } from '../Keyboard/Key';

export type CalculatorState = {
  firstNum: number;
  secondNum?: number;
  operation?: OperationKey;
  trailingComma: boolean;
  trailingZeroes: number;
  isOverrideFirstNum: boolean;
  isOverrideSecondNum: boolean;
};
