import React from 'react';
// import PropTypes from "prop-types";

const HeroBody = (props) => {
	return <div className={`hero-body`}>{props.children}</div>;
};

HeroBody.propTypes = {};

export default HeroBody;
