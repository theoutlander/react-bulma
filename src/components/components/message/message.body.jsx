import React from 'react';
// import PropTypes from 'prop-types';

const Box = (props) => {
	return <div className="message-body">{props.children}</div>;
};

Box.propTypes = {};

export default Box;
