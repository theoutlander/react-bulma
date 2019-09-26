import React from "react";
import PropTypes from "prop-types";

const Checkbox = props => {
  return (
    <label className="checkbox">
      <input type="checkbox" disabled={props.disabled} />
      {props.children}
    </label>
  );
};

Checkbox.propTypes = {
  disabled: PropTypes.bool
};

export default Checkbox;
