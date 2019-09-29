import React from 'react';
import PropTypes from 'prop-types';
import Control from './control';
import { ColorProps, SizeProps, StatesProps, StateProps } from '../props';
import BulmaHOC from '../bulma.hoc';

const Select = (props) => {
	return (
		<Control {...props}>
			<div className="field">
				<div
					key="select"
					className={`select ${props.colorClass} ${props.sizeClass} ${props.stateClass} ${props.rounded}`}
				>
					<select multiple={props.multiple} size={props.size}>
						{props.options.map((o, i) => (
							<option key={i} value={o.value || o.text || o}>
								{o.text || o}
							</option>
						))}
					</select>
				</div>
				{props.iconLeft &&
				props.icon && (
					<div key="icon" className={`icon ${props.iconLeft && 'is-left'} ${props.sizeClass}`}>
						<i className={`fas ${props.icon}`} />
					</div>
				)}
			</div>
		</Control>
	);
};

Select.propTypes = {
	...ColorProps,
	...SizeProps,
	rounded: PropTypes.bool,
	...StateProps,
	options: PropTypes.arrayOf(PropTypes.string),
	multiple: PropTypes.bool,
	iconLeft: PropTypes.bool,
	icon: PropTypes.string
};

export default BulmaHOC(Select);
