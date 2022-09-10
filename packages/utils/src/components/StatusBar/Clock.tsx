import React, { useEffect, useRef, useState } from 'react';

const Clock = () => {
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const interval = useRef<number>();

  useEffect(() => {
    updateClock();
    window.setTimeout(() => {
      updateClock();
      interval.current = window.setInterval(() => {
        updateClock();
      }, (60 * 1000));
    }, (60 - new Date().getSeconds()) * 1000);

    return () => {
      if (interval.current !== undefined) {
        window.clearInterval(interval.current);
      }
    }
  }, []);

  const updateClock = () => {
    const date = new Date();
    setHours(String(date.getHours()).padStart(2, '0'));
    setMinutes(String(date.getMinutes()).padStart(2, '0'));
  }

  return (
    <span className='clock'>{hours}:{minutes}</span>
  );
};

export default Clock;
