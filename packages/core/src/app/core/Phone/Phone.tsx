import React, { PropsWithChildren } from 'react';
import Frame from '../Frame/Frame';

const Phone = (props: PropsWithChildren) => {
  return (
    <Frame>
      {props.children}
    </Frame>
  );
};

export default Phone;
