import React from 'react';
// import PropTypes from 'prop-types';

const NavbarMenu = (props) => {
	return <div className={`navbar-menu ${props.active && 'is-active'}`}>{props.children}</div>;
};

NavbarMenu.propTypes = {};
export default NavbarMenu;
