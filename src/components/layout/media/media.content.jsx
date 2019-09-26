import React from 'react';
// import PropTypes from "prop-types";
import { mapClasses } from '../../util';

const MediaContent = (props) => {
	let classes = mapClasses(props);
	return <div className={`media-content ${classes}`}>{props.children}</div>;
};

// Level.propTypes = {
//   fluid: PropTypes.bool,
//   fullhd: PropTypes.bool,
//   widescreen: PropTypes.bool
// };

export default MediaContent;
