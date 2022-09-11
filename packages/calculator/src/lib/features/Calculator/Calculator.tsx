import './Calculator.css';
import { PhoneAppScreen } from '@phone-js/utils';
import Display from '../Display/Display';
import Keyboard from '../Keyboard/Keyboard';
import { useCalculator } from './useCalculator';

const Calculator = () => {
  const {
    trailingComma,
    displayedText,
    activeOperation,
    isClearCurrentNumber,
    onKeyPress
  } = useCalculator();

  return (
    <div className='calculator'>
      <PhoneAppScreen isDarkMode>
        <Display number={displayedText} trailingComma={trailingComma} />

        <Keyboard
          onKeyPress={onKeyPress}
          isClearCurrentNumber={isClearCurrentNumber}
          activeOperation={activeOperation}
        />
      </PhoneAppScreen>
    </div>
  );
};

export default Calculator;
