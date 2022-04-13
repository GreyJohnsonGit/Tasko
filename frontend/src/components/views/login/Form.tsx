import HoverWrapper from 'components/HoverWrapper';
import React, { useState } from 'react';
import { CommonCss, CustomCss } from 'styles/Style';
const FormCss = CustomCss.views.login;

interface FormProps {
    getUser: string,
    setUser: (user: string) => void
  }

function Form(props: FormProps) {
  const [getUsername, setUsername] = useState('');
  const [getPassword, setPassword] = useState('');

  const onClick = () => {
    props.setUser(getUsername);
    setUsername('');
    setPassword('');
  };

  const CreateOnChange = (setter: (state: string) => void) => {
    return (event: React.BaseSyntheticEvent) => {
      setter(event.target.value);
    };
  };

  const panelStyle = 
    CommonCss.panel +
    CommonCss.mediumPanel;
  const containerStyle = 
    CommonCss.flex + 
    CommonCss.fill +
    FormCss.container;
  const headerStyle = 
    FormCss.header;
  const inputContainerStyle =
    FormCss.input.container;
  const inputStyle =
    FormCss.input.input;
  const buttonStyle = 
    FormCss.button;

  return (
    <div className={panelStyle}>
      <div className={containerStyle}>
        <div className={headerStyle}>Login</div>
        <div className={inputContainerStyle}>
          <p>Username</p>
          <input className={inputStyle} 
            value={getUsername}
            onChange={CreateOnChange(setUsername)}></input>
          <p>Password</p>
          <input className={inputStyle} 
            value={getPassword}
            onChange={CreateOnChange(setPassword)}></input>
        </div>
        <HoverWrapper>
          <button className={buttonStyle} onClick={onClick}>
            Submit
          </button>
        </HoverWrapper>
      </div>
    </div>
  );
}

export default Form;