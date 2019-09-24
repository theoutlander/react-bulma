import React from "react";
import PropTypes from "prop-types";

const Control = props => {
  return <div class="control">{props.children}</div>;
};

Control.propTypes = {};

export default Control;
