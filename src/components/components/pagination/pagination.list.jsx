import React from 'react';
// import PropTypes from 'prop-types';

const Pagination = (props) => {
	return (
		<nav className="pagination" role="navigation" aria-label="pagination">
			{props.children}
		</nav>
	);
};

Pagination.propTypes = {};
export default Pagination;
