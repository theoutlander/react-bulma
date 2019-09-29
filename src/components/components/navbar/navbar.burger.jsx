import React from 'react';
import PropTypes from 'prop-types';

const NavbarBurger = (props) => {
	return (
		<a
			role="button"
			className={`navbar-burger ${props.active && 'is-active'}`}
			aria-label="menu"
			aria-expanded="false"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	);
};

NavbarBurger.propTypes = {
	active: PropTypes.bool
};

export default NavbarBurger;
