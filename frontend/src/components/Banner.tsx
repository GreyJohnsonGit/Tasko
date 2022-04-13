import React from 'react';
import Router from 'components/Banner/Router';
import LoginButton from 'components/Banner/LoginButton';
import RouteData from 'types/RouteData';
import { CommonCss, CustomCss } from 'styles/Style';

interface BannerProps {
    getPage: string,
    setPage: (pageId: string) => void,
    routes: RouteData[]
}

function Banner(props: BannerProps) {
  const bannerStyle = 
    CommonCss.flex +
    CustomCss.banner.container;

  return (
    <div className={bannerStyle}>
      <Router 
        routes={props.routes}
        getPage={props.getPage}
        setPage={props.setPage}/>
      <LoginButton
        name='Login'
        page='/Login'
        getPage={props.getPage}
        setPage={props.setPage}/>
    </div>
  );
}

export default Banner;