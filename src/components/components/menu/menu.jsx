// https://bulma.io/documentation/components/menu/

// A simple menu, for any type of vertical navigation
import React from 'react';
// import PropTypes from 'prop-types';

const Menu = (props) => {
	return <aside className="menu">{props.children}</aside>;
};

Menu.propTypes = {};

export default Menu;
