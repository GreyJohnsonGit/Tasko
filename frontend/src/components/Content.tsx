import React from 'react';
import ErrorContent from 'components/views/default/ErrorContent';
import TaskContent from 'components/views/task/TaskContent';
import LoginContent from 'components/views/login/LoginContent';
import SignupContent from 'components/views/signup/SignupContent';
import { CommonCss, CustomCss } from 'styles/Style';
import LandingContent from './views/landing/LandingContent';

interface ContentProps {
    getPage: string,
    getUser: string,
    setPage: (pageId: string) => void,
    setUser: (user: string) => void
}

function Content (props: ContentProps) {
  let InnerContent = (<ErrorContent/>);
  switch (props.getPage) {
  case '/':
    InnerContent = (<LandingContent/>);
    break; 
  case '/Task':
    InnerContent = (<TaskContent/>);
    break;
  case '/Login':
    InnerContent = (
      <LoginContent
        getUser={props.getUser}
        setUser={props.setUser}
      />
    );
    break;
  case '/Signup':
    InnerContent = (<SignupContent/>);
    break;
  }

  const contentStyle = 
    CommonCss.flex +
    CustomCss.content;

  return (
    <div className={contentStyle}>
      {InnerContent}
    </div>
  );
}

export default Content;
