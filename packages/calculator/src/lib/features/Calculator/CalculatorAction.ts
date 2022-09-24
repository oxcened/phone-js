import { NumberKey, OperationKey } from '../Keyboard/Key';

export type CalculatorAction =
  | { type: 'ON_NUMBER', payload: NumberKey }
  | { type: 'ON_OPERATION', payload: OperationKey }
  | { type: 'ON_EQUALS' }
  | { type: 'ON_DELETE' }
  | { type: 'ON_COMMA' };
