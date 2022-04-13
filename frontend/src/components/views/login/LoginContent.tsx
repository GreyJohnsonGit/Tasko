import React from 'react';
import Form from 'components/views/login/Form';
import { CommonCss } from 'styles/Style';

interface LoginContentProps {
  getUser: string,
  setUser: (user: string) => void
}

function LoginContent(props: LoginContentProps) {
  
  const contentStyle = 
    CommonCss.flex +
    CommonCss.fill;
  const transparentPanelStyle =
    CommonCss.mediumPanel;

  return (
    <div className={contentStyle}>
      <div className={transparentPanelStyle}/>
      <Form
        getUser={props.getUser}
        setUser={props.setUser}
      />
      <div className={transparentPanelStyle}/>
    </div>
  );
}

export default LoginContent;