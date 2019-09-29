// https://bulma.io/documentation/layout/section/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';

// Use sections as direct children of body.
const Section = (props) => {
	return <section className={`section ${props.sizeClass}`}>{props.children}</section>;
};

Section.propTypes = {
	medium: PropTypes.bool,
	large: PropTypes.bool
};

export default BulmaHOC(Section);
