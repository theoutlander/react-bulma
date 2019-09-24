import React from "react";
import PropTypes from "prop-types";

const HeroHead = props => {
  return <div className={`hero-head`}>{props.children}</div>;
};

HeroHead.propTypes = {};

export default HeroHead;
