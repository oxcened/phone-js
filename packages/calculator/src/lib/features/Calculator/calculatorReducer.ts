import { CalculatorState } from './CalculatorState';
import { CalculatorAction } from './CalculatorAction';
import { Reducer } from 'react';
import { getAppendedNumber, getOperationResult, getOverriddenNumber } from './utils';

export const calculatorReducer: Reducer<CalculatorState, CalculatorAction> = (prevState, action) => {
  const {
    firstNum,
    secondNum,
    operation,
    trailingComma,
    trailingZeroes,
    isOverrideFirstNum,
    isOverrideSecondNum
  } = prevState;

  const secondNumExists = secondNum !== undefined;
  const currentNum = secondNumExists ? secondNum : firstNum;
  const currentNumAtMaxLength = (currentNum.toString().replace('.', '').length + trailingZeroes) > 8;
  const shouldBlockNewInput = currentNumAtMaxLength && !isOverrideFirstNum && !isOverrideSecondNum;
  const currentNumIsDecimal = currentNum.toString().includes('.');

  const newState = Object.create(prevState);

  switch (action.type) {
    case 'ON_NUMBER': {
      if (shouldBlockNewInput) break;

      const key = action.payload;
      const shouldAddZero = (currentNumIsDecimal || trailingComma) && key === '0';
      let resetTrailingChars = true;

      if (isOverrideFirstNum) {
        newState.firstNum = getOverriddenNumber(key);
        newState.isOverrideFirstNum = false;
      } else if (shouldAddZero && !operation) {
        newState.trailingZeroes++;
        resetTrailingChars = false;
      } else if (!operation) {
        newState.firstNum = getAppendedNumber(newState.firstNum, key, trailingComma, trailingZeroes);
      } else if (isOverrideSecondNum) {
        newState.secondNum = getOverriddenNumber(key);
        newState.isOverrideSecondNum = false;
      } else if (shouldAddZero) {
        newState.trailingZeroes++;
        resetTrailingChars = false;
      } else {
        newState.secondNum = getAppendedNumber(newState.secondNum, key, trailingComma, trailingZeroes);
      }

      if (resetTrailingChars) {
        newState.trailingComma = false;
        newState.trailingZeroes = 0;
      }

      break;
    }
    case 'ON_OPERATION': {
      const key = action.payload;
      const isPrevOperationPending = operation && secondNumExists && !isOverrideSecondNum;

      if (isPrevOperationPending) {
        if (!secondNumExists) break;

        const result = getOperationResult(firstNum, secondNum, operation);
        newState.firstNum = result;
        newState.secondNum = result;
        newState.operation = undefined;
        newState.trailingComma = false;
        newState.trailingZeroes = 0;
        newState.isOverrideFirstNum = true;
      } else {
        newState.secondNum = firstNum;
      }

      newState.operation = key;
      newState.isOverrideSecondNum = true;
      newState.isOverrideFirstNum = false;

      break;
    }
    case 'ON_EQUALS': {
      if (!operation || !secondNumExists) break;

      newState.firstNum = getOperationResult(firstNum, secondNum, operation);
      newState.secondNum = undefined;
      newState.operation = undefined;
      newState.trailingComma = false;
      newState.trailingZeroes = 0;
      newState.isOverrideFirstNum = true;

      break;
    }
    case 'ON_DELETE': {
      const shouldReenterSecondNum = operation && (!isOverrideSecondNum || secondNum);

      if (shouldReenterSecondNum) {
        newState.secondNum = 0;
        newState.isOverrideSecondNum = true;
      } else {
        newState.firstNum = 0;
        newState.secondNum = undefined;
        newState.operation = undefined;
        newState.isOverrideSecondNum = false;
        newState.isOverrideFirstNum = false;
      }

      newState.trailingComma = false;
      newState.trailingZeroes = 0;

      break;
    }
    case 'ON_COMMA': {
      if (shouldBlockNewInput) break;

      const shouldAddComma = isOverrideFirstNum || isOverrideSecondNum || !currentNumIsDecimal;

      if (shouldAddComma) {
        newState.trailingComma = true;
        newState.trailingZeroes = 0;
      }

      if (isOverrideSecondNum) {
        newState.secondNum = 0;
        newState.isOverrideSecondNum = false;
      }

      if (isOverrideFirstNum) {
        newState.firstNum = 0;
        newState.isOverrideFirstNum = false;
      }

      break;
    }
  }

  return newState;
};
