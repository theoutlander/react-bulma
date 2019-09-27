// https://bulma.io/documentation/components/menu/

// A simple menu, for any type of vertical navigation
import React from 'react';
// import PropTypes from 'prop-types';

const MenuList = (props) => {
	return <p className="menu-list">{props.children}</p>;
};

MenuList.propTypes = {};

export default MenuList;
