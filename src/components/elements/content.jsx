// https://bulma.io/documentation/elements/content/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';

// A single class to handle WYSIWYG generated content, where only HTML tags are available
const Content = (props) => {
	return <div className={`content ${props.sizeClass}`}>{props.children}</div>;
};

Content.propTypes = {
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool
};

export default BulmaHOC(Content);
