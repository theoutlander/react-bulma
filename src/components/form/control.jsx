import React from 'react';
import PropTypes from 'prop-types';
import { SizeProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const Control = (props) => {
	let classes = props.hasIconsLeft && 'has-icons-left';
	classes += props.hasIconsRight && ' has-icons-right';
	classes += props.loading && ' is-loading';
	classes += props.static && ' is-static';

	return (
		<div className={`control ${classes} ${props.sizeClass}`} disabled={props.disabled} readOnly={props.readonly}>
			{props.children}
		</div>
	);
};

Control.propTypes = {
	...SizeProps,
	hasIconsLeft: PropTypes.bool,
	hasIconsRight: PropTypes.bool,
	loading: PropTypes.bool,
	disabled: PropTypes.bool,
	readonly: PropTypes.bool,
	static: PropTypes.bool
};

export default BulmaHOC(Control);
