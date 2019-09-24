import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../../util";

const Level = props => {
  let classes = mapClasses(props);
  return <nav className={`level ${classes}`}>{props.children}</nav>;
};

// Level.propTypes = {
//   fluid: PropTypes.bool,
//   fullhd: PropTypes.bool,
//   widescreen: PropTypes.bool
// };

export default Level;
