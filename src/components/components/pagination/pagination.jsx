import React from 'react';
import PropTypes from 'prop-types';
import { AlignmentProps, SizeProps } from '../../props';
import BulmaHOC from '../../bulma.hoc';

const Pagination = (props) => {
	return (
		<nav
			className={`pagination ${props.alignmentClass} ${props.CSSClasses} ${props.sizeClass}`}
			role="navigation"
			aria-label={props.ariaLabel}
		>
			{props.children}
		</nav>
	);
};

Pagination.propTypes = {
	...AlignmentProps,
	ariaLabel : PropTypes.string,
	rounded   : PropTypes.bool,
	...SizeProps
};

export default BulmaHOC(Pagination);
