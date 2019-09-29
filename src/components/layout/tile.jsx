// https://bulma.io/documentation/layout/tiles;ty/
import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';

// A simple container to center your content horizontally
const Tile = (props) => {
	return (
		<div className={`tile ${props.contextualClass} ${props.vertical && 'is-vertical'} ${props.sizeClass}`}>
			{props.children}
		</div>
	);
};

Tile.propTypes = {
	ancestor: PropTypes.bool,
	parent: PropTypes.bool,
	child: PropTypes.bool,
	vertical: PropTypes.bool,
	size: PropTypes.number
};

export default BulmaHOC(Tile);
