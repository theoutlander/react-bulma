import React from 'react';
import PropTypes from 'prop-types';
import { ColorProps, SizeProps } from '../props';

const Progress = (props) => {
	return (
		<progress className={`progress ${props.colorClass} ${props.sizeClass}`} value={props.value} max={props.max}>
			{props.children}
		</progress>
	);
};

Progress.defaultProps = {
	max: 100
};

Progress.propTypes = {
	...ColorProps,
	...SizeProps,
	value: PropTypes.number,
	max: PropTypes.number
};

export default Progress;
