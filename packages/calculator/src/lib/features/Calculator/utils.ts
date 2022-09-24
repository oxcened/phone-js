import { NumberKey, OperationKey } from '../Keyboard/Key';

export const getOperationResult = (firstNum: number, secondNum: number, operation: OperationKey) => {
  switch (operation) {
    case 'addition':
      return firstNum + secondNum;
    case 'subtraction':
      return firstNum - secondNum;
    case 'division':
      return firstNum / secondNum;
    case 'multiplication':
      return firstNum * secondNum;
  }
};

export const getAppendedNumber = (prevNumber = 0, newDigit: NumberKey, trailingComma: boolean, trailingZeroes = 0) => {
  return parseFloat(`${prevNumber}${trailingComma ? '.' : ''}${new Array(trailingZeroes).fill(0).join('')}${newDigit}`)
};

export const getOverriddenNumber = (newDigit: NumberKey) => {
  return parseFloat(newDigit);
};

export const getIsClearCurrentNumber = (
  firstNum: number,
  isOverrideFirstNum: boolean,
  isOverrideSecondNum: boolean,
  trailingComma: boolean,
  secondNum?: number
) => {
  if (!secondNum && isOverrideSecondNum) {
    return false;
  }

  if (!firstNum && isOverrideFirstNum) {
    return true;
  }

  return !!firstNum || !!secondNum || trailingComma;
};
