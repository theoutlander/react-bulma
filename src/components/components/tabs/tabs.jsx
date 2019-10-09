import React from "react";
import { AlignmentProps, StyleProps } from "../../props";
import BulmaHOC from "../../bulma.hoc";
import PropTypes from "prop-types";

const Tabs = props => (
  <div
    onClick={e => props.onClick(e.target.innerText)}
    className={`tabs ${props.alignmentClass} ${props.styleClass} ${props.sizeClass}`}
  >
    <ul>{props.children}</ul>
  </div>
);

Tabs.propTypes = {
  ...AlignmentProps,
  ...StyleProps,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool
};
export default BulmaHOC(Tabs);
