import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => {
	return <div className={`field ${props.addons ? 'has-addons' : 'is-grouped'}`}>{props.children}</div>;
};

ButtonGroup.propTypes = {};

export default ButtonGroup;
