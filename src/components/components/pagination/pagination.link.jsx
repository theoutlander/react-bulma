import React from 'react';
import PropTypes from 'prop-types';

const PaginationLink = (props) => {
	return (
		<li>
			<a
				className={`pagination-link ${props.current && 'is-current'}`}
				aria-label={props.ariaLabel}
				aria-current={props.current && 'page'}
			>
				{props.children}
			</a>
		</li>
	);
};

PaginationLink.propTypes = {
	current: PropTypes.bool,
	ariaLabel: PropTypes.string
};
export default PaginationLink;
