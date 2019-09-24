import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../../util";

const MediaLeft = props => {
  let classes = mapClasses(props);
  return <figure className={`media-left ${classes}`}>{props.children}</figure>;
};

// Level.propTypes = {
//   fluid: PropTypes.bool,
//   fullhd: PropTypes.bool,
//   widescreen: PropTypes.bool
// };

export default MediaLeft;
