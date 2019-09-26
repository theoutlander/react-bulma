import React from "react";
import PropTypes from "prop-types";

const RadioOption = props => {
  return (
    <label className="radio">
      <input
        type="radio"
        name={props.name}
        checked={props.checked}
        disabled={props.disabled}
      />
      {props.children}
    </label>
  );
};

RadioOption.propTypes = {
  // options: PropTypes.arrayOf(PropTypes.object)
};

export default RadioOption;
