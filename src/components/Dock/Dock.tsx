import React from 'react';
import './Dock.css';
import AppIcon, { AppIconId } from '../AppIcon/AppIcon';

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
