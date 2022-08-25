import React, { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import './Frame.css';

const Frame = ({ children }: PropsWithChildren) => {
  const frame = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect>();

  useEffect(() => {
    setRect(frame.current?.getBoundingClientRect());
  }, [frame]);

  const updateZoom = useCallback(() => {
    if (!rect) {
      return;
    }

    const scale = Math.min(
      window.innerWidth / (rect.width ?? 0),
      window.innerHeight / (rect.height ?? 0)
    );

    (document.getElementsByClassName('frame')[0] as any).style.transform = `scale(${scale})`;
  }, [rect])

  useEffect(() => {
    updateZoom();
    const listener = () => {
      updateZoom()
    };

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [updateZoom]);

  return (
    <div className='frame' ref={frame}>
      <div className='notch'>
        <div className='camera'></div>
      </div>

      <div className='left-notch' />
      <div className='right-notch' />
      <div className='screen'>{children}</div>
      <div className='button slider' />
      <div className='button volume-up' />
      <div className='button volume-down' />
      <div className='button power' />
    </div>
  );
};

export default Frame;
