// https://bulma.io/documentation/elements/title/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';
import { TextColorProps, BackgroundColorProps } from '../props';

// Simple headings to add depth to your page
const Title = (props) => {
	return (
		<p
			className={`title ${props.sizeClass} ${props.textColorClass} ${props.backgroundColorClass} ${props.spaced &&
				'is-spaced'}`}
		>
			{props.children}
		</p>
	);
};

Title.propTypes = {
	size   : PropTypes.number,
	spaced : PropTypes.bool,
	...TextColorProps,
	...BackgroundColorProps
};

export default BulmaHOC(Title);
