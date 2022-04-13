import React from 'react';
import TEMP_STATICS from 'etc/TempStatics.json';
import { CustomCss } from 'styles/Style';

function Footer () {
  const content = TEMP_STATICS.FOOTER_DATA;

  const containerStyle = CustomCss.footer.container;
  const textStyle = CustomCss.footer.text;
  const seperatorStyle = CustomCss.footer.seperator;

  return (
    <div className={containerStyle}>
      <a className={textStyle} href={'mailto:' + content.email}>{content.email}</a>
      <p className={seperatorStyle}>|</p>
      <p className={textStyle}>{content.phone}</p>
      <p className={seperatorStyle}>|</p>
      <p className={textStyle}>{content.address}</p>
    </div>
  );
}

export default Footer;
