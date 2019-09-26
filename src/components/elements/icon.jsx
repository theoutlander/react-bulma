import React from 'react';
import PropTypes from 'prop-types';
import BulmaHOC from '../bulma.hoc';

const Icon = (props) => {
	//is-small is-left

	let classes = props.left && ' is-left';
	classes += props.right && ' is-right';

	return (
		<span className={`icon ${classes} ${props.sizeClass}`}>
			{/* fa-user */}
			<i className={`fas ${props.icon}`} />
		</span>
	);
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	left: PropTypes.bool,
	right: PropTypes.bool
};

export default BulmaHOC(Icon);
