import React from "react";
import PropTypes from "prop-types";

const HeroFooter = props => {
  return <div className={`hero-foot`}>{props.children}</div>;
};

HeroFooter.propTypes = {};

export default HeroFooter;
