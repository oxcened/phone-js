import { useRef, useState } from 'react';

const INITIAL_SCALE = 1;
const MAX_SCALE = 4;

export const useScaleText = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(INITIAL_SCALE);

  const updateScale = () => {
    if (containerRef.current && textRef.current) {
      const { clientWidth: containerW, clientHeight: containerH } = containerRef.current;
      const { clientWidth: textW, clientHeight: textH } = textRef.current;

      setScale(Math.min(
        containerW / textW,
        containerH / textH,
        MAX_SCALE
      ));
    }
  };

  return {
    scale,
    textRef,
    containerRef,
    updateScale
  };
};
