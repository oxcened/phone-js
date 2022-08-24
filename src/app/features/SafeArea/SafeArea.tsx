import React, { PropsWithChildren } from 'react';
import './SafeArea.css';

const SafeArea = ({ children }: PropsWithChildren) => {
  return (
    <div className='safe-area'>{children}</div>
  );
};

export default SafeArea;
