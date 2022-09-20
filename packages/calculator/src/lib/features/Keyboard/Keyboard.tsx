import { HTMLAttributes, useMemo } from 'react';
import multiplyIcon from '../../../assets/multiply_calculator.png';
import minusIcon from '../../../assets/minus_calculator.png';
import plusIcon from '../../../assets/plus_calculator.png';
import plusMinusIcon from '../../../assets/plus_minus_calculator.png';
import './Keyboard.css';
import { Key, numbers, OperationKey } from './Key';
import classNames from 'classnames';

const Keyboard = ({ activeOperation, isClearCurrentNumber, onKeyPress }: {
  activeOperation?: OperationKey;
  isClearCurrentNumber?: boolean;
  onKeyPress: (key: Key) => void;
}) => {
  const numberKeys = useMemo(() => {
    return numbers.map((value, index) => (
      <div
        key={index}
        className={`number n${index}`}
        style={{ gridArea: `n${index}` }}
        onClick={() => onKeyPress(value)}
      >
        {index}
      </div>
    ));
  }, [onKeyPress]);

  const isActive = (key: OperationKey) => key === activeOperation;

  const getOperationClass = (operation: OperationKey) => classNames(
    `operator ${operation}`,
    { 'active': isActive(operation) }
  )

  const getOperatorProps = (operation: OperationKey): HTMLAttributes<HTMLDivElement> => ({
    className: getOperationClass(operation),
    onClick: () => onKeyPress(operation)
  });

  return (
    <div className='keyboard'>
      <div className='other ac' onClick={() => onKeyPress('delete')}>
        {isClearCurrentNumber ? 'C' : 'AC'}
      </div>

      <div className='other negative disable' onClick={() => onKeyPress('negative')}>
        <img src={plusMinusIcon} height={28} alt='Negative' />
      </div>

      <div className='other percentage disable' onClick={() => onKeyPress('percentage')}>%</div>

      <div {...getOperatorProps('division')}>÷</div>

      <div {...getOperatorProps('multiplication')}>
        <img src={multiplyIcon} height={30} alt='Multiplication' />
      </div>

      <div {...getOperatorProps('subtraction')}>
        <img src={minusIcon} height={25} alt='Subtraction' />
      </div>

      <div {...getOperatorProps('addition')}>
        <img src={plusIcon} height={25} alt='Addition' />
      </div>

      <div className='operator equals' onClick={() => onKeyPress('equals')}>=</div>
      <div className='number comma' onClick={() => onKeyPress('comma')}>.</div>

      {numberKeys}
    </div>
  );
};

export default Keyboard;
