// https://bulma.io/documentation/elements/tag/#sizes
import React from 'react';
import PropTypes from 'prop-types';
import { ColorProps, SizeProps } from '../props';
import BulmaHOC from '../bulma.hoc';

// TODO: You can change the size of all tags at once:
// Tags containers

const Tags = (props) => {
	return (
		<div className={`tags ${props.sizeClass} ${props.addons && 'has-addons'}`}>
			{props.children}
			{props.delete && <a className="tag is-delete" />}
		</div>
	);
};

Tags.propTypes = {
	...ColorProps,
	...SizeProps,
	label: PropTypes.string,
	addons: PropTypes.bool
};

export default BulmaHOC(Tags);
