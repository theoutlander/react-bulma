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
        {props.hasIconsLeft && (
          <div
            class={`icon is-left ${classes
              .filter(k => ["is-small", "is-medium", "is-large"].includes(k))
              .join(" ")}`}
          >
            <i class={`fas ${props.icon}`} />
          </div>
        )}
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
  size: PropTypes.number,
  hasIconsLeft: PropTypes.bool,
  icon: PropTypes.string
};

export default Label;
