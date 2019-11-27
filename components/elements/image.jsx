// https://bulma.io/documentation/elements/image/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc.js.js';

// TODO Arbitrary ratios with any element

// A container for responsive images
const Image = (props) => {
	return (
		<figure className={`image ${props.dimensionClass}`}>
			<img
				className={`${props.fullwidth && 'is-fullwidth'} ${props.rounded && 'is-rounded'} ${props.ratio}`}
				src={props.src}
			/>
		</figure>
	);
};

Image.propTypes = {
	dimension : PropTypes.number.isRequired,
	rounded   : PropTypes.bool,
	//https://bulma.io/documentation/elements/image/#responsive-images-with-ratios
	ratio     : PropTypes.string,
	fullwidth : PropTypes.string,
	src       : PropTypes.string
};

export default BulmaHOC(Image);
