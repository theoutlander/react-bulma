import React from 'react';
// import PropTypes from 'prop-types';

const CardFooter = (props) => {
	return <footer className="card-footer">{props.children}</footer>;
};

CardFooter.propTypes = {};

export default CardFooter;
