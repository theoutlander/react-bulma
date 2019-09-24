// https://bulma.io/documentation/layout/container/
import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../util";

// A simple container to center your content horizontally
const Container = props => {
  let classes = mapClasses(props);
  return <div className={`container ${classes}`}>{props.children}</div>;
};

Container.propTypes = {
  fluid: PropTypes.bool,
  fullhd: PropTypes.bool,
  widescreen: PropTypes.bool
};

export default Container;
