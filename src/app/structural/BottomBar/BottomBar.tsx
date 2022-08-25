import './BottomBar.css';
import { PropsWithChildren } from 'react';

const BottomBar = ({ children }: PropsWithChildren) => {
  return (
    <div className='bottom-bar'>
      {children}
    </div>
  );
};

export default BottomBar;
