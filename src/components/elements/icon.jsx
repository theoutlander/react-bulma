import React from "react";
import PropTypes from "prop-types";

const Icon = props => {
  //is-small is-left

  let classes = props.small && "is-small";
  classes += props.left && " is-left";
  classes += props.right && " is-right";

  return (
    <span class={`icon ${classes}`}>
      {/* fa-user */}
      <i class={`fas ${props.icon}`} />
    </span>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  small: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool
};

export default Icon;
