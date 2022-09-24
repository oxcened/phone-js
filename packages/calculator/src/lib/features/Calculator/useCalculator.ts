import { isNumberKey, isOperationKey, Key, OtherKey } from '../Keyboard/Key';
import { useReducer } from 'react';
import { calculatorReducer } from './calculatorReducer';
import { getIsClearCurrentNumber } from './utils';

export const useCalculator = () => {
  const [{
    firstNum,
    secondNum,
    operation,
    trailingComma,
    trailingZeroes,
    isOverrideFirstNum,
    isOverrideSecondNum
  }, dispatch] = useReducer(calculatorReducer, {
    firstNum: 0,
    trailingComma: false,
    trailingZeroes: 0,
    isOverrideFirstNum: false,
    isOverrideSecondNum: false
  });

  const secondNumExists = secondNum !== undefined;
  const displayedText = secondNumExists ? secondNum : firstNum;
  const activeOperation = isOverrideSecondNum ? operation : undefined;
  const isClearCurrentNumber = getIsClearCurrentNumber(firstNum, isOverrideFirstNum, isOverrideSecondNum, trailingComma, secondNum);

  const onKeyPress = (key: Key) => {
    if (isNumberKey(key)) {
      dispatch({ type: 'ON_NUMBER', payload: key });
    } else if (isOperationKey(key)) {
      dispatch({ type: 'ON_OPERATION', payload: key });
    } else {
      onOtherKeyPress(key);
    }
  };

  const onOtherKeyPress = (key: OtherKey) => {
    switch (key) {
      case 'equals': {
        dispatch({ type: 'ON_EQUALS' });
        break;
      }
      case 'percentage':
        // TODO handle this button press
        break;
      case 'negative':
        // TODO handle this button press
        break;
      case 'delete':
        dispatch({ type: 'ON_DELETE' });
        break;
      case 'comma':
        dispatch({ type: 'ON_COMMA' });
        break;
    }
  };

  return {
    trailingComma,
    trailingZeroes,
    secondNumExists,
    displayedText,
    activeOperation,
    isClearCurrentNumber,
    onKeyPress
  };
};
