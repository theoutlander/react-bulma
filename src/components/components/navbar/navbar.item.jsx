import React from 'react';
import PropTypes from 'prop-types';

// a navigation link
// a container for the brand logo
// the parent of a dropdown menu
// a child of a navbar dropdown
// a container for almost anything you want, like a field
const NavbarItem = (props) => {
	if (props.divider) {
		return <hr class="navbar-divider" />;
	}
	if (props.dropdown || props.container) {
		return (
			<a
				className={`navbar-item ${props.dropdown && 'has-dropdown'} ${props.tab && 'is-tab'} ${props.expanded &&
					'is-expanded'} ${props.active && 'is-active'} ${props.hoverable && 'is-hoverable'} ${props.right &&
					'is-right'} ${props.up && 'has-dropdown-up'} `}
				href={props.href}
			>
				{props.children}
			</a>
		);
	}

	return (
		<a
			className={`navbar-item ${props.tab && 'is-tab'} ${props.expanded && 'is-expanded'} ${props.active &&
				'is-active'} ${props.right && 'is-right'} `}
			href={props.href}
		>
			{props.children}
		</a>
	);
};

NavbarItem.propTypes = {
	href: PropTypes.string,
	dropdown: PropTypes.bool,
	expanded: PropTypes.bool,
	divider: PropTypes.bool,
	tab: PropTypes.bool,
	active: PropTypes.bool,
	hoverable: PropTypes.bool,
	up: PropTypes.bool,
	right: PropTypes.bool,
	container: PropTypes.bool
};

export default NavbarItem;
