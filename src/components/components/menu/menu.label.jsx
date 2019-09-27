// https://bulma.io/documentation/components/menu/

// A simple menu, for any type of vertical navigation
import React from 'react';
// import PropTypes from 'prop-types';

const MenuLabel = (props) => {
	return <p className="menu-label">{props.children}</p>;
};

MenuLabel.propTypes = {};

export default MenuLabel;
