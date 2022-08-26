import React, { PropsWithChildren } from 'react';
import Frame from '../Frame/Frame';
import StatusBar from '../StatusBar/StatusBar';

const Phone = (props: PropsWithChildren) => {
  return (
    <Frame>
      <StatusBar />
      {props.children}
    </Frame>
  );
};

export default Phone;
