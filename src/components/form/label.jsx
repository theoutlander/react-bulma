import React from "react";
import PropTypes from "prop-types";

const Label = props => {
  return <label class="label">{props.value}</label>;
};

Label.propTypes = {
  value: PropTypes.string
};

export default Label;