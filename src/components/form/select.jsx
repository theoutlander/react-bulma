import React from 'react';
import PropTypes from 'prop-types';
import Control from './control';
import { mapClasses } from '../util';

const Select = (props) => {
	let classes = mapClasses(props);
	console.log(classes);
	return (
		<Control {...props}>
			<div className="field">
				<div key="select" className={`select ${classes}`}>
					<select multiple={props.multiple} size={props.size}>
						{props.options.map((o, i) => (
							<option key={i} value={o.value || o.text || o}>
								{o.text || o}
							</option>
						))}
					</select>
				</div>
				{props.hasIconsLeft &&
				props.icon && (
					<div
						key="icon"
						className={`icon is-left ${classes
							.split()
							.filter((k) => [ 'is-small', 'is-medium', 'is-large' ].includes(k))
							.join(' ')}`}
					>
						<i className={`fas ${props.icon}`} />
					</div>
				)}
			</div>
		</Control>
	);
};

Select.propTypes = {
	primary: PropTypes.bool,
	success: PropTypes.bool,
	warning: PropTypes.bool,
	danger: PropTypes.bool,
	info: PropTypes.bool,
	rounded: PropTypes.bool,
	small: PropTypes.bool,
	medium: PropTypes.bool,
	large: PropTypes.bool,
	hovered: PropTypes.bool,
	focused: PropTypes.bool,
	loading: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.string),
	multiple: PropTypes.bool,
	size: PropTypes.number,
	hasIconsLeft: PropTypes.bool,
	icon: PropTypes.string
};

export default Select;
