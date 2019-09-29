import React from 'react';
import PropTypes from 'prop-types';

const NavbarLink = (props) => {
	return <a className={`navbar-link ${props.arrowless && 'is-arrowless'}`}>{props.children}</a>;
};

NavbarLink.propTypes = {
	arrowless: PropTypes.bool
};
export default NavbarLink;
