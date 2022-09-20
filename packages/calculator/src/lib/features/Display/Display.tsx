import { useEffect, useMemo } from 'react';
import './Display.css';
import { useScaleText } from './useScaleText';

const Display = ({ number, trailingComma, trailingZeroes = 0 }: {
  number: number;
  trailingComma?: boolean;
  trailingZeroes?: number;
}) => {
  const format = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      notation: ((number > 0 && number < 0.00000001) || number > 999999999) ? 'scientific' : 'standard',
      maximumFractionDigits: 9,
      maximumSignificantDigits: 9
    });
  }, [number]);

  const { textRef, containerRef, scale, updateScale } = useScaleText();
  const formatted = format.format(number).toLowerCase();

  useEffect(() => {
    updateScale();
  }, [formatted, trailingComma, trailingZeroes]);

  const mappedTrailingZeroes = new Array(trailingZeroes).fill(0);

  return (
    <div ref={containerRef} className='display'>
      <span
        ref={textRef}
        style={{ transform: `scale(${scale})` }}
      >{formatted}{trailingComma ? '.' : ''}{mappedTrailingZeroes}</span>
    </div>
  );
};

export default Display;
