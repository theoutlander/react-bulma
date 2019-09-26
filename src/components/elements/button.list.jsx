import React from 'react';
import PropTypes from 'prop-types';

const ButtonList = (props) => {
	let classes = props.addons && 'has-addons';
	classes += props.centered && 'is-centered';
	classes += props.right && 'is-right';

	return <div className={`field ${classes}`}>{props.children}</div>;
};

ButtonList.propTypes = {};

export default ButtonList;
