import React from 'react';
import PropTypes from 'prop-types';
import { ColorProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const Help = (props) => {
	return <p className={`help ${props.colorClass}`}>{props.value}</p>;
};

Help.propTypes = {
	value: PropTypes.string,
	...ColorProps
};

export default BulmaHOC(Help);
