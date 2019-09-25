import React from "react";
import PropTypes from "prop-types";
import Control from "./control";
import { mapClasses } from "../util";

const Label = props => {
  let classes = mapClasses(props);
  return (
    <Control {...props}>
      <div class="field">
        <div className={`select ${classes}`}>
          <select multiple={props.multiple} size={props.size}>
            {props.options.map(o => (
              <option value={o.value || o.text || o}>{o.text || o}</option>
            ))}
          </select>
        </div>
      </div>
    </Control>
  );
};

Label.propTypes = {
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  info: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  loading: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  multiple: PropTypes.bool,
  size: PropTypes.number
};

export default Label;
