import React, { PropsWithChildren } from 'react';
import './Frame.css';

const Frame = ({ children }: PropsWithChildren) => {
  return (
    <div className='frame'>
      <div className='notch'>
        <div className='camera'></div>
      </div>

      <div className='left-notch' />
      <div className='right-notch' />
      <div className='screen'>{children}</div>
      <div className='button slider' />
      <div className='button volume-up' />
      <div className='button volume-down' />
      <div className='button power' />
    </div>
  );
};

export default Frame;
