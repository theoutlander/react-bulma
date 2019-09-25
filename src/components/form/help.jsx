import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../util";

const Help = props => {
  let classes = mapClasses(props);
  return <p class={`help ${classes}`}>{props.value}</p>;
};

Help.propTypes = {
  value: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool
};

export default Help;
