import React from "react";
import PropTypes from "prop-types";

const Control = props => {
  let classes = props.hasIconsLeft && "has-icons-left";
  classes += props.hasIconsRight && " has-icons-right";
  classes += props.loading && " is-loading";
  classes += props.small && " is-small";
  classes += props.medium && " is-medium";
  classes += props.large && " is-large";
  classes += props.static && " is-static";

  return (
    <div
      class={`control ${classes}`}
      disabled={props.disabled}
      readonly={props.readonly}
    >
      {props.children}
    </div>
  );
};

Control.propTypes = {
  hasIconsLeft: PropTypes.bool,
  hasIconsRight: PropTypes.bool,
  loading: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  static: PropTypes.bool
};

export default Control;
