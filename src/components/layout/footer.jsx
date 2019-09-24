// https://bulma.io/documentation/layout/footer/
import React from "react";
import PropTypes from "prop-types";
// import { mapClasses } from "../util";

// A simple responsive footer which can include anything: lists, headings, columns, icons, buttons, etc.
const Footer = props => {
  // let classes = mapClasses(props);
  return <div className={`footer`}>{props.children}</div>;
};

Footer.propTypes = {
  fluid: PropTypes.bool,
  fullhd: PropTypes.bool,
  widescreen: PropTypes.bool
};

export default Footer;
