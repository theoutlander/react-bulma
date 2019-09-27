import React from 'react';
import PropTypes from 'prop-types';

const DropdownItem = (props) => {
	if (props.divider) {
		return <hr className="dropdown-divider" />;
	}

	return (
		<a href="#" className={`dropdown-item ${props.active && 'is-active'}`}>
			{props.children}
		</a>
	);
};

DropdownItem.propTypes = {
	divider: PropTypes.bool,
	active: PropTypes.bool
};

export default DropdownItem;
