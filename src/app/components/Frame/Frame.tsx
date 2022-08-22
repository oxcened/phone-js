import React from 'react';
import './Frame.css';

const Frame = ({ children }: {
  children?: React.ReactNode;
}) => {
  return (
    <div className='frame'>
      <div className='notch'>
        <div className='camera'></div>
      </div>
      <div className='top-notch' />
      <div className='left-notch' />
      <div className='right-notch' />
      <div className='screen'>{children}</div>
    </div>
  );
};

export default Frame;
