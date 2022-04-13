import React from 'react';
import { CommonCss } from 'styles/Style';

function LandingContent () {
  const containerStyle =
    CommonCss.flex +
    CommonCss.fill;
  const spacerPanelStyle =
    CommonCss.smallPanel;
  const panelStyle = 
    CommonCss.panel +
    CommonCss.smallPanel;
  
  return (
    <div className={containerStyle}>
      <div className={spacerPanelStyle}/>
      <div className={panelStyle}>
        <div className='frame'>
          <div className='title'>Welcome to the Tasko!</div>
          <div className='paragraph'>
            Tasko is a small project managment tool that helps you to organize and store tasks! Click on the <b>Task</b> tab above to get started!
          </div>
        </div>
      </div>
      <div className={spacerPanelStyle}/>
    </div>
  );
}

export default LandingContent;
