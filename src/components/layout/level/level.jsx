import React from 'react';
import PropTypes from 'prop-types';

const Level = (props) => {
	return <nav className={`level ${props.mobile && 'is-mobile'}`}>{props.children}</nav>;
};

Level.propTypes = {
	mobile: PropTypes.bool
};

export default Level;
