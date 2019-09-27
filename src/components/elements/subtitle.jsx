// https://bulma.io/documentation/elements/title/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';
// import { SizeProps } from '../props';

// Simple headings to add depth to your page
const SubTitle = (props) => {
	return <p className={`subtitle ${props.sizeClass}`}>{props.children}</p>;
};

SubTitle.propTypes = {
	size: PropTypes.number
};

export default BulmaHOC(SubTitle);
