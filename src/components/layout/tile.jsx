// https://bulma.io/documentation/layout/tiles;ty/
import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../util";

// A simple container to center your content horizontally
const Tile = props => {
  let classes = mapClasses(props);
  return <div className={`tile ${classes}`}>{props.children}</div>;
};

Tile.propTypes = {
  ancestor: PropTypes.bool,
  parent: PropTypes.bool,
  child: PropTypes.bool,
  vertical: PropTypes.bool,
  size: PropTypes.number
};

export default Tile;
