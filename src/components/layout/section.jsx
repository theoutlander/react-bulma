// https://bulma.io/documentation/layout/section/
import React from "react";
import PropTypes from "prop-types";
import { mapClasses } from "../util";

// Use sections as direct children of body.
const Section = props => {
  let classes = mapClasses(props);
  return <section className={`section ${classes}`}>{props.children}</section>;
};

Section.propTypes = {
  medium: PropTypes.bool,
  large: PropTypes.bool
};

export default Section;
