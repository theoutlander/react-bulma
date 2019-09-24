import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../../util";

const Hero = props => {
  let classes = mapClasses(props);

  //is-link is-fullheight-with-navbar

  return <section className={`hero ${classes}`}>{props.children}</section>;
};

Hero.propTypes = {
  primary: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  fullheight: PropTypes.bool,
  link: PropTypes.bool,
  fullheightWithNavbar: PropTypes.bool
};

export default Hero;
