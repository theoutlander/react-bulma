// https://bulma.io/documentation/elements/delete/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';

// A versatile delete cross
// The .delete element is a stand-alone element that can be used in different contexts.
const Delete = (props) => {
	return <div className={`delete ${props.sizeClass}`}>{props.chilren}</div>;
};

Delete.propTypes = {
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool
};

export default BulmaHOC(Delete);
