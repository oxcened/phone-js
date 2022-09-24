import React, { PropsWithChildren } from 'react';
import './SafeArea.css';

export const SafeArea = ({ children }: PropsWithChildren) => {
  return (
    <div className='safe-area'>{children}</div>
  );
};
