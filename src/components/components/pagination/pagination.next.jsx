import React from 'react';
import PropTypes from 'prop-types';

const PaginationNext = (props) => {
	return (
		<a className="pagination-next" title={props.title} disabled={props.disabled}>
			{props.children}
		</a>
	);
};

PaginationNext.propTypes = {
	title: PropTypes.string,
	disabled: PropTypes.bool
};
export default PaginationNext;
