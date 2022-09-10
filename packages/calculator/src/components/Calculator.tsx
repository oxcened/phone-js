import React, { useMemo } from 'react';
import './Calculator.css';
import { PhoneAppScreen } from '@phone-js/utils';
import multiplyIcon from '../assets/multiply_calculator.png';
import minusIcon from '../assets/minus_calculator.png';
import plusIcon from '../assets/plus_calculator.png';
import plusMinusIcon from '../assets/plus_minus_calculator.png';

const Calculator = () => {
  const numbers = useMemo(() => {
    return new Array(10)
      .fill(undefined)
      .map((value, index) => (
        <div key={index} className={`number n${index}`} style={{ gridArea: `n${index}` }}>
          {index}
        </div>
      ));
  }, []);

  return (
    <div className='calculator'>
      <PhoneAppScreen isDarkMode>
        <div className='text-container'>
          0
        </div>
        <div className='buttons'>
          <div className='other ac'>AC</div>
          <div className='other negative'>
            <img src={plusMinusIcon} height={28} alt='Plus/Minus' />
          </div>
          <div className='other percentage'>%</div>
          <div className='operator split'>÷</div>
          <div className='operator multiply'>
            <img src={multiplyIcon} height={30} alt='Multiply' />
          </div>
          <div className='operator minus'>
            <img src={minusIcon} height={25} alt='Minus' />
          </div>
          <div className='operator plus'>
            <img src={plusIcon} height={25} alt='Plus' />
          </div>
          <div className='operator equals'>=</div>
          <div className='number comma'>,</div>
          {numbers}
        </div>
      </PhoneAppScreen>
    </div>
  );
};

export default Calculator;
