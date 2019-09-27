import React from 'react';
// import PropTypes from 'prop-types';

const CardFooterItem = (props) => {
	return <span className="card-footer-item">{props.children}</span>;
};

CardFooterItem.propTypes = {};

export default CardFooterItem;
