import React from 'react';
import HoverWrapper from 'components/HoverWrapper';
import RouteData from 'types/RouteData';
import { CommonCss, CustomCss } from 'styles/Style';

interface RouteProps {
    getPage: string,
    setPage: (pageId: string) => void,
    route: RouteData
}

function Route (props: RouteProps) {
  const isSelected = props.getPage === props.route.page;
  
  const onClick = () => {
    props.setPage(props.route.page);
  };

  const buttonStyle = 
    CustomCss.banner.button +
    (isSelected ? CommonCss.brighten : '');
  
  const iconButtonStyle =
    CustomCss.banner.icon.container +
    (isSelected ? CommonCss.brighten : '');

  const imageStyle =
    CustomCss.banner.icon.img;

  if (props.route.name != 'ICON') {
    return (
      <HoverWrapper>
        <div className={buttonStyle} onClick={onClick}>
          {props.route.name}
        </div>
      </HoverWrapper>
    );
  } else {
    return (
      <HoverWrapper>
        <div className={iconButtonStyle} onClick={onClick}>
          <img className={imageStyle} src='Logo.png'/>
        </div>
      </HoverWrapper>
    );
  }
  
}

export default Route;