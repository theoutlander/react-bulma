import React from 'react';
import PropTypes from 'prop-types';
import { ColorProps, SizeProps } from '../props';
import BulmaHOC from '../bulma.hoc';

// TODO: are-small
const Button = (props) => {
	let classes = `button ${props.CSSClasses}`;
	// console.log(classes);
	// let classes = `${props.colorClass} ${props.fullwidth} ${props.hovered}`;
	let text = props.text || props.children;

	let markup = [];
	if (props.anchor) {
		markup.push(
			<a className={`${classes} ${props.colorClass}`} onClick={props.onClick}>
				{text}
			</a>
		);
	} else if (props.submit) {
		markup.push(<input className={classes} type="submit" value={text} onClick={props.onClick} />);
	} else if (props.reset) {
		markup.push(<input className={classes} type="reset" value={text} onClick={props.onClick} />);
	} else {
		markup.push(
			<button key="btn" className={classes} onClick={props.onClick}>
				{text}
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
	text      : PropTypes.bool,
	icon      : PropTypes.string,

	button    : PropTypes.bool,
	fullWidth : PropTypes.bool,
	outlined  : PropTypes.bool,
	hovered   : PropTypes.bool,
	active    : PropTypes.bool,
	static    : PropTypes.bool,
	loading   : PropTypes.bool,
	rounded   : PropTypes.bool,
	inverted  : PropTypes.bool,
	selected  : PropTypes.bool
};

export default BulmaHOC(Button);

// export default BulmaHOC(Button, {
// 	button    : PropTypes.bool,
// 	fullWidth : PropTypes.bool,
// 	outlined  : PropTypes.bool,
// 	hovered   : PropTypes.bool,
// 	active    : PropTypes.bool,
// 	static    : PropTypes.bool,
// 	loading   : PropTypes.bool,
// 	rounded   : PropTypes.bool,
// 	inverted  : PropTypes.bool,
// 	selected  : PropTypes.bool,
// 	...ColorProps,
// 	...SizeProps
// });
