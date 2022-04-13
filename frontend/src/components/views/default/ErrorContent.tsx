import React from 'react';
import { CommonCss, CustomCss } from 'styles/Style';

function ErrorContent () {
  const panelStyle = 
    CommonCss.panel +
    CustomCss.views.error.padding;
  
  return (
    <div className={panelStyle}>
      Something went wrong! Either Grey isn&apos;t finished or Grey messed something up. Either way, blame Grey, not me!
    </div>
  );
}

export default ErrorContent;
