// https://bulma.io/documentation/layout/container/
import React from 'react';
import PropTypes from 'prop-types';

// A simple container to center your content horizontally
const Container = (props) => {
	return (
		<div
			className={`container  ${props.fluid && 'is-fluid'} ${props.fullhd && 'is-fullhd'} ${props.widescreen &&
				'is-widescreen'}`}
		>
			{props.children}
		</div>
	);
};

Container.propTypes = {
	fluid: PropTypes.bool,
	fullhd: PropTypes.bool,
	widescreen: PropTypes.bool
};

export default Container;
