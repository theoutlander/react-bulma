import React from 'react';
// import PropTypes from 'prop-types';
import { AlignmentProps, SeparatorProps, SizeProps } from '../../props';
import BulmaHOC from '../../bulma.hoc';

const BreadCrumbs = (props) => {
	return (
		<nav
			className={`breadcrumb ${props.sizeClass} ${props.alignmentClass} ${props.separatorClass}`}
			aria-label="breadcrumbs"
		>
			<ul>{props.children}</ul>
		</nav>
	);
};

BreadCrumbs.propTypes = {
	...AlignmentProps,
	...SeparatorProps,
	...SizeProps
};

export default BulmaHOC(BreadCrumbs);
