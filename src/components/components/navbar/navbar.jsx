// https://bulma.io/documentation/components/navbar/
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ColorProps } from '../../props';
import BulmaHOC from '../../bulma.hoc';

// A responsive horizontal navbar that can support images, links, buttons, and dropdowns
const Navbar = (props) => {
	useEffect(() => {
		if (props.fixedTop) {
			document.body.classList.remove('has-navbar-fixed-bottom');
			document.body.classList.add('has-navbar-fixed-top');
		} else if (props.fixedBottom) {
			document.body.classList.remove('has-navbar-fixed-top');
			document.body.classList.add('has-navbar-fixed-bottom');
		} else {
			document.body.classList.remove('has-navbar-fixed-top');
			document.body.classList.remove('has-navbar-fixed-bottom');
		}
	});

	return (
		<nav
			className={`navbar ${props.colorClass} ${props.spaced && 'is-spaced'} ${props.transparent &&
				'is-transparent'} ${props.fixedTop && 'is-fixed-top'} ${props.fixedBottom && 'is-fixed-bottom'}`}
			role="navigation"
			aria-label={'main navigation'}
		>
			{props.children}
		</nav>
	);
};

Navbar.propTypes = {
	transparent: PropTypes.bool,
	fixedTop: PropTypes.bool,
	fixedBottom: PropTypes.bool,
	spaced: PropTypes.bool,
	...ColorProps
};

export default BulmaHOC(Navbar);
