import React from "react";
import PropTypes from "prop-types";
import Label from "./label";
import Control from "./control";

const Input = props => {
  return (
    <div class="field">
      {props.label && <Label value={props.label} />}
      <Control>
        <input
          class="input"
          type={props.text}
          placeholder={props.placeholder}
        />
      </Control>
    </div>
  );
};

Input.propTypes = {
  medium: PropTypes.bool,
  large: PropTypes.bool
};

export default Input;
