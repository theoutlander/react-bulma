import React from 'react';
import PropTypes from 'prop-types';
import { mapClasses } from '../util';
import { ColorProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const Help = (props) => {
	let classes = mapClasses(props);
	return <p className={`help ${classes} ${props.colorClass}`}>{props.value}</p>;
};

Help.propTypes = {
	value: PropTypes.string,
	...ColorProps
};

export default BulmaHOC(Help);
