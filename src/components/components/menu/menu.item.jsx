// https://bulma.io/documentation/components/menu/

// A simple menu, for any type of vertical navigation
import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
	return (
		<li>
			<a className={props.active && 'is-active'}>
				{Array.isArray(props.children) ? props.children[0] : props.children}
			</a>
			{Array.isArray(props.children) && props.children.length === 2 ? props.children[1] : null}
		</li>
	);
};

MenuItem.propTypes = {
	active: PropTypes.bool
};

export default MenuItem;
