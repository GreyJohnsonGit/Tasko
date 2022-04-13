import React from 'react';
import HoverWrapper from 'components/HoverWrapper';
import { CommonCss, CustomCss } from 'styles/Style';

interface LoginButtonProps {
    getPage: string,
    setPage: (pageId: string) => void,
    name: string,
    page: string
}

function LoginButton (props: LoginButtonProps) {
  const isSelected = () => props.getPage === props.page;
  
  const onClick = () => {
    props.setPage(props.page);
  };

  let bannerStyle = 
    CustomCss.banner.button + ' ';
  if (isSelected()) bannerStyle += CommonCss.brighten;

  return (
    <HoverWrapper>
      <div className={bannerStyle} onClick={onClick}>
        {props.name}
      </div>
    </HoverWrapper>
  );
}

export default LoginButton;