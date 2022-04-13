import React, { useState } from 'react';
import { CommonCss } from 'styles/Style';

interface HoverWrapperProps {
    children: React.ReactNode,
    className?: string
}

function HoverWrapper(props: HoverWrapperProps) {
  const [getHover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };
  
  const onMouseLeave = () => {
    setHover(false);
  };

  const wrapperStyle =
    (props.className ?? '') + 
    (getHover ? CommonCss.darken : '');

  return (
    <div className={wrapperStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {props.children}
    </div>
  );
}

export default HoverWrapper;