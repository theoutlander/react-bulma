import React from 'react';
import PropTypes from 'prop-types';

// navbar-dropdown which can contain instances of navbar-item and navbar-divider
const NavbarMenuDropdown = (props) => {
	return <div className={`navbar-dropdown ${props.boxed && 'is-boxed'}`}>{props.children}</div>;
};

NavbarMenuDropdown.propTypes = {
	boxed: PropTypes.bool
};
export default NavbarMenuDropdown;
