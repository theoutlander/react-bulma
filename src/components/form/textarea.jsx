import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Label from './label';
import Control from './control';
import { ColorProps, SizeProps, StatesProps, StateProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const TextArea = (props) => {
	const [ value, setValue ] = useState(props.value);
	return (
		<div className="field">
			{props.label && <Label value={props.label} />}
			<Control>
				<textarea
					rows={props.rows}
					className={`textarea ${props.colorClass} ${props.sizeClass} ${props.stateClass} ${props.fixedSize &&
						'has-fixed-size'}`}
					type={props.text}
					placeholder={props.placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Control>
		</div>
	);
};

TextArea.propTypes = {
	...ColorProps,
	rows: PropTypes.number,
	...SizeProps,
	...StateProps,
	fixedSize: PropTypes.bool
};

export default BulmaHOC(TextArea);
