import React from 'react';
// import PropTypes from 'prop-types';

const CardContent = (props) => {
	return <span className="card-footer-item">{props.children}</span>;
};

CardContent.propTypes = {};

export default CardContent;
