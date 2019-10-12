import React from 'react';
import PropTypes from 'prop-types';
import { mapClasses } from '../util';
import { ColorProps, SizeProps } from '../props';
import BulmaHOC from '../bulma.hoc';

// TODO: are-small
const Button = (props) => {
	let classes = `button ${mapClasses(props)}`;

	let markup = [];
	if (props.anchor) {
		markup.push(
			<a className={`${classes} ${props.colorClass}`} onClick={props.onClick}>
				{props.children}
			</a>
		);
	} else if (props.submit) {
		markup.push(<input className={classes} type="submit" value={props.children} onClick={props.onClick} />);
	} else if (props.reset) {
		markup.push(<input className={classes} type="reset" value={props.children} onClick={props.onClick} />);
	} else {
		markup.push(
			<button key="btn" className={classes} onClick={props.onClick}>
				{props.children}
			</button>
		);
	}

	if (props.icon) {
		markup.push(
			<span key="icon" className={`icon ${classes}`}>
				<i className={`fas ${props.icon}`} />
			</span>
		);
	}

	return markup;
};

Button.propTypes = {
	...ColorProps,
	...SizeProps,
	anchor    : PropTypes.bool,
	submit    : PropTypes.bool,
	reset     : PropTypes.bool,
	button    : PropTypes.bool,
	text      : PropTypes.bool,
	fullwidth : PropTypes.bool,
	outlined  : PropTypes.bool,
	hovered   : PropTypes.bool,
	active    : PropTypes.bool,
	static    : PropTypes.bool,
	loading   : PropTypes.bool,
	rounded   : PropTypes.bool,
	inverted  : PropTypes.bool,
	icon      : PropTypes.string,
	selected  : PropTypes.bool
};

export default BulmaHOC(Button);
