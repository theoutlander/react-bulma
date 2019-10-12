import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Label from './label';
import Control from './control';
import { ColorProps, SizeProps, StateProps, TextColorProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const Input = (props) => {
	const [
		value,
		setValue
	] = useState(props.value);

	return (
		<div className={`field`}>
			{props.label && <Label textPrimary value={props.label} />}
			<Control expanded={props.expanded} {...props}>
				<input
					className={`input ${props.rounded &&
						'is-rounded'} ${props.colorClass}  ${props.sizeClass} ${props.stateClass}`}
					type={props.typeClass}
					placeholder={props.placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Control>
		</div>
	);
};

Input.propTypes = {
	...ColorProps,
	...StateProps,
	...SizeProps,
	...TextColorProps,
	expanded    : PropTypes.bool,
	placeholder : PropTypes.string,
	rounded     : PropTypes.bool
};

export default BulmaHOC(Input);
