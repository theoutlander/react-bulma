import React from 'react';
import PropTypes from 'prop-types';
import { TextColorProps, BackgroundColorProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const Label = (props) => {
	return <label className={`label ${props.textColorClass} ${props.backgroundColorClass}`}>{props.value}</label>;
};

Label.propTypes = {
	value: PropTypes.string,
	...TextColorProps,
	...BackgroundColorProps
};

export default BulmaHOC(Label);
