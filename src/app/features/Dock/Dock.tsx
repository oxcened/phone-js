import React from 'react';
import './Dock.css';
import AppIcon from '../AppIcon/AppIcon';
import { AppIconId } from '../AppIcon/AppIconId';

const Dock = () => {
  return (
    <div className='dock'>
      <AppIcon id={AppIconId.PHONE} showLabel={false} />
      <AppIcon id={AppIconId.BROWSER} showLabel={false} />
      <AppIcon id={AppIconId.MESSAGES} showLabel={false} />
      <AppIcon id={AppIconId.MUSIC} showLabel={false} />
    </div>
  );
};

export default Dock;
