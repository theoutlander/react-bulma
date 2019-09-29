import React from 'react';
import PropTypes from 'prop-types';

const PaginationPrevious = (props) => {
	return (
		<a class="pagination-previous" title={props.title} disabled={props.disabled}>
			{props.children}
		</a>
	);
};

PaginationPrevious.propTypes = {
	title: PropTypes.string,
	disabled: PropTypes.bool
};
export default PaginationPrevious;
