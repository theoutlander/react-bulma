import React from "react";
import PropTypes from "prop-types";

const LevelItem = props => {
  let classes = props.centered && "has-text-centered";
  return <div className={`level-item ${classes}`}>{props.children}</div>;
};

LevelItem.propTypes = {
  centered: PropTypes.bool
};

export default LevelItem;
