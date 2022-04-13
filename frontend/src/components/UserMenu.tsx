import React from 'react';
import { CommonCss, CustomCss } from 'styles/Style';


function UserMenu() {
  const panelStyle =
    CommonCss.panel +
    CommonCss.smallPanel;
  const containerStyle =
    CustomCss.users.container;
  const entryStyle =
    CustomCss.users.entry;
  const circleStyle =
    CustomCss.users.circle;
  const nameStyle =
    CustomCss.users.name;

  return (
    <div className={panelStyle}>
      <div className={containerStyle}>
        <div className={entryStyle}>
          <div className={circleStyle}></div>
          <div className={nameStyle}>Robin Fintz</div>
        </div>
        <div className={entryStyle}>
          <div className={circleStyle}></div>
          <div className={nameStyle}>Grey Sexton</div>
        </div>
        <div className={entryStyle}>
          <div className={circleStyle}></div>
          <div className={nameStyle}>Joseph Goldenstein</div>
        </div>
        <div className={entryStyle}>
          <div className={circleStyle}></div>
          <div className={nameStyle}>Svetlana Ukranovich</div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;