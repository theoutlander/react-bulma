// https://bulma.io/documentation/elements/title/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';
// import { SizeProps } from '../props';

// Simple headings to add depth to your page
const Title = (props) => {
	return <p className={`title ${props.sizeClass} ${props.spaced && 'is-spaced'}`}>{props.children}</p>;
};

Title.propTypes = {
	size: PropTypes.number,
	spaced: PropTypes.string
};

export default BulmaHOC(Title);
