import React from 'react';
import Frame from '../Frame/Frame';
import StatusBar from '../StatusBar/StatusBar';
import { Outlet } from 'react-router-dom';

const Phone = () => {
  return (
    <Frame>
      <StatusBar />
      <Outlet />
    </Frame>
  );
};

export default Phone;
