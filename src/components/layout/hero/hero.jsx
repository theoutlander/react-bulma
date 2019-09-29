import React from 'react';
import PropTypes from 'prop-types';
import { ColorProps } from '../../props';
import BulmaHOC from '../../bulma.hoc';

const Hero = (props) => {
	return (
		<section
			className={`hero ${props.sizeClass} ${props.bold && 'is-bold'} ${props.link &&
				'is-link'} ${props.colorClass}`}
		>
			{props.children}
		</section>
	);
};

Hero.propTypes = {
	...ColorProps,
	bold: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	fullHeight: PropTypes.bool,
	fullHeightWithNavbar: PropTypes.bool,
	link: PropTypes.bool
};

export default BulmaHOC(Hero);
