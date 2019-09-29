// https://bulma.io/documentation/layout/footer/
import React from 'react';

// A simple responsive footer which can include anything: lists, headings, columns, icons, buttons, etc.
const Footer = (props) => {
	return <div className={`footer`}>{props.children}</div>;
};

export default Footer;
