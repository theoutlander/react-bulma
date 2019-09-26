import React from 'react';
// import PropTypes from "prop-types";
import { mapClasses } from '../../util';

const Media = (props) => {
	let classes = mapClasses(props);
	return <article className={`media ${classes}`}>{props.children}</article>;
};

// Level.propTypes = {
//   fluid: PropTypes.bool,
//   fullhd: PropTypes.bool,
//   widescreen: PropTypes.bool
// };

export default Media;
