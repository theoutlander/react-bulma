import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Label from './label';
import Control from './control';
import { mapClasses } from '../util';

const Input = (props) => {
	const [ value, setValue ] = useState(props.value);
	let classes = mapClasses(props);
	let type =
		(props.tel && 'tel') || (props.email && 'email') || (props.text && 'text') || (props.password && 'password');

	return (
		<div className="field">
			{props.label && <Label value={props.label} />}
			<Control {...props}>
				<input
					className={`${type} ${classes}`}
					type={props.text}
					placeholder={props.placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Control>
		</div>
	);
};

Input.propTypes = {
	primary: PropTypes.bool,
	success: PropTypes.bool,
	warning: PropTypes.bool,
	danger: PropTypes.bool,
	info: PropTypes.bool,
	text: PropTypes.bool,
	tel: PropTypes.bool,
	email: PropTypes.bool,
	password: PropTypes.bool,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	rounded: PropTypes.bool,
	hovered: PropTypes.bool,
	focused: PropTypes.bool,
	loading: PropTypes.bool
};

export default Input;
