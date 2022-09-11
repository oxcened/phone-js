import './BottomBar.css';
import { PropsWithChildren } from 'react';

export const BottomBar = ({ children }: PropsWithChildren) => {
  return (
    <div className='bottom-bar'>
      {children}
    </div>
  );
};
